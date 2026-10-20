export type AuditTier = {
  slug: string;
  name: string;
  forWho: string;
  price: string;
  timeline: string;
  includes: string[];
  deliverable: string;
  cta: string;
};

export type Dictionary = {
  meta: { title: string; description: string; ogImageAlt: string };
  nav: { services: string; audit: string; about: string; scheduleCta: string };
  hero: {
    title: string[];
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
    risks: { 
      level: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
      levelLabel: string;
      finding: string;
      action: string 
    }[];
    roadmapTitle: string;
    roadmap: { period: string; label: string }[];
  };
  auditPage: {
    meta: { title: string; description: string };
    intro: {
      badge: string;
      title: string;
      subtitle: string;
      unsureNote: string;
      unsureCta: string;
    };
    tiers: {
      highlightLabel: string;
      priceNote: string;
      timelineLabel: string;
      includesLabel: string;
      deliverableLabel: string;
      check: AuditTier;
      full: AuditTier;
      diligence: AuditTier;
    };
    comparison: {
      title: string;
      featureLabel: string;
      // One value per tier (check, full, diligence): true renders a check mark,
      // false a dash, and a string is shown as is.
      rows: { label: string; values: [boolean | string, boolean | string, boolean | string] }[];
    };
    process: {
      title: string;
      steps: { title: string; description: string }[];
    };
    faq: {
      title: string;
      items: { question: string; answer: string }[];
    };
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
      service: string;
      servicePlaceholder: string;
      serviceOptions: { value: string; label: string }[];
      message: string;
      privacyConsent: string;
      privacyLink: string;
    };
    submit: string;
    sending: string;
    status: {
      success: string;
      error: string;
      rateLimited: string;
    };
    scheduleNote: string;
    scheduleCta: string;
  };
  footer: { tagline: string; privacy: string; terms: string };
  languagePicker: { en: string; es: string };
  notFound: { title: string; description: string; cta: string };
  legal: {
    privacy: {
      title: string;
      description: string;
      lastUpdated: string;
      sections: { heading: string; body: string }[];
    };
    terms: {
      title: string;
      description: string;
      lastUpdated: string;
      sections: { heading: string; body: string }[];
    };
  };
}
