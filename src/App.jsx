import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import Footer from './Components/Common/Footer'
// import Header from './Components/Common/Header'
// import Main from './Components/LandingPage/main'
import Home from './Pages/Home'
import DashboardPage from './Pages/Dashboard'
import CoinPage from './Pages/Coin'
import ComparePage from './Pages/ComparePage'




function App() {


  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/dashboard' element={< DashboardPage/>}/>
      <Route path='/coin/:id' element={< CoinPage/>}/> 
     <Route path='/compare' element={<ComparePage/>}/>
    {/*<Route path='/watchlist' element={<watchlistPage/>}/>  */}
   </Routes>
   </BrowserRouter>

   </>
  )
}

export default App
