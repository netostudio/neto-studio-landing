export const en: {
  meta: { title: string; description: string };
  nav: { services: string; methodology: string; about: string; scheduleCta: string };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  metrics: { value: string; label: string }[];
  problem: {
    title: string;
    cards: { title: string; description: string }[];
  };
  catalog: {
    title: string;
    audit: {
      slug: string;
      name: string;
      description: string;
      listLabel: string;
      list: string[];
      price: string;
      priceNote: string;
      cta: string;
    };
    retainer: {
      slug: string;
      name: string;
      description: string;
      listLabel: string;
      list: string[];
      price: string;
      priceNote: string;
      cta: string;
    };
    sprints: {
      slug: string;
      name: string;
      description: string;
      listLabel: string;
      list: string[];
      price: string;
      priceNote: string;
      cta: string;
    };
  };
  auditPreview: {
    badge: string;
    title: string;
    subtitle: string;
    riskMatrixTitle: string;
    riskMatrixActionLabel: string;
    risks: { level: 'CRITICAL' | 'HIGH' | 'MEDIUM'; finding: string; action: string }[];
    roadmapTitle: string;
    roadmap: { period: string; label: string }[];
  };
  guarantees: {
    title: string;
    items: { title: string; description: string }[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    fields: {
      name: string;
      email: string;
      role: string;
      roleOptions: string[];
      rolePlaceholder: string;
      message: string;
    };
    submit: string;
    scheduleNote: string;
    scheduleCta: string;
  };
  footer: { tagline: string; privacy: string; terms: string };
  languagePicker: { en: string; es: string };
  legal: {
    privacy: {
      title: string;
      lastUpdated: string;
      sections: { heading: string; body: string }[];
    };
    terms: {
      title: string;
      lastUpdated: string;
      sections: { heading: string; body: string }[];
    };
  };
} = {
  meta: {
    title: 'neto.studio | Technical Leadership and Product Rescue for Growing Companies',
    description:
      'Fractional CTO with real execution capacity. We audit, fix, and direct your technology, no reports that go nowhere and no code factories without direction.',
  },
  nav: {
    services: 'Services',
    methodology: 'Methodology',
    about: 'About',
    scheduleCta: 'Schedule Diagnostic',
  },
  hero: {
    badge: 'Technical Leadership + Integrated Execution',
    title: 'C-suite technical direction. With hands in the code.',
    subtitle:
      'Engineering strategy that turns into working, secure code from the first sprint, with no rigid contracts.',
    ctaPrimary: 'Book a Technical Diagnostic',
    ctaSecondary: 'See a Sample Audit',
  },
  metrics: [
    { value: '+100%', label: 'Business and tech alignment' },
    { value: '2 weeks', label: 'Audit and 90-day roadmap' },
    { value: '€0', label: 'Equity given up, ever' },
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
          'Hourly invoices that do not match real progress. Nobody audits the code they ship or knows whether technical debt is quietly growing.',
      },
      {
        title: 'MVPs that cannot handle real users',
        description:
          'A product built fast, often with AI / vibe coding, that breaks the moment real traffic hits, right when it matters most.',
      },
      {
        title: 'The cost and rigidity of a full-time CTO',
        description:
          'EUR 80k-150k a year plus equity, months of hiring, and the risk of getting the fit wrong. For many companies, it simply does not pay off yet.',
      },
    ],
  },
  catalog: {
    title: 'A model built for the gap between the consultant and the software factory.',
    audit: {
      slug: 'neto / audit',
      name: 'Technical Audit & Rescue Plan',
      description:
        '1-2 weeks of deep review across code, infrastructure, and security, with a 90-day roadmap and a fixed price from day one.',
      listLabel: 'Deliverables',
      list: [
        'Code, architecture, and infrastructure audit',
        'Security and dependency review',
        'Prioritized risk matrix (Critical / High / Medium)',
        '90-day roadmap with concrete actions',
      ],
      price: 'From €1,800 + VAT',
      priceNote: 'Fixed price, one-time',
      cta: 'Order Audit',
    },
    retainer: {
      slug: 'neto / lead',
      name: 'Fractional CTO / Tech Lead as a Service',
      description:
        'Ongoing technical direction with C-suite judgment and real execution capacity, embedded in your team, with no annual contract.',
      listLabel: 'Includes',
      list: [
        'Architecture and technical strategy',
        'Sprint and engineering team leadership',
        'Hands-on code intervention when needed',
        'Technical representation for investors / due diligence',
      ],
      price: 'From €3,000/mo + VAT',
      priceNote: 'Monthly subscription, 30-day notice',
      cta: 'Reserve Capacity',
    },
    sprints: {
      slug: 'neto / rescue',
      name: 'Rescue Sprints',
      description:
        'Fixed-scope projects of 4 to 8 weeks to clean up critical technical debt or stabilize a product that cannot take the pressure.',
      listLabel: 'Best for',
      list: [
        'Stabilizing an MVP built with AI / vibe coding',
        'Cleaning up code inherited from an external agency',
        'Preparing infrastructure before a funding round',
        'Fixing critical technical debt before it scales',
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
        finding: 'Active API keys/credentials exposed in git repository',
        action: 'Immediate rotation and env var migration.',
      },
      {
        level: 'HIGH',
        finding: 'Absence of CI/CD pipeline and outdated test suites',
        action: 'GitHub Actions automation setup.',
      },
      {
        level: 'MEDIUM',
        finding: 'Unversioned database migrations or unmanaged third-party libraries',
        action: 'Migration versioning and dependency audit.',
      },
    ],
    roadmapTitle: '90-Day Roadmap',
    roadmap: [
      { period: 'Month 1', label: 'Critical sanitization' },
      { period: 'Month 2', label: 'Stabilization and debt control' },
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
        title: 'No lock-in, no equity',
        description:
          '30-day notice, no annual contracts, no equity given up. We stay because we add value, not because you are stuck.',
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
      roleOptions: ['CEO', 'Founder', 'Investor', 'Head of Tech'],
      rolePlaceholder: 'Select your role',
      message: 'Message / Platform URL',
    },
    submit: 'Send Message',
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
      lastUpdated: 'Last updated: August 2026',
      sections: [
        {
          heading: '1. Data we collect',
          body: 'When you contact neto.studio through this website, we collect the information you provide directly: your name, corporate email, role, and the details of your message. We do not use tracking cookies or third-party analytics on this site.',
        },
        {
          heading: '2. How we use it',
          body: 'We use the information you submit exclusively to respond to your inquiry, prepare a proposal, or schedule a diagnostic call. We do not sell or share your data with third parties.',
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
      lastUpdated: 'Last updated: August 2026',
      sections: [
        {
          heading: '1. Services',
          body: 'neto.studio provides technical advisory services, including Technical Due Diligence audits and Fractional CTO engagements. The specific scope, deliverables, and timeline for each engagement are defined in a separate proposal or contract agreed with the client.',
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
