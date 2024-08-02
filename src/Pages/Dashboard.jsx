import React, { useEffect,  useState } from 'react'
import Header from '../Components/Common/Header';
import TabComponents from '../Components/DashBorad/Tabs';
import axios from 'axios';
import Search from '../Components/DashBorad/Search';
import PaginationControlled from '../Components/DashBorad/paginatin';
import PaginationComponent from '../Components/DashBorad/paginatin';
import Loader from '../Components/Common/loader';
import BackToTop from '../Components/Common/backtoup';
import Get100Coins from '../Functions/get100Coins';

function DashboardPage() {
  const [coins,setCoins]=useState([]);
  const [pageCoins,setPageCoins]=useState([]);
  const[search,setSearch]=useState("");
  const [isLoading,setLoading]=useState(true)

  const onSearchChange = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };
  var filterCoins=coins.filter((item)=>
    item.name.toLowerCase().includes(search.toLocaleLowerCase())
  ||
    item.symbol.toLowerCase().includes(search.toLocaleLowerCase()));
    const [page, setPage] = useState(1);
    const handlePageChange = (event, value) => {
      setPage(value);
      var previousIndex=(value-1)*10;
      setPageCoins(coins.slice(previousIndex,previousIndex+10));
    };
  
  useEffect(()=>{
   
    getData();
   

    
  },[])
   const getData= async()=>{
      const myCoins= await Get100Coins();
      if(myCoins){
        setCoins(myCoins)
  setPageCoins(myCoins.slice(0,10));
  setLoading(false);   
      }
                  
    }
  return (
    <> <Header/>
    <BackToTop/>
{isLoading?(
  <Loader/>
):(<div>
    

      <Search search={search} onSearchChange={onSearchChange}/>
      <TabComponents coins={search?filterCoins:pageCoins} />
      {!search && ( <PaginationComponent page={page} handlePageChange={handlePageChange}/>)
     
    }
   
      </div>)}
    </>
    
    
  )
}

export default DashboardPage;
