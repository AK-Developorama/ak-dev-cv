import { Typography, Grid } from "@material-ui/core";
import React from "react";
import AdjustIcon from "@material-ui/icons/Adjust";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import GetAppIcon from "@material-ui/icons/GetApp";
import CustomButton from "../Button/Button";
import cvData from "../../utils/cvData";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../Timeline/CustTimeline";
import {
  HomeRounded,
  SchoolRounded,
  WorkRounded,
  Facebook,
  Twitter,
  GitHub,
  Telegram,
} from "@material-ui/icons";
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
    <div className="profile container_shadow">
      <div className="profile_name">
        <Grid item className="section_title mb_30" xs={12}>
          <Typography className="name">{cvData.name}</Typography>
          <span></span>
        </Grid>
        <Typography className="title_jobrole">{cvData.title}</Typography>
      </div>

      <figure className="profile_image">
        <img
          src="https://assets.codepen.io/6161159/squaredcvpic.jpg"
          alt=""
          title="Lorem ipsum dolor sit amet"
        />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<AdjustIcon />}>
          
          {/* <CustomTimelineItem title="E" text={cvData.email} />
          <CustomTimelineItem title="T" text={cvData.phone} />
          <CustomTimelineItem title="L" text={cvData.languages} />
          <CustomTimelineItem title="A" text={cvData.address} /> */}
          {/* {Object.keys(cvData.socials).map((key) => (
            <CustomTimelineItem
            
              text={cvData.socials[key].text}
              link={cvData.socials[key].link}
            />
          ))} */}
          
        </CustomTimeline>

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
