import React from "react";

//for the grid list horizontal
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import image from '../../assets/img/faces/avatar.jpg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './CSS/Homepage.css'

//styling
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    topBox: {
        height: '40vh',
    },
    paper: {
        margin: theme.spacing(5, 4),
        isplay: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));
 
const tileData = [
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    img: image,
    title: 'Image',
    author: 'author',
  },
];

export default function Homepage() {
    const classes = useStyles();
    return (
        <Grid container className={classes.topBox} spacing={2}>
            {/* <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                {[0, 1, 2].map(value => (
                    <Grid key={value} item>
                    <Paper className={classes.paper} />
                    </Grid>
                ))}
                </Grid>
            </Grid> */}
            <div className={classes.paper}>
                <label id="movie_title">13 Reason Why</label>
                <br/>
                <br/>
                <br/>
                <label id="match">97% Match</label>
                <label id="year"> 2018</label>
                <label id="rating"> 5.1</label>
                <br/>
                <label id="sub_title">Season 3 Coming Friday</label>
                <br/>
                <br/>
                <label id="detail">Months after Spring Fling</label>
            </div>

            <div className={classes.root}>
                <GridList className={classes.gridList} cols={2.5}>
                    {tileData.map(tile => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                        title={tile.title}
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                        }}
                        actionIcon={
                            <IconButton aria-label={`star ${tile.title}`}>
                            <StarBorderIcon className={classes.title} />
                            </IconButton>
                        }
                        />
                    </GridListTile>
                    ))}
                </GridList>
            </div>
        </Grid>
    );
}