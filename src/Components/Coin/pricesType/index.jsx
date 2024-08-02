import  React, { useState } from 'react';
import "./sytels.css"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggelePriceType({priceType ,handlePriceTypeChange}) {


  return (
    <div className='Toggle-button'>
    <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
      sx={{
        "&.Mui-selected": {
          color: "var(--blue) !important",
        },
        borderColor: "var(--blue)",
        border: "unset !important",
        "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid var(--blue)!important",
          borderColor: "unset",
          color: "var(--blue) !important ",
        },
        "& .MuiToggleButton-standard": {
          color: "var(--blue) !important",
        },
      }}
     
    >
      <ToggleButton value="prices" className='toggle-btn' >
       Prices
      </ToggleButton>
      <ToggleButton value="market_caps"  className='toggle-btn'>
     Market Cap
      </ToggleButton>
      <ToggleButton value="total_volumes"  className='toggle-btn' >
        Total Volume
      </ToggleButton>
     
    </ToggleButtonGroup></div>
  );
}