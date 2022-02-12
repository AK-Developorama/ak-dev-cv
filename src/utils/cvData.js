/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";

export default {
  name: "Aliz Kopenetz",
  title: "Curriculum Vitae",
  phone: "+44 739 750 90 49",
  email: "aliz.kopenetz@gmail.com",
  location: "London, United Kingdom",
  languageSkills: [
    {
      name: `English (Fluent), German (intermediate), French (intermediate), Romanian (Fluent), Hungarian (Fluent)`,
    },
  ],
  website:
    "https://cdpn.io/developorama/debug/2aa033ef01d99cfb25899bf676524657",
  address: "London, UK",
  socials: {
    GitHub: {
      link: "",
      text: "GitHub",
      icon: <GitHubIcon />,
    },
    Facebook: {
      link: "https://facebook.com/developorama",
      text: "MyPage",
      icon: <FacebookIcon />,
    },
    Twitter: {
      link: "https://twitter.com/developorama",
      text: "MyPage",
      icon: <TwitterIcon />,
    },
  },
  about: `  - Front-End Developer with proven skills in React and JavaScript. 
  - Coming from a background in digital product creation, scripting and 3D modelling.
`,

  experiences: [
    {
      title:
        "Website Developer and Designer - Earthfriend Candles, online candle store",

      date: "2021/05 - Present | Online, Voluntary Work",

      description: `- Developed a fully functioning React-based Shopify e-commerce site for a Sheffield client, using Shopify API, Shopify-Buy and EmailJS.        
        - Only front-end needed as EmailJS and React-Hook-Form handle the contact form. 
        - Products saved to local storage through Shopify-Buy. Chakra UI, Material UI used for styling.`,
      url: "https://earthfriend-candles.herokuapp.com",
    },

    {
      title: "Architectural Visualiser - Miller Hare",
      date: "2016/10 - Present | London (UK), Full-time",
      description: `- Used JavaScript to speed up a very repetitive in-house 3D model texturing process by 40%.  
        - Optimised and automated old company workflows by learning Max Script (the scripting language for 3ds Max).`,
    },

    {
      title: "Interactive Unreal Engine Designer - Miller Hare",
      date: "2016/10 - 2018/10 | London (UK), Full-time",
      description: `- Worked with C++ based Unreal Engine to represent architectural projects in Virtual Reality.`,
    },
  ],

  projects: [
    {
      title: "'FaceDetect' - Face detection Web application ",
      date: "2021/07 - 2021/09",
      description: `- React-based full stack personal project. 
        - The user can create an account or log in as a guest. 
        - Uses Node.Js with Express.Js for the server and  PostgreSQL for the database. 
        - Makes external API calls to Clarifai's Face Detection Model.`,
      url: "https://facedetect--frontend.herokuapp.com/",
    },
    {
      title: "'Curriculum Vitae'",
      date: "2021/11",

      description: `- React-based project hosted on Heroku.     
        - Uses Bootstrap and Material UI for styling.`,
      url: "https://cv-akdev.herokuapp.com/",
    },
  ],

  workExperience: [
    {
      title: "Design Software Teaching Assistant - Kent University ",
      date: "2015 - 2016 | Canterbury, UK",
      description:
        "- Through JavaScript scripting, created automated workflows for 3D modelling software to go beyond their conventional uses among designers. Taught students these features to speed up their work.",
    },
    {
      title: "Architectural Assistant - CAL Architects",
      date: "2014 - 2015 | Leeds, UK",
      description:
        "- Created 3D architectural models and made them available on the company's website with Three.Js and JavaScript. Voluntarily took on additional web development work to learn new skills.",
    },
  ],

  education: [
    {
      title:
        "BSc in Computer Science - International University of Applied Sciences",
      date: "completion date 2024 | Berlin, DE + online ",
      description: `- Modules include among others Java, Phython, Mathematics and Agile project management.
         - Also involved in hands-on projects and collaborative work.`,
    },
    {
      title: "Responsive Website Development and Design - University of London",
      date: "2021/08 - 2022/02 | online ",
      description:
        "- A very comprehensive specialised six month course, covering the main tools of Front End Development, UX principles and APIs.",
    },
    {
      title: "MA Architectural Visualisation - Kent University",
      date: "2015 - 2016 | Canterbury, UK",
      description: "- Achieved Distinction (ECTS A) ",
    },
    {
      title: "BA Architecture - Sheffield University",
      date: "2011 - 2014 | Sheffield, UK",
      description: "- Achieved 2.1 (ECTS B)",
    },
  ],

  software: [
    {
      icon: <SportsEsportsIcon />,
      title: "javascript",
    },
    {
      icon: <SportsEsportsIcon />,
      title: "react (W3 schools certified)",
    },
    {
      icon: <SportsEsportsIcon />,
      title: "html",
    },
    {
      icon: <SportsEsportsIcon />,
      title: "css, sass",
    },
    {
      icon: <SportsEsportsIcon />,
      title: "Bootstrap",
    },
    {
      icon: <SportsEsportsIcon />,
      title: "git",
    },
    {
      icon: <SportsEsportsIcon />,
      title: "Material UI, Chakra UI",
    },
    {
      icon: <SportsEsportsIcon />,
      title: "node.js, express.js",
    },

    {
      icon: <SportsEsportsIcon />,
      title: "three.js",
    },
    {
      icon: <SportsEsportsIcon />,
      title: "typescript",
    },
    {
      icon: <SportsEsportsIcon />,
      title: "postgresql",
    },

    {
      icon: <SportsEsportsIcon />,
      title: "JEst, react testing library",
    },
    {
      icon: <SportsEsportsIcon />,
      title: "adobe creative suite",
    },
  ],

  softSkills: [
    {
      title: "Analytical Abilities",
      description: `- Have successfully identified company workflow trends over time and found the key performance indicators, in our case 3D visualisation image turnover. Realised that by reducing the preparatory work time, we can deliver images to clients 40% faster.`,
    } /* - Wrote several scripts to automate Photoshop tasks. */,
    {
      title: "Communication",
      description: `- Succesfully persuaded managers to accept my workflow improvements. 
      - Explained technical subjects in simple terms in order to share ideas with non-technical colleagues.
      `,
    },
    {
      title: "Collaboration",
      description: `- Have helped set up in-house organisational tools that divide workload, keep track of timeframes and implement version control.
      - Mentored new team members in the use of bespoke software.`,
    },

    {
      title: "Self-Learner",
      description: `- The drive to find solutions has lead me down the route of learning new technologies and also new ways of using the existing ones. 
      - Avidly following the evolution of developer practices and tools in order to learn and implement them in my work.`,
    },
  ],
};
