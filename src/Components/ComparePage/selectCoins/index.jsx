import { MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Get100Coins from '../../../Functions/get100Coins';
import "./sytels.css";
function SelectCoins({crypto1,crypto2,handleCoinChange}) {   

  const [allCoins,setAllCoins]=useState([])
    const sytels={
          height: "2.5rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
        }
        

        
        useEffect(()=>{
getData();
        },[])
        async function getData(){
          const myCoins= await Get100Coins();
          setAllCoins(myCoins);
        }
  return (
    <div>
 <div className="coins-flex" >
       <p>Crypto 1</p>
      <Select
 
        sx={sytels} 
         value={crypto1 }
         label="Crypto 1"                    
        onChange={(event)=> handleCoinChange(event,false)}
      >
        {allCoins.map((coin)=> <MenuItem value={coin.id}>{coin.name}</MenuItem>)}
       
       
      </Select>
      <p>Crypto 2</p>
      <Select
 
        sx={sytels} 
         value={crypto2 }
         label="Crypto 2"                    
        onChange={ (event)=>handleCoinChange(event,true)}
      >
        {allCoins.map((coin)=> <MenuItem value={coin.id}>{coin.name}</MenuItem>)}
       
       
      </Select>
    </div>
    </div>
  )
}

export default SelectCoins;
