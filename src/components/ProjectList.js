import ProjectRow from "./ProjectRow";
import flashFluentImg1 from "../images/flashfluent-1.png";
import amazonImg1 from "../images/amazon-1.png";
import { FaReact } from "react-icons/fa";
import {
  SiFirebase,
  SiTailwindcss,
  SiReactrouter,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

const flashFluentBullets = [
  {
    header: "Firebase Integration",
    body: "Secure authentication and real-time CRUD operations with Firestore for dynamic content management.",
  },
  {
    header: "Efficient Data Syncing",
    body: "Implements debouncing and a 90-second interval for robust data synchronization, optimizing server interactions.",
  },
  {
    header: "Streak Functionality & Context API",
    body: "Tracks user engagement with a motivational streak system and utilizes React Context for streamlined state management.",
  },
];

const amazonBullets = [
  {
    header: "Advanced Web Scraping Integration",
    body: "Utilizes Oxylabs to scrape ecommerce data directly from Amazon, ensuring up-to-date product information and search functionality, integrated seamlessly with Next.js 14 for optimal performance.",
  },
  {
    header: "Enhanced State Management with Zustand",
    body: "Leverages Zustand for efficient global state management across the application, allowing for a smooth and responsive user interface that handles complex state transitions effortlessly.",
  },
  {
    header: "Optimized Server-Side Caching",
    body: "Implements server-side data caching techniques in Next.js 14 to speed up content delivery, enhancing the overall user experience with faster load times and reduced server load.",
  },
  {
    header: "Dynamic Routing and UX Design",
    body: "Employs advanced Next.js routing capabilities, including parallel and intercepting routes, to ensure a seamless shopping experience, allowing users to manage their baskets without interrupting their browsing flow.",
  },
];

function ProjectList() {
  return (
    <div className="flex flex-col gap-16 mb-20">
      <ProjectRow
        title="FlashFluent Flashcard App"
        bullets={flashFluentBullets}
        image={flashFluentImg1}
        techIcons={[FaReact, SiFirebase, SiTailwindcss, SiReactrouter]}
        codeLink="https://github.com/smartinuk88/flashcard-app"
        liveLink="https://main--stunning-cupcake-ed88e2.netlify.app/"
      />
      <ProjectRow
        title="Amazon Redesign Webscraper"
        bullets={amazonBullets}
        image={amazonImg1}
        techIcons={[SiNextdotjs, SiTypescript, SiTailwindcss]}
        codeLink="https://github.com/smartinuk88/amazon-redesign-oxylabs-scraper"
        liveLink="https://amazon-redesign-oxylabs-scraper.vercel.app/"
      />
    </div>
  );
}

export default ProjectList;
