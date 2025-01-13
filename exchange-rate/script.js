'use strick'
const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');
// fetching api using async await
const cryptoApi =async function(filePath){
  try{
    const res =await fetch(filePath);
    if(!res.ok){
      throw new Error('Network response was not ok')
    }

    // console.log(res)
    const dataCryptoApi=await res.json()
    // console.log(dataCryptoApi)
    return dataCryptoApi

  }catch (error){
    throw new Error(`Error loading JSON:', ${error.message}`)
  }
}





// fetch exchange rate update DOM
function calculate(){
  const currency_one=currencyEl_one.value;
  const currency_two=currencyEl_two.value;
  
  cryptoApi(`https://v6.exchangerate-api.com/v6/cdf73566892cddd69db187bd/latest/${currency_one}`)
  .then(data =>{
    //  data.json()
    const rate =data.conversion_rates[currency_two]
    rateEl.innerText=`1 ${currency_one} = ${rate} ${currency_two}`
    amountEl_two.value=(amountEl_one.value * rate).toFixed(2)
  
  })
 
}

// Evnt listener
currencyEl_one.addEventListener('change',calculate)
amountEl_one.addEventListener('input',calculate)
currencyEl_two.addEventListener('change',calculate)
amountEl_two.addEventListener('input',calculate)

calculate()

swap.addEventListener('click', ()=>{
  [currencyEl_one.value,currencyEl_two.value] = [currencyEl_two.value,currencyEl_one.value]
  calculate()
})






