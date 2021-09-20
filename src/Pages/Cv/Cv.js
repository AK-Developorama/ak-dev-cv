import React from "react";
import { Grid, Typography } from "@material-ui/core";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import SchoolIcon from "@material-ui/icons/School";
import AdjustIcon from "@material-ui/icons/Adjust";
import CodeIcon from "@material-ui/icons/Code";
import {
  TimelineItem,
  TimelineContent,
} from "@material-ui/lab";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/CustTimeline";
import "./Cv.css";
import cvData from "../../utils/cvData";

const Cv = () => {
  return (
    <>
      {/* Summary*/}
      <Grid container className="section pb_45 pt_45">
        <Grid item xs={12}>
          <CustomTimeline title="Summary" icon={<AdjustIcon />}>
            <Grid item className="section_title mb_30" xs={12}>
              <span></span>
            </Grid>

            <Typography variant="body2" className="aboutme_text">
              {cvData.about}
            </Typography>
          </CustomTimeline>
        </Grid>
      </Grid>

      {/* Relevant Work & Study Experiences */}

      <Grid container className="section">
        <Grid item className="section_title mb_30" xs={12}></Grid>

        <Grid item xs={12}>
          <Grid container className="cv_timeline">
            {/*  Experience */}
            <Grid item>
              <CustomTimeline title="Experience" icon={<CodeIcon />}>
                <Grid item className="section_title mb_30" xs={12}>
                  <span></span>
                </Grid>

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

            {/* Other Work Experience */}

            <Grid item>
              <CustomTimeline
                title="Other Work Experience"
                icon={<WorkOutlineIcon />}
              >
                <Grid item className="section_title mb_30" xs={12}>
                  <span></span>
                </Grid>

                {cvData.workExperience.map((experience) => (
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
          </Grid>
        </Grid>
      </Grid>

      {/* Education */}
      <Grid container className="section pb_45 pt_45">
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
                  <Typography variant="body2" className="timeline_description">
                    {education.description}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </CustomTimeline>
        </Grid>
      </Grid>
    </>
  );
};

export default Cv;
