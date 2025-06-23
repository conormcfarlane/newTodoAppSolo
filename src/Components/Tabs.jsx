import React from 'react'

export default function Tabs() {
  const tabs = ['All','Active','Completed']
  return (
    <div className='flex justify-around'>
      {tabs.map(tab => (
        <div key={tab}>
          <p>{tab}</p>
        </div>
      ))}
    </div>
  )
}
