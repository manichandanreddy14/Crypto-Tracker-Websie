import React from 'react'
import './styles.css'
import TemporaryDrawer from './drawer'
import Button from '../botton'
import { Link } from 'react-router-dom'
import DashboardPage from '../../../Pages/Dashboard'

function Header() {
  return (
    <div className='Navbar'>
      <h1 className='heading'>CryptoTtacker<span style={{color:"var(--blue)"}}>.</span></h1>
      <div className='links'><Link to="/" className='link'>
        <p>Home</p>
      </Link>
      <Link to="/" href='#' className='link'>
        <p>Compare</p>
      </Link>
      <Link to="/" className='link'>
        <p>Watchlist</p>
        
      </Link>
      <Link to='/dashboard' className='link'>
       <Button 
       text={"Dashbored"} 
       
       onClick={()=>console.log("hellow")}
        />
        
      </Link>
    
</div>
      <div className='mobile-drawer'>
         <TemporaryDrawer/> 
      </div>
    </div>
  )
}

export default Header
