import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      contact: "Contact",
      jobTitle: "Front-end Developer",
      about: {
        heading: "About Me",
        body1: "Hi, I’m ",
        body2:
          "a passionate front-end web developer living in the vibrant city of Murcia, Spain. My journey into the world of web development is fuelled by a blend of creativity and technical curiosity, which I honed through years of experience as a photographer and web administrator.",
        body3:
          "Driven by a love for visual storytelling, my background in photography allows me to bring a unique aesthetic perspective to my development projects, emphasising clean, user-friendly interfaces that engage and communicate clearly. Transitioning to web development was a natural progression for me, combining my keen visual eye with technical skills to build seamless digital experiences.",
        body4:
          "As a self-taught developer, I am committed to continuous learning and improvement. I thrive on challenges and enjoy staying updated with the latest industry trends and technologies. My current toolkit includes React, TailwindCSS, and Firebase, with a keen interest in expanding to full-stack development.",
        body5:
          "Whether collaborating on projects or crafting individual sites, my goal is to create websites that not only look great but also provide functional, intuitive user experiences. I am eager to bring my creative flair and meticulous eye for detail to a dynamic team, where I can contribute to impactful and genuinely useful projects and grow alongside like-minded professionals.",
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
      jobTitle: "Desarrollador Front-end",
      about: {
        heading: "Sobre Mí",
        body1: "Hola, soy ",
        body2:
          "un apasionado desarrollador web front-end que vive en la vibrante ciudad de Murcia, España. Mi viaje en el mundo del desarrollo web está impulsado por una combinación de creatividad y curiosidad técnica, que construyé a través de años de experiencia como fotógrafo y administrador web.",
        body3:
          "Impulsado por mi amor por la narración visual, mi formación en fotografía me permite aportar una perspectiva estética única a mis proyectos de desarrollo, enfatizando interfaces limpias y fáciles de usar que atraen y comunican claramente. La transición al desarrollo web fue una progresión natural para mí, combinando mi agudo ojo visual con habilidades técnicas para crear experiencias digitales sin fisuras.",
        body4:
          "Como desarrollador autodidacta, estoy comprometido con el aprendizaje continuo y la mejora. Me encantan los desafíos y disfruto manteniéndome actualizado con las últimas tendencias y tecnologías de la industria. Mi conjunto de herramientas actual incluye React, TailwindCSS y Firebase, con un gran interés en expandirme al desarrollo full-stack.",
        body5:
          "Tanto colaborando en proyectos como creando sitios individuales, mi objetivo es crear sitios web que no solo se vean geniales, sino que también proporcionen experiencias de usuario funcionales e intuitivas. Estoy ansioso por aportar mi toque creativo y mi meticuloso ojo para los detalles a un equipo dinámico, donde pueda contribuir a proyectos impactantes y verdaderamente útiles y crecer junto a profesionales afines.",
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
