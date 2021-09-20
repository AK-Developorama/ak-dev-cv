import { Typography, Grid, Icon } from "@material-ui/core";
import React from "react";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import CustomButton from "../Button/Button";
import cvData from "../../utils/cvData";

import { TimelineItem, TimelineContent, TimelineDot } from "@material-ui/lab";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/CustTimeline";

import "./Profile.css";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>{" "}
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile_container">
      <div className="profile_info">
        <Grid item className="section_title mb_30" xs={12}>
          <Typography className="name">{cvData.name}</Typography>
          <span></span>
        </Grid>

        <Typography className="title_jobrole">{cvData.title}</Typography>

        {/* Portfolio Button */}

        <div className="button_container" style={{ display: "flex" }}>
          <a
            className="downloadCv"
            href="https://cdpn.io/developorama/debug/2aa033ef01d99cfb25899bf676524657"
          >
            <CustomButton text={"PORTFOLIO"} />
          </a>
        </div>

        {/* Technical Skills*/}

        <Grid container className="section pb_45 pt_45">
          <Grid item xs={12}>
            <CustomTimeline
              title="Technical Skills"
              icon={<LaptopChromebookIcon />}
            >
              <Grid item className="section_title mb_30" xs={12}>
                <span></span>
              </Grid>
              {cvData.software.map((software) => (
                <Grid item xs={12} sm={12} md={12}>
                  <div className="software">
                    <Typography className="software_title" variant="h6">
                      {software.title}
                    </Typography>
                  </div>
                </Grid>
              ))}
            </CustomTimeline>
          </Grid>
        </Grid>

        {/* Soft Skills */}

        <Grid container className="section pb_45 pt_45">
          <Grid item xs={12}>
            <CustomTimeline
              title=" Soft Skills"
              icon={<LaptopChromebookIcon />}
            >
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

        {/*Languages */}

        <Grid container className="section pb_45 pt_45">
          <Grid item xs={12}>
            <CustomTimeline title="Languages" icon={<LaptopChromebookIcon />}>
              <Grid item className="section_title mb_30" xs={12}>
                <span></span>
              </Grid>

              {cvData.languageSkills.map((language) => (
                <TimelineItem>
                  <TimelineContent className="timeline_content">
                    <Typography className="timeline_title">
                      {language.name}
                    </Typography>

                    <Typography
                      variant="caption"
                      className="timeline_date"
                    >
                      {language.level}
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
            href="https://cdpn.io/developorama/debug/2aa033ef01d99cfb25899bf676524657"
          >
            <CustomButton text={"CV as Pdf"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
