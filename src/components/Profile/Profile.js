import { Typography } from "@material-ui/core";
import React from "react";
import AdjustIcon from "@material-ui/icons/Adjust";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import GetAppIcon from "@material-ui/icons/GetApp";
import CustomButton from "../Button/Button";
import cvData from "../../utils/cvData";
import CustomTimeline, {
  CustomTimelineSeparator
} from "../Timeline/CustTimeline";
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
        <Typography className="name">{cvData.name}</Typography>
        <Typography className="title">{cvData.title}</Typography>
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
          <CustomTimelineItem title="Name" text={cvData.name} />

          <CustomTimelineItem title="Email" text={cvData.email} />

          {Object.keys(cvData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={cvData.socials[key].text}
              link={cvData.socials[key].link}
            />
          ))}
        </CustomTimeline>

        <div className="button_container" style={{ display: "flex" }}>
          <CustomButton text={"Download CV"} icon={<GetAppIcon />} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
