import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import VideocamIcon from "@material-ui/icons/Videocam";
import WatchLaterIcon from "@material-ui/icons/WatchLater";

const useStyles = makeStyles({
  root: {
    maxWidth: "75%",
    width: "65%",
    height: "100%",
    boxShadow: "0 1px 8px 0 rgb(0 0 0 / 8%)",
  },
  gridroot: {
    flexGrow: 1,
  },
  note: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    direction: "column",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function App() {
  const classes = useStyles();
  let name = "Raj";
  let meeting_time = 30;
  let prompt_message = "Web conferencing details provided upon confirmation";

  return (
    <Grid
      style={{ minHeight: "100vh" }}
      container
      spacing={0}
      align="center"
      justify="center"
      direction="column"
    >
      <Grid item style={{ height: "550px" }}>
        <Card className={classes.root}>
          <div className={classes.gridroot} style={{ height: "inherit" }}>
            <Grid container spacing={0} style={{ height: "inherit" }}>
              <Grid
                item
                xs={12}
                sm={6}
                style={{
                  borderRight:
                    "1px solid var(--text-color-level3, rgba(26, 26, 26, 0.1))",
                }}
              >
                <div>
                  <div style={{ textAlign: "left", marginLeft: "27px" }}>
                    <h3
                      style={{
                        marginTop: "27px",
                        marginBottom: "0",
                        color: "grey",
                      }}
                    >
                      {name}
                    </h3>
                    <h2 style={{ marginTop: "7px" }}>
                      {meeting_time} Minute Meeting
                    </h2>
                    <div
                      style={{
                        display: "flex",
                        color: "grey",
                        fontWeight: "bold",
                      }}
                    >
                      <WatchLaterIcon />
                      <p
                        style={{
                          display: "inline-flex",
                          marginTop: "0",
                          marginLeft: "10px",
                        }}
                      >
                        {meeting_time} mins
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        color: "grey",
                        fontWeight: "bold",
                      }}
                    >
                      <VideocamIcon />
                      <p
                        style={{
                          display: "inline-flex",
                          marginTop: "0",
                          marginLeft: "10px",
                        }}
                      >
                        {prompt_message}
                      </p>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <p>Right Side</p>
              </Grid>
            </Grid>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}
