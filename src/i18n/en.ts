import type { Dictionary } from './types';

export const en: Dictionary = {
  meta: {
    ogImageAlt: 'neto.studio: technical leadership and product rescue for growing companies',
    title: 'neto.studio | Technical Leadership and Product Rescue for Growing Companies',
    description:
      'Fractional CTO for small and mid-sized businesses, with real execution capacity. We audit, fix, and direct your technology, no reports that go nowhere and no code factories without direction.',
  },
  nav: {
    services: 'Services',
    methodology: 'Methodology',
    about: 'About',
    scheduleCta: 'Schedule Diagnostic',
  },
  hero: {
    title: ['We lead your technology.', 'You focus on your business.'],
    subtitle:
      'CTO-level strategy and the engineering to deliver it. No rigid contracts.',
    ctaPrimary: 'Book a Technical Diagnostic',
    ctaSecondary: 'See a Sample Audit',
  },
  metrics: [
    { value: '2 weeks', label: 'Audit and 90-day roadmap' },
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
        '1-2 weeks of deep review across code, infrastructure, team and security, with a clear 90-day roadmap and a fixed price from day one.',
      listLabel: 'Deliverables',
      list: [
        'Code, architecture, and infrastructure audit',
        'Security and dependency review',
        'Prioritized risk matrix (Critical / High / Medium / Low)',
        '90-day roadmap with concrete actions',
      ],
      price: 'From €1,800 + VAT',
      priceNote: 'Fixed price, one-time',
      cta: 'Order Audit',
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
        'Fixed-scope projects of 4 to 8 weeks to solve critical technical problems or stabilize a system that cannot take the pressure.',
      listLabel: 'Best for',
      list: [
        'Cleaning up code inherited from an external agency',
        'Preparing your systems for major growth or a large new client',
        'Fixing underlying flaws before they become an expensive problem',
        'Stabilizing software built with AI and no technical oversight',
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
      'Every audit ends in a prioritized, business-readable roadmap, not a PDF nobody opens again.',
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
    roadmapTitle: '90-Day Roadmap',
    roadmap: [
      { period: 'Month 1', label: 'Critical sanitization' },
      { period: 'Month 2', label: 'Stabilization and risk control' },
      { period: 'Month 3', label: 'Speed in delivery and next steps' },
    ],
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
    scheduleCta: 'Schedule Diagnostic',
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
          body: 'We retain correspondence and engagement records for as long as necessary to fulfill the purposes described above and to comply with legal and contractual obligations.',
        },
        {
          heading: '4. Contact',
          body: 'For any privacy-related request, reach out through the contact form on our homepage.',
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
          body: 'Pricing shown on this website is indicative and excludes applicable taxes (VAT). Final terms, including payment schedule and cancellation conditions, are formalized in the service agreement signed prior to the start of any engagement.',
        },
        {
          heading: '3. Confidentiality',
          body: 'All information shared during an audit or advisory engagement is treated as confidential and, where required, covered by a mutual non-disclosure agreement (NDA).',
        },
        {
          heading: '4. Contact',
          body: 'For questions about these terms, reach out through the contact form on our homepage.',
        },
      ],
    },
  },
};
