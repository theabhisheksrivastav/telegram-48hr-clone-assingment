import React from 'react'
import Navbar from './layouts/Navbar'
import Chats from './components/chats/Chats'
import Messages from './components/chats/Messages'
import { Stack } from '@mui/material'

function App() {
  return (
    <>
      <Stack direction={{
        xs: "column",
        sm: "row"}} >
          <Navbar />
          <Chats />
          <Messages />
      </Stack>
    </>
  )
}

export default App