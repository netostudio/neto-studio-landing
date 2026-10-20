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
    audit: 'Auditoría',
    about: 'Sobre Neto',
    scheduleCta: '¿Hablamos?',
  },
  hero: {
    title: ['Dirigimos tu tecnología.', 'Tú enfócate en tu negocio.'],
    subtitle:
      'Estrategia de nivel CTO y la ingeniería para llevarla a cabo. Sin contratos rígidos.',
    ctaPrimary: 'Agendar Diagnóstico Técnico',
    ctaSecondary: 'Ver Ejemplo de Auditoría',
  },
  metrics: [
    { value: 'Desde 3 días', label: 'Diagnóstico técnico con plan priorizado' },
    { value: 'Precios claros', label: 'Tarifa pactada de antemano, sin sorpresas' },
    { value: '30 días', label: 'De preaviso, sin permanencia' },
  ],
  problem: {
    title: 'Ya conoces el problema. Llevas meses conviviendo con él.',
    cards: [
      {
        title: 'El consultor que sólo entrega PDFs',
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
        'Tres niveles según lo que necesites saber: de un chequeo de pocos días a una due diligence completa antes de invertir o vender.',
      listLabel: 'Niveles',
      list: [
        'Chequeo técnico: 3-5 días',
        'Auditoría técnica completa: 2-3 semanas',
        'Preparación para due diligence: 3-4 semanas',
        'Riesgos priorizados y plan de acción en todos los niveles',
      ],
      price: 'Desde 1.500€ + IVA',
      priceNote: '3 niveles, precio cerrado',
      cta: 'Ver los 3 Niveles',
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
    roadmapTitle: 'Primeros 90 días de la hoja de ruta',
    roadmap: [
      { period: 'Mes 1', label: 'Saneamiento crítico' },
      { period: 'Mes 2', label: 'Estabilización y control de riesgos' },
      { period: 'Mes 3', label: 'Velocidad en la entrega y próximos pasos' },
    ],
  },
  auditPage: {
    meta: {
      title: 'Auditoría técnica para PYMEs y startups | neto.studio',
      description:
        'Tres niveles de auditoría técnica a precio cerrado: chequeo para PYMEs que dependen de un proveedor, auditoría completa de software propio y preparación técnica para inversión o venta.',
    },
    intro: {
      badge: 'Auditoría Técnica',
      title: 'Comprueba en qué estado está tu tecnología antes de decidir.',
      subtitle:
        'Tres niveles según lo que está en juego: entender qué te entrega tu proveedor, decidir el futuro de tu software o llegar preparado a una inversión o venta. Siempre con precio cerrado y un informe que dirección puede leer.',
      unsureNote: '¿No sabes cuál necesitas?',
      unsureCta: 'Te lo decimos en una llamada de 20 minutos',
    },
    tiers: {
      highlightLabel: 'Para software propio crítico',
      priceNote: '+ IVA, precio cerrado tras una llamada inicial',
      timelineLabel: 'Plazo',
      includesLabel: 'Incluye',
      deliverableLabel: 'Entregable',
      check: {
        slug: 'neto / check',
        name: 'Chequeo técnico',
        forWho:
          'Para PYMEs sin nadie técnico dentro que dependen de un proveedor o agencia y quieren entender su situación.',
        price: '1.500€-2.500€',
        timeline: '3-5 días',
        includes: [
          'Entrevista con dirección y con el proveedor o responsable técnico',
          'Inventario de sistemas, herramientas, proveedores y contratos: quién tiene el código y quién las contraseñas',
          'Análisis automático de dependencias, secretos y configuración de la nube',
          'Revisión de accesos y copias de seguridad',
        ],
        deliverable:
          'Informe de 3-5 páginas sin jerga (semáforo general, riesgos principales y qué hacer primero) y sesión de 45 minutos con dirección.',
        cta: 'Solicitar Chequeo',
      },
      full: {
        slug: 'neto / audit',
        name: 'Auditoría técnica completa',
        forWho:
          'Para PYMEs con software propio crítico y startups que quieren saber dónde están antes de invertir en una nueva fase.',
        price: '5.000€-8.000€',
        timeline: '2-3 semanas',
        includes: [
          'Revisión de 8 áreas: arquitectura, código, operaciones, seguridad, datos, propiedad intelectual y dependencias, equipo y procesos, y costes',
          'Revisión del contrato con el proveedor: propiedad del código, permanencia y qué pasa si se va',
          'Hallazgos priorizados por impacto y coste',
          'La decisión clave: mantener, rehacer, sustituir por un producto estándar o cambiar de proveedor',
        ],
        deliverable: 'Hoja de ruta a 6-12 meses y presentación a dirección.',
        cta: 'Solicitar Auditoría',
      },
      diligence: {
        slug: 'neto / diligence',
        name: 'Preparación para due diligence',
        forWho:
          'Para startups antes de una Serie A/B o PYMEs antes de vender o dar entrada a un socio.',
        price: '8.000€-12.000€',
        timeline: '3-4 semanas + seguimiento',
        includes: [
          'Revisión completa vista desde el lado del comprador o inversor: lo que encontraría y cómo afectaría al precio',
          'Plan de corrección priorizado para antes de salir al mercado',
          'Sala de datos técnica preparada: lista de documentos y qué falta',
          'Simulacro de entrevistas de due diligence con el CTO',
          'Revisión de seguimiento a los 60 días para comprobar qué se ha corregido',
        ],
        deliverable: 'Plan de corrección, sala de datos técnica lista y simulacro de due diligence.',
        cta: 'Solicitar Preparación',
      },
    },
    comparison: {
      title: 'Qué incluye cada nivel',
      featureLabel: 'Alcance',
      rows: [
        { label: 'Entrevista con dirección y proveedor', values: [true, true, true] },
        { label: 'Inventario de sistemas, accesos y copias de seguridad', values: [true, true, true] },
        { label: 'Análisis automático (dependencias, secretos, nube)', values: [true, true, true] },
        { label: 'Revisión a fondo de código y arquitectura', values: [false, true, true] },
        { label: 'Revisión del contrato con el proveedor', values: [false, true, true] },
        { label: 'Decisión mantener / rehacer / sustituir / cambiar', values: [false, true, true] },
        { label: 'Hoja de ruta', values: ['Qué hacer primero', '6-12 meses', 'Plan de corrección'] },
        { label: 'Vista del comprador o inversor', values: [false, false, true] },
        { label: 'Sala de datos técnica', values: [false, false, true] },
        { label: 'Simulacro de due diligence', values: [false, false, true] },
        { label: 'Seguimiento a los 60 días', values: [false, false, true] },
        { label: 'Plazo', values: ['3-5 días', '2-3 semanas', '3-4 semanas'] },
      ],
    },
    process: {
      title: 'Cómo trabajamos',
      steps: [
        {
          title: 'Llamada de 20 minutos',
          description: 'Entendemos tu situación y te recomendamos el nivel que tiene sentido. Si ninguno lo tiene, te lo decimos.',
        },
        {
          title: 'Propuesta cerrada y NDA',
          description: 'Precio fijo dentro del rango, alcance y calendario por escrito. Firmamos confidencialidad antes de ver nada.',
        },
        {
          title: 'Accesos y revisión',
          description: 'Nos das acceso de sólo lectura y hablamos con quien haga falta. Coordinamos con tu proveedor sin interrumpir su trabajo.',
        },
        {
          title: 'Informe y sesión con dirección',
          description: 'Te presentamos los resultados en lenguaje de negocio y respondemos a todas las preguntas.',
        },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          question: '¿Por qué un rango de precio y no una cifra?',
          answer:
            'Depende del tamaño de tus sistemas y del número de proveedores. Tras la llamada inicial te damos un precio cerrado dentro del rango, y ese es el que pagas.',
        },
        {
          question: '¿Necesitáis acceso a nuestro código y sistemas?',
          answer:
            'Sí, en modo de sólo lectura y bajo acuerdo de confidencialidad. Si hoy no sabes quién tiene esos accesos, averiguarlo ya es parte del trabajo.',
        },
        {
          question: '¿Y si mi proveedor no colabora?',
          answer:
            'Planteamos la auditoría como una revisión, no como un juicio, y la mayoría de proveedores colabora. Si alguno no lo hace, eso también es un hallazgo importante para ti.',
        },
        {
          question: '¿Puedo empezar por el Chequeo y ampliar después?',
          answer:
            'Sí. Es el punto de partida habitual: si el Chequeo detecta riesgos que merecen más análisis, la Auditoría Completa parte de lo ya hecho.',
        },
        {
          question: '¿Qué pasa después de la auditoría?',
          answer:
            'El informe es tuyo y puedes ejecutarlo con quien quieras. Si prefieres que lo hagamos nosotros, podemos seguir como Fractional CTO o con un Proyecto de Rescate.',
        },
      ],
    },
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
      service: 'Servicio de interés (opcional)',
      servicePlaceholder: 'Selecciona un servicio',
      serviceOptions: [
        { value: 'audit-check', label: 'Chequeo técnico' },
        { value: 'audit-full', label: 'Auditoría técnica completa' },
        { value: 'audit-diligence', label: 'Preparación para due diligence' },
        { value: 'fractional-cto', label: 'Fractional CTO' },
        { value: 'rescue', label: 'Proyecto de Rescate' },
        { value: 'unsure', label: 'Aún no lo sé' },
      ],
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
    scheduleCta: 'Agendar Llamada',
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
  notFound: {
    title: 'Página no encontrada',
    description: 'La página que buscas no existe o ha cambiado de dirección.',
    cta: 'Volver al inicio',
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
          body: 'Para cualquier solicitud relacionada con privacidad, escríbenos a info@neto.studio.',
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
          body: 'Para cualquier duda sobre estos términos, escríbenos a info@neto.studio.',
        },
      ],
    },
  },
};
