/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";

export default {
  name: "Aliz Kopenetz",
  title: "Curriculum Vitae",
  phone: "+447397509049",
  email: "aliz.kopenetz@gmail.com",
  languageSkills: [
    {
      name: `English (advanced)
       German (intermediate)
       French (intermediate)
        Romanian (advanced)
         Hungarian (advanced)`,
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
  about: `  Self-taught Front-End Developer with proven skills in React and JavaScript. Coming from a background in digital product creation, scripting and 3D modelling.
`,

  experiences: [
    {
      title: "Earthfriend Candles, online candle store",

      date: "2021/05 - (ongoing)",

      description: `A fully functioning React-based Shopify e-commerce site for a Sheffield client. Uses the Shopify API, Shopify-Buy and EmailJS.        
        Only front-end needed as EmailJS and React-Hook-Form handle the contact form. 
        Products saved to local storage through Shopify-Buy. Chakra UI, Material UI used for styling.`,
    },

    {
      title: "FaceDetect, Face detection Web application ",
      date: "2021/07 - 2021/09",
      description: `React-based full stack personal project. 
        The user can create an account or log in as a guest. 
        Uses Node.Js with Express.Js for the server and  PostgreSQL for the database. 
        Makes external API calls to Clarifai's Face Detection Model.`,
    },
    {
      title: "CV as a Webpage",
      date: "2021/11",

      description: `React-based project hosted on Heroku.     
        Uses Bootstrap and Material UI for styling.  
       `,
    },

    {
      title: "Architectural Visualiser - Miller Hare",
      date: "2016/10 - Present | London, UK",
      description: `Used JavaScript to speed up a very repetitive in-house 3D model texturing process by 40%.  
        Optimised and automated old company workflows by learning Max Script (the scripting language for 3ds Max).`,
    },

    {
      title: "Interactive Unreal Engine Designer - Miller Hare",
      date: "2016/10 - 2018/10 | London, UK",
      description: `Worked with C++ based Unreal Engine to represent architectural projects in Virtual Reality. `,
    },
  ],

  workExperience: [
    {
      title: "Design Software Teaching Assistant - Kent University ",
      date: "2015 - 2016 | Canterbury, UK",
      description:
        "Through JavaScript scripting, created automated workflows for 3D modelling software to go beyond their conventional uses among designers. Taught students these features to speed up their work.",
    },
    {
      title: "Architectural Assistant - CAL Architects",
      date: "2014 - 2015 | Leeds, UK",
      description:
        "Created 3D architectural models and made them available on the company's website with Three.Js and JavaScript. Voluntarily took on additional web development work to learn new skills.",
    },
  ],

  education: [
    {
      title:
        "BSc in Computer Science - International University of Applied Sciences Berlin",
      date: "expected completion date 2023 ",
      description:
        "Currently enrolled in Computer Science degree, where I am learning among others Java, Phython, Mathematics and agile project management, while also working on hands-on projects and collaborative work.",
    },
    {
      title: "Responsive Website Development and Design - University of London",
      date: "2021/09 - present ",
      description:
        "A very comprehensive foundational 6 month course covering the main tools of Front End Development, UX principles and APIs.",
    },
    {
      title: "MA Architectural Visualisation - Kent University",
      date: "2015 - 2016 | Canterbury, UK",
      description: "Achieved Distinction (ECTS A) ",
    },
    {
      title: "BA Architecture - Sheffield University",
      date: "2011 - 2014 | Sheffield, UK",
      description: "Achieved 2.1 (ECTS B)",
    },
  ],

  software: [
    {
      icon: <SportsEsportsIcon />,
      title: "javascript, typescript",
    },
    {
      icon: <SportsEsportsIcon />,
      title: "react",
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
      title: "Material UI, Chakra UI",
    },

    {
      icon: <SportsEsportsIcon />,
      title: "three.js",
    },
    {
      icon: <SportsEsportsIcon />,
      title: "postgresql",
    },
    {
      icon: <SportsEsportsIcon />,
      title: "git, github",
    },
    {
      icon: <SportsEsportsIcon />,
      title: "JEst, react testing library",
    },
    {
      icon: <SportsEsportsIcon />,
      title: "adobe photoshop, illustrator",
    },
  ],

  softSkills: [
    {
      title: "Communication",
      description: `- Succesfully persuaded managers to accept my workflow improvements. 
      - Taught these new methods to other teams by explaining them in emails or presenting them verbally.
      - Explained technical subjects in simple terms in order to share ideas with non-technical colleagues.
      `,
    },
    {
      title: "Collaboration",
      description: `- Have helped set up in-house organisational tools that divide workload, keep track of timeframes and implement version control.
      - Mentored new team members in the use of bespoke software and the companies' best practices.`,
    },
    {
      title: "Analytical Abilities",
      description: `- Have successfuly identified company workflow trends over time and found the key performance indicators, in our case 3D visulisation image turnover. Realised that by reducing the preparatory work time, we can deliver images to clients 40% faster. 
      - Created Photoshop templates for my team to speed up image preparation phase. Wrote several scripts to automate Photoshop tasks.`,
    },
    {
      title: "Self-Learner",
      description: `- The drive to find solutions has lead me down the route of learning new technologies and also new ways of using the existing ones. 
      - Avidly following the evolution of developer practices and tools in order to learn and implement them in my work.`,
    },
  ],
};
