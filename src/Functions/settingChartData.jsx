import { convertDate } from "./convertDate"


export const settingchartData=(prices, setChartData,priceType)=>{
  console.log(prices);
  setChartData({
            
    labels:prices.map((prices)=>convertDate(prices[0])),
    datasets: [{
   
      data:prices.map((prices)=>prices[1]),
      fill:false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
      borderWidth: 1,
      
      backgroundColor: "rgba(58, 128, 233,0.1)",
      tension: 0.25,
      borderColor: "#3a80e9",
      pointRadius: 0,
      
    }]
})
}
