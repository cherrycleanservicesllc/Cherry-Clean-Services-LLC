import { Resend } from 'resend'

const TO_EMAIL = 'cherrycleanservicesllc@gmail.com'
const MAX_LENGTHS = {
  name: 120,
  email: 254,
  phone: 40,
  space: 80,
  service: 120,
  message: 3000,
}

function setHeaders(response) {
  response.setHeader('Content-Type', 'application/json')
  response.setHeader('Cache-Control', 'no-store')
  response.setHeader('Access-Control-Allow-Origin', 'https://www.cherrycleanllc.com')
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type')
}

function clean(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default async function handler(request, response) {
  setHeaders(response)

  if (request.method === 'OPTIONS') {
    return response.status(204).end()
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' })
  }

  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
    console.error('Missing RESEND_API_KEY or RESEND_FROM_EMAIL')
    return response.status(500).json({ error: 'Email service is not configured' })
  }

  const body = request.body && typeof request.body === 'object' ? request.body : {}
  const data = Object.fromEntries(Object.entries(MAX_LENGTHS).map(([field, maxLength]) => [field, clean(body[field], maxLength)]))

  if (!data.name || !data.email || !data.phone || !data.space || !data.service || !isValidEmail(data.email)) {
    return response.status(400).json({ error: 'Please complete all required fields with valid information' })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const submittedAt = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: data.email,
      subject: `New cleaning quote request from ${data.name}`,
      text: [
        'New Cherry Clean Services LLC quote request',
        '',
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Space: ${data.space}`,
        `Service: ${data.service}`,
        `Submitted: ${submittedAt}`,
        '',
        'Details:',
        data.message || 'None provided',
      ].join('\n'),
    })

    if (error) {
      console.error('Resend error', error)
      return response.status(502).json({ error: 'Unable to send your request right now' })
    }

    return response.status(200).json({ success: true })
  } catch (error) {
    console.error('Contact function error', error)
    return response.status(500).json({ error: 'Unable to send your request right now' })
  }
}
