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
    ctaSecondary: 'See a Sample Audit',
  },
  metrics: [
    { value: 'From 3 days', label: 'Technical diagnostic with a prioritised plan' },
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
          'EUR 80k-150k a year in salary, months of hiring, and the risk of getting the fit wrong. For most small and mid-sized businesses, it simply does not pay off.',
      },
    ],
  },
  catalog: {
    title: 'A model built for the gap between the consultant and the software factory.',
    audit: {
      slug: 'neto / audit',
      name: 'Technical Audit + Action Plan',
      description:
        'Three levels depending on what you need to know: from a check-up of a few days to full due diligence before raising or selling.',
      listLabel: 'Levels',
      list: [
        'Tech Health Check: 3-5 days',
        'Full Technical Audit: 2-3 weeks',
        'Investment & Exit Readiness: 3-4 weeks',
        'Prioritised risks and an action plan at every level',
      ],
      price: 'From €1,500 + VAT',
      priceNote: '3 levels, fixed price',
      cta: 'See the 3 Levels',
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
        'Direct work on the code when needed (on an ad hoc basis)',
        'Technical point of contact for clients, vendors, and partners',
      ],
      price: 'From €3,000/mo + VAT',
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
  auditPreview: {
    badge: 'Sample Deliverable',
    title: 'This is what your Technical Audit report looks like.',
    subtitle:
      'Every audit ends in a prioritised, business-readable roadmap, not a PDF nobody opens again.',
    riskMatrixTitle: 'Risk Impact Matrix',
    riskMatrixActionLabel: 'Action',
    risks: [
      {
        level: 'CRITICAL',
        levelLabel: 'Critical',
        finding: 'Active API keys/credentials exposed in git repository',
        action: 'Immediate rotation and env var migration.',
      },
      {
        level: 'HIGH',
        levelLabel: 'High',
        finding: 'Absence of CI/CD pipeline and outdated test suites',
        action: 'GitHub Actions automation setup.',
      },
      {
        level: 'MEDIUM',
        levelLabel: 'Medium',
        finding: 'Unversioned database migrations or unmanaged third-party libraries',
        action: 'Migration versioning and dependency audit.',
      },
      {
        level: 'LOW',
        levelLabel: 'Low',
        finding: 'Missing or outdated technical documentation',
        action: 'Architecture docs and setup guide.',
      },
    ],
    roadmapTitle: 'First 90 Days of the Roadmap',
    roadmap: [
      { period: 'Month 1', label: 'Critical sanitisation' },
      { period: 'Month 2', label: 'Stabilisation and risk control' },
      { period: 'Month 3', label: 'Speed in delivery and next steps' },
    ],
  },
  auditPage: {
    meta: {
      title: 'Technical audit for SMEs and startups | neto.studio',
      description:
        'Three fixed-price technical audit levels: a health check for SMEs that rely on a vendor, a full audit of in-house software, and technical readiness for investment or sale.',
    },
    intro: {
      badge: 'Technical Audit',
      title: 'Know where your technology stands before you decide.',
      subtitle:
        'Three levels depending on what is at stake: understanding where you stand with your vendor, deciding the future of your software, or arriving prepared for an investment or sale. Always at a fixed price, with a report your leadership team can read.',
      unsureNote: 'Not sure which one you need?',
      unsureCta: 'We will tell you in a 20-minute call',
    },
    tiers: {
      highlightLabel: 'For business-critical software',
      priceNote: '+ VAT, fixed price after an initial call',
      timelineLabel: 'Timeline',
      includesLabel: 'Includes',
      deliverableLabel: 'Deliverable',
      check: {
        slug: 'neto / check',
        name: 'Tech Health Check',
        forWho:
          'For SMEs with no technical staff in-house that rely on a vendor or agency and want to know where they stand.',
        price: '€1,500-€2,500',
        timeline: '3-5 days',
        includes: [
          'Interviews with leadership and with the vendor or technical lead',
          'Inventory of systems, tools, vendors and contracts: who holds the code and who holds the passwords',
          'Automated analysis of dependencies, secrets and cloud configuration',
          'Review of access control and backups',
        ],
        deliverable:
          'A 3-5 page, jargon-free report (overall traffic light, top risks and what to do first) and a 45-minute session with leadership.',
        cta: 'Request a Health Check',
      },
      full: {
        slug: 'neto / audit',
        name: 'Full Technical Audit',
        forWho:
          'For SMEs with business-critical in-house software and startups that want to know where they stand before investing in a new phase.',
        price: '€5,000-€8,000',
        timeline: '2-3 weeks',
        includes: [
          'Review of 8 areas: architecture, code, operations, security, data, IP and dependencies, team and processes, and costs',
          'Review of the vendor contract: code ownership, lock-in and what happens if they leave',
          'Findings prioritised by impact and cost',
          'The key decision: keep, rebuild, replace with an off-the-shelf product or change vendor',
        ],
        deliverable: 'A 6-12 month roadmap and a presentation to leadership.',
        cta: 'Request an Audit',
      },
      diligence: {
        slug: 'neto / diligence',
        name: 'Investment & Exit Readiness',
        forWho:
          'For startups ahead of a Series A or B, or SMEs ahead of a sale or bringing in a partner.',
        price: '€8,000-€12,000',
        timeline: '3-4 weeks + follow-up',
        includes: [
          'Full review from the buyer or investor side: what they would find and how it would affect the price',
          'Prioritised remediation plan before going to market',
          'Technical data room prepared: document checklist and what is missing',
          'Mock due diligence interviews with your CTO',
          'Follow-up review after 60 days to check what has been fixed',
        ],
        deliverable: 'Remediation plan, technical data room ready and a due diligence rehearsal.',
        cta: 'Request Readiness Review',
      },
    },
    comparison: {
      title: 'What each level includes',
      featureLabel: 'Scope',
      rows: [
        { label: 'Interviews with leadership and vendor', values: [true, true, true] },
        { label: 'Inventory of systems, access and backups', values: [true, true, true] },
        { label: 'Automated analysis (dependencies, secrets, cloud)', values: [true, true, true] },
        { label: 'In-depth code and architecture review', values: [false, true, true] },
        { label: 'Vendor contract review', values: [false, true, true] },
        { label: 'Keep / rebuild / replace / change decision', values: [false, true, true] },
        { label: 'Roadmap', values: ['What to do first', '6-12 months', 'Remediation plan'] },
        { label: 'Buyer or investor view', values: [false, false, true] },
        { label: 'Technical data room', values: [false, false, true] },
        { label: 'Mock due diligence', values: [false, false, true] },
        { label: '60-day follow-up', values: [false, false, true] },
        { label: 'Timeline', values: ['3-5 days', '2-3 weeks', '3-4 weeks'] },
      ],
    },
    process: {
      title: 'How we work',
      steps: [
        {
          title: '20-minute call',
          description: 'We understand your situation and recommend the level that makes sense. If none does, we will tell you.',
        },
        {
          title: 'Fixed proposal and NDA',
          description: 'A fixed price within the range, with scope and timeline in writing. We sign an NDA before seeing anything.',
        },
        {
          title: 'Access and review',
          description: 'You give us read-only access and we talk to whoever we need to. We coordinate with your vendor without disrupting their work.',
        },
        {
          title: 'Report and leadership session',
          description: 'We present the results in business language and answer every question.',
        },
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          question: 'Why a price range and not a single figure?',
          answer:
            'It depends on the size of your systems and the number of vendors. After the initial call we give you a fixed price within the range, and that is what you pay.',
        },
        {
          question: 'Do you need access to our code and systems?',
          answer:
            'Yes, read-only and under a non-disclosure agreement. If you do not know who holds that access, finding out is already part of the job.',
        },
        {
          question: 'What if my vendor does not cooperate?',
          answer:
            'We frame the audit as a review, not a trial, and most vendors cooperate. If one does not, that is an important finding for you too.',
        },
        {
          question: 'Can I start with the Health Check and expand later?',
          answer:
            'Yes. It is the usual starting point: if the Health Check uncovers risks that deserve deeper analysis, the Full Audit builds on the work already done.',
        },
        {
          question: 'What happens after the audit?',
          answer:
            'The report is yours and you can act on it with whoever you like. If you would rather we do it, we can continue as your Fractional CTO or through a Rescue Project.',
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
        { value: 'audit-check', label: 'Tech Health Check' },
        { value: 'audit-full', label: 'Full Technical Audit' },
        { value: 'audit-diligence', label: 'Investment & Exit Readiness' },
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
