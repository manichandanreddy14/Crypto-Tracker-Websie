// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Header from '../Components/Common/Header';
// import Loader from '../Components/Common/loader';
// import axios from 'axios';
// import { CoinObject } from '../Functions/convertCoinData';
// import List from '../Components/DashBorad/List';
// import CoinInfo from '../Components/Coin/CoinInfo';
// import { getCoinData } from '../Functions/getCoinData';
// import { getCoinPrices } from '../Functions/getCoinPrices';

// function CoinPage() {
//   const [isLoading, setLoading] = useState(true);
//   const [coinData, setCoinData] = useState();
//   const { id } = useParams();
//   const [days, setDays] = useState(30);

//   useEffect(() => {
//     if (id) {
//       getData();
//     }
//   }, [id]);

//   async function getData() {
//     setLoading(true);
//     try {
//       const data = await getCoinData(id);
//       if (data) {
//         CoinObject(data, setCoinData);
//         const prices = await getCoinPrices(id, days);
//         if (prices && prices.length > 0) {
//           console.log("Prices:", prices);
//         }
//       }
//       setLoading(false);
//     } catch (error) {
//       console.log("error", error);
//       setLoading(false);
//     }
//   }

//   return (
//     <div>
//       <Header />
//       {isLoading ? <Loader /> :
//         <>
//           <div className='gray-wrapper'>
//             <List coin={coinData} />
//           </div>
//           <CoinInfo heading={coinData.name} desc={coinData.desc} />
//         </>
//       }
//     </div>
//   );
// }

// export default CoinPage;
import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'
import Header from '../Components/Common/Header';
import Loader from '../Components/Common/loader';
import axios from 'axios';
import { CoinObject } from '../Functions/getCoinObject';
import List from '../Components/DashBorad/List';
import CoinInfo from '../Components/Coin/CoinInfo';
import { getCoinData } from '../Functions/getCoinData';
import { getCoinPrices } from '../Functions/getCoinPrices';
import LineChart from '../Components/Coin/lineChat';
import { convertDate } from '../Functions/convertDate';
import SelectDays from '../Components/Coin/selectDate';
import { settingchartData } from '../Functions/settingChartData';

import ToggelePriceType from '../Components/Coin/pricesType';


function CoinPage() {
    const [isLoading, setLoading] = useState(true);
    const [coinData, setCoinData] = useState();
    const [chartData,setChartData]=useState({})
    const [priceType, setPriceType] = useState('prices');
    const {id}=useParams();
    const[days,setDays]=useState(60);
    useEffect(() => {
        if (id) {
          getData();
        }
      
      }, [id]);
      async function getData(){
        const data= await getCoinData(id);
        console.log(data);
        if(data){
            CoinObject(data,setCoinData)
            const prices=await getCoinPrices(id,priceType);
            if(prices.length>0){
                console.log(prices)
               settingchartData(prices,setChartData)
            }
            setLoading(false)
        }
        
      }
    
      const handleDaysChange= async (event)=>{
        setLoading(true)
       setDays(event.target.value)
       const prices=await getCoinPrices(id,event.target.value,priceType);
       if(prices.length>0){
           console.log("wohoo")
          settingchartData(prices,setChartData,priceType)
          setLoading(false);
       }
      };
      

      const handlePriceTypeChange = async (event,newType) => {
        setLoading(true)
        setPriceType(newType);
        const prices=await getCoinPrices(id,days,newType);
       if(prices.length>0){
           console.log("wohoo")
          settingchartData(prices,setChartData)
          setLoading(false);
       }
       
      };
  return (
    <div>
      <Header/>
      {isLoading?<Loader/>:<>
      <div className='gray-wrapper'> <List coin={coinData}/></div> 

      
      <div className='gray-wrapper'>
        <SelectDays days={days} handleDaysChange={handleDaysChange}/>
        <ToggelePriceType priceType={priceType}
         handlePriceTypeChange={handlePriceTypeChange}/>
    <LineChart chartData={chartData}/>
     
      </div> 
      <div className='gray-wrapper'><CoinInfo heading={coinData.name} desc={coinData.desc}/></div>
    </>}
    </div>
  )
}

export default CoinPage
