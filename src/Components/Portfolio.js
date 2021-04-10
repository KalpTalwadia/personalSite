import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Link, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import LinkIcon from '@material-ui/icons/Link';
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Carousel from "react-material-ui-carousel";
const useStyles = makeStyles({
  card: {
    maxWidth: 400,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
  
  },
  divider: {
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },

});
const Portfolio = ({ data }) => {
  const classes = useStyles();

  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={
            projectImage
          }
        />
        <CardContent className={classes.content}>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h1"}
            style={{margin:10}}
          >
           {projects.title}
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"subHeading"}
          >
           Tech Stack: {projects.techStack}
          </Typography>
          <br/>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"subHeading"}
          >
           Details: {projects.details}
          </Typography>
          <Divider className={classes.divider} light />
          <div style={{display:"flex",justifyContent:"space-around",width:"50%", marginLeft:"auto",marginRight:"auto"}}>  
          <a href={projects.url} target="_blank">Project Link</a>
          <a href={projects.github}>GithubRepo</a>
          </div>
        </CardContent>
      </Card>
         
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

        <Carousel autoPlay="false">
        {projects}
        </Carousel>
      
         
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
