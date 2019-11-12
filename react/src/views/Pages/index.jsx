import ReactDOM from 'react-dom';
import './CSS/index.css';
//import App from './App';


import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';

//images
import thevoiceImage from '../../images/the voice.jpg';
import thedailyshowImage from '../../images/the daily show.jpg';
import theworldcupImage from '../../images/world cup.jpg';
import nbaImage from '../../images/nba.png';
import jimmykimmelImage from '../../images/jimmy kimmel.jpg';
import thecoachellaImage from '../../images/coachella.jpg';

const useStyles = makeStyles(theme => ({

    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: 'clear',
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
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

    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }));

  const tileData = [
    {
      img: thevoiceImage,
      title: 'The Voice',
      author: 'author',
    },
    {
      img: thedailyshowImage,
      title: 'The Daily Show',
      author: 'author',
    },
    {
      img: nbaImage,
      title: 'Watch NBA Live',
      author: 'author',
    },
    {
      img: thecoachellaImage,
      title: 'Coachella',
      author: 'author',
    },
    {
      img: jimmykimmelImage,
      title: 'Jimmy Kimmel',
      author: 'author',
    },
    {
      img: theworldcupImage,
      title: 'World Cup 2020',
      author: 'author',
    },
  ];

export default function Homepage() {
    const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
      <div className="bg">
        {/* <div className={classes.grow}>
        <AppBar position="static" id="appbar">
            <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
                DiveVR
            </Typography>
            <Button id="menu-button">
                Home
            </Button>
            <Button id="menu-button">
                Experiences
            </Button>
            <Button id="menu-button">
                LiveVR
            </Button>
            <Button id="menu-button">
                Marketplace
            </Button>

            <div className={classes.search}>
                <div className={classes.searchIcon}>
                <SearchIcon />
                </div>
                <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
                <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                >
                <AccountCircle />
                </IconButton>
                
            </div>
            
            <label id="name">Abraham</label>
            <div className={classes.sectionMobile}>
                <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
                >
                <MoreIcon />
                </IconButton>
            </div>
            </Toolbar>
        </AppBar>
        
        {renderMobileMenu}
        {renderMenu}
        </div> */}
        <div className = "titleView">
            <label id="title">Experience VR</label>
            <br/>
            <label id="subtitle">Spiderman Far From Home</label>
        </div>
        
        <div className={classes.root} id = "trending">
            <label id="category">Trending VR</label>
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
    </div>
  );
}
