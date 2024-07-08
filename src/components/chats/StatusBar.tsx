import { Box, IconButton, Typography, Stack } from '@mui/material'
import { Circle, CircleDashed } from 'phosphor-react'

const hasStatus = false

function StatusBar() {
  return (
    <>
        <Box sx={{
            height: 40,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 2,
            borderBottom: '1px solid rgba(0,0,0,0.15)',
        }}>
            <Stack
                p={1}
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}>
                <Typography variant='h5'>
                    Chats
                </Typography>
                <IconButton>
                    {hasStatus ? <CircleDashed size={36}/> : <Circle size={36}/>}
                </IconButton>
            </Stack>
        </Box>
    </>
  )
}

export default StatusBar