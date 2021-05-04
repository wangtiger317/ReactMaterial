import React, { useEffect, useState } from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import {
  CardActionArea,
  CardActions,
  CardContent,
  Collapse,
  Divider,
  IconButton,
  Typography,
} from "@material-ui/core";
import {
  Edit as EditIcon,
  Favorite as FavoriteIcon,
} from "@material-ui/icons/";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
// import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { createAPIEndpoint, EndPoints } from "../../services/panneau";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Panneau(props) {
  const classes = useStyles();
  const [isClicked, setIsClicked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [category, setCategory] = useState("Danger");
  const [signData, setSignData] = useState();

  const handleExpandClick = (cardID) => {
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
    createAPIEndpoint(EndPoints.PANNEAU)
      .fetchByCategory(props.location.state)
      .then((res) => {
        let signData = res.data;
        setSignData(signData);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {}, [category]);

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
                      <CardIcon color="rose">
                        <img
                          src={require(`assets/img/panneaux/${c.image}.png`)}
                          style={{ width: 75, height: 75 }}
                          alt=""
                        />
                      </CardIcon>
                      <h3 className={classes.cardTitle}>{c.code}</h3>
                      <p className={classes.cardCategory}>{c.categorie}</p>
                      <p className={classes.cardCategory}>{c.source}</p>
                    </CardHeader>
                  </CardActionArea>
                  <CardFooter icon>
                    <div>
                      <CardActions disableSpacing>
                        {c.isFavorite ? (
                          <IconButton
                            aria-label="ajouter au favoris"
                            disableRipple
                            onClick={() => handleFavoriteClick(c.id)}
                          >
                            <FavoriteIcon
                              color={isClicked[c.id] ? "secondary" : "primary"}
                            />
                          </IconButton>
                        ) : null}
                        <IconButton
                          aria-label="ajouter au favoris"
                          disableRipple
                        >
                          <EditIcon />
                        </IconButton>
                      </CardActions>
                    </div>
                  </CardFooter>
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
                        Tome:
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
                      <Typography variant="body2" component="p" gutterBottom>
                        450x600 900x600
                      </Typography>
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
