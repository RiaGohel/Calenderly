import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: "75%",
    width: "65%",
    height: "100%",
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
  const bull = <span className={classes.bullet}>•</span>;

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
                <p>Left Side</p>
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
