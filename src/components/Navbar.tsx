import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          boxShadow: '0 0 5px 2px rgba(0,0,0,0.5)',
          height: '9vh',
          position: 'fixed', // Make the navbar fixed
          top: 0, // Position it at the top of the page
          zIndex: 1000, // Ensure it stays above other elements
          backgroundColor: 'white', // Add background color to avoid transparency issues
        }}>
          <h3 style={{width:'50%', padding: '2%'}}>bhaktha</h3>
          <div style={{width:'50%'}}>
            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                gap: '10%',
              }}
            >
              <NavLink to="/" className="Navbar">Home</NavLink>
              <NavLink to="/games" className="Navbar">Games</NavLink>
              <NavLink to="/trainers" className="Navbar">Trainers</NavLink>
              <NavLink to="/venues" className="Navbar">Venues</NavLink>
              <NavLink to="/more" className="Navbar">More</NavLink>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navbar
