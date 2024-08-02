import * as React from 'react';

import Pagination from '@mui/material/Pagination';

import './styles.css'
import { useState } from 'react';
export default function PaginationComponent({page,handlePageChange}) {
 
    
  return (
   
   <div className='pagination-component'>
      <Pagination 
      sx={{
        "& .MuiPaginationItem-text": {
          color: "#fff !important",
          border: "1px solid var(--grey)",
        },
        "& .MuiPaginationItem-text:hover": {
        //   backgroundColor: "transparent !important",
        },
        "& .Mui-selected  ": {
          backgroundColor: "var(--blue) !important",
          borderColor: "var(--blue) !important",
          color:"#fff 1important"
        },
        "& .MuiPaginationItem-ellipsis": {
          border: "0px solid var(--gray)",
        },
      } } className='pagination' count={10} page={page} onChange={(event,value)=>handlePageChange(event,value)} />e
   </div>
  );
}