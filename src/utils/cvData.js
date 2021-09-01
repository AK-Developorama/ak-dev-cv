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
    facebook: {
      link: "https://facebook.com/developorama",
      text: "MyPage",
      icon: <FacebookIcon />,
    },
    twitter: {
      link: "https://twitter.com/developorama",
      text: "MyPage",
      icon: <TwitterIcon />,
    },

    GitHub: {
      link: "https://github.com/AK-developorama?tab=repositories",
      text: "MyPage",
      icon: <GitHubIcon />,
    },
  },
};