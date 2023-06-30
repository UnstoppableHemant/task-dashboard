import React from 'react'
import Header from '../components/header'

const Dashboard = () => {
  return (
    <div>
      <Header/>
      <div className='bg-black p-2 w-48 text-white h-full'>
        <div className='bg-white p-2 rounded-md text-black'>+ New Item</div>
        <div className='p-2 rounded-md' data-accordion="collapse">
          <h3>Dashboard</h3>
          <ul>
            <li>Commarce</li>
            <li>Commarce</li>
            <li>Commarce</li>
            <li>Commarce</li>
            <li>Commarce</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard