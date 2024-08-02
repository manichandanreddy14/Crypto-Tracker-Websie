import axios from "axios";

export const getCoinData = async (id) => {
    const myData=axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => {
      console.log(response.data);
    return response.data;
      
    })
    .catch((error) => {
      console.log(error);
   
    });
    return myData;
};
