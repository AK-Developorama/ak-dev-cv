import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import {
  Tabs,
  Dialog,
  Grid,
  Grow,
  Tab,
  Card,
  CardActionArea,
  DialogContent,
  CardMedia,
  Typography,
  CardContent,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";
import "./Portfolio.css";
import cvData from "../../utils/cvData";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
    const [projectDialog, setProjectDialog] = useState(false);

  return (
    <>
      <Grid container className="section pb_45 pt_45">
        {/* Title */}
        <Grid item className="section_title mb_30" xs={12}>
          <span></span>
          <h6 className="section_title_text">Portfolio</h6>
        </Grid>

        {/* Tabs */}
        <Grid item xs={12}>
          <Tabs
            value={tabValue}
            indicatorColor="white"
            className="custom_tabs"
            onChange={(event, newValue) => setTabValue(newValue)}
          >
            <Tab
              label="All"
              value="All"
              className={
                tabValue === "All"
                  ? "customTabs_item_active"
                  : "customTabs_item"
              }
            />

            {[...new Set(cvData.portfolio.map((item) => item.tag))].map(
              (tag) => (
                <Tab
                  label={tag}
                  value={tag}
                  className={
                    tabValue === "All"
                      ? "customTabs_item_active"
                      : "customTabs_item"
                  }
                />
              )
            )}
          </Tabs>
        </Grid>
      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {cvData.portfolio.map((project) => (
            <>
              {tabValue == project.tag || tabValue == "All" ? (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Grow in timeout={1000}>
                    <Card
                      className="CustomCard"
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="customCard_image"
                          image={project.images}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography
                            variant="body2"
                            className="customCard_title"
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_caption"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>

      <Dialog
        open={Boolean(projectDialog)}
        onClose={() => setProjectDialog(false)}
        className="projectDialog"
        maxWidth={"sm"}
        //fullWidth
      >
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>
        <img src="" alt="" />
        <DialogContent style={{ height: "80vh" }}>
          {projectDialog.images && (
            <ImageGallery images={projectDialog.images} />
          )}
          
          <Typography className="projectDialog_description">
            {projectDialog.description}
          </Typography>
        </DialogContent>

        <DialogActions className="projectDialog_actions">
          {projectDialog?.links?.map((link) => (
            <a 
            href={link.link}
             target="_blank"
             rel='noopener noreferrer'
             className='projectDialog_icon'>
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Portfolio;
