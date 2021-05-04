import React from "react";

import {
  CardContent,
  Collapse,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

export default function Collapse(props) {
  const { data } = props;
  return (
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
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Dimension</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {c.dimensions.map((item) => {
                return (
                  <TableRow key={item}>
                    <TableCell component="th" scope="row">
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
  );
}
