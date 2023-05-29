import React from 'react'

const MeetupContext = React.createContext({
  name: '',
  objDetails: {},
  setDetails: () => {},
})

export default MeetupContext
