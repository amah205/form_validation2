'use strick'
const  main=document.getElementById('main')
const  addUserBtn=document.getElementById('add-user')
const  doubleBtn=document.getElementById('double')
const  showMillionairesBtn=document.getElementById('show-millionaires')
const  sortBtn=document.getElementById('sort')
const  calculateWealthBtn=document.getElementById('calculate-wealth')


let data =[];

const loadFromLocalStorage = () => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      data = JSON.parse(storedData);
      renderDOM();
    }
};


// setting localstorage
const saveToLocalStorage =()=>{
    localStorage.setItem('UserData',JSON.stringify(data))
}

// fetch API
const getApi =async function(){
    try{
        const res =await fetch('https://randomuser.me/api')
        const data =await res.json()
        console.log(data)
        const exactData =data.results[0]
        console.log(exactData)

        const newUser ={
            name:`${exactData.name.first}  ${exactData.name.last}`,
            money:Math.floor(Math.random() * 1_000_000)
        }

        addToUi(newUser);


    } catch(error){
        throw new Error (`${error.message}`)
    }
}
// double the money
function doubleMoney(){
   data= data.map((item) => ({...item ,money:item.money *2 }))
   console.log(data)
   saveToLocalStorage()
   renderDom()
    
}

// sort
function sortByRichest(){
    data=data.sort((a,b) => b.money - a.money)
    console.log(data)
    saveToLocalStorage()
    renderDom()
}

// showmillioniares
function showMillionaires(){
    data=data.filter(mov => mov.money > 1_000_000)
    saveToLocalStorage()
    renderDom()
}

// calculate wealth
function calculateWealth(){
    const totalWealth = data.reduce((acc, user) => acc + user.money, 0);

    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(totalWealth)}</strong></h3>`;
    main.appendChild(wealthEl);
}

function addToUi(newUser){
    data=[...data,newUser]
    console.log(data)
    saveToLocalStorage()
    renderDom()
   
}

function renderDom(){
    main.innerHTML='<h2><strong>Person</strong>Wealth</h2>'

    data.forEach(({name,money}) =>{
        const element =document.createElement('div');
        element.classList.add('person')
        element.innerHTML=`<strong>${name}</strong>  ${formatMoney(money)}`

        main.appendChild(element)
    })
}

function formatMoney(number){
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

getApi()
getApi()
getApi()

addUserBtn.addEventListener('click',getApi)


// addUserBtn.addEventListener('click',getRandomUser);
doubleBtn.addEventListener('click',doubleMoney);
sortBtn.addEventListener('click',sortByRichest);
showMillionairesBtn.addEventListener('click',showMillionaires);
calculateWealthBtn.addEventListener('click',calculateWealth)

loadFromLocalStorage()

/*getRandomUser()
getRandomUser()
getRandomUser()
// fetch random user and add money
async function getRandomUser(){
    
        const res= await fetch('https://randomuser.me/api')
        const data= await res.json()
        
        const user =data.results[0]
        const newUser={
            name:`${user.name.first} ${user.name.last}`,
            money: Math.floor(Math.random() * 1000000)
        };
        addData(newUser)
}

// Double everyones money
function doubleMoney(){
    data=data.map((user) => {
        
        return {...user, money:user.money * 2 }
        
    })

    updateDom()
}

function sortByRichest(){
    data.sort((a,b) => b.money - a.money)

    updateDom();
}
// filter
function showMillionaires(){
   data= data.filter(item => item.money > 1000000)

    updateDom()
}

// calculate wealth
function calculateWealth(){
    const wealth = data.reduce((acc,cur) =>(acc += cur.money) ,0)
//    console.log(formatMoney(wealth))

    const wealthEl =document.createElement('div');
    wealthEl.innerHTML=`<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong> </h3>`
    main.appendChild(wealthEl)
}

// Add new obj to data array
function addData(obj){
    data.push(obj);
    // console.log(data)
    updateDom()
}

function updateDom(providedData = data){
    // clear main div
    main.innerHTML='<h2><strong>Person</strong>Wealth</h2>';

    providedData.forEach(item =>{
        const element =document.createElement('div')
        element.classList.add('person');
        element.innerHTML=`<strong>${item.name}</strong> ${formatMoney(item.money)}`

        main.appendChild(element)
    })
    // console.log(providedData)

}

// format number as money
function formatMoney(number){
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}


addUserBtn.addEventListener('click',getRandomUser);
doubleBtn.addEventListener('click',doubleMoney);
sortBtn.addEventListener('click',sortByRichest);
showMillionairesBtn.addEventListener('click',showMillionaires);
calculateWealthBtn.addEventListener('click',calculateWealth)*/





