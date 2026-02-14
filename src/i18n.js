import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      contact: "Contact",
      jobTitle: "Full Stack Developer",
      about: {
        heading: "About Me",
        body1: "Hi, I’m ",
        body2:
          "a full stack developer and content enthusiast based in Murcia, Spain. With a background in photography and e-commerce, I bring a visual and user-centric mindset to every project I work on - building clean, responsive, and purposeful digital experiences with modern tools like React, Next.js, Tailwind CSS, and Firebase.",
        body3:
          "My journey into tech was shaped by a love of visual storytelling and a belief that good design and usability go hand in hand. During my time as an e-commerce web administrator, I helped streamline content workflows, enhance visual presentation, and improve product listing efficiency - supporting a major increase in online sales during the store’s early growth phase. That experience, combined with my growing knowledge of SEO, analytics, and content strategy, gives me a holistic view of how design, code, and engaging copy can work together to drive impact.",
        body4:
          "Outside of development, ’ve been exploring writing as a creative outlet - developing a small blog focused on plant-based living and working on a children’s story that encourages curiosity and care for the natural world.",
        body5:
          "I’m especially drawn to purpose-led teams and organisations focused on sustainability, ethical design, or education. Whether through thoughtful user interfaces or meaningful written content, I aim to contribute to work that creates lasting, positive impact—and I’m excited to continue growing in that direction.",
        cv: "CV right here",
      },
      projectRow: {
        live: "See Live",
        code: "View Code",
      },
      flashFluent: {
        title: "FlashFluent Flashcard App",
        heading1: "Firebase Integration",
        body1:
          "Secure authentication and real-time CRUD operations with Firestore for dynamic content management.",
        heading2: "Efficient Data Syncing",
        body2:
          "Implements debouncing and a 90-second interval for robust data synchronisation, optimising server interactions.",
        heading3: "Streak Functionality & Context API",
        body3:
          "Tracks user engagement with a motivational streak system and utilises React Context for streamlined state management.",
      },
      amazon: {
        title: "Amazon Redesign Webscraper",
        heading1: "Advanced Web Scraping Integration",
        body1:
          "Utilises Oxylabs to scrape ecommerce data directly from Amazon, ensuring up-to-date product information and search functionality, integrated seamlessly with Next.js 14 for optimal performance.",
        heading2: "Enhanced State Management with Zustand",
        body2:
          "Leverages Zustand for efficient global state management across the application, allowing for a smooth and responsive user interface that handles complex state transitions effortlessly.",
        heading3: "Optimised Server-Side Caching",
        body3:
          "Implements server-side data caching techniques in Next.js 14 to speed up content delivery, enhancing the overall user experience with faster load times and reduced server load.",
        heading4: "Dynamic Routing and UX Design",
        body4:
          "Employs advanced Next.js routing capabilities, including parallel and intercepting routes, to ensure a seamless shopping experience, allowing users to manage their baskets without interrupting their browsing flow.",
      },
      botify: {
        title: "botify Chatbot Service",
        heading1: "Real-Time AI Conversations Powered by OpenAI",
        body1:
          "Enables seamless 1-on-1 chat with AI agents, leveraging the OpenAI Completions API to provide real-time, intelligent responses to user queries. This dynamic interaction enhances user engagement by offering immediate assistance.",
        heading2: "Advanced GraphQL Integration with StepZen",
        body2:
          "Utilizes StepZen to introspect and generate a GraphQL API from a PostgreSQL database, hosted on Neon. This ensures efficient and powerful data querying for managing chatbot prompts, admin details, and chat history.",
        heading3: "Robust Authentication with Clerk and Google OAuth",
        body3:
          "Integrates Clerk Authentication to support secure user login, including Google OAuth, making it easy for admins to access their dashboard and manage chatbot creation, prompt editing, and chat history in a streamlined manner.",
        heading4: "Optimized User Interface with Shadcn & Tailwind CSS",
        body4:
          "Combines the power of Shadcn components and Tailwind CSS to deliver a sleek, responsive, and visually appealing user experience. The frontend design is further enhanced with Next.js Server and Client Components for optimal performance.",
      },
      chatToPdf: {
        title: "Chat To PDF",
        heading1: "Real-Time Document Chat Powered by OpenAI and Langchain",
        body1:
          "Enables users to engage in seamless 1-on-1 conversations with documents, leveraging Pinecone for storing vector embeddings and Langchain with OpenAI for intelligent responses. This creates a dynamic interaction, allowing users to query and retrieve relevant information from uploaded PDFs.",
        heading2: "Secure Document Upload and Storage with Firebase",
        body2:
          "Utilizes react-dropzone for effortless document upload, with Firebase handling secure file storage. This ensures a smooth and safe experience for managing user-uploaded PDFs and retrieving their contents during chat interactions.",
        heading3: "Robust Authentication and Payments Integration",
        body3:
          "Integrates Clerk Authentication for secure user login, including Stripe payments for premium features. A custom hook handles Stripe webhooks, ensuring seamless and secure payment transactions while managing user subscriptions.",
      },
      techInfo: {
        drag: "Drag a logo here to display more tech info...",
        drop: "Drop logo here to display more tech info...",
        react: {
          heading1: "Component-Based Architecture",
          body1:
            "Facilitates building reusable UI components that manage their state, making it easy to create dynamic user interfaces.",
          heading2: "Virtual DOM",
          body2:
            "Optimises rendering processes to enhance performance, ensuring smooth updates and faster UI response.",
          heading3: "Extensive Ecosystem",
          body3:
            "Supported by a vast range of tools and libraries, including server-side rendering, state management, and testing utilities.",
        },
        nextjs: {
          heading1: "Server-Side Rendering (SSR)",
          body1:
            "Boosts performance and SEO by pre-rendering pages on the server, providing faster page loads and initial rendering.",
          heading2: "Static Site Generation (SSG)",
          body2:
            "Supports generating HTML at build time, enabling fast page loads and seamless integration with CDNs.",
          heading3: "API Routes",
          body3:
            "Simplifies backend development by allowing the creation of API endpoints as serverless functions directly within the Next.js project.",
        },
        typescript: {
          heading1: "Strongly Typed JavaScript",
          body1:
            "TypeScript extends JavaScript by adding type definitions, making it easier to write more robust and maintainable code. This strong typing allows developers to catch errors at compile time, long before the code is executed.",
          heading2: "Enhanced Code Quality and Productivity",
          body2:
            "With its advanced features like enums, interfaces, and generics, TypeScript enhances code quality and developer productivity, facilitating large-scale project development and collaboration among teams.",
          heading3: "Seamless Integration",
          body3:
            "TypeScript integrates seamlessly with JavaScript, and its compatibility with existing JavaScript libraries and frameworks makes it an ideal choice for developing complex front-end and server-side applications.",
        },
        firebase: {
          heading1: "Comprehensive App Development Platform",
          body1:
            "Offers a suite of tools including hosting, databases, analytics, and more, to build and scale apps efficiently.",
          heading2: "Real-Time Database & Firestore",
          body2:
            "Enables real-time data syncing across all clients instantly, ideal for dynamic and collaborative applications.",
          heading3: "Authentication and Security",
          body3:
            "Supports authentication with various providers and robust access control capabilities for secure app development.",
        },
        tailwind: {
          heading1: "Utility-First",
          body1:
            "Offers a highly customisable, low-level CSS framework that promotes rapid UI development without leaving your HTML.",
          heading2: "Responsive Design",
          body2:
            "Built-in utilities for responsive design allow for mobile-first development and easy screen size adjustments.",
          heading3: "Plugin System",
          body3:
            "Extensible architecture supports adding custom functionality and integrating with third-party tools.",
        },
        redux: {
          heading1: "Predictable State Container",
          body1:
            "Manages and centralises application state, facilitating consistent behavior across JavaScript apps.",
          heading2: "DevTools",
          body2:
            "Enhanced development experience with features like time-travel debugging and state traceability.",
          heading3: "Community and Middleware Support",
          body3:
            "Extensive middleware support and a large community provide robust solutions for complex state management scenarios.",
        },
        reactRouter: {
          heading1: "Declarative Routing",
          body1:
            "Intuitive and dynamic routing API that manages navigation and view organization in React applications.",
          heading2: "Dynamic Route Matching",
          body2:
            "Lazily loads component trees on demand as routes are accessed, improving performance.",
          heading3: "Hooks API",
          body3:
            "Provides hooks for managing navigation and routing state directly from function components.",
        },
        graphQL: {
          heading1: "Declarative Data Fetching",
          body1:
            "Allows clients to request specific data in a structured manner, enabling more precise and efficient data fetching compared to traditional REST APIs.",
          heading2: "Single Endpoint Querying",
          body2:
            "Uses a single endpoint to send requests, which returns only the required data, minimizing over-fetching and under-fetching problems.",
          heading3: "Strongly Typed Schema",
          body3:
            "Defines a strongly typed schema that specifies the structure of the API, ensuring that both clients and servers know exactly what data is available and how to interact with it.",
        },
      },
      footer: "Copyright of Scott Martin 2024. All rights reserved",
    },
  },
  es: {
    translation: {
      contact: "Contacto",
      jobTitle: "Desarrollador Full Stack",
      about: {
        heading: "Sobre Mí",
        body1: "Hola, soy ",
        body2:
          "Desarrollador full stack y entusiasta del contenido, con base en Murcia, España. Con una formación en fotografía y comercio electrónico, aporto una mentalidad visual y centrada en el usuario a cada proyecto en el que trabajo, creando experiencias digitales limpias, responsivas y con propósito utilizando herramientas modernas como React, Next.js, Tailwind CSS y Firebase.",

        body3:
          "Mi camino hacia la tecnología estuvo guiado por mi pasión por la narrativa visual y la convicción de que el buen diseño y la usabilidad van de la mano. Durante mi etapa como administrador web de e-commerce, ayudé a optimizar los flujos de trabajo de contenido, mejorar la presentación visual y aumentar la eficiencia en la publicación de productos, contribuyendo a un notable crecimiento en las ventas online durante la fase inicial de la tienda. Esa experiencia, junto con mis conocimientos crecientes en SEO, analítica y estrategia de contenido, me brinda una visión integral de cómo el diseño, el código y un texto atractivo pueden unirse para generar impacto.",

        body4:
          "Fuera del desarrollo, he estado explorando la escritura como vía creativa: desarrollando un pequeño blog centrado en el estilo de vida basado en plantas y trabajando en un cuento infantil que fomente la curiosidad y el respeto por el mundo natural.",

        body5:
          "Me atraen especialmente los equipos y organizaciones con propósito, centrados en la sostenibilidad, el diseño ético o la educación. Ya sea mediante interfaces de usuario bien pensadas o contenido escrito con intención, mi objetivo es contribuir a trabajos que generen un impacto positivo y duradero - y me entusiasma seguir creciendo en esa dirección.",
        cv: "CV justo aquí",
      },
      projectRow: {
        live: "Ver en directo",
        code: "Ver el código",
      },
      flashFluent: {
        title: "FlashFluent: Aplicación de Tarjetas Flash",
        heading1: "Integración de Firebase",
        body1:
          "Autenticación segura y operaciones CRUD en tiempo real con Firestore para la gestión dinámica de contenido.",
        heading2: "Sincronización de datos eficiente",
        body2:
          "Implementa debounce y un intervalo de 90 segundos para una sincronización de datos robusta, optimizando las interacciones con el servidor.",
        heading3: "Funcionalidad de racha y Context API",
        body3:
          "Rastrea el interacción del usuario con un sistema de rachas motivacionales y utiliza React Context para una gestión de estado simplificada.",
      },
      amazon: {
        title: "Amazon Rediseño Webscraper",
        heading1: "Integración Avanzada de Web Scraping",
        body1:
          "Utiliza Oxylabs para extraer datos de ecommerce directamente de Amazon, asegurando información actualizada de productos y funcionalidad de búsqueda, integrada perfectamente con Next.js 14 para un rendimiento óptimo.",
        heading2: "Gestión de Estado Mejorada con Zustand",
        body2:
          "Utiliza Zustand para una gestión eficiente del estado global en toda la aplicación, lo que permite una interfaz de usuario fluida y receptiva que maneja transiciones de estado complejas sin esfuerzo.",
        heading3:
          "Optimización del almacenamiento en caché del lado del servidor",
        body3:
          "Implementa técnicas de almacenamiento en caché de datos del lado del servidor en Next.js 14 para acelerar la entrega de contenido, mejorando la experiencia del usuario en general con tiempos de carga más rápidos y una carga del servidor reducida.",
        heading4: "Enrutamiento Dinámico y Diseño de UX",
        body4:
          "Emplea capacidades avanzadas de enrutamiento de Next.js, incluidas rutas paralelas e interceptadas, para garantizar una experiencia de compra fluida, permitiendo a los usuarios gestionar sus cestas sin interrumpir su flujo de navegación.",
      },
      botify: {
        title: "botify: Servicio de Chatbot",
        heading1:
          "Conversaciones de IA en Tiempo Real con Tecnología de OpenAI",
        body1:
          "Permite chats fluidos 1 a 1 con agentes de IA, aprovechando la API de OpenAI Completions para proporcionar respuestas inteligentes en tiempo real a las consultas de los usuarios. Esta interacción dinámica mejora el compromiso del usuario al ofrecer asistencia inmediata.",
        heading2: "Integración Avanzada de GraphQL con StepZen",
        body2:
          "Utiliza StepZen para inspeccionar y generar una API GraphQL a partir de una base de datos PostgreSQL alojada en Neon. Esto garantiza consultas de datos eficientes y poderosas para gestionar los prompts del chatbot, detalles del administrador y el historial de chats.",
        heading3: "Autenticación Robusta con Clerk y Google OAuth",
        body3:
          "Integra la autenticación de Clerk para admitir un inicio de sesión seguro de usuarios, incluyendo Google OAuth, lo que facilita a los administradores acceder a su panel de control y gestionar la creación de chatbots, la edición de prompts y el historial de chats de manera eficiente.",
        heading4: "Interfaz de Usuario Optimizada con Shadcn y Tailwind CSS",
        body4:
          "Combina el poder de los componentes de Shadcn y Tailwind CSS para ofrecer una experiencia de usuario atractiva, receptiva y visualmente agradable. El diseño del frontend se optimiza aún más con los componentes de servidor y cliente de Next.js para un rendimiento óptimo.",
      },
      chatToPdf: {
        title: "Chat To PDF",
        heading1:
          "Chat en Tiempo Real con Documentos Impulsado por OpenAI y Langchain",
        body1:
          "Permite a los usuarios interactuar de manera fluida con documentos, utilizando Pinecone para almacenar embeddings vectoriales y Langchain con OpenAI para generar respuestas inteligentes. Esta interacción dinámica facilita la consulta y recuperación de información relevante de los PDFs subidos.",
        heading2: "Carga y Almacenamiento Seguro de Documentos con Firebase",
        body2:
          "Utiliza react-dropzone para una carga de documentos sin esfuerzo, con Firebase gestionando el almacenamiento seguro de archivos. Esto garantiza una experiencia fluida y segura para manejar los PDFs subidos y acceder a sus contenidos durante las interacciones de chat.",
        heading3: "Autenticación Robusta e Integración de Pagos",
        body3:
          "Integra Clerk Authentication para un inicio de sesión seguro, incluyendo pagos a través de Stripe para funciones premium. Un hook personalizado maneja los webhooks de Stripe, garantizando transacciones de pago seguras y gestionando las suscripciones de los usuarios sin inconvenientes.",
      },
      techInfo: {
        drag: "Arrastra un logo aquí para mostrar más información técnica...",
        drop: "Suelta el logo aquí para mostrar más información técnica...",
        react: {
          heading1: "Arquitectura Basada en Componentes",
          body1:
            "Facilita la construcción de componentes de UI reutilizables que gestionan su estado, lo que hace fácil crear interfaces de usuario dinámicas.",
          heading2: "DOM Virtual",
          body2:
            "Optimiza los procesos de renderización para mejorar el rendimiento, asegurando actualizaciones fluidas y una respuesta más rápida de la interfaz de usuario.",
          heading3: "Ecosistema Extenso",
          body3:
            "Apoyado por una amplia gama de herramientas y bibliotecas, incluyendo la renderización del lado del servidor, la gestión del estado y las utilidades de prueba.",
        },
        nextjs: {
          heading1: "Renderización del lado del servidor (SSR)",
          body1:
            "Mejora el rendimiento y el SEO al pre-renderizar páginas en el servidor, proporcionando cargas de página más rápidas y renderizado inicial.",
          heading2: "Generación de Sitios Estáticos (SSG)",
          body2:
            "Soporta la generación de HTML en tiempo de compilación, permitiendo cargas de página rápidas e integración perfecta con CDNs.",
          heading3: "Rutas de API",
          body3:
            "Simplifica el desarrollo backend al permitir la creación de endpoints de API como funciones serverless directamente dentro del proyecto Next.js.",
        },
        typescript: {
          heading1: "JavaScript Fuertemente Tipado",
          body1:
            "TypeScript extiende JavaScript añadiendo definiciones de tipos, lo que facilita la escritura de código más robusto y mantenible. Esta tipificación fuerte permite a los desarrolladores detectar errores en tiempo de compilación, mucho antes de que el código se ejecute.",
          heading2: "Mejora de la calidad del código y la productividad",
          body2:
            "Con sus funciones avanzadas como enum, interfaces y genéricos, TypeScript mejora la calidad del código y la productividad del desarrollador, facilitando el desarrollo de proyectos a gran escala y la colaboración entre equipos.",
          heading3: "Integración sin problemas",
          body3:
            "TypeScript se integra perfectamente con JavaScript, y su compatibilidad con las bibliotecas y marcos de trabajo existentes de JavaScript lo convierte en una opción ideal para desarrollar aplicaciones complejas tanto en el front-end como en el back-end.",
        },
        firebase: {
          heading1: "Plataforma Integral de Desarrollo de Aplicaciones",
          body1:
            "Ofrece un conjunto de herramientas que incluye hosting, bases de datos, análisis y más, para construir y escalar aplicaciones de manera eficiente.",
          heading2: "Base de Datos en Tiempo Real y Firestore",
          body2:
            "Permite la sincronización de datos en tiempo real en todos los clientes de manera instantánea, ideal para aplicaciones dinámicas y colaborativas.",
          heading3: "Autenticación y Seguridad",
          body3:
            "Soporta autenticación con varios proveedores y capacidades robustas de control de acceso para un desarrollo de aplicaciones seguro.",
        },
        tailwind: {
          heading1: "Utilidad-Primero",
          body1:
            "Ofrece un framework CSS altamente personalizable a nivel bajo que promueve un desarrollo rápido de interfaces de usuario sin apartarse de su HTML.",
          heading2: "Diseño Responsivo",
          body2:
            "Utilidades integradas para diseño responsivo permiten un desarrollo móvil primero y ajustes sencillos de tamaño de pantalla.",
          heading3: "Sistema de Plugin",
          body3:
            "La arquitectura extensible permite añadir funcionalidades personalizadas e integrarse con herramientas de terceros.",
        },
        redux: {
          heading1: "Contenedor de estado predecible",
          body1:
            "Administra y centraliza el estado de la aplicación, facilitando un comportamiento consistente en aplicaciones JavaScript.",
          heading2: "DevTools",
          body2:
            "Experiencia de desarrollo mejorada con características como debugging con viaje en el tiempo y trazabilidad del estado.",
          heading3: "Soporte de comunidad y middleware",
          body3:
            "Un amplio soporte de middleware y una gran comunidad ofrecen soluciones robustas para escenarios complejos de gestión de estado.",
        },
        reactRouter: {
          heading1: "Enrutamiento declarativo",
          body1:
            "API de enrutamiento intuitivo y dinámico que gestiona la navegación y la organización de vistas en aplicaciones React.",
          heading2: "Coincidencia dinámica de rutas",
          body2:
            "Carga perezosa de árboles de componentes a petición al acceder a las rutas, mejorando el rendimiento.",
          heading3: "API de los Hooks",
          body3:
            "Proporciona hooks para gestionar la navegación y el estado del enrutamiento directamente desde componentes funcionales.",
        },
        graphQL: {
          heading1: "Obtención de Datos Declarativa",
          body1:
            "Permite a los clientes solicitar datos específicos de manera estructurada, lo que posibilita una obtención de datos más precisa y eficiente en comparación con las APIs REST tradicionales.",
          heading2: "Consultas en un Único Endpoint",
          body2:
            "Utiliza un único endpoint para enviar solicitudes, que devuelve solo los datos necesarios, minimizando los problemas de sobrecarga y subcarga de datos.",
          heading3: "Esquema Fuertemente Tipado",
          body3:
            "Define un esquema fuertemente tipado que especifica la estructura de la API, asegurando que tanto los clientes como los servidores sepan exactamente qué datos están disponibles y cómo interactuar con ellos.",
        },
      },
      footer:
        "Derechos de autor 2024 Scott Martin. Todos los derechos reservados.",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // default language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
