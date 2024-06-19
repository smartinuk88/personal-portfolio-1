import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiReactrouter,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

export default function TechInfo({
  techInfo,
  isOver,
  borderStyle,
  dragStarted,
}) {
  const techMap = {
    react: {
      name: "React",
      text: [
        {
          header: "Component-Based Architecture",
          body: "Facilitates building reusable UI components that manage their state, making it easy to create dynamic user interfaces.",
        },
        {
          header: "Virtual DOM",
          body: "Optimizes rendering processes to enhance performance, ensuring smooth updates and faster UI response.",
        },
        {
          header: "Extensive Ecosystem",
          body: "Supported by a vast range of tools and libraries, including server-side rendering, state management, and testing utilities.",
        },
      ],
      image: <FaReact />,
    },
    nextjs: {
      name: "NextJS",
      text: [
        {
          header: "Server-Side Rendering (SSR)",
          body: "Boosts performance and SEO by pre-rendering pages on the server, providing faster page loads and initial rendering.",
        },
        {
          header: "Static Site Generation (SSG)",
          body: "Supports generating HTML at build time, enabling fast page loads and seamless integration with CDNs.",
        },
        {
          header: "API Routes",
          body: "Simplifies backend development by allowing the creation of API endpoints as serverless functions directly within the Next.js project.",
        },
      ],
      image: <SiNextdotjs />,
    },
    typescript: {
      name: "Typescript",
      text: [
        {
          header: "Strongly Typed JavaScript",
          body: "TypeScript extends JavaScript by adding type definitions, making it easier to write more robust and maintainable code. This strong typing allows developers to catch errors at compile time, long before the code is executed.",
        },
        {
          header: "Enhanced Code Quality and Productivity",
          body: "With its advanced features like enums, interfaces, and generics, TypeScript enhances code quality and developer productivity, facilitating large-scale project development and collaboration among teams.",
        },
        {
          header: "Seamless Integration",
          body: "TypeScript integrates seamlessly with JavaScript, and its compatibility with existing JavaScript libraries and frameworks makes it an ideal choice for developing complex front-end and server-side applications.",
        },
      ],
      image: <SiTypescript />,
    },
    firebase: {
      name: "Firebase",
      text: [
        {
          header: "Comprehensive App Development Platform",
          body: "Offers a suite of tools including hosting, databases, analytics, and more, to build and scale apps efficiently.",
        },
        {
          header: "Real-Time Database & Firestore",
          body: "Enables real-time data syncing across all clients instantly, ideal for dynamic and collaborative applications.",
        },
        {
          header: "Authentication and Security",
          body: "Supports authentication with various providers and robust access control capabilities for secure app development.",
        },
      ],
      image: <SiFirebase />,
    },
    tailwind: {
      name: "Tailwind CSS",
      text: [
        {
          header: "Utility-First",
          body: "Offers a highly customizable, low-level CSS framework that promotes rapid UI development without leaving your HTML.",
        },
        {
          header: "Responsive Design",
          body: "Built-in utilities for responsive design allow for mobile-first development and easy screen size adjustments.",
        },
        {
          header: "Plugin System",
          body: "Extensible architecture supports adding custom functionality and integrating with third-party tools.",
        },
      ],
      image: <SiTailwindcss />,
    },
    redux: {
      name: "Redux",
      text: [
        {
          header: "Predictable State Container",
          body: "Manages and centralizes application state, facilitating consistent behavior across JavaScript apps.",
        },
        {
          header: "DevTools",
          body: "Enhanced development experience with features like time-travel debugging and state traceability.",
        },
        {
          header: "Community and Middleware Support",
          body: "Extensive middleware support and a large community provide robust solutions for complex state management scenarios.",
        },
      ],
      image: <SiRedux />,
    },
    reactRouter: {
      name: "React Router",
      text: [
        {
          header: "Declarative Routing",
          body: "Intuitive and dynamic routing API that manages navigation and view organization in React applications.",
        },
        {
          header: "Dynamic Route Matching",
          body: "Lazily loads component trees on demand as routes are accessed, improving performance.",
        },
        {
          header: "Hooks API",
          body: "Provides hooks for managing navigation and routing state directly from function components.",
        },
      ],
      image: <SiReactrouter />,
    },
  };

  const getBorderStyle = () => {
    if (dragStarted) {
      return "border-lm-custom-orange dark:border-dm-custom-orange";
    } else {
      return borderStyle || "border-lm-support dark:border-dm-support";
    }
  };

  const getTextColor = () => {
    if (dragStarted) {
      if (isOver) {
        return "text-lm-mint dark:text-dm-mint";
      } else {
        return "text-lm-custom-orange dark:text-dm-custom-orange";
      }
    }
  };

  return techInfo === null ? (
    <div
      className={`flex border-dotted border-2 items-center justify-center text-center dark:text-dm-light ${
        isOver ? "border-lm-mint dark:border-dm-mint" : getBorderStyle()
      } h-52 opacity-70`}
    >
      <h3 className={`${getTextColor()} text-lg md:text-xl`}>
        {dragStarted
          ? "Drop logo here to display more tech info..."
          : "Drag a logo here to display more tech info..."}
      </h3>
    </div>
  ) : (
    <div
      className={`flex flex-col py-5 px-5 md:px-8 items-center justify-center space-y-4 text-center dark:text-dm-light border-dotted border-2 ${
        isOver ? "border-lm-mint dark:border-dm-mint" : getBorderStyle()
      }`}
    >
      <div className="text-5xl">{techMap[techInfo].image}</div>
      <h2 className="text-lm-custom-orange dark:text-dm-custom-orange text-3xl">
        {techMap[techInfo].name}
      </h2>
      <ul className="text-lm-support text-xs md:text-sm text-left dark:text-dm-support">
        {techMap[techInfo].text.map((item, index) => (
          <li key={index} className="mb-2">
            <span className="font-bold">{item.header}</span>: {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
