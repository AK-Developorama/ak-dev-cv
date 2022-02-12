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

import "./CustomList.css";

const CustomList = ({ title, icon, children }) => {
  return (
    <Timeline className={"listContainer"}>
      <TimelineItem className={"list_firstItem"}>
        <TimelineSeparator>
          <TimelineDot className={"listDotHeader"}>{icon}</TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h5" className={"listHeader"}>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {children}
    </Timeline>
  );
};

export const CustomListSeparator = () => (
  <TimelineSeparator className={"listSeparatorPadding"}>
    <TimelineDot className={"listDot"} variant={"outlined"} color="grey" />
    <TimelineConnector />
  </TimelineSeparator>
);

export default CustomList;
