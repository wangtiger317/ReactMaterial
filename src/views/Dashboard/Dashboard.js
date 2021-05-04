import React, { useEffect, useState } from "react";
// @material-ui/core
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  CardActionArea,
  CardActions,
  CardContent,
  Collapse,
  Divider,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import {
  Edit as EditIcon,
  Favorite as FavoriteIcon,
} from "@material-ui/icons/";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
// import CardBody from "components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

import { createAPIEndpoint, EndPoints } from "../../services/panneau";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard(props) {
  const classes = useStyles();
  const [isClicked, setIsClicked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [category, setCategory] = useState("Danger");
  const [signData, setSignData] = useState();

  const handleExpandClick = (cardID) => {
    console.log('dfsfsfs', cardID);
    setExpanded((prevState) => ({
      ...prevState,
      [cardID]: !prevState[cardID],
    }));
  };

  const handleFavoriteClick = (cardID) => {
    setIsClicked((prevState) => ({
      ...prevState,
      [cardID]: !prevState[cardID],
    }));
  };

  useEffect(() => {
    console.log("useEffect called Dashboard", props.location.state);
    createAPIEndpoint(EndPoints.PANNEAU)
      .fetchByCategory(props.location.state)
      .then((res) => {
        let signData = res.data;
        setSignData(signData);
        setCategory(props.location.state);
      })
      .catch((err) => console.log(err));

  }, []);

  console.log('fdsfsfsf', signData);

  return (
    <div>
      <GridContainer>
        {signData &&
          signData.map((c) => {
            return (
              <GridItem xs={12} sm={6} md={3} key={c.id}>
                <Card>
                  <CardActionArea
                    disableRipple
                    onClick={() => handleExpandClick(c.id)}
                  >
                    <CardHeader stats icon>
                      <CardIcon color="white">
                        <img
                          src={require(`assets/img/panneaux/${c.image}.png`)}
                          className={classes.cardIcon__img}
                          alt=""
                        />
                      </CardIcon>
                      <h2 className={classes.cardTitle}>{c.code}</h2>
                      <h2 className={classes.cardCategory} style={{background:"red"}}>{c.categorie}</h2>
                      <h2 className={classes.cardCategory}>{c.source}</h2>
                    </CardHeader>
                    <h5 className={classes.cardHeaderFooter}>{c.image}</h5>
                  </CardActionArea>
                  {c.favorites || c.source !== "MTQ" ? (
                    <CardFooter icon>
                      <div>
                        <CardActions disableSpacing>
                          {c.Favorite ? (
                            <IconButton
                              aria-label="ajouter au favoris"
                              disableRipple
                              onClick={() => handleFavoriteClick(c.id)}
                            >
                              <FavoriteIcon
                                color={
                                  isClicked[c.id] ? "secondary" : "primary"
                                }
                              />
                            </IconButton>
                          ) : null}
                          {c.source !== "MTQ" ? (
                            <IconButton
                              aria-label="ajouter au favoris"
                              disableRipple
                            >
                              <EditIcon />
                            </IconButton>
                          ) : null}
                        </CardActions>
                      </div>
                    </CardFooter>
                  ) : null}
                  <Collapse in={expanded[c.id]} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography
                        paragraph
                        variant="h6"
                        className={classes.descriptionHeader}
                      >
                        Description:
                      </Typography>
                      <Typography variant="body2" component="p" gutterBottom>
                        {c.description}
                      </Typography>
                      <Divider variant="middle" className={classes.divider} />
                      <Typography
                        paragraph
                        variant="h6"
                        className={classes.descriptionHeader}
                      >
                        Usage:
                      </Typography>
                      <Typography variant="body2" component="p" gutterBottom>
                        Route
                      </Typography>
                      <Divider variant="middle" className={classes.divider} />
                      <Typography
                        paragraph
                        variant="h6"
                        className={classes.descriptionHeader}
                      >
                        Couleur:
                      </Typography>
                      <Typography variant="body2" component="p" gutterBottom>
                        {c.couleur}
                      </Typography>
                      <Divider variant="middle" className={classes.divider} />
                      <Typography
                        paragraph
                        variant="h6"
                        className={classes.descriptionHeader}
                      >
                        TomeV:
                      </Typography>
                      <Typography variant="body2" component="p" gutterBottom>
                        {c.tomeV}
                      </Typography>
                      <Divider variant="middle" className={classes.divider} />
                      <Typography
                        paragraph
                        variant="h6"
                        className={classes.descriptionHeader}
                      >
                        Dimensions:
                      </Typography>
                      <TableContainer
                        component={Paper}
                        className={classes.table}
                      >
                        <Table>
                          <TableHead className={classes.tableHeader}>
                            <TableRow>
                              <TableCell className={classes.tableCell}>
                                Dimension
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {c.dimensions.map((item) => {
                              return (
                                <TableRow
                                  key={item}
                                  className={classes.tableRow}
                                >
                                  <TableCell
                                    component="th"
                                    scope="row"
                                    style={{ textAlign: "center" }}
                                  >
                                    {item}
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </CardContent>
                  </Collapse>
                </Card>
              </GridItem>
            );
          })}
      </GridContainer>
    </div>
  );
}
