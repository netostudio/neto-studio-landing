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
    ctaSecondary: 'Ver las Auditorías',
  },
  metrics: [
    { value: '2 semanas', label: 'Auditoría con plan priorizado' },
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
          '80.000-150.000 € al año de salario, meses de proceso de selección y el riesgo de acertar o no con el perfil. Para la mayoría de PYMEs, sencillamente no compensa.',
      },
    ],
  },
  catalog: {
    title: 'Un modelo diseñado para el hueco entre el consultor y la fábrica de software.',
    audit: {
      slug: 'neto / audit',
      name: 'Auditoría + Plan de Acción',
      description:
        'Para saber qué tecnología tiene tu empresa, qué riesgos corre y qué hacer primero. Dos auditorías con precio cerrado, según tengas o no una aplicación hecha a medida.',
      listLabel: 'Dos auditorías',
      list: [
        'Sistemas y proveedores, sin código propio: unas 2 semanas',
        'Software, con código propio: unas 3 semanas',
        'Informe sin jerga, riesgos priorizados y plan a 90 días',
        'Inventario de sistemas que se queda en tu empresa',
      ],
      price: '2.400 € o 5.000 € + IVA',
      priceNote: '2 auditorías, precio cerrado',
      cta: 'Ver las 2 Auditorías',
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
      price: 'Desde 3.000 €/mes + IVA',
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
  auditPage: {
    meta: {
      title: 'Auditoría tecnológica para PYMEs | neto.studio',
      description:
        'Dos auditorías con precio cerrado para PYMEs sin equipo técnico: sistemas y proveedores (2.400 € + IVA) y software hecho a medida (5.000 € + IVA). Informe sin jerga y plan a 90 días.',
    },
    intro: {
      badge: 'Auditoría',
      title: 'Descubre qué tecnología tiene tu empresa antes de decidir.',
      subtitle:
        'Para PYMEs sin nadie técnico dentro. Antes de una inversión en tecnología, cuando se va una persona clave, si dudas de un proveedor o si los costes no paran de crecer: te decimos qué tienes, qué riesgos corres y qué hacer primero, en un informe que la dirección puede leer.',
      guarantees: ['Precio cerrado y público', 'NDA antes de ver nada', 'Acceso de solo lectura', 'El informe es tuyo'],
      unsureNote: '¿No sabes cuál necesitas?',
      unsureCta: 'Te lo decimos en una llamada de 20 minutos',
    },
    tiers: {
      priceNote: '+ IVA, precio cerrado',
      timelineLabel: 'Plazo',
      includesLabel: 'Qué se revisa',
      methodLabel: 'Cómo se hace',
      deliverablesLabel: 'Qué recibes',
      systems: {
        slug: 'neto / systems',
        name: 'Auditoría de sistemas y proveedores',
        forWho:
          'Sin código propio. Para empresas que trabajan con plataformas de terceros (ERP, tienda online, CRM, herramientas en la nube) conectadas entre sí, sin una aplicación hecha a medida de la que dependa el negocio.',
        price: '2.400 €',
        timeline: 'Unas 2 semanas desde el arranque, según las agendas para las entrevistas',
        includes: [
          'Mapa de sistemas: qué tienes y para qué sirve cada cosa',
          'Propiedad y accesos: a nombre de quién están el dominio, las cuentas y las suscripciones, y quién es administrador',
          'Proveedores y contratos: permanencias, condiciones de salida y propiedad de los datos',
          'Integraciones y datos: cómo pasan los datos de un sistema a otro y quién mantiene esas conexiones',
          'Continuidad: copias de seguridad, puntos únicos de fallo y dependencia de una persona',
          'Seguridad básica: doble factor, cuentas de exempleados y permisos',
          'Costes: cuánto se paga por cada herramienta y licencias sin uso',
          'Encaje con el negocio: procesos que siguen en papel o Excel, y si las inversiones previstas tienen sentido',
        ],
        method:
          'Sin leer código. Entrevistas con la dirección, con 1-2 personas clave y con el proveedor principal. Revisión de contratos y facturas. Sesiones de pantalla compartida con quien administra cada plataforma, así que no hace falta darnos contraseñas.',
        deliverables: [
          'Informe de 6-10 páginas sin jerga: semáforo general y por área, las tres decisiones de la dirección, mapa de sistemas, qué está bien, riesgos priorizados con coste orientativo, recomendación sobre cada proveedor (mantener, renegociar o cambiar) y plan a 90 días',
          'Inventario de sistemas en hoja de cálculo, que se queda en tu empresa y puedes mantener',
          'Sesión de presentación de 60 minutos con la dirección',
          'Llamada de seguimiento de 30 minutos a los 30 días',
        ],
        cta: 'Solicitar Auditoría de Sistemas',
      },
      software: {
        slug: 'neto / software',
        name: 'Auditoría de software',
        forWho:
          'Con código propio. Para empresas cuyo negocio depende de una aplicación hecha a medida, por una agencia, un freelance o con IA.',
        price: '5.000 €',
        timeline: 'Unas 3 semanas desde el arranque',
        includes: [
          'Todo lo de la auditoría de sistemas y proveedores',
          'Arquitectura de la aplicación: cómo está construida y si aguanta lo que viene',
          'Calidad del código y facilidad para mantenerlo',
          'Seguridad de la aplicación',
          'Dependencias: las piezas de terceros sobre las que está construida',
          'Despliegue y copias de seguridad',
          'La decisión clave: mantener, reconstruir, sustituir por un producto estándar o cambiar de proveedor',
        ],
        method:
          'Lo mismo que en la auditoría de sistemas y proveedores, más acceso de solo lectura a la aplicación y a su código.',
        deliverables: [
          'El mismo informe sin jerga, con la revisión de la aplicación y la recomendación sobre su futuro',
          'Inventario de sistemas en hoja de cálculo, que se queda en tu empresa y puedes mantener',
          'Sesión de presentación de 60 minutos con la dirección',
          'Llamada de seguimiento de 30 minutos a los 30 días',
        ],
        cta: 'Solicitar Auditoría de Software',
      },
      boundary: {
        title: '¿Cuál te corresponde?',
        body: [
          'Si tu negocio depende de una aplicación hecha a medida, la auditoría de software.',
          'Si solo hay integraciones o scripts sueltos, la de sistemas y proveedores: esas piezas se inventarían y se comprueba quién las mantiene, pero no se lee su código.',
          'Si no lo tienes claro, te lo decimos en la llamada inicial.',
        ],
      },
    },
    comparison: {
      title: 'Qué incluye cada auditoría',
      featureLabel: 'Alcance',
      rows: [
        { label: 'Mapa de sistemas', values: [true, true] },
        { label: 'Propiedad y accesos', values: [true, true] },
        { label: 'Proveedores y contratos', values: [true, true] },
        { label: 'Integraciones y datos', values: [true, true] },
        { label: 'Continuidad y copias de seguridad', values: [true, true] },
        { label: 'Seguridad básica', values: [true, true] },
        { label: 'Costes y licencias sin uso', values: [true, true] },
        { label: 'Encaje con el negocio', values: [true, true] },
        { label: 'Revisión de la aplicación hecha a medida (solo lectura)', values: [false, true] },
        { label: 'Decisión mantener / reconstruir / sustituir / cambiar de proveedor', values: [false, true] },
        { label: 'Informe sin jerga y plan a 90 días', values: [true, true] },
        { label: 'Inventario de sistemas en hoja de cálculo', values: [true, true] },
        { label: 'Presentación de 60 minutos con la dirección', values: [true, true] },
        { label: 'Seguimiento a los 30 días', values: [true, true] },
        { label: 'Plazo', values: ['Unas 2 semanas', 'Unas 3 semanas'] },
        { label: 'Precio', values: ['2.400 € + IVA', '5.000 € + IVA'] },
      ],
      included: 'Incluido',
      notIncluded: 'No incluido',
    },
    process: {
      title: 'Cómo funciona',
      steps: [
        {
          title: 'Llamada de 20 minutos',
          description:
            'Entendemos tu situación y te decimos qué auditoría encaja. Si no encaja ninguna, también te lo decimos.',
        },
        {
          title: 'Propuesta y NDA',
          description:
            'Precio cerrado, alcance y plazos por escrito. Firmamos un acuerdo de confidencialidad (NDA) antes de ver nada. Se paga el 50 % para empezar.',
        },
        {
          title: 'Arranque',
          description: 'Reunión con la dirección y un cuestionario corto en lenguaje de negocio, no técnico.',
        },
        {
          title: 'Entrevistas y revisión',
          description:
            'Hablamos con quien haga falta, también con tu proveedor, sin entorpecer su trabajo. Siempre con acceso de solo lectura.',
        },
        {
          title: 'Presentación',
          description:
            'Presentamos los resultados a la dirección. El 50 % restante se paga antes de la sesión, y el informe y el inventario se entregan al recibirlo.',
        },
        {
          title: 'Seguimiento a 30 días',
          description: 'Revisamos juntos qué se ha hecho y qué se ha atascado.',
        },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          question: '¿Cuál de las dos necesito?',
          answer:
            'Si tu negocio depende de una aplicación hecha a medida, la auditoría de software. Si solo hay plataformas de terceros con integraciones o scripts sueltos, la de sistemas y proveedores: esas piezas se inventarían y se comprueba quién las mantiene, pero no se lee su código. Si no lo tienes claro, lo vemos en la llamada inicial.',
        },
        {
          question: '¿Por qué un precio fijo y no a medida?',
          answer:
            'Porque el alcance de cada auditoría está definido de antemano: las mismas áreas, los mismos entregables y el mismo plazo. Sabes lo que vas a pagar antes de empezar.',
        },
        {
          question: '¿Cómo se paga?',
          answer: 'El 50 % al empezar y el 50 % restante antes de la presentación de resultados.',
        },
        {
          question: '¿Necesitáis acceso a nuestros sistemas?',
          answer:
            'Solo de lectura y bajo acuerdo de confidencialidad. En la auditoría de sistemas y proveedores casi todo se hace en sesiones de pantalla compartida con quien administra cada plataforma, así que no hace falta darnos contraseñas.',
        },
        {
          question: '¿Y si mi proveedor no colabora?',
          answer:
            'Planteamos la auditoría como una revisión, no como un juicio, y la mayoría de proveedores colabora. Si alguno no lo hace, eso también es un hallazgo importante para ti.',
        },
        {
          question: '¿Puedo empezar por la auditoría de sistemas y proveedores y ampliar después?',
          answer:
            'Sí. Si aparece una aplicación que merece una revisión a fondo, puedes ampliar a la auditoría de software: partimos del trabajo ya hecho y te descontamos los 2.400 € que ya has pagado.',
        },
        {
          question: '¿Qué pasa después de la auditoría?',
          answer:
            'El informe y el inventario son tuyos y puedes llevar a cabo el plan con quien quieras: las recomendaciones no dependen de quién las ejecute. Si lo prefieres, podemos acompañarte con dirección técnica continua o con la ejecución.',
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
        { value: 'audit-check', label: 'Auditoría de sistemas y proveedores' },
        { value: 'audit-full', label: 'Auditoría de software' },
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
