'use strick'
const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// fetch exchange rate update DOM
function calculate(){
  const currency_one=currencyEl_one.value;
  const currency_two=currencyEl_two.value;
  
  fetch(`https://v6.exchangerate-api.com/v6/cdf73566892cddd69db187bd/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      //  console.log(data)
      const rate =data.conversion_rates[currency_two]

      rateEl.innerText =`1 ${currency_one} = ${rate} ${currency_two}`
      // console.log(rate)

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
 /* const temp =currencyEl_one.value
  currencyEl_one.value=currencyEl_two.value
  currencyEl_two.value=temp;*/
  [currencyEl_one.value,currencyEl_two.value] = [currencyEl_two.value,currencyEl_one.value]
  calculate()
})

// Fetch exchange rates and update the DOM
/*function caclulate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      const rate = data.rates[currency_two];

      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

// Event listeners
currencyEl_one.addEventListener('change', caclulate);
amountEl_one.addEventListener('input', caclulate);
currencyEl_two.addEventListener('change', caclulate);
amountEl_two.addEventListener('input', caclulate);

swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  caclulate();
});

caclulate();*/


