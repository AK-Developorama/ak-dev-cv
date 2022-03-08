import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab";

import { Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";

import "./CustTimeline.css";

const CustomTimeline = ({ title, icon, children, webaddress }) => {
  return (
    <Timeline className={"timeline"}>
      <TimelineItem className={"timeline_firstItem"}>
        <TimelineDot className={"timeline_dot_header"}>{icon} </TimelineDot>
        <TimelineContent>
          <Typography variant="h6" className={"timeline_header"}>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <Link href={webaddress} rel="noopener noreferrer">
        {children}
      </Link>
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
