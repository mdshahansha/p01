import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: " Teaching Assistantr",
    company_name: "Coding Ninjas ",
    icon: web,
    iconBg: "#383E56",
    date: "November 2020 - October 2022",
    points: [
      "With experience to resolve more than 20k++ doubt with best rating. Debugging Code.",
      " Helping students in their assignments & various projects.",
      " Debugging codes",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "ITS FOR YOU",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Sep 2021",
    points: [
      "Frontend App development(React) with the integration of google firebase as the backend..",
      "Admin Panel development (ReactJs) with the integration of google firebaseas the backend",
       
    ],
  },
  {
    title: "SOFTWARE DEVELOPER ENGINEER",
    company_name: "MADIEE GAMES",
    icon: creator,
    iconBg: "#383E56",
    date: "Dec 2021 - Jan 2022",
    points: [
      "Work on Colyseus.io ,automatic state synchronized between server and client",
      "Program is a fully managed solution that enables you to focus on other multiplayer game development leaving server management, infrastructure, and scaling to us.",
      "Work we setup , manage and update organisation Colyseus servers in a few clicks with an intuitive administration dashboard.",
    ],
  },
  {
    title: "MERN Mentor",
    company_name: "Coding Ninja India",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Present",
    points: [
      "Did Users Testing with potential audiences to identify bugs ,andother conceptual errors plus to get insights and etc..",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Contributed in the early product content of course of FullStack.",
      "Delivered over 50+ end to end customised technical write-ups for the org."
    ],
  },
];

const testimonials = [

  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Shahansha does.",
    name: "Ankur Sharma",
    designation: "Sr. Content Associate",
    company: "Coding Ninja",
    image: "https://ninjasfiles.s3.amazonaws.com/2ee55a6fda6633526c26d0fbe042995b_raihan_attachment_1621280212852.jpeg",
  },
  {
    testimonial:
      "After Shahansha optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Zayn",
    designation: "Freelancer",
    company: "456 Enterprises",
    image: "https://image-repository-cdn.tappytoon.com/series/20/454d49e5-4967-4174-9e44-1648bc92cc96.jpg",
  },
];

const projects = [
  {
    name: "Social Dom Planet",
    description:
      "App which will basically have the features of login ,signup ,post creation,and deletion, like, comment, chat,change password etc Worked on Context API and various functionalities and implements features Throttling , Debouncing , operations are entirely Authenticated and Authorized",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Redux Tookit",
        color: "green-text-gradient",
      },
      {
        name: "nodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },{
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: "https://ninjasfiles.s3.amazonaws.com/11b5190a0c7940643958141d2b8d9734_raihan_attachment_codeial.png",
    source_code_link: "https://github.com/mdshahansha/codeial_update",
  },
  {
    name: "Simlified App",
    description:
      "Track your inventory, create sales orders, fulfill orders and generate reports on the go and get complete details of items in your inventory including item name, and stock status in a single screen.Data Management, File Upload to Cloud , User ProfileData, Password reset email , User Registration , Pagination , User Authentication ",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "JWT",
        color: "green-text-gradient",
      },{
        name: "expressJs",
        color: "pink-text-gradient",
      },
    ],
    image: "https://ninjasfiles.s3.amazonaws.com/df21432a364e14693bca9470906768b1_raihan_attachment_inventory%20app.png",
    source_code_link: "https://github.com/mdshahansha/simplified",
  },
  {
    name: "Clone Ipod  ",
    description:
      "Build a clone of iPod nano 5th gen Userscanlistenmusic’sandchangethierwallpaper.",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "ZingTouch Library",
        color: "blue-text-gradient",
      }, 
    ],
    image: "https://ninjasfiles.s3.amazonaws.com/813459790e1d40cef8ab5034a7a5876b_raihan_attachment_ipod.png",
    source_code_link: "https://github.com/mdshahansha/p3",
  },
  {
    name: "CoinDom  ",
    description:
      "State Management using Redux Toolkit, UI Creation using Ant Design, creating charts using Chart.js, and fetching data from multiple sources using RapidAPI while building this webApp",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "reactJs",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      }, {
        name: "metaMask",
        color: "blue-text-gradient",
      }, {
        name: "web3",
        color: "green-text-gradient",
      },
    ],
    image: "https://ninjasfiles.s3.amazonaws.com/fceb8ba25b01c770114dcf89c885147d_raihan_attachment_crypto.png",
    source_code_link: "https://github.com/mdshahansha/CoinDom",
  }
];

export { services, technologies, experiences, testimonials, projects };
