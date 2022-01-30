import { Typography, Grid, Icon } from "@material-ui/core";
import React from "react";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import SchoolIcon from "@material-ui/icons/School";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import CustomButton from "../Button/Button";
import cvData from "../../utils/cvData";

import { TimelineItem, TimelineContent, TimelineDot } from "@material-ui/lab";

import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/CustTimeline";

import CustomList, {
  CustomListSeparator,
} from "../../components/CustomList/CustomList";

import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile_container">
      <div className="profile_info">
        <Grid item className="section_title mb_30">
          <Typography className="name">{cvData.name}</Typography>
          <span></span>
        </Grid>
        <Typography className="title_jobrole">{cvData.title}</Typography>
        {/* Contact Details */}
        <div className="contactDetails">
          {/* mail */}
          <CustomList title={cvData.email} icon={<MailIcon />}></CustomList>
          {/* github */}
          <a
            href="https://github.com/AK-developorama"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomList
              title="github.com/AK-developorama"
              icon={<GitHubIcon />}
            ></CustomList>
          </a>
          {/* phone */}
          <CustomList title={cvData.phone} icon={<PhoneIcon />}></CustomList>
        </div>

        {/* Portfolio Button */}
        <div className="button_container">
          <a
            className="downloadCv"
            href="https://cdpn.io/developorama/debug/2aa033ef01d99cfb25899bf676524657"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomButton text={"PORTFOLIO"} />
          </a>
        </div>

        {/* Technical Skills/ SOFTWARE */}
        <Grid container className="section mb_20">
          <Grid item xs={12}>
            <CustomTimeline
              title="Technical Skills"
              icon={<LaptopChromebookIcon />}
            >
              <Grid item className="section_title mb_30" xs={12}>
                <span></span>
              </Grid>
              {cvData.software.map((software) => (
                <TimelineItem>
                  <TimelineContent className="timeline_content">
                    <Typography className="softwareTitles">
                      {software.title}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid>
        </Grid>

        {/* Education*/}
        <Grid container className="section mb_20">
          <Grid item xs={12}>
            <CustomTimeline title="Education" icon={<SchoolIcon />}>
              <Grid item className="section_title mb_30" xs={12}>
                <span></span>
              </Grid>
              {cvData.education.map((education) => (
                <TimelineItem>
                  <CustomTimelineSeparator />
                  <TimelineContent className="timeline_content">
                    <Typography className="timeline_title">
                      {education.title}
                    </Typography>
                    <Typography variant="caption" className="timeline_date">
                      {education.date}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="timeline_description"
                    >
                      {education.description}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid>
        </Grid>

        {/* CV Pdf Button */}
        <div className="button_container" style={{ display: "flex" }}>
          <a
            className="downloadCv"
            href="https://drive.google.com/file/d/1R7hdWVfHEsNYsXsDJ9G89kVQQ22vfeKl/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomButton text={"CV as PDF"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
