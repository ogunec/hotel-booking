import React from 'react'
import Header from '../../components/Header/Header'
import Rooms from '../../components/Rooms/Rooms'

export default function Home() {
  return (
    <>
      <Header />
      <div className='content'>
        <Rooms />
      </div>
    </>
  )
}


