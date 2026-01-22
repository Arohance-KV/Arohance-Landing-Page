import React from 'react'

type Props = {}

const MeetPage = (props: Props) => {
  return (
    <div className="w-full h-screen">
      <iframe 
        src="https://cal.com/arohance/growth" 
        width="100%" 
        height="100%" 
        frameBorder="0" 
        style={{ border: 'none' }}
        title="Arohance Meeting Scheduler"
      />
    </div>
  )
}

export default MeetPage