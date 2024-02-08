
const stock=()=>{
    // part1
    const stocks=[
        {
        symbol:'Sahin',
        price:1000,
        sector:'mobile-Developer',
        },
        {
        symbol:'Ramal',
        price:1200,
        sector:'back-end Developer',
        },
        {
        symbol:'Elon',
        price:800,
        sector:'front-end Developer',
        },
       
    ]

  
    setTimeout(()=>{
        for (let i in stocks) {
            stocks[i].price=Math.floor((Math.random()*3000) + 100)
            console.log(stocks[i]);
            
        }
    },2000)
    // part2
    setTimeout(()=>{
        const filter = stocks.filter((item) => item.symbol === 'Sahin');
        console.log('filter:',filter);
    },3000)
  
    //  part3    
    setTimeout(()=>{
      for (let i in stocks) {
       if (stocks[i].price >1200) {
         console.log('this worker s salary was 800$ more:',stocks[i]);
       }
       else if(stocks[i].price <300){
        console.log('this worker s salary is 300$ less:',stocks[i]);
       }
        
      }
},4000)
// part4
}
setInterval(stock,5000)
