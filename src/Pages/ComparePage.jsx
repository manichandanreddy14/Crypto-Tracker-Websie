import React, { useEffect, useState } from 'react'
import Header from '../Components/Common/Header'
import SelectCoins from '../Components/ComparePage/selectCoins'
import SelectDays from '../Components/Coin/selectDate';
import { settingchartData } from '../Functions/settingChartData';
import { CoinObject } from '../Functions/getCoinObject';
import { getCoinData } from '../Functions/getCoinData';
import { getCoinPrices } from '../Functions/getCoinPrices';
import Loader from '../Components/Common/loader';


function ComparePage() {
    const [crypto1,setCrypto1]=useState("bitcoin");
  const [crypto2,setCrypto2]=useState("ethereum");
  const[days,setDays]=useState(7);
  const[crypto1Data,setCrypto1Data]=useState({})
  const[isLoading,setLoading]=useState(true)
  const[crypto2Data,setCrypto2Data]=useState({})
  const [priceType,setPricesType]=useState("prices")
  function handleDaysChange(event){
setDays(event.target.value);}
useEffect(()=>{
    getData();
},[])
async function getData(){
    setLoading(true);
    const data1= await getCoinData(crypto1);
    const data2=await getCoinData(crypto2);
    if(data1){
        CoinObject(data1,setCrypto1Data);
    }
    if(data2){
        CoinObject(data2,setCrypto2Data);
    }
    if(data1&&data2){
        const prices1=await getCoinPrices( crypto1,days,priceType);
        const prices2=await getCoinPrices( crypto1,days,priceType);
        if(prices1.length>0 && prices2.length>0){
            console.log("susses" ,prices1,prices2);
            setLoading(false);
        }
    }
}
const handleCoinChange=async(event,isCoin2)=>{
    
    if(isCoin2){
         
setCrypto2(event.target.value);
console.log(event.target.value)
const data= await getCoinData(event.target.value);
console.log(data);

    CoinObject(data,setCrypto2Data)
    


console.log(event.target.value)
    }else{
setCrypto1(event.target.value);
const data= await getCoinData(event.target.value);
console.log(data);

    CoinObject(data,setCrypto1Data)
   
;
    }
const prices1=await getCoinPrices(crypto1,days,priceType);
    const prices2=await getCoinPrices(crypto2  ,days,priceType);
  }
  
  return (
    <div>
<Header/> 
{isLoading?<Loader/>:<>
<div className='coins-days-flex'>
    <SelectCoins crypto1={crypto1}  crypto2={crypto2} handleCoinChange={handleCoinChange} />
    <SelectDays days={days} handleDaysChange={handleDaysChange} noPTag={true}/>
</div></>}

    </div>
  )
}

export default ComparePage
