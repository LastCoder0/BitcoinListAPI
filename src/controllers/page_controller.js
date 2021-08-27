const axios = require('axios')
const CoinMarketCap = require('coinmarketcap-api')
 


const pageNEW = async (req,res)=> {
  //API cekiyoruz ve data bilgisini sayfamıza gönderiyoruz
// const API = await axios('https://coinmarketcap.com/');
const apiKey = 'feba90a0-2ebf-475f-80ad-7245009cddd1'
const client = new CoinMarketCap(apiKey);
let gelenAPI =await client.getTickers({limit:14});


res.render('new',{layout : './layout/page_layout',API :gelenAPI});

}

module.exports = {
    pageNEW
}


    // rp(requestOptions).then(response => {
    // //   console.log('API call response:', response);
    //     //  let data =[];
    //     //  data.push(response);
    //     var res = Object.keys(response.name)
    //     // iterate over them and generate the array
    //     .map(function(k) {
    //       // generate the array element 
    //       return [+k, response[k]];
    //     });
    //     console.log(res);      
    //      res.render('index',{layout : './layout/page_layout',API: ['1','2']});

    // }).catch((err) => {
    //   console.log('API call error:', err.message);
    // });
    const rp = require('request-promise');
    // const requestOptions = {
    //     method: 'GET',
    //     uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    //     qs: {
    //       'start': '1',
    //       'limit': '5000',
    //       'convert': 'USD'
    //     },
    //     headers: {
    //       'X-CMC_PRO_API_KEY': 'feba90a0-2ebf-475f-80ad-7245009cddd1'
    //     },
    //     json: true,
    //     gzip: true
    //   };