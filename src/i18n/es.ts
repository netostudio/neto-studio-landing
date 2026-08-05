import type { Dictionary } from './types';

export const es: Dictionary = {
  meta: {
    title: 'neto.studio | Asesoría Técnica y CTO Fraccional para Empresas en Crecimiento',
    description:
      'Auditamos, saneamos y direccionamos la arquitectura de tu plataforma software para que escales sin bugs, riesgos de seguridad ni sorpresas de infraestructura.',
  },
  nav: {
    services: 'Servicios',
    methodology: 'Metodología',
    about: 'Sobre Neto',
    scheduleCta: 'Agendar Diagnóstico',
  },
  hero: {
    badge: 'Asesoría Técnica y CTO Fraccional',
    title: 'Claridad, estabilidad y gobernanza tecnológica para empresas en crecimiento.',
    subtitle:
      'Auditamos, saneamos y direccionamos la arquitectura de tu plataforma software para que escales sin bugs, riesgos de seguridad ni sorpresas de infraestructura.',
    ctaPrimary: 'Solicitar Auditoría Técnica',
    ctaSecondary: 'Ver Entregable de Ejemplo',
  },
  metrics: [
    { value: '+100%', label: 'Alineación entre Negocio y Tecnología' },
    { value: '2 Semanas', label: 'Tiempo medio de Due Diligence Técnica' },
    { value: 'Cero', label: 'Deuda técnica ciega' },
  ],
  problem: {
    title: '¿La tecnología está empujando tu negocio o lo está frenando?',
    cards: [
      {
        title: 'Bugs recurrentes y despliegues inestables',
        description:
          'Falta de testing automatizado, pipelines de CI/CD abandonados y miedo a desplegar a producción.',
      },
      {
        title: 'Desalineación entre C-Level e Ingeniería',
        description:
          'Frustración por plazos poco claros y dificultad para traducir problemas técnicos en métricas de negocio.',
      },
      {
        title: 'Riesgos de seguridad ocultos',
        description: 'API keys expuestas, control de accesos débil y dependencias obsoletas.',
      },
      {
        title: 'Transición o salida del CTO',
        description:
          'Incertidumbre durante transiciones de liderazgo técnico o necesidad de dirección antes de contratar un CTO a tiempo completo.',
      },
    ],
  },
  catalog: {
    title: 'Soluciones diseñadas para proteger y escalar tu activo digital.',
    audit: {
      slug: 'neto / audit',
      name: 'Estabilidad y Due Diligence Técnica',
      description:
        'Un análisis exhaustivo de dos semanas sobre arquitectura, código, infraestructura cloud y procesos de ingeniería.',
      listLabel: 'Entregables',
      list: [
        'Informe completo de auditoría técnica',
        'Resumen ejecutivo con matriz de impacto de riesgos (Crítico C1-C4, Alto A1-A6)',
        'Roadmap priorizado a 90 días',
      ],
      price: 'Desde 2.500€ / $2.800 + IVA',
      priceNote: 'Pago único',
      cta: 'Encargar Auditoría',
    },
    cto: {
      slug: 'neto / cto',
      name: 'CTO Fraccional y Liderazgo Tecnológico',
      description:
        'Integración estratégica en tu equipo directivo (10-12h/semana) para ejecutar el roadmap tecnológico y gobernar la ingeniería.',
      listLabel: 'Incluye',
      list: [
        'Diseño de arquitectura escalable',
        'Cultura de ingeniería',
        'Contratación y onboarding técnico',
        'Optimización de costes cloud (FinOps)',
      ],
      price: 'Desde 3.500€ / $3.800 /mes + IVA',
      priceNote: 'Cuota mensual',
      cta: 'Reservar Plazo de CTO',
    },
  },
  auditPreview: {
    badge: 'Entregable de Ejemplo',
    title: 'Una vista previa de tu Informe de Auditoría Técnica.',
    subtitle:
      'Cada auditoría termina con un desglose priorizado y legible para negocio del riesgo, con una ruta clara de resolución.',
    riskMatrixTitle: 'Matriz de Impacto de Riesgos',
    riskMatrixActionLabel: 'Acción',
    risks: [
      {
        level: 'CRITICAL',
        finding: 'Credenciales/API keys activas expuestas en el repositorio git',
        action: 'Rotación inmediata y migración a variables de entorno.',
      },
      {
        level: 'HIGH',
        finding: 'Ausencia de pipeline de CI/CD y suites de test desactualizadas',
        action: 'Configuración de automatización con GitHub Actions.',
      },
      {
        level: 'MEDIUM',
        finding: 'Migraciones de base de datos sin versionar o librerías de terceros sin gestionar',
        action: 'Versionado de migraciones y auditoría de dependencias.',
      },
    ],
    roadmapTitle: 'Roadmap a 90 días',
    roadmap: [
      { period: 'Mes 1', label: 'Saneamiento' },
      { period: 'Meses 2-3', label: 'Estabilización y Escalado' },
    ],
  },
  contact: {
    badge: 'Contacto',
    title: 'Hablemos de tu arquitectura.',
    subtitle: 'Agenda una llamada de diagnóstico o envíanos los detalles de tu proyecto.',
    fields: {
      name: 'Nombre',
      email: 'Email corporativo',
      role: 'Rol',
      roleOptions: ['CEO', 'Founder', 'Inversor', 'Head of Tech'],
      rolePlaceholder: 'Selecciona tu rol',
      message: 'Mensaje / URL de la plataforma',
    },
    submit: 'Enviar Mensaje',
    scheduleNote: '¿Prefieres hablar en directo?',
    scheduleCta: 'Agendar Diagnóstico',
  },
  footer: {
    tagline: 'Ingeniería de software con rigor y transparencia.',
    privacy: 'Privacidad',
    terms: 'Términos',
  },
  languagePicker: {
    en: 'EN',
    es: 'ES',
  },
  legal: {
    privacy: {
      title: 'Política de Privacidad',
      lastUpdated: 'Última actualización: agosto de 2026',
      sections: [
        {
          heading: '1. Datos que recopilamos',
          body: 'Cuando contactas con neto.studio a través de este sitio web, recopilamos la información que nos facilitas directamente: nombre, email corporativo, rol y el contenido de tu mensaje. No utilizamos cookies de seguimiento ni analítica de terceros en este sitio.',
        },
        {
          heading: '2. Cómo la usamos',
          body: 'Usamos la información que envías exclusivamente para responder a tu consulta, preparar una propuesta o agendar una llamada de diagnóstico. No vendemos ni compartimos tus datos con terceros.',
        },
        {
          heading: '3. Conservación de datos',
          body: 'Conservamos la correspondencia y los registros de los proyectos durante el tiempo necesario para cumplir los fines descritos anteriormente y las obligaciones legales y contractuales correspondientes.',
        },
        {
          heading: '4. Contacto',
          body: 'Para cualquier solicitud relacionada con privacidad, escríbenos a través del formulario de contacto en nuestra página principal.',
        },
      ],
    },
    terms: {
      title: 'Términos y Condiciones',
      lastUpdated: 'Última actualización: agosto de 2026',
      sections: [
        {
          heading: '1. Servicios',
          body: 'neto.studio presta servicios de asesoría técnica, incluyendo auditorías de Due Diligence Técnica y colaboraciones de CTO Fraccional. El alcance concreto, los entregables y el calendario de cada proyecto se definen en una propuesta o contrato específico acordado con el cliente.',
        },
        {
          heading: '2. Condiciones del servicio',
          body: 'Los precios mostrados en este sitio web son orientativos y no incluyen los impuestos aplicables (IVA). Las condiciones finales, incluyendo el calendario de pagos y las condiciones de cancelación, se formalizan en el contrato de servicios firmado antes del inicio de cualquier proyecto.',
        },
        {
          heading: '3. Confidencialidad',
          body: 'Toda la información compartida durante una auditoría o proyecto de asesoría se trata como confidencial y, cuando es necesario, queda cubierta por un acuerdo de confidencialidad mutuo (NDA).',
        },
        {
          heading: '4. Contacto',
          body: 'Para cualquier duda sobre estos términos, escríbenos a través del formulario de contacto en nuestra página principal.',
        },
      ],
    },
  },
};
