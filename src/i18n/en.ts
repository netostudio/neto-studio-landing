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
    cto: {
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
    title: 'neto.studio | Technical Advisory & Fractional CTO for High-Growth Companies',
    description:
      'We audit, stabilize, and direct your software architecture so you can scale without bugs, security flaws, or infrastructure surprises.',
  },
  nav: {
    services: 'Services',
    methodology: 'Methodology',
    about: 'About',
    scheduleCta: 'Schedule Diagnostic',
  },
  hero: {
    badge: 'Technical Advisory & Fractional CTO',
    title: 'Clarity, stability, and tech governance for high-growth companies.',
    subtitle:
      'We audit, stabilize, and direct your software architecture so you can scale without bugs, security flaws, or infrastructure surprises.',
    ctaPrimary: 'Request Technical Audit',
    ctaSecondary: 'View Sample Deliverables',
  },
  metrics: [
    { value: '+100%', label: 'Business & Tech Alignment' },
    { value: '2 Weeks', label: 'Technical Due Diligence' },
    { value: 'Zero', label: 'Unseen Technical Debt' },
  ],
  problem: {
    title: 'Is technology driving your business forward, or holding it back?',
    cards: [
      {
        title: 'Recurring Bugs & Unstable Deployments',
        description:
          'Lack of automated testing, abandoned CI/CD pipelines, and fear of deploying to production.',
      },
      {
        title: 'C-Level vs. Engineering Misalignment',
        description:
          'Frustration over unclear deadlines and difficulty translating technical issues into business metrics.',
      },
      {
        title: 'Hidden Security Risks',
        description: 'Exposed API keys, weak access control, and obsolete dependencies.',
      },
      {
        title: 'CTO Transition or Departure',
        description:
          'Uncertainty during C-level tech transitions or the need for leadership before hiring a full-time CTO.',
      },
    ],
  },
  catalog: {
    title: 'Solutions engineered to protect and scale your digital assets.',
    audit: {
      slug: 'neto / audit',
      name: 'Stability & Technical Due Diligence',
      description:
        'A 2-week deep-dive analysis into architecture, codebase, cloud infrastructure, and engineering processes.',
      listLabel: 'Deliverables',
      list: [
        'Full technical audit report',
        'Executive summary with risk impact matrix (Critical C1-C4, High A1-A6)',
        'A 90-day prioritized roadmap',
      ],
      price: 'From €2,500 / $2,800 + VAT',
      priceNote: 'One-time',
      cta: 'Order Audit',
    },
    cto: {
      slug: 'neto / cto',
      name: 'Fractional CTO & Tech Leadership',
      description:
        'Strategic integration into your leadership team (10-12h/week) to execute the tech roadmap and govern engineering.',
      listLabel: 'Includes',
      list: [
        'Scalable architecture design',
        'Engineering culture',
        'Tech hiring & onboarding',
        'Cloud cost optimization (FinOps)',
      ],
      price: 'From €3,500 / $3,800 / mo + VAT',
      priceNote: 'Monthly Retainer',
      cta: 'Reserve CTO Capacity',
    },
  },
  auditPreview: {
    badge: 'Sample Deliverable',
    title: 'A preview of your Technical Audit Report.',
    subtitle:
      'Every audit ends with a prioritized, business-readable breakdown of risk and a clear path to resolution.',
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
      { period: 'Month 1', label: 'Sanitization' },
      { period: 'Months 2-3', label: 'Stabilization & Scaling' },
    ],
  },
  contact: {
    badge: 'Get in Touch',
    title: "Let's talk about your architecture.",
    subtitle: 'Schedule a diagnostic call or send us the details of your project.',
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
    tagline: 'Building software engineering with rigor and transparency.',
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
