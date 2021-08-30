import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from "@material-ui/lab";

import { Typography } from "@material-ui/core";
import "./CustTimeline.css";

const CustomTimeline = ({ title, icon, children }) => {
  return (
    <Timeline className={"timeline"}>
      
      <TimelineItem className={"timeline_firstItem"}>
        <TimelineSeparator>
          <TimelineDot className={"timeline_dot_header"}>{icon} </TimelineDot>

          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className={"timeline_header"}>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {children}
    </Timeline>
  );
};

export const CustomTimelineSeparator = () => (
  <TimelineSeparator className={"separator_padding"}>
    <TimelineDot className={"timeline_dot"} variant={"outlined"} color="grey" />
    <TimelineConnector />
  </TimelineSeparator>
);

export default CustomTimeline;
