import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import DeleteIcon  from '@material-ui/icons/Delete';
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction="column" justify='center' alignItems="baseline" >
        <Grid item xs>
          <Button className={classes.paper} variant="contained" color="primary">
            Button1
          </Button>
        </Grid>
        <Grid item xs>
          <Button className={classes.paper} variant="contained" color="secondary">
            Button2
          </Button>
        </Grid>
        <Grid item xs>
          <Button className={classes.paper} variant="contained" color="primary">
            Button3
          </Button>
        </Grid>
        <br/>
        *** App buttons ***
        <br/><br/>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
        />
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<AddIcon />}
        />
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<RemoveIcon />}
        />
        <br/><br/>
        *** List ***
        <List>
          <ListItem>
            <ListItemIcon>
              <Checkbox/>
            </ListItemIcon>
            <ListItemText primary={`item 1`}/>
            <ListItemIcon>
              <IconButton>
                <RemoveIcon/>
              </IconButton>
            </ListItemIcon>
            <span>0</span>
            <ListItemIcon>
              <IconButton>
                <AddIcon/>
              </IconButton>
            </ListItemIcon>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction> 
          </ListItem>
        </List>
      </Grid>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
