import { Box, Button, Divider, dividerClasses, IconButton, Pagination, PaginationItem, Stack, Typography, Avatar } from '@mui/material'
import { useEffect, useState } from 'react'
import StatusBar from './StatusBar'
import { Archive } from 'phosphor-react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Chats() {



const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
const [pagination, setPagination] = useState([])
const [chats, setChats] = useState([])
const [url, setUrl] = useState('https://devapi.beyondchats.com/api/get_all_chats?page=1')

useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

useEffect(() => {
  // fetch chats
  const fetchChats  = async () => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'BeyondChats'
        }
      }
      )
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      console.log(data)
      const chats = data.data.data
      chats.map((chat)=> console.log(chat.creator.name))
      const pagination =data.data.links
      // console.log(pagination)
      setChats(chats)
      setPagination(pagination)
    } catch (error) {
      throw new Error(String(error))
    }
  }

  fetchChats(); // Call the fetchChats function to fix the 'fetchChats' is assigned a value but never used' problem.
}, [url]) // Add an empty dependency array to the useEffect hook to fix the 'fetchChats' is declared but its value is never read' problem.
  return (
    <>
        <Box id="chatsBox"
        sx={{
            height: {xs: 'calc(100vh - 80px)', sm: '100vh'},
            width: {xs: '100vw', sm: 520},
            boxShadow: "0px 0px 0px 2px rgba(0,0,0,0.15)",
        }}>
            <Stack>
              {isMobile ? null : <StatusBar />}
              {/* <Stack id="archivedStack"
              paddingInline={2}
              direction="row"
              spacing={3}>
                <IconButton>
                  <Archive size={24} />
                </IconButton>
                <Button
                sx={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  textTransform: 'none',
                  color: 'rgba(0,0,0,0.6)',
                  fontSize: 16,
                  fontWeight: 600,
                  '&:hover': {
                    color: 'rgba(0,0,0,0.8)',
                    backgroundColor: 'rgba(0,0,0,0.1)'
                  }
                
                }}>
                  Archived
                </Button>
              </Stack> */}
              {/* we are adding a page link block as the api given has no archived data but the chats are paginated */}
              {/* <Divider /> */}
                {/* {pagination.map((page) => {
                  
                })} */}
                <Box sx={{
                    alignContent: 'center',
                    justifyContent: 'center',
                    paddingTop: 1,
                    paddingBottom: 1,
                  }}>
                <Pagination
                  count={pagination.length}
                  renderItem={(item) => (
                    <PaginationItem
                      slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                      {...item}
                    />
                  )}
                  onChange={(event, page) => {
                    setUrl(`https://devapi.beyondchats.com/api/get_all_chats?page=${page}`)
                    console.log(page)
                    console.log(chats)
                    // console.log(data)  
                  }
                  }
                />
                </Box>
                <div>
                {chats.map((chat)=> (
                  <Box
                  sx={{
                    height: 'calc(calc(100vh - 80px)/10)',
                    borderRadius: 2,
                    boxShadow: "0px 0px 0px 2px rgba(0,0,0,0.15)",
                  }}>
                  <Stack
                  direction='row'
                  alignItems='center'
                  justifyContent='start'
                  paddingX={1}
                  paddingY={0.5}
                  spacing={2}>
                      <Avatar src="chat?avatar" alt={chat?.creator.name}/>
                      <Stack>
                      <Typography>
                        {chat?.creator.name  || `Name`}
                      </Typography>
                      <Typography>
                          {chat?.status}
                      </Typography>
                      </Stack>
                  </Stack>
              </Box>
                ))}
              </div>
            </Stack>
        </Box>
    </>
  )
}

export default Chats