export type Dictionary = {
  meta: { title: string; description: string };
  nav: { services: string; methodology: string; about: string; scheduleCta: string };
  hero: {
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
}
