import React from 'react';
import './styles.css';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Tooltip } from '@mui/material';
import { convertNumber } from '../../../Functions/convertNumber';
import { Link } from 'react-router-dom';
function List({ coin }) {
 return(
  <Link to={`/coin/${coin.id}`}>
  <tr className='list-row'>
    <Tooltip placement='bottom-start' title="Coin logo"> <td className='info-flex'>
    <img src={coin.image} className='coin-logo' alt='image'/></td></Tooltip>
    <Tooltip title="Coin info" placement='bottom-start'>
           
     <td className='name-col'>
               <p className='coin-symbol  td-font'>{coin.symbol}</p>
              <p className='coin-name  td-font'>{coin.name}</p>
            </td>
         </Tooltip>
    {coin.price_change_percentage_24h > 0 ?(
       <Tooltip placement='bottom-start' title="prize clip positive"> <td className='price-chip1 positive' >{coin.price_change_percentage_24h.toFixed(2)}%</td>
           
          </Tooltip>) : (<Tooltip placement='bottom-start' title="prize clip negative">
            <td className='price-chip1 negative'>{coin.price_change_percentage_24h.toFixed(2)}%</td></Tooltip>
          )}
          {coin.price_change_percentage_24h > 0 ? (
          <Tooltip title="Postive"><td className='TrendingUpIcon positive td-icon'><TrendingUpIcon/></td></Tooltip>):( <Tooltip title="Negative td-icon"><td className='TrendingUpIcon negative'><TrendingDownIcon/></td></Tooltip>)}
        <Tooltip placement='bottom-start' title="Current prize">
        <td>
      
       <h3 className='coin-price td-center-align' style={{color:coin.price_change_percentage_24h <
            0?"var(--red)":"var(--green)"}}>${coin.current_price.toLocaleString()}</h3>
       </td></Tooltip>
       <Tooltip placement='bottom-start' title="Total Volume"><td>
       <p className='total-value  td-rigth-align td-font'>{coin.total_volume.toLocaleString()}</p> </td></Tooltip>
       <Tooltip placement='bottom-start' title="Market Cap"><td className=' disktop-market'><p className='Market  td-font td-rigth-align'>${coin.market_cap.toLocaleString()}</p></td></Tooltip>
       
       
       <Tooltip placement='bottom-start' title="Total Volume"><td >
       <p className='total-value  td-rigth-align td-font'>{coin.total_volume.toLocaleString()}</p> </td></Tooltip>
       <Tooltip placement='bottom-start' title="Market Cap"><td className=' modile-market'><p className='Market  td-font td-rigth-align'>
        ${convertNumber(coin.market_cap)}</p></td></Tooltip>
       
       
      
  </tr></Link>
 )
}

export default List;
