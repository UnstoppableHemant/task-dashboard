const SideNav = () => {
  return (
    <div className='bg-black p-2 text-white h-full'>
        <div className='bg-white p-2 rounded-md text-black'>+ New Item</div>
        <div className='p-2'>
          <h3>Dashboard</h3>
          <ul>
            <li>Commarce</li>
            <li>Analytics</li>
            <li>Crypto</li>
            <li>Helpdesk</li>
            <li>Monitoring</li>
            <li>Fitnes</li>
          </ul>
        </div>
        <div className='p-2'>
          <h3>Application</h3>
        </div>
        <div className='p-2'>
          <h3>Elements</h3>
        </div>
        <div className='p-2'>
          <h3>Forms</h3>
        </div>
        <div className='p-2'>
          <h3>Plugins</h3>
        </div>
        <div className='p-2'>
          <h3>Elements</h3>
        </div>
        <div className='p-2'>
          <h3>Datagrids</h3>
        </div>
        <div className='p-2'>
          <h3>Settings</h3>
        </div>
      </div>
  )
}

export default SideNav