import './style.css'

const PHONE = '(925) 408-9359'
const PHONE_LINK = '+19254089359'
const EMAIL = 'cherrycleanservicesllc@gmail.com'
const YELP_URL = 'https://www.yelp.com/biz/cherry-clean-services-concord?osq=Cherry+Clean+Services&override_cta=Get+pricing+%26+availability'

const services = [
  { id: 'regular', number: '01', title: 'Regular cleaning', short: 'Reliable cleaning that keeps your home fresh, comfortable, and cared for.', text: 'Thoughtful, reliable cleaning for homes that need a fresh reset weekly or every other week.', tags: ['Weekly', 'Bi-weekly'], before: '/assets/before-after/limpieza-regular-antes.webp', after: '/assets/before-after/limpieza-regular-despues.webp' },
  { id: 'deep', number: '02', title: 'Deep cleaning', short: 'A detailed reset for the areas regular cleaning may miss.', text: 'A top-to-bottom refresh that reaches buildup, corners, surfaces, and all the small things that change a room.', tags: ['One-time', 'Detailed'], before: '/assets/before-after/limpieza-profunda-antes.webp', after: '/assets/before-after/limpieza-profunda-despues.webp' },
  { id: 'move', number: '03', title: 'Move-in / move-out cleaning', short: 'A clean handoff for the next chapter.', text: 'Move with less friction. We prepare a property to welcome someone new or leave it in its best possible condition.', tags: ['Rental ready', 'Thorough'], before: '/assets/before-after/move-in-out-antes.webp', after: '/assets/before-after/move-in-out-despues.webp' },
  { id: 'recurring', number: '04', title: 'Recurring care', short: 'Weekly or bi-weekly consistency, made easy.', text: 'Consistent cleaning tailored to how your home or property is used.', tags: ['Weekly', 'Bi-weekly'], before: '/assets/before-after/limpiezas-recurrentes-antes.webp', after: '/assets/before-after/limpiezas-recurrentes-despues.webp' },
  { id: 'commercial', number: '05', title: 'Office & commercial', short: 'Professional spaces that are ready for people.', text: 'Reliable care for offices, rentals, storefronts, and commercial spaces that need to look and feel their best.', tags: ['Offices', 'Businesses'], before: '/assets/before-after/oficinas-comerciales-antes.webp', after: '/assets/before-after/oficinas-comerciales-despues.webp' },
  { id: 'windows', number: '06', title: 'Window cleaning', short: 'More light. Less haze. A clearer point of view.', text: 'Interior and accessible exterior glass, frames, edges, and tracks finished for a clean, bright result.', tags: ['Interior', 'Exterior'], before: '/assets/before-after/ventanas-antes.webp', after: '/assets/before-after/ventanas-despues.webp' },
  { id: 'power', number: '07', title: 'Power washing', short: 'The outside deserves a reset too.', text: 'Powerful cleaning for patios, walkways, driveways, and exterior surfaces affected by dirt and buildup.', tags: ['Exterior', 'Restoration'], before: '/assets/before-after/power-washing-antes.webp', after: '/assets/before-after/power-washing-despues.webp' },
  { id: 'appliances', number: '08', title: 'Appliance cleaning', short: 'The details you feel every day.', text: 'Interior and exterior appliance care for kitchens that need a little more than a surface wipe.', tags: ['Kitchen', 'Detail'], before: '/assets/before-after/electrodomesticos-antes.webp', after: '/assets/before-after/electrodomesticos-despues.webp' },
  { id: 'blinds', number: '09', title: 'Blind cleaning', short: 'A softer kind of deep clean.', text: 'Careful cleaning for blinds and shades, removing dust and buildup without rushing the finish.', tags: ['Home', 'Detail'], before: '/assets/before-after/persianas-antes.webp', after: '/assets/before-after/persianas-despues.webp' },
  { id: 'outdoor', number: '10', title: 'Garages & patios', short: 'Make room for the life around your home.', text: 'A practical reset for garages, patios, and the utility spaces that deserve to be usable again.', tags: ['Garage', 'Patio'], before: '/assets/before-after/garajes-patios-antes.webp', after: '/assets/before-after/garajes-patios-despues.webp' },
]

const nav = [
  ['Home', '/'], ['Services', '/services/'], ['Our story', '/about/'], ['Contact', '/contact-us/']
]

function icon(name) {
  const icons = {
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2ZM19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  }
  return icons[name] || ''
}

function yelpMark() { return '<img class="yelp-logo" src="/assets/yelp-logo-white.svg" alt="" aria-hidden="true" />' }
function header() {
  return `<header class="site-header"><a class="brand" href="/" data-link aria-label="Cherry Clean Services LLC home"><img src="/assets/cherry-clean-logo.jpeg" alt="Cherry Clean Services LLC logo" /></a><nav class="desktop-nav">${nav.map(([label, path]) => `<a href="${path}" data-link>${label}</a>`).join('')}</nav><a class="header-cta" href="/contact-us/" data-link>Request a quote ${icon('arrow')}</a><a class="yelp-header-link" href="${YELP_URL}" target="_blank" rel="noopener noreferrer" aria-label="Visit Cherry Clean Services LLC on Yelp">${yelpMark()}</a><button class="menu-toggle" aria-label="Open menu">${icon('menu')}</button><div class="mobile-menu"><button class="menu-close" aria-label="Close menu">${icon('close')}</button>${nav.map(([label, path]) => `<a href="${path}" data-link>${label}</a>`).join('')}<a class="mobile-quote" href="/contact-us/" data-link>Request a quote ${icon('arrow')}</a><a class="mobile-yelp-link" href="${YELP_URL}" target="_blank" rel="noopener noreferrer" aria-label="Find Cherry Clean Services LLC on Yelp">${yelpMark()}</a></div></header>`
}

function footer() {
  return `<footer class="site-footer"><div class="footer-top"><div><a class="brand footer-brand" href="/" data-link><img src="/assets/cherry-clean-logo.jpeg" alt="Cherry Clean Services LLC" /></a><p class="footer-statement">A cleaner kind of confidence.<br />For homes, businesses, and everything in between.</p><a class="yelp-footer-link" href="${YELP_URL}" target="_blank" rel="noopener noreferrer" aria-label="Review Cherry Clean Services LLC on Yelp"><span>Review us</span>${yelpMark()}</a></div><div class="footer-links"><span>Explore</span><a href="/services/" data-link>Services</a><a href="/about/" data-link>Our story</a><a href="/contact-us/" data-link>Contact</a></div><div class="footer-links"><span>Reach us</span><a href="tel:${PHONE_LINK}">${PHONE}</a><a href="mailto:${EMAIL}">${EMAIL}</a><a class="yelp-footer-text-link" href="${YELP_URL}" target="_blank" rel="noopener noreferrer">Yelp business page</a><span>Concord, CA 94521</span></div></div><div class="footer-bottom"><span>Cherry Clean Services LLC</span><span>Serving Concord & nearby Bay Area cities</span><span>© ${new Date().getFullYear()} All rights reserved</span></div></footer>`
}

function yelpButton(label = 'Find us on Yelp', accessibleLabel = label, variant = '') { return `<a class="button yelp-button ${variant}" href="${YELP_URL}" target="_blank" rel="noopener noreferrer" aria-label="${accessibleLabel}"><span>${label}</span>${yelpMark()}</a>` }

function button(label = 'Request a quote', href = '/contact-us/') { return `<a class="button button-dark" href="${href}" data-link>${label} ${icon('arrow')}</a>` }
const resultsGallery = [
  ['bathroom-white.webp', 'Bright, refreshed bathroom'], ['kitchen-nature.webp', 'Fresh kitchen with natural detail'], ['kitchen-patio.webp', 'Clean kitchen opening to the patio'], ['apartment-kitchen-dining.webp', 'Fresh apartment kitchen and dining area'], ['simple-kitchen-dining.webp', 'Simple, polished kitchen and dining area'], ['black-white-kitchen-dining.webp', 'Refined black and white kitchen'], ['bright-kitchen.webp', 'Bright, spotless kitchen'], ['wood-kitchen.webp', 'Warm, polished wood kitchen'], ['modern-dining.webp', 'Modern dining room'], ['classic-dining.webp', 'Classic dining room'], ['gray-dining-kitchen.webp', 'Clean gray dining and kitchen space'], ['jacuzzi.webp', 'Sparkling jacuzzi area'],
]
function resultsGallerySection() { return `<section class="results-showcase section-pad"><div class="section-kicker">03 / Finished results</div><div class="results-showcase-heading"><div><h2>Results that speak<br /><em>for themselves.</em></h2><p>Every detail counts. Our goal is to leave spaces clean, fresh, and completely renewed.</p></div><div class="results-showcase-actions"><a class="text-link" href="/services/" data-link>View all services ${icon('arrow')}</a>${yelpButton('See us on Yelp')}</div></div><div class="results-masonry">${resultsGallery.map(([file, alt], index) => `<figure class="result-tile result-tile-${index + 1}${file === 'jacuzzi.webp' ? ' result-tile-jacuzzi' : ''}"><img src="/assets/results/${file}" alt="${alt}" loading="eager" decoding="async" /><figcaption>${alt}</figcaption></figure>`).join('')}</div></section>` }
function serviceCard(service, compact = false) { return `<article class="service-card ${service.id} ${compact ? 'compact' : ''}"><div class="service-card-image ${service.placeholder ? 'placeholder-image' : 'image-swap'}">${service.placeholder ? `<span>${icon('sparkle')} Image coming soon</span>` : `<img class="image-after" src="${service.after}" alt="${service.title} finished result" loading="lazy" /><img class="image-before" src="${service.before}" alt="${service.title} before cleaning" loading="lazy" />`}</div><div class="service-card-body"><div class="service-index">${service.number} <span></span> ${service.tags.join(' / ')}</div><h3>${service.title}</h3><p>${service.short}</p><a href="/services/#${service.id}" data-link class="text-link">Explore service ${icon('arrow')}</a></div></article>` }

function home() {
  return `<main><section class="hero"><div class="hero-copy"><p class="eyebrow">Residential + commercial cleaning / Concord, CA</p><h1>Space to breathe.<br /><em>Time to live.</em></h1><p class="hero-intro">Professional cleaning that brings order, ease, and a little more room back into your day.</p><div class="hero-actions">${button()}<a class="text-link" href="tel:${PHONE_LINK}">Call ${icon('arrow')}</a></div></div><div class="hero-visual"><div class="hero-backdrop" aria-hidden="true"></div><img src="${services[1].after}" alt="Freshly cleaned bathroom" /><span class="hero-note">Care in every<br />corner <b>↗</b></span></div><div class="hero-stamp">${icon('sparkle')}<span>Trusted<br />with care</span></div></section><section class="proof-strip"><div><b>01</b><span>Detail-led<br />cleaning</span></div><div><b>02</b><span>One-time or<br />recurring care</span></div><div><b>03</b><span>English +<br />Spanish support</span></div><div><b>04</b><span>Made for homes<br />and businesses</span></div></section><section class="intro-section section-pad"><div class="section-kicker">01 / The Cherry standard</div><div class="split-heading"><h2>A clean space changes<br /><em>the whole day.</em></h2><div><p>Cherry Clean Services LLC is a professional cleaning company built for people who care about where they live and how they work.</p><p>From a one-time reset to a rhythm you can rely on, we bring a serious eye for detail and a human approach to every space.</p>${button('Meet Cherry Clean', '/about/')}</div></div></section><section class="services-preview section-pad"><div class="section-heading"><div><div class="section-kicker">02 / What we do</div><h2>Clean, considered,<br /><em>complete.</em></h2></div><a class="text-link" href="/services/" data-link>View all services ${icon('arrow')}</a></div><div class="service-grid">${services.slice(0, 4).map(service => serviceCard(service)).join('')}</div></section>${resultsGallerySection()}<section class="cta-band"><div><p class="eyebrow">Ready when you are</p><h2>Let your next clean<br /><em>feel different.</em></h2></div>${button('Start with a quote')}</section><section class="transformation section-pad"><div class="section-kicker">04 / The difference</div><div class="transformation-grid"><div class="before-after-feature"><img src="${services[0].before}" alt="Regular cleaning before" loading="lazy" /><div class="after-label">Before <span>Drag through our work</span></div><div class="after-photo"><img src="${services[0].after}" alt="Regular cleaning after" loading="lazy" /><b>After</b></div></div><div class="transformation-copy"><p class="eyebrow">The result is more than clean</p><h2>It feels like<br /><em>coming home.</em></h2><p>Our work is quiet, thorough, and tailored to your real life. We notice the details, respect your space, and leave things better than we found them.</p>${button('See our transformations', '/services/#results')}</div></div></section></main>`
}

function servicesPage() {
  return `<main><section class="page-hero"><div class="section-kicker">Services / Built around your space</div><h1>Cleaning with a<br /><em>point of view.</em></h1><p>Choose a single reset, a recurring rhythm, or a tailored plan for your home or business. Every service begins with a conversation.</p>${button()}</section><section class="all-services section-pad"><div class="section-heading"><div><div class="section-kicker">01 / The menu</div><h2>Find your<br /><em>fresh start.</em></h2></div><p class="heading-note">Ten ways to make your space work better for you.</p></div><div class="service-list">${services.map(service => `<article class="service-row ${service.id}" id="${service.id}"><div class="service-row-number">${service.number}</div><div class="service-row-image ${service.placeholder ? 'placeholder-image' : 'image-swap'}">${service.placeholder ? `<span>${icon('sparkle')} Coming soon</span>` : `<img class="image-after" src="${service.after}" alt="${service.title} finished result" loading="lazy" /><img class="image-before" src="${service.before}" alt="${service.title} before cleaning" loading="lazy" />`}</div><div class="service-row-copy"><h3>${service.title}</h3><p>${service.text}</p><div class="tag-list">${service.tags.map(tag => `<span>${tag}</span>`).join('')}</div></div><a class="circle-arrow" href="/contact-us/?service=${service.id}" data-link aria-label="Request ${service.title}">${icon('arrow')}</a></article>`).join('')}</div></section><section class="results-section section-pad" id="results"><div class="section-kicker">02 / Real spaces, real results</div><div class="results-heading"><h2>The before is<br /><em>part of the story.</em></h2><p>Explore before-and-after examples across every Cherry Clean service.</p></div><div class="comparison-grid">${services.map(service => `<div class="comparison ${service.id}"><div class="comparison-images"><img src="${service.before}" alt="${service.title} before" loading="lazy" /><img src="${service.after}" alt="${service.title} after" loading="lazy" /></div><div><span>${service.number}</span><h3>${service.title}</h3></div></div>`).join('')}</div></section><section class="included-band"><div class="section-kicker">03 / Every visit</div><h2>Thoughtful people.<br /><em>Solid standards.</em></h2><div class="included-grid"><p>${icon('check')} Trained, detail-oriented service</p><p>${icon('check')} Clear communication from quote to finish</p><p>${icon('check')} Professional tools and careful materials</p><p>${icon('check')} Respect for your home, team, and time</p></div></section></main>`
}

function aboutPage() {
  return `<main><section class="page-hero about-hero"><div class="section-kicker">Our story / Built to grow</div><h1>Professional by<br /><em>nature.</em></h1><p>Cherry Clean Services LLC is a family-minded business with a company-sized standard: dependable, detailed, and ready for what is next.</p>${button('Talk to our team')}</section><section class="story-section section-pad"><div class="story-image"><img src="${services[3].after}" alt="A clean, cared-for home" /></div><div class="story-copy"><div class="section-kicker">01 / Why Cherry</div><h2>Good work should<br /><em>feel personal.</em></h2><p>We believe clean spaces support better days. That is why we show up with consistency, communicate clearly, and take the time to understand what your space needs.</p><p>Based in Concord and serving nearby Bay Area cities, we work with homeowners, renters, property managers, offices, and growing businesses.</p><div class="values"><div><strong>01</strong><span>Reliable<br />by design</span></div><div><strong>02</strong><span>Detail<br />without drama</span></div><div><strong>03</strong><span>Respect<br />for your space</span></div></div></div></section><section class="quote-section"><p class="eyebrow">A note from Cherry Clean</p><blockquote>“We do not just clean a space. We help it become easier to live and work in.”</blockquote><span>Cherry Clean Services LLC / Concord, California</span></section></main>`
}

function contactPage() {
  return `<main><section class="contact-hero page-hero"><div class="section-kicker">Contact / Let us make a plan</div><h1>Tell us what<br /><em>needs care.</em></h1><p>Share a few details and we will help you find the right service for your space. Quotes are customized, never one-size-fits-all.</p></section><section class="contact-layout section-pad"><form id="quote-form" class="quote-form"><div class="form-top"><span>01 / Your details</span><span>Free quote</span></div><label>Full name<input required name="name" placeholder="Your name" /></label><div class="form-row"><label>Email<input required type="email" name="email" placeholder="you@email.com" /></label><label>Phone<input required type="tel" name="phone" placeholder="(925) 000-0000" /></label></div><label>What kind of space?<select required name="space"><option value="">Select one</option><option>Home</option><option>Apartment or rental</option><option>Office or commercial</option><option>Property turnover</option><option>Other</option></select></label><label>What can we help with?<select required name="service"><option value="">Select a service</option>${services.map(service => `<option value="${service.title}">${service.title}</option>`).join('')}</select></label><label>Tell us a little more<textarea name="message" rows="4" placeholder="Size of the space, preferred timing, anything helpful..."></textarea></label><button class="button button-dark" type="submit">Prepare my quote ${icon('arrow')}</button><p class="form-disclaimer">No backend required. Your email app will open with your request ready to send.</p><div class="form-success" role="status"></div></form><aside class="contact-aside"><div><p class="eyebrow">Prefer a quicker hello?</p><h2>Call, text, or<br /><em>send a note.</em></h2></div><div class="contact-details"><a href="tel:${PHONE_LINK}"><span>Phone</span>${PHONE}</a><a href="mailto:${EMAIL}"><span>Email</span>${EMAIL}</a><div><span>Service area</span>Concord + nearby Bay Area cities</div><div><span>Languages</span>English / Spanish</div></div><div class="aside-note">We are happy to help you choose between a one-time clean and an ongoing plan.</div></aside></section></main>`
}

function legalPage() { return `<main><section class="page-hero legal-hero"><div class="section-kicker">Privacy / Straightforward by design</div><h1>Your information,<br /><em>handled with care.</em></h1><p>We only use the details you share to respond to your cleaning inquiry and coordinate service.</p></section><section class="legal-copy section-pad"><h2>Privacy note</h2><p>When you submit the quote form, your email application opens with the information you entered. Cherry Clean Services LLC does not collect or store form submissions on this website.</p><h2>Contact</h2><p>For questions about your information, contact <a href="mailto:${EMAIL}">${EMAIL}</a> or call <a href="tel:${PHONE_LINK}">${PHONE}</a>.</p></section></main>` }

function updateMetadata(path) {
  const metadata = {
    '/': ['Residential & Commercial Cleaning in Concord, CA | Cherry Clean Services LLC', 'Professional residential and commercial cleaning in Concord, CA and nearby Bay Area cities. Request a personalized quote.'],
    '/services': ['Cleaning Services in Concord, CA | Cherry Clean Services LLC', 'Explore regular, deep, move-in and move-out, commercial, window, power washing, appliance, blind, garage, and patio cleaning services.'],
    '/about': ['About Cherry Clean Services LLC | Concord, CA', 'Meet Cherry Clean Services LLC, a dependable residential and commercial cleaning company serving Concord and nearby Bay Area cities.'],
    '/contact-us': ['Request a Cleaning Quote | Cherry Clean Services LLC', 'Contact Cherry Clean Services LLC for a personalized residential or commercial cleaning quote in Concord, CA.'],
    '/privacy': ['Privacy Policy | Cherry Clean Services LLC', 'Learn how Cherry Clean Services LLC handles information shared through this website.'],
  }
  const [title, description] = metadata[path] || metadata['/']
  document.title = title
  document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', `https://www.cherrycleanllc.com${path === '/' ? '/' : `${path}/`}`)
}

function render() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  let content = path === '/' ? home() : path === '/services' ? servicesPage() : path === '/about' ? aboutPage() : path === '/contact-us' ? contactPage() : path === '/privacy' ? legalPage() : `<section class="not-found page-hero"><h1>That page is<br /><em>not here.</em></h1>${button('Back home', '/')}</section>`
  const rendered = `${header()}${content}${footer()}`
    .replaceAll('/assets/cherry-clean-logo.jpeg', '/assets/logo.webp')
    .replaceAll('/assets/hero-cleaning.png', '/assets/hero-cleaning.webp')
    .replaceAll('Trusted<br />with care', 'Care you can trust')
    .replaceAll('Professional tools and careful materials', 'Professional tools and safe, high-quality products')
    .replaceAll('Detail<br />without drama', 'Detail-oriented service')
    .replaceAll('family-minded business with a company-sized standard: dependable, detailed, and ready for what is next.', 'family-operated business with professional standards: dependable, detail-oriented, and ready for what’s next.')
    .replaceAll('Quotes are customized, never one-size-fits-all.', 'Our quotes are customized—never one-size-fits-all.')
    .replaceAll('Prefer a quicker hello?', 'Prefer to speak with us directly?')
    .replaceAll('Call, text, or<br /><em>send a note.</em>', 'Call, text, or<br /><em>send us an email.</em>')
    .replace('<section class="proof-strip">', `${yelpButton('Read reviews', 'Read our Yelp reviews', 'yelp-button--reviews')}<section class="proof-strip">`)
  document.querySelector('#app').innerHTML = rendered
  document.querySelectorAll('#app img').forEach(image => {
    image.loading = 'eager'
    image.decoding = 'async'
  })
  updateMetadata(path)
  bind()
}

function bind() {
  document.querySelectorAll('.brand img').forEach(image => image.setAttribute('src', '/assets/logo.webp'))
  document.querySelector('.hero-visual img')?.setAttribute('src', '/assets/hero-cleaning.webp')
  document.querySelectorAll('[data-link]').forEach(link => link.addEventListener('click', event => { const url = new URL(link.href); if (url.origin === window.location.origin) { event.preventDefault(); history.pushState({}, '', url.pathname + url.hash); render(); window.scrollTo({ top: 0, behavior: 'smooth' }) } }))
  const toggle = document.querySelector('.menu-toggle'); const close = document.querySelector('.menu-close'); const menu = document.querySelector('.mobile-menu')
  toggle?.addEventListener('click', () => menu.classList.add('open')); close?.addEventListener('click', () => menu.classList.remove('open')); menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => menu.classList.remove('open')))
  document.querySelector('.form-disclaimer')?.replaceChildren(document.createTextNode('Your request is sent securely to Cherry Clean Services LLC.'))
  const quoteForm = document.querySelector('#quote-form')
  quoteForm?.setAttribute('action', '/api/contact')
  quoteForm?.setAttribute('method', 'post')
  quoteForm?.addEventListener('submit', async event => {
    event.preventDefault()
    const form = event.currentTarget
    const submitButton = form.querySelector('button[type="submit"]')
    const successMessage = form.querySelector('.form-success')
    const data = Object.fromEntries(new FormData(form))
    submitButton.disabled = true
    submitButton.setAttribute('aria-busy', 'true')
    successMessage.textContent = 'Sending your request...'

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      if (!response.ok) {
        if (result.code === 'EMAIL_CONFIG_MISSING') throw new Error('The email service is not configured in Vercel.')
        if (result.code === 'RESEND_REJECTED') throw new Error('Resend rejected the sender address or API key.')
        throw new Error(result.error || 'Request failed')
      }
      form.reset()
      successMessage.textContent = 'Thank you. Your request was sent and we will be in touch soon.'
    } catch (error) {
      console.error('Quote request failed', error)
      successMessage.textContent = `${error.message} Please call or email us directly.`
    } finally {
      submitButton.disabled = false
      submitButton.removeAttribute('aria-busy')
    }
  })
  const params = new URLSearchParams(window.location.search); const serviceSelect = document.querySelector('[name="service"]'); if (serviceSelect && params.get('service')) { const match = services.find(service => service.id === params.get('service')); if (match) serviceSelect.value = match.title }
}
window.addEventListener('popstate', render)
render()
