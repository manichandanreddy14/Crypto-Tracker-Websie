import React from 'react'
import "./styles.css"
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import List from '../List';
import { Link } from 'react-router-dom';
function Grid({coin}) {
  return (
    <>
    <Link to={`/coin/${coin.id}`}>
     <div className={`grid-container ${coin.price_change_percentage_24h < 0 ? "grid-container-red" : ""}`}>
        <div className='info-flex'>
            <img src={coin.image} className='coin-logo' alt='image'/>
            <div className='name-col'>
                <p className='coin-symbol'>{coin.symbol}</p>
                <p className='coin-name'>{coin.name}</p>
            </div>
            
            </div><div className='chip-flex'>
          {coin.price_change_percentage_24h > 0 ? (
            <div className='price-chip positive'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
           
          ) : (
            <div className='price-chip negative'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
          )}
           {coin.price_change_percentage_24h > 0 ? (
          <div className='TrendingUpIcon positive'><TrendingUpIcon/></div>):( <div className='TrendingUpIcon negative'><TrendingDownIcon/></div>)}
        </div>
        <div className="info-container" >
             <h3 className='coin-price' style={{color:coin.price_change_percentage_24h <
            0?"var(--red)":"var(--green)"}}>${coin.current_price.toLocaleString()}</h3>
            <p className='total-value'>Total Volume:{coin.total_volume.toLocaleString()}</p>
            <p className='total-value'>Market Cap:${coin.market_cap.toLocaleString()}</p>
            </div>
      
      </div> </Link>
    </>
  )
}

export default Grid
