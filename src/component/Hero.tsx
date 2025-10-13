import React from 'react'
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/Create';
import SignUp from './SignUp';
    import {onAuthStateChanged } from "firebase/auth";
import Avatar from '@mui/material/Avatar';
import {getData,getSpecificDoc,deletedDocument,auth,signOutFunction} from './FirebaseConfig'
import Studies from './Studies';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SignIn from './SignIn'


const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);
function Hero() {
  
  const [data,setData] = React.useState([]);
  const [photo,setPhoto] = React.useState<string>();
 const [open, setOpen] = React.useState(false);
  const [opened, setOpened] = React.useState(false);
    const [docArr, setDocArr] = React.useState<{}[]>([]);
   const [listed, setListed] = React.useState(false);
   const [id,setId] = React.useState();
   const [username,setUsername] = React.useState<string>();
     const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [openMenu, setOpenMenu] = React.useState(false);
    

  const theme = useTheme();
 React.useEffect(() => {
  
onAuthStateChanged(auth,(user)=>{
  if(user){

setPhoto(user?.photoURL);
setUsername(user?.displayName);
console.log("username",username)
console.log('photo',photo)

console.log("User state from hero",user);

  }else{
console.log("User Signed Out")
  }
})



  const unsubscribe = getData((data) => setData(data));

  return () => unsubscribe(); // cleanup listener
 
}, [username,photo]);

const openMenuFunction =(e)=>{
  e.preventDefault();
  setOpenMenu(true)
}
const closeMenuFunction =()=>{
  setOpenMenu(false);
  
}


  const openDialog = () => {
    setOpened(true);
  }
console.log(data)
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
 const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    signOutFunction()
    setAnchorElUser(null);
  };

  return (
    <div className={'d-flex row h-150 mb-4'} style={{ width: "85%", paddingLeft: "18%" }}>
      <AppBar position="fixed" open={open} sx={{ background: "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            PhysioVerse
          </Typography>
{username?.length > 0  ? <Box sx={{ flexGrow: 0,marginLeft: 'auto' }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
               {photo?.length > 0 ? <Avatar alt="Remy Sharp" src={photo} />:<Avatar>{username[0]?.toUpperCase()}</Avatar>}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>Profile</Typography>
                </MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>Sign Out</Typography>
                </MenuItem>
            </Menu>
          </Box>:<Button variant="contained" style={{ height: "40px", marginLeft: 'auto' }} onClick={openDialog}>Sign Up</Button>
}        </Toolbar>
      </AppBar>
      <SignUp open={opened} setOpened={setOpened}  />

      <Drawer variant="permanent" open={open} className='d-flex'>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['New Chat', 'Search'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                      justifyContent: 'initial',
                    }
                    : {
                      justifyContent: 'center',
                    },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                        mr: 3,
                      }
                      : {
                        mr: 'auto',
                      },
                  ]}
                >
                  {index % 2 === 0 ? <CreateIcon onClick={()=>setDocArr([])}/> : <SearchIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={[
                    open
                      ? {
                        opacity: 1,
                      }
                      : {
                        opacity: 0,
                      },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem key={"text"} disablePadding sx={{ display: 'block', paddingLeft: 1 }}><Typography variant="h6" noWrap component="div">
            Chats
          </Typography>
          </ListItem>
          {data?.map((text, index) => (
            <ListItem key={text.id} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                      justifyContent: 'initial',
                    }
                    : {
                      justifyContent: 'center',
                    },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                        mr: 3,
                      }
                      : {
                        mr: 'auto',
                      },
                  ]}
                >
                </ListItemIcon>
                <ListItemText
                              id="demo-positioned-button"
      

                onClick={()=>{setListed(true);getSpecificDoc(text.id,docArr);setId(text.id);}}
                onContextMenu={openMenuFunction}
                  primary={text.question}
                  sx={[
                    open
                      ? {
                        opacity: 1,
                      }
                      : {
                        opacity: 0,
                      },
                  ]}
                />
                <Menu
                id="menu-appbar"
                sx={{transform:'translate(5%,-50%)'}}
              anchorEl={openMenu}
              keepMounted
              open={Boolean(openMenu)}
              onClose={closeMenuFunction}
            >
                <MenuItem onClick={()=>{closeMenuFunction();deletedDocument(text.id)}}>
                  <Typography sx={{ textAlign: 'center' }}>delete the document</Typography>
                </MenuItem>
            </Menu>
              </ListItemButton>
               
            </ListItem>
          ))}
        </List>
        <Avatar alt="Upload new avatar" className='mt-auto' src={photo} >{photo?.length === 0 && username[0]?.toUpperCase()}
</Avatar>
      </Drawer>

      <h3 className="display-3 fw-bold mb-5 text-center">
        Understanding the Universe
      </h3>
      <p className="text-center">
        The universe is vast, mysterious, and filled with secrets yet to be
        uncovered. Every theory we create brings us closer to understanding
        the fabric of reality — the nature of time, space, energy, and matter.
        As humanity, we are destined to explore, to question, and to expand
        our vision beyond the stars.
      </p>

      <p className="fst-italic mb-4 text-center">
        As Galileo once looked through his telescope to expand our vision,
        we too must scale the scope of our understanding to see the universe.
      </p>
      <Studies docArr={docArr} listed={listed} id={id}/>
      
    </div>
  )
}

export default Hero;