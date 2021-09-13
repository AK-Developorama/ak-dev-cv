import React from "react";
import { Icon, Grid, Typography, Paper } from "@material-ui/core";
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
      <Grid container className="section pb_45 pt_45">
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
      <Grid container className="section pb_45 p_50">
        <Grid item className="section_title mb_30" xs={12}>
          <span></span>
          <h6 className="section_title_text">Skills</h6>
        </Grid>
        <Grid
          item
          xs={12}
          container
          spacing={3}
          justify="space-between"
          className="section graybg pb_45"
        >
          {cvData.skills.map((skill) => (
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={0} className="skill">
                <Typography variant="h6" className="skill_title">
                  {skill.title}
                </Typography>
                {skill.description.map((element) => (
                  <Typography variant="body2" className="skill_description">
                    <TimelineDot
                      variant={"outlined"}
                      className="timeline_dot"
                    />
                    {element}
                  </Typography>
                ))}
              </Paper>{" "}
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* Software Proficiency */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30" xs={12}>
          <span></span>
          <h6 className="section_title_text">Software</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3}>
            {cvData.software.map((software) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className="software">
                  <Icon className="software_icon">{software.icon}</Icon>
                  <Typography className="software_title" variant="h6">
                    {software.title}
                  </Typography>
                  <Typography className="software_description" variant="body2">
                    {software.experience}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
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
      </Grid>
      {/* Contact Form*/}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30" xs={12}>
          <span></span>
          <h6 className="section_title_text"> Contact Form</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            Available on request from my current manager.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Cv;
