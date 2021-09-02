import React from "react";
import { Grid, Typography } from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import SchoolIcon from "@material-ui/icons/School";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/CustTimeline";
import "./Cv.css";
import cvData from "../../utils/cvData";

const Cv = () => {
  return (
    <>
      {/* About Me */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30" xs={12}>
          <span></span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            {cvData.about}
          </Typography>
        </Grid>
      </Grid>
      {/* Work Experience & Education */}
      <Grid container className="section">
        <Grid item className="section_title mb_30" xs={12}>
          <span></span>
          <h6 className="section_title_text">Work Experience</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className="cv_timeline">
            {/* Work Experience */}
            <Grid item sm={12} md={6}>
              <CustomTimeline
                title="Work Experience"
                icon={<WorkOutlineIcon />}
              >
                {cvData.experiences.map((experience) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experience.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {experience.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>

            {/* Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education" icon={<SchoolIcon />}>
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
        </Grid>
      </Grid>
      {/* Skills */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30" xs={12}>
          <span></span>
          <h6 className="section_title_text">Skills</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            {cvData.about}
          </Typography>
        </Grid>
      </Grid>

      {/* References*/}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30" xs={12}>
          <span></span>
          <h6 className="section_title_text">References</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            Available on request from my current manager.
          </Typography>
        </Grid>
      </Grid>{" "}
    </>
  );
};

export default Cv;
