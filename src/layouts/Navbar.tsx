import {useState, useEffect} from 'react'
import {Box, IconButton, Stack, Divider, Avatar, Badge} from '@mui/material';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { GearSix, User, Chats } from 'phosphor-react';

const hasStatus = true
const Navicons = [
    {
        index : 0,
        img : <User  />,
        alt : "User"
    },
    {
        index : 1,
        img : <Chats  />,
        alt : "Chats"
    },
    {
        index : 2,
        img : <Divider />,
        alt : " "
    },
    {
        index : 3,
        img : <GearSix  />,
        alt : "Settings"
    }
]
// this is the list of icons in the navbar
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));
  //this is the theme toggle switch
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  //this is the notification badge of status for mobile version
  

function Navbar() {
const [selected, setSelected] = useState(1);
const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 600);
  };

  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
 
  return (
    <>
            <Box id="navBar"
              sx={{
                height: {
                  xs: 80,
                  sm: '100vh',
                },
                width: {
                  xs: '100vw',
                  sm: 80,
                },
                display: 'flex',
                flexDirection: {xs: 'row', sm: 'column'},
                justifyContent: 'space-between',
                boxShadow: "0px 0px 0px 2px rgba(0,0,0,0.15)",
              }}>
                <Stack id="navBarIcons"
                  direction={{
                    xs: 'row',
                    sm: 'column',
                  }}
                  alignItems={{
                    xs: 'flex-start',
                    sm: 'center',
                  }}
                  justifyContent={{
                    xs: 'center',
                    sm: 'flex-start',
                  }}
                  p={2}
                  spacing={3}
                  >
                  <Box id="navBarLogo">
                    <Avatar src='/logo.svg' alt='logoName'/>
                  </Box>
                  <Stack id="navBarNavigation"
                  direction={{
                    xs: 'row',
                    sm: 'column',
                  }}
                  alignItems={{
                    xs: 'flex-start',
                    sm: 'center',
                  }}
                  justifyContent="center"
                  >
                    {Navicons.map((icon) => (
                      <IconButton
                        key={icon.index}
                        onClick={() => setSelected(icon.index)}
                        sx={{
                          color: selected === icon.index ? '#3ABEF9' : '#A7E6FF',
                          '&:hover': {
                            color: '#3572EF',
                          },
                        }}>
                        {icon.img}
                      </IconButton>
                    )
                    )}
                  </Stack>
                </Stack>
                <Stack id="navBarAvatar"
                direction={{
                  xs: 'row',
                  sm: 'column',
                }}
                alignItems={{
                  xs: 'flex-start',
                  sm: 'center',
                }}
                justifyContent={{
                  xs: 'center',
                  sm: 'flex-start',
                }}
                p={2}
                spacing={3}>
                    <MaterialUISwitch />
                    {isMobile && hasStatus 
                    ? <StyledBadge
                      overlap="rectangular"
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      variant="dot">
                        <Avatar src='/profilePic.jpg' alt='A'/>
                      </StyledBadge> 
                    : <Avatar src='/profilePic.jpg' alt='A'/>}
                </Stack>
            </Box>
    </>
  )
}

export default Navbar