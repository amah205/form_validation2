'use strick'
const container =document.querySelector('.container')
const seats=document.querySelectorAll('.row .seat:not(.occupied)')
const count =document.querySelector('#count')
const total =document.querySelector('#total')
const movieSelect =document.querySelector('#movie')

/*populateUI();

let ticketPrice = +movieSelect.value;

// save selected movie index and price
function setMovieData(movieIndex,movePrice){
    localStorage.setItem('selectedMovieIndex',movieIndex)
    localStorage.setItem('selectedMoviePrice',movePrice)
}



// Update total and count
function updateSelectedCount(){
    const selectedSeats =document.querySelectorAll('.row .seat.selected')

    // Copy selected seats into arr
    // Map through array
    // return a new array indexes

    const seatsIndex =[...selectedSeats].map((seat) => [...seats].indexOf(seat))

    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex))
    
    


    selectedSeats.forEach((_,i) => {
        count.innerText=`${i + 1}`
        total.innerText=`${(i +1) * ticketPrice} `
    })
    
}

// Get data from local storage and populate UI
function populateUI(){
    const selectectedSeats=JSON.parse( localStorage.getItem('selectedSeats'))
    
    if(selectectedSeats !==null && selectectedSeats.length >0){
        seats.forEach((seat,index) =>{
            if(selectectedSeats.indexOf(index) > -1){
                seat.classList.add('selected')
            }
        })
    }

    const selectedMovieIndex=localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex=selectedMovieIndex;
    }
}

// movie select event
movieSelect.addEventListener('change',(e)=>{
    ticketPrice =+e.target.value
    setMovieData(e.target.selectedIndex,e.target.value)
    updateSelectedCount()
     
})

// seat click event 
container.addEventListener('click',(e)=>{
    const clicked=e.target

    if(clicked.classList.contains('seat') &&!clicked.classList.contains('occupied')){
        clicked.classList.toggle('selected')

        updateSelectedCount();
    }
})

// Initial Count and total set
updateSelectedCount()*/

populateUI()

let ticketPrice=+movieSelect.value;

function setMovieData(movieIndex,moviePrice){
    localStorage.setItem('selectedMovieIndex',movieIndex)
    localStorage.setItem('selectedMoviePrice',moviePrice)
}

function updateSelectedCount(){
    const selectedSeats=document.querySelectorAll('.row .seat.selected');

    // const storage =[...selectedEl].map((mov)=>{
        // [...seats].indexOf(mov)
    // })

    const seatsIndex =[...selectedSeats].map((seat) => [...seats].indexOf(seat))

    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));

    selectedSeats.forEach((_,i) =>{
        count.innerText=`${i + 1}`;
        total.innerText=`${(i + 1) * ticketPrice}`
    })
    
};

function populateUI(){
    const selectedSeats =JSON.parse(localStorage.getItem('selectedSeats'))

    if(selectedSeats !== null && selectedSeats.length >0){
        seats.forEach((seat,index)=>{
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected')
            }
        })
    };

    const selectedMovieIndex=localStorage.getItem('selectedMovieIndex')

    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex=selectedMovieIndex;
    }

}

movieSelect.addEventListener('change',(e)=>{
    ticketPrice=+e.target.value
    setMovieData(e.target.selectedIndex,e.target.value)
    updateSelectedCount();
})

container.addEventListener('click',(e) =>{
    // console.log(e.target)
    const clicked=e.target

    if(clicked.classList.contains('seat') &&!clicked.classList.contains('occupied')){
        clicked.classList.toggle('selected')

        updateSelectedCount()
    }

    
})

updateSelectedCount();