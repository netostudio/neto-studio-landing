import type { Dictionary } from './types';

export const es: Dictionary = {
  meta: {
    ogImageAlt: 'neto.studio: liderazgo tecnológico y rescate de producto para empresas',
    title: 'CTO a tiempo parcial para PYMEs | neto.studio',
    description:
      'Fractional CTO para PYMEs: dirección técnica a tiempo parcial con capacidad real de ejecución. Auditamos, saneamos y dirigimos tu tecnología, sin informes que nadie ejecuta ni fábricas de código sin rumbo.',
  },
  nav: {
    services: 'Servicios',
    methodology: 'Metodología',
    about: 'Sobre Neto',
    scheduleCta: 'Agendar Diagnóstico',
  },
  hero: {
    title: ['Dirigimos tu tecnología.', 'Tú enfócate en tu negocio.'],
    subtitle:
      'Estrategia de nivel CTO y la ingeniería para llevarla a cabo. Sin contratos rígidos.',
    ctaPrimary: 'Agendar Diagnóstico Técnico',
    ctaSecondary: 'Ver Ejemplo de Auditoría',
  },
  metrics: [
    { value: '2 semanas', label: 'Auditoría y hoja de ruta a 90 días' },
    { value: 'Precios claros', label: 'Tarifa pactada de antemano, sin sorpresas' },
    { value: '30 días', label: 'De preaviso, sin permanencia' },
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
          'Facturas por horas que no cuadran con el avance real. Nadie revisa el código que entregan ni sabe si los problemas se están acumulando.',
      },
      {
        title: 'Software que falla cuando más se usa',
        description:
          'Aplicaciones hechas deprisa, a veces generadas con IA sin supervisión técnica, que se caen en cuanto crecen los clientes o los pedidos, justo cuando más importa que funcionen.',
      },
      {
        title: 'El coste y la rigidez de un director técnico en plantilla',
        description:
          '80.000€-150.000€ al año de salario, meses de proceso de selección y el riesgo de acertar o no con el perfil. Para la mayoría de PYMEs, sencillamente no compensa.',
      },
    ],
  },
  catalog: {
    title: 'Un modelo diseñado para el hueco entre el consultor y la fábrica de software.',
    audit: {
      slug: 'neto / audit',
      name: 'Auditoría Técnica + Plan de Acción',
      description:
        '1-2 semanas de revisión exhaustiva de código, infraestructura, equipo y seguridad, con hoja de ruta a 90 días y precio cerrado desde el primer día.',
      listLabel: 'Entregables',
      list: [
        'Auditoría de código, arquitectura e infraestructura',
        'Auditoría de seguridad y dependencias',
        'Matriz de riesgos priorizada (Crítico / Alto / Medio / Bajo)',
        'Hoja de ruta a 90 días con acciones concretas',
      ],
      price: 'Desde 1.800€ + IVA',
      priceNote: 'Precio cerrado, pago único',
      cta: 'Encargar Auditoría',
    },
    retainer: {
      slug: 'neto / lead',
      name: 'Fractional CTO',
      description:
        'Dirección técnica continua, con visión de negocio y capacidad real de ejecución, integrada en tu equipo y sin contrato anual.',
      listLabel: 'Incluye',
      list: [
        'Arquitectura y estrategia técnica',
        'Coordinación del equipo técnico y de los proveedores externos',
        'Intervención directa en el código cuando hace falta (puntual)',
        'Interlocución técnica con clientes, proveedores y socios',
      ],
      price: 'Desde 3.000€/mes + IVA',
      priceNote: 'Suscripción mensual, 30 días de preaviso',
      cta: 'Reservar Plazo',
    },
    sprints: {
      slug: 'neto / rescue',
      name: 'Proyectos de Rescate',
      description:
        'Proyectos cerrados de 4 a 8 semanas para resolver problemas técnicos críticos o estabilizar un sistema que no aguanta la presión.',
      listLabel: 'Ideal para',
      list: [
        'Sanear código heredado de una agencia externa',
        'Preparar los sistemas para un crecimiento importante o un gran cliente',
        'Corregir fallos de fondo antes de que se conviertan en un problema caro',
        'Estabilizar software desarrollado con IA sin supervisión técnica',
      ],
      price: 'Precio cerrado tras diagnóstico',
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
        levelLabel: 'Crítico',
        finding: 'Credenciales/API keys activas expuestas en el repositorio git',
        action: 'Rotación inmediata y migración a variables de entorno.',
      },
      {
        level: 'HIGH',
        levelLabel: 'Alto',
        finding: 'Ausencia de pipeline de CI/CD y suites de test desactualizadas',
        action: 'Configuración de automatización con GitHub Actions.',
      },
      {
        level: 'MEDIUM',
        levelLabel: 'Medio',
        finding: 'Migraciones de base de datos sin versionar o librerías de terceros sin gestionar',
        action: 'Versionado de migraciones y auditoría de dependencias.',
      },
      {
        level: 'LOW',
        levelLabel: 'Bajo',
        finding: 'Documentación técnica inexistente o desactualizada',
        action: 'Documentación de arquitectura y guía de puesta en marcha.',
      },
    ],
    roadmapTitle: 'Roadmap a 90 días',
    roadmap: [
      { period: 'Mes 1', label: 'Saneamiento crítico' },
      { period: 'Mes 2', label: 'Estabilización y control de riesgos' },
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
        title: 'Sin permanencia',
        description:
          'Preaviso de 30 días, sin contratos anuales ni dependencias ocultas. Nos quedamos porque aportamos, no porque estés atrapado.',
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
      roleOptions: [
        'Gerente / Director General',
        'Propietario / Socio',
        'Dirección de Operaciones o Finanzas',
        'Responsable de IT',
      ],
      rolePlaceholder: 'Selecciona tu rol',
      message: 'Mensaje / URL de la plataforma',
      privacyConsent: 'He leído y acepto la',
      privacyLink: 'política de privacidad',
    },
    submit: 'Enviar Mensaje',
    sending: 'Enviando...',
    status: {
      success: '¡Gracias! Hemos recibido tu mensaje y te responderemos lo antes posible.',
      error: 'No hemos podido enviar tu mensaje. Inténtalo de nuevo en unos minutos.',
      rateLimited: 'Demasiados intentos. Espera un minuto y vuelve a intentarlo.',
    },
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
      description: 'Cómo neto.studio recoge, usa y conserva los datos que envías a través de esta web.',
      lastUpdated: 'Última actualización: octubre de 2026',
      sections: [
        {
          heading: '1. Datos que recopilamos',
          body: 'Cuando contactas con neto.studio a través de este sitio web, recopilamos la información que nos facilitas directamente: nombre, email corporativo, rol y el contenido de tu mensaje. No utilizamos cookies de seguimiento ni analítica de terceros en este sitio.',
        },
        {
          heading: '2. Cómo la usamos',
          body: 'Usamos la información que envías exclusivamente para responder a tu consulta, preparar una propuesta o agendar una llamada de diagnóstico. La base legal de este tratamiento es el consentimiento que nos das al enviar el formulario. Nunca vendemos tus datos. Para gestionar tu consulta nos apoyamos en proveedores que actúan como encargados del tratamiento por cuenta nuestra: Make (Celonis), que recibe el envío del formulario, y Holded, que usamos para gestionar los contactos de clientes.',
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
      description: 'Condiciones que regulan el uso de la web de neto.studio y de sus servicios de asesoría.',
      lastUpdated: 'Última actualización: agosto de 2026',
      sections: [
        {
          heading: '1. Servicios',
          body: 'neto.studio presta servicios de asesoría técnica, incluyendo auditorías técnicas y servicios de dirección técnica a tiempo parcial. El alcance concreto, los entregables y el calendario de cada proyecto se definen en una propuesta o contrato específico acordado con el cliente.',
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
