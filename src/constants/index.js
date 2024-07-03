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
  illustrator,
  photoshop,
  nas,
  impro,
  pizza,
  hnb,
  ageCalc,
  eCommerce,
  restCountries,
  aora,
  threejs,
  steeban,
  abdulkareem,
  kishanth,
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
    title: "Website Designer",
    icon: web,
  },
  {
    title: "React Web App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile App Developer",
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
    name: "illustrator",
    icon: illustrator,
  },
  {
    name: "photoshop",
    icon: photoshop,
  },
];

const experiences = [
  {
    title: "Junior Web Developer",
    company_name: "ImproTech",
    icon: impro,
    iconBg: "#383E56",
    date: "Feb 2015 - Jul 2017",
    points: [
      "Designed and developed dynamic web pages using HTML, CSS, and Javascript.",
      "Applied media queries to create responsive website across different size of screens.",
      "Involved ﬁnding out the bugs, broken links and missing images etc. and rectifying them.",
      "Created new web pages utilizing content provided by online marketing to improve the website.",
      "Conducted design and code reviews to share knowledge with the development team as part of the website architecture.",
    ],
  },
  {
    title: "Customer Service Representative",
    company_name: "PizzaHut Sri Lanka",
    icon: pizza,
    iconBg: "#E6DEDD",
    date: "Aug 2017 - Jul 2018",
    points: [
      "identify customers’ needs, clarify information, research every issue and provide solutions and/or alternatives.",
      "Manage large amounts of inbound and outbound calls in a timely manner.",
    ],
  },
  {
    title: "Technical Associate",
    company_name: "Hatton National Bank",
    icon: hnb,
    iconBg: "#383E56",
    date: "Aug 2018 - May 2022",
    points: [
      "POS Terminal Conﬁguration and installation at merchant outlets.",
      "Testing Terminals in UAT environment.",
      "Handling Customer Complaints.",
      "Provide technical support in new acquiring project implementations, relating to new products and systems.",
      "Conducting demonstrations on backend portals operations relating to payment gateway transactions.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "NAS Management",
    icon: nas,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Afrar delivered high-quality work and went above and beyond to ensure projects were completed on timely manner.",
    name: "Steeban Charles",
    designation: "CEO",
    company: "Improtech",
    image: steeban,
  },
  {
    testimonial:
      "I was blown away by Afrar's talent and dedication.He has a keen eye for design and impressive technical skills.",
    name: "Abdul Kareem",
    designation: "Lecturer",
    company: "E-Soft",
    image: abdulkareem,
  },
  {
    testimonial:
      "Afrar is a versatile developer, adept at full stack development with impressive knowledge of programming languages.",
    name: "Kishanth Prab",
    designation: "Software Engineer",
    company: "Infor",
    image: kishanth,
  },
];

const projects = [
  {
    name: "Aora Video Sharing App",
    description:
      "Aora is a dynamic video sharing application where users can sign up, log in, log out, save videos, and upload their own videos.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "Expo",
        color: "green-text-gradient",
      },
      {
        name: "Nativewind",
        color: "pink-text-gradient",
      },
      {
        name: "Appwrite",
        color: "orange-text-gradient",
      },
    ],
    image: aora,
    source_code_link: "https://github.com/Lord-Anarak/aora",
    demo_link:
      "https://github.com/Lord-Anarak/aora/releases/download/v1.0/aora.apk",
  },

  {
    name: "Product Page",
    description:
      "E-commerce product page is user-friendly and responsive, allowing easy browsing of product images and options. Add items to cart for easy checkout.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: eCommerce,
    source_code_link: "https://github.com/Lord-Anarak/eCommerceProductPage",
    demo_link: "https://lord-anarak.github.io/eCommerceProductPage/",
  },
  {
    name: "Rest Countries API",
    description:
      "Rest Countries API app enables easy access to detailed country information. Search, filter by region, and view details on a separate page. Toggle light/dark mode.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: restCountries,
    source_code_link: "https://github.com/Lord-Anarak/rest-countries-api",
    demo_link: "https://lord-anarak.github.io/rest-countries-api/",
  },
  {
    name: "Age Calculator",
    description:
      "The Age Calculator app calculates your age in years, months, and days. Simply input your date of birth and receive accurate results. Validation errors are also handled.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
    ],
    image: ageCalc,
    source_code_link: "https://github.com/Lord-Anarak/age-calculator",
    demo_link: "https://lord-anarak.github.io/age-calculator/",
  },
];

export { services, technologies, experiences, testimonials, projects };
