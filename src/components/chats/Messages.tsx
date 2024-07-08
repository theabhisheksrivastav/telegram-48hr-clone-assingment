import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material'
import { ArrowLeft, GearSix } from 'phosphor-react'

interface MyComponentProps {
    avatarImg: string;
    chatName: string;
    chatStatus: string;
    chat: Array;
  }

function Messages({avatarImg, chatName, chatStatus, chat }) {

const isChat = true;
  return (
    <>
        <Box id='mainMessageBox'
        sx={{
            height:'100vh',
            width:{xs:'100vw', sm:`calc(100vw - 520 - 100)`},
            bgcolor : '#A7E6FF',
        }}>
            {isChat 
            ? (<Box id='messageBoxBar'
                sx={{
                height: 55,
                width: 'full',
                justifyContent: 'center',
                alignContent: 'center',
                boxShadow: "0px 0px 0px 2px rgba(0,0,0,0.15)",
                bgcolor: 'white',
                border: '1px solid #3572EF',
                borderRadius: 2
                
            }}>
                <Stack
                direction={"row"}
                justifyContent='space-between'

                >
                    <Stack
                        direction={"row"}
                        alignItems={'center'}
                        justifyContent={'center'}
                        spacing={2}
                        >
                            <IconButton>
                            <ArrowLeft size={24}/> 
                            </IconButton>
                            <Avatar src={avatarImg} alt={chatName || 'Name'}/>
                            <Stack>
                                <Typography>
                                    {chatName || 'Name'}
                                </Typography>
                                <Typography>
                                    {chatStatus || 'Status'}
                                </Typography>
                            </Stack>
                    </Stack>
                    <Stack
                    direction={"row"}
                    alignItems={'center'}
                    justifyContent={'center'}
                    spacing={2}
                    paddingX={2}>
                        <GearSix size={28}/>
                    </Stack>
                </Stack>
            </Box>) : null}
        </Box>
    </>
  )
}

export default Messages