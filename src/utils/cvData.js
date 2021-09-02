/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

export default {
  name: "Aliz Kopenetz",
  title: "Front End Developer",
  email: "aliz.kopenetz@gmail.com",
  DOB: "03/06/1992",
  socials: {
    GitHub: {
      link: "https://github.com/AK-developorama?tab=repositories",
      text: "MyPage",
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
  about:
    "Where does it come from?Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",

  experiences: [
    {
      title: "Mhl",
      date: "2016 - Present",
      description:
        "Where does it come from?Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 ",
    },
    {
      title: "3d software teaching assistant",
      date: "2016 - 2012",
      description:
        "Where does it come from?Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 ",
    },
    {
      title: "cal architects",
      date: "2016 - 2012",
      description:
        "Where does it come from?Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 ",
    },
    {
      title: "sheffield uni digital modelling teaching assistant",
      date: "2014 - 2012 ",
      description:
        "Where does it come from?Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 ",
    },
  ],

  education: [
    {
      title: "ZTM",
      date: "2020 - Present",
      description: ".....",
    },
    {
      title: "Kent Univ",
      date: "2016 - ",
      description: ".....",
    },
    {
      title: "sheffield uni",
      date: "2016 - ",
      description: ".....",
    },
    {
      title: "sheffield uni digital modelling teaching assistant",
      date: "2016 - ",
      description: ".....",
    },
  ],

  skills: [
    {
      title: "UNREAL ENGINE",
      experience: " 2 years",
      description:
        "A C++ based game engine in which I present the experience of living in future architectural projects.",
    },
    {
      title: "UNREAL ENGINE",
      experience: " 2 years",
      description:
        "A C++ based game engine in which I present the experience of living in future architectural projects.",
    },
    {
      title: "UNREAL ENGINE",
      experience: " 2 years",
      description:
        "A C++ based game engine in which I present the experience of living in future architectural projects.",
    },
  ],
};