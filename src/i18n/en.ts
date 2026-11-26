import type { Dictionary } from './types';

export const en: Dictionary = {
  meta: {
    ogImageAlt: 'neto.studio: technical leadership and product rescue for growing companies',
    title: 'Fractional CTO for small and mid-sized businesses | neto.studio',
    description:
      'Fractional CTO for small and mid-sized businesses, with real execution capacity. We audit, fix, and direct your technology, no reports that go nowhere and no code factories without direction.',
  },
  nav: {
    services: 'Services',
    audit: 'Audit',
    about: 'About',
    scheduleCta: 'Let\'s talk',
  },
  hero: {
    title: ['We lead your technology.', 'You focus on your business.'],
    subtitle:
      'CTO-level strategy and the engineering to deliver it. No rigid contracts.',
    ctaPrimary: 'Book a Technical Diagnostic',
    ctaSecondary: 'See the Audits',
  },
  metrics: [
    { value: '2 weeks', label: 'Audit with a prioritised plan' },
    { value: 'Clear pricing', label: 'Rates agreed upfront, no surprises' },
    { value: '30 days', label: 'Notice period, no lock-in' },
  ],
  problem: {
    title: 'You already know the problem. You have been living with it for months.',
    cards: [
      {
        title: 'The consultant who only delivers PDFs',
        description:
          'Brilliant diagnostics, flawless architecture recommendations, and not a single line of code touched. The report gets filed away and the bug stays in production.',
      },
      {
        title: 'External agencies with no oversight',
        description:
          'Hourly invoices that do not match real progress. Nobody reviews the code they deliver or knows whether problems are quietly piling up.',
      },
      {
        title: 'Software that fails when it is needed most',
        description:
          'Applications built in a hurry, sometimes generated with AI and no technical oversight, that break as soon as customers or orders grow, right when it matters most.',
      },
      {
        title: 'The cost and rigidity of an in-house CTO',
        description:
          '80.000-150.000 € a year in salary, months of hiring, and the risk of getting the fit wrong. For most small and mid-sized businesses, it simply does not pay off.',
      },
    ],
  },
  catalog: {
    title: 'A model built for the gap between the consultant and the software factory.',
    audit: {
      slug: 'neto / audit',
      name: 'Audit + Action Plan',
      description:
        'Find out what technology your business has, what risks it carries and what to do first. Two fixed-price audits, depending on whether you have a bespoke application.',
      listLabel: 'Two audits',
      list: [
        'Systems & Vendors, no custom code: about 2 weeks',
        'Software, with custom code: about 3 weeks',
        'Jargon-free report, prioritised risks and a 90-day plan',
        'A systems inventory that stays with you',
      ],
      price: '2.400 € or 5.000 € + VAT',
      priceNote: '2 audits, fixed price',
      cta: 'See the 2 Audits',
    },
    retainer: {
      slug: 'neto / lead',
      name: 'Fractional CTO',
      description:
        'Ongoing technical direction with business judgment and real execution capacity, embedded in your team, with no annual contract.',
      listLabel: 'Includes',
      list: [
        'Architecture and technical strategy',
        'Coordination of your technical team and external vendors',
        'Technical point of contact for clients, vendors, and partners',
      ],
      price: 'From 3.000 €/mo + VAT',
      priceNote: 'Monthly subscription, 30-day notice',
      cta: 'Reserve Capacity',
    },
    sprints: {
      slug: 'neto / rescue',
      name: 'Rescue Projects',
      description:
        'Fixed-scope projects of 4 to 8 weeks to solve critical technical problems or stabilise a system that cannot take the pressure.',
      listLabel: 'Best for',
      list: [
        'Cleaning up code inherited from an external agency',
        'Preparing your systems for major growth or a large new client',
        'Fixing underlying flaws before they become an expensive problem',
        'Stabilising software built with AI and no technical oversight',
      ],
      price: 'Fixed quote after diagnostic',
      priceNote: '4-8 week project',
      cta: 'Request a Quote',
    },
  },
  auditPage: {
    meta: {
      title: 'Technology audit for small and mid-sized businesses | neto.studio',
      description:
        'Two fixed-price audits for SMEs with no in-house technical staff: systems and vendors (2.400 € + VAT) or custom software (5.000 € + VAT). A jargon-free report and a 90-day plan.',
    },
    intro: {
      badge: 'Audit',
      title: 'Find out what technology your business really has before you decide.',
      subtitle:
        'For SMEs with no technical staff in-house. Before a technology investment, when a key person leaves, when you have doubts about a vendor or costs keep climbing: we tell you what you have, what the risks are and what to do first, in a report your leadership team can read.',
      guarantees: ['Fixed, published price', 'NDA before we see anything', 'Read-only access', 'The report is yours'],
      unsureNote: 'Not sure which one you need?',
      unsureCta: 'We will tell you in a 20-minute call',
    },
    tiers: {
      priceNote: '+ VAT, fixed price',
      timelineLabel: 'Timeline',
      includesLabel: 'What we review',
      methodLabel: 'How it works',
      deliverablesLabel: 'What you get',
      systems: {
        slug: 'neto / systems',
        name: 'Systems & Vendors Audit',
        forWho:
          'No custom code. For businesses that run on third-party platforms (ERP, online shop, CRM, cloud tools) connected to each other, with no bespoke application the business depends on.',
        price: '2.400 €',
        timeline: 'About 2 weeks from kick-off, depending on interview availability',
        includes: [
          'Systems map: what you have and what each part is for',
          'Ownership and access: whose name the domain, accounts and subscriptions are in, and who has admin rights',
          'Vendors and contracts: minimum terms, exit conditions and data ownership',
          'Integrations and data: how data moves between systems and who maintains those connections',
          'Continuity: backups, single points of failure and reliance on one person',
          'Basic security: two-factor login, former employees\' accounts and permissions',
          'Costs: what each tool costs and which licences go unused',
          'Business fit: processes still run on paper or spreadsheets, and whether planned investments make sense',
        ],
        method:
          'No code is read. Interviews with leadership, 1-2 key people and your main vendor. A review of contracts and invoices. Screen-sharing sessions with whoever runs each platform, so you never have to hand over passwords.',
        deliverables: [
          'A 6-10 page, jargon-free report: overall and per-area traffic lights, the three decisions for leadership, a systems map, what is working well, prioritised risks with indicative costs, a recommendation on each vendor (keep, renegotiate or change) and a 90-day plan',
          'A systems inventory spreadsheet that stays with you and that you can keep up to date',
          'A 60-minute presentation to leadership',
          'A 30-minute follow-up call after 30 days',
        ],
        cta: 'Request a Systems Audit',
      },
      software: {
        slug: 'neto / software',
        name: 'Software Audit',
        forWho:
          'With custom code. For businesses that depend on a bespoke application, whether built by an agency, a freelancer or with AI.',
        price: '5.000 €',
        timeline: 'About 3 weeks from kick-off',
        includes: [
          'Everything in the Systems & Vendors Audit',
          'Application architecture: how it is built and whether it will cope with what is coming',
          'Code quality and how easy it is to maintain',
          'Application security',
          'Dependencies: the third-party components it is built on',
          'Deployment and backups',
          'The key decision: keep, rebuild, replace with an off-the-shelf product or change vendor',
        ],
        method:
          'The same as the Systems & Vendors Audit, plus read-only access to the application and its code.',
        deliverables: [
          'The same jargon-free report, including the application review and a recommendation on its future',
          'A systems inventory spreadsheet that stays with you and that you can keep up to date',
          'A 60-minute presentation to leadership',
          'A 30-minute follow-up call after 30 days',
        ],
        cta: 'Request a Software Audit',
      },
      boundary: {
        title: 'Which one is right for you?',
        body: [
          'If your business depends on a bespoke application, the Software Audit.',
          'If you only have integrations or the odd script, the Systems & Vendors Audit: we list those pieces and check who maintains them, but we do not read their code.',
          'If you are not sure, we will tell you in the initial call.',
        ],
      },
    },
    comparison: {
      title: 'What each audit includes',
      featureLabel: 'Scope',
      rows: [
        { label: 'Systems map', values: [true, true] },
        { label: 'Ownership and access', values: [true, true] },
        { label: 'Vendors and contracts', values: [true, true] },
        { label: 'Integrations and data', values: [true, true] },
        { label: 'Continuity and backups', values: [true, true] },
        { label: 'Basic security', values: [true, true] },
        { label: 'Costs and unused licences', values: [true, true] },
        { label: 'Business fit', values: [true, true] },
        { label: 'Review of the bespoke application (read-only)', values: [false, true] },
        { label: 'Keep / rebuild / replace / change vendor decision', values: [false, true] },
        { label: 'Jargon-free report and 90-day plan', values: [true, true] },
        { label: 'Systems inventory spreadsheet', values: [true, true] },
        { label: '60-minute presentation to leadership', values: [true, true] },
        { label: '30-day follow-up', values: [true, true] },
        { label: 'Timeline', values: ['About 2 weeks', 'About 3 weeks'] },
        { label: 'Price', values: ['2.400 € + VAT', '5.000 € + VAT'] },
      ],
      included: 'Included',
      notIncluded: 'Not included',
    },
    process: {
      title: 'How it works',
      steps: [
        {
          title: '20-minute call',
          description:
            'We get to know your situation and tell you which audit fits. If neither does, we will tell you that too.',
        },
        {
          title: 'Proposal and NDA',
          description:
            'Fixed price, scope and timeline in writing. We sign a non-disclosure agreement before we see anything. 50% is paid to get started.',
        },
        {
          title: 'Kick-off',
          description: 'A meeting with leadership and a short questionnaire in business language, not technical terms.',
        },
        {
          title: 'Interviews and review',
          description:
            'We talk to whoever we need to, your vendor included, without getting in the way of their work. Always with read-only access.',
        },
        {
          title: 'Presentation',
          description:
            'We present the findings to leadership. The remaining 50% is paid before the session, and the report and inventory are handed over once it is received.',
        },
        {
          title: '30-day follow-up',
          description: 'We review together what has been done and what has stalled.',
        },
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          question: 'Which of the two do I need?',
          answer:
            'If your business depends on a bespoke application, the Software Audit. If you run on third-party platforms with, at most, integrations or the odd script, the Systems & Vendors Audit: we list those pieces and check who maintains them, but we do not read their code. If you are not sure, we will sort it out in the initial call.',
        },
        {
          question: 'Why a fixed price rather than a quote?',
          answer:
            'Because the scope of each audit is defined upfront: the same areas, the same deliverables and the same timeline. You know what you will pay before we start.',
        },
        {
          question: 'How does payment work?',
          answer: '50% when we start and the remaining 50% before the presentation of findings.',
        },
        {
          question: 'Do you need access to our systems?',
          answer:
            'Read-only, and under a non-disclosure agreement. In the Systems & Vendors Audit almost everything happens in screen-sharing sessions with whoever runs each platform, so you never have to give us passwords.',
        },
        {
          question: 'What if my vendor does not cooperate?',
          answer:
            'We frame the audit as a review, not a trial, and most vendors cooperate. If one does not, that is an important finding for you too.',
        },
        {
          question: 'Can I start with the Systems & Vendors Audit and upgrade later?',
          answer:
            'Yes. If a bespoke application turns up that deserves a proper look, you can upgrade to the Software Audit: we build on the work already done and deduct the 2.400 € you have already paid.',
        },
        {
          question: 'What happens after the audit?',
          answer:
            'The report and inventory are yours, and you can carry out the plan with whoever you like: the recommendations do not depend on who implements them. If you prefer, we can stay on with ongoing technical leadership or help with the implementation.',
        },
      ],
    },
  },
  guarantees: {
    title: 'We work with clear rules, not fine print.',
    items: [
      {
        title: 'Transparent, fixed pricing',
        description:
          'No hourly rates that turn into a surprise at the end of the month. You know what you pay from day one.',
      },
      {
        title: 'No lock-in',
        description:
          '30-day notice, no annual contracts, no obscure dependencies. We stay because we add value, not because you are stuck.',
      },
      {
        title: 'Your code is yours from day one',
        description:
          '100% IP transferred from the start of the engagement. And when your in-house team is ready, we design the offboarding plan so they take over without friction.',
      },
    ],
  },
  contact: {
    badge: 'Get in Touch',
    title: "Let's talk.",
    subtitle: 'Book a technical diagnostic call or tell us what you need to solve.',
    fields: {
      name: 'Name',
      email: 'Corporate Email',
      role: 'Role',
      roleOptions: [
        'CEO / Managing Director',
        'Owner / Partner',
        'Operations or Finance Director',
        'IT Manager',
      ],
      rolePlaceholder: 'Select your role',
      service: 'Service of interest (optional)',
      servicePlaceholder: 'Select a service',
      serviceOptions: [
        { value: 'audit-check', label: 'Systems & Vendors Audit' },
        { value: 'audit-full', label: 'Software Audit' },
        { value: 'fractional-cto', label: 'Fractional CTO' },
        { value: 'rescue', label: 'Rescue Project' },
        { value: 'unsure', label: 'Not sure yet' },
      ],
      message: 'Message / Platform URL',
      privacyConsent: 'I have read and accept the',
      privacyLink: 'privacy policy',
    },
    submit: 'Send Message',
    sending: 'Sending...',
    status: {
      success: "Thanks! We've received your message and will get back to you shortly.",
      error: 'Your message could not be sent. Please try again in a few minutes.',
      rateLimited: 'Too many attempts. Please wait a minute and try again.',
    },
    scheduleNote: 'Prefer a live conversation?',
    scheduleCta: 'Schedule a Call',
  },
  footer: {
    tagline: 'Technical direction and engineering execution, no fine print.',
    privacy: 'Privacy',
    terms: 'Terms',
  },
  languagePicker: {
    en: 'EN',
    es: 'ES',
  },
  notFound: {
    title: 'Page not found',
    description: 'The page you are looking for does not exist or has been moved.',
    cta: 'Back to home',
  },
  legal: {
    privacy: {
      title: 'Privacy Policy',
      description: 'How neto.studio collects, uses and retains the data you submit through this website.',
      lastUpdated: 'Last updated: October 2026',
      sections: [
        {
          heading: '1. Data we collect',
          body: 'When you contact neto.studio through this website, we collect the information you provide directly: your name, corporate email, role, and the details of your message. We do not use tracking cookies or third-party analytics on this site.',
        },
        {
          heading: '2. How we use it',
          body: 'We use the information you submit exclusively to respond to your inquiry, prepare a proposal, or schedule a diagnostic call. The legal basis for this processing is the consent you give when submitting the form. We never sell your data. To process your inquiry we rely on service providers acting as data processors on our behalf: Make (Celonis), which receives the form submission, and Holded, which we use to manage client contacts.',
        },
        {
          heading: '3. Data retention',
          body: 'We retain correspondence and engagement records for as long as necessary to fulfil the purposes described above and to comply with legal and contractual obligations.',
        },
        {
          heading: '4. Contact',
          body: 'For any privacy-related request, send an email to info@neto.studio.',
        },
      ],
    },
    terms: {
      title: 'Terms of Service',
      description: 'Terms that govern the use of the neto.studio website and its advisory services.',
      lastUpdated: 'Last updated: August 2026',
      sections: [
        {
          heading: '1. Services',
          body: 'neto.studio provides technical advisory services, including technical audits and Fractional CTO engagements. The specific scope, deliverables, and timeline for each engagement are defined in a separate proposal or contract agreed with the client.',
        },
        {
          heading: '2. Engagement terms',
          body: 'Pricing shown on this website is indicative and excludes applicable taxes (VAT). Final terms, including payment schedule and cancellation conditions, are formalised in the service agreement signed prior to the start of any engagement.',
        },
        {
          heading: '3. Confidentiality',
          body: 'All information shared during an audit or advisory engagement is treated as confidential and, where required, covered by a mutual non-disclosure agreement (NDA).',
        },
        {
          heading: '4. Contact',
          body: 'For questions about these terms, send an email to info@neto.studio.',
        },
      ],
    },
  },
};
