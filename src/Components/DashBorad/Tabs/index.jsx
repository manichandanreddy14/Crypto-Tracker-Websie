import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { color } from 'framer-motion';
import { createTheme, ThemeProvider } from '@mui/material';
import Grid from '../gird';
import "./styles.css"
import List from '../List';
export default function TabComponents 
({coins}) {
  const [value, setValue] = React.useState('Grid');
const style={
  width:"50vw",
  color:"var(--white)",
  fontSize:"1.2rem",
  fontWeight:600,
  fontFamily:"Inter",
  textTransform:"capitalize"
}
const theme = createTheme({
  palette:{
    primary:{ main:"#3aB0e9"},
   
  },
});
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
    <div >
      <TabContext value={value}>
        <div >
          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab sx={style}
            label="Grid" value="Grid" />
            <Tab 
            sx={style}
            label="List" value="List" />
            
          </TabList>
        </div>
        <TabPanel value="Grid"><div className='grid-flex'>
          {coins.map((coin,i)=>{
            return(
             <Grid coin={coin}/>
            )
          })}
          </div></TabPanel>
        <TabPanel value="List"><div>
          <table className='list-table'>  {coins.map((item,i)=>{
            return(
             <List coin={item} key={i}/>
            )
          })}</table>
      
          </div></TabPanel>

      </TabContext>
    </div></ThemeProvider>
  );
}
;