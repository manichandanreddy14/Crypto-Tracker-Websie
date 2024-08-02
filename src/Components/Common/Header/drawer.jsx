import {useState} from "react";
import Drawer from '@mui/material/Drawer';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from "@mui/material";

export default function AnchorTemporaryDrawer() {
const [open,setOpen]=useState(false)
 
  return (
    <div>
     
        
          <IconButton onClick={()=>setOpen(true)}><MenuRoundedIcon className="link"/></IconButton>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}
          >
           <div className="drawer-div">
           <a href='#' className='link'>
        <p>Home</p>
      </a>
      <a href='#' className='link'>
        <p>Compare</p>
      </a>
      <a href='#' className='link'>
        <p>Watchlist</p>
        
      </a>
      <a href='#' className='link'>
        <p>Dashdorad</p>
        
      </a>
           </div>
          </Drawer>
    
    </div>
  );
}