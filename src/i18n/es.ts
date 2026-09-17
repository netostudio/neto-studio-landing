import type { Dictionary } from './types';

export const es: Dictionary = {
  meta: {
    title: 'neto.studio | Liderazgo Tecnológico y Rescate de Producto para Empresas',
    description:
      'CTO fraccional con capacidad real de ejecución. Auditamos, saneamos y dirigimos tu tecnología, sin informes que nadie ejecuta ni fábricas de código sin rumbo.',
  },
  nav: {
    services: 'Servicios',
    methodology: 'Metodología',
    about: 'Sobre Neto',
    scheduleCta: 'Agendar Diagnóstico',
  },
  hero: {
    title: 'Dirección tecnológica de nivel C-Suite. Con las manos en el código.',
    subtitle:
      'Estrategia de ingeniería que se traduce, desde el primer sprint, en código funcional y seguro, sin contratos rígidos.',
    ctaPrimary: 'Agendar Diagnóstico Técnico',
    ctaSecondary: 'Ver Ejemplo de Auditoría',
  },
  metrics: [
    { value: '+100%', label: 'Alineación entre negocio y tecnología' },
    { value: '2 semanas', label: 'Auditoría y hoja de ruta a 90 días' },
    { value: '0€', label: 'Equity cedido, nunca' },
  ],
  problem: {
    title: 'Ya conoces el problema. Llevas meses conviviendo con él.',
    cards: [
      {
        title: 'El consultor que solo entrega PDFs',
        description:
          'Diagnósticos brillantes, recomendaciones de arquitectura impecables... y ni una línea de código tocada. El informe se archiva y el bug sigue en producción.',
      },
      {
        title: 'Agencias externas sin control ni auditoría',
        description:
          'Facturas por horas que no cuadran con el avance real. Nadie audita el código que entregan ni sabe si la deuda técnica está creciendo.',
      },
      {
        title: 'MVPs que no aguantan usuarios reales',
        description:
          'Producto montado rápido, muchas veces con IA / vibe coding, que se cae en cuanto entra tráfico de verdad, justo cuando más importa que funcione.',
      },
      {
        title: 'El coste y la rigidez de un CTO full-time',
        description:
          '80.000€-150.000€ al año más equity, meses de proceso de contratación, y el riesgo de acertar o no con el perfil. Para muchas empresas, sencillamente no compensa todavía.',
      },
    ],
  },
  catalog: {
    title: 'Un modelo diseñado para el hueco entre el consultor y la fábrica de software.',
    audit: {
      slug: 'neto / audit',
      name: 'Auditoría Técnica & Rescue Plan',
      description:
        '1-2 semanas de revisión exhaustiva de código, infraestructura y seguridad, con hoja de ruta a 90 días y precio cerrado desde el primer día.',
      listLabel: 'Entregables',
      list: [
        'Auditoría de código, arquitectura e infraestructura',
        'Auditoría de seguridad y dependencias',
        'Matriz de riesgos priorizada (Crítico / Alto / Medio)',
        'Hoja de ruta a 90 días con acciones concretas',
      ],
      price: 'Desde 1.800€ + IVA',
      priceNote: 'Precio cerrado, pago único',
      cta: 'Encargar Auditoría',
    },
    retainer: {
      slug: 'neto / lead',
      name: 'Fractional CTO / Tech Lead as a Service',
      description:
        'Dirección técnica continua con criterio C-Suite y capacidad real de ejecución, integrada en tu equipo, sin contrato anual.',
      listLabel: 'Incluye',
      list: [
        'Arquitectura y estrategia técnica',
        'Liderazgo de sprints y del equipo de ingeniería',
        'Intervención directa en el código cuando hace falta (puntual)',
        'Representación técnica ante inversores / due diligence',
      ],
      price: 'Desde 3.000€/mes + IVA',
      priceNote: 'Suscripción mensual, 30 días de preaviso',
      cta: 'Reservar Plazo',
    },
    sprints: {
      slug: 'neto / rescue',
      name: 'Rescue Sprints',
      description:
        'Proyectos cerrados de 4 a 8 semanas para sanear deuda técnica crítica o estabilizar un producto que no aguanta la presión.',
      listLabel: 'Ideal para',
      list: [
        'Estabilizar un MVP construido con IA / vibe coding',
        'Sanear código heredado de una agencia externa',
        'Preparar la infraestructura antes de una ronda de inversión',
        'Resolver deuda técnica crítica antes de que escale el problema',
      ],
      price: 'Presupuesto cerrado tras diagnóstico',
      priceNote: 'Proyecto de 4-8 semanas',
      cta: 'Solicitar Presupuesto',
    },
  },
  auditPreview: {
    badge: 'Ejemplo de Entregable',
    title: 'Así es el informe de tu Auditoría Técnica.',
    subtitle:
      'Cada auditoría termina en una hoja de ruta priorizada y legible para negocio, no en un PDF que nadie vuelve a abrir.',
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
      { period: 'Mes 1', label: 'Saneamiento crítico' },
      { period: 'Mes 2', label: 'Control de la deuda técnica' },
      { period: 'Mes 3', label: 'Velocidad en la entrega y próximos pasos' },
    ],
  },
  guarantees: {
    title: 'Trabajamos con reglas claras, no con letra pequeña.',
    items: [
      {
        title: 'Precios transparentes y cerrados',
        description:
          'Nada de tarifas por hora que no sabes en qué se convierten a fin de mes. Sabes lo que pagas desde el primer día.',
      },
      {
        title: 'Sin permanencia ni equity',
        description:
          'Preaviso de 30 días, sin contratos anuales ni cesión de participaciones. Nos quedamos porque aportamos, no porque estés atrapado.',
      },
      {
        title: 'Tu código es tuyo desde el día 1',
        description:
          'Propiedad intelectual 100% transferida desde el inicio del proyecto. Y cuando tu equipo interno esté listo, diseñamos el plan de salida para que asuma el control sin fricción.',
      },
    ],
  },
  contact: {
    badge: 'Contacto',
    title: 'Hablemos.',
    subtitle: 'Agenda una llamada de diagnóstico técnico o cuéntanos qué necesitas resolver.',
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
    tagline: 'Dirección técnica y ejecución de ingeniería, sin letra pequeña.',
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
