let input=document.querySelectorAll('.Input')

input.forEach((value, index)=>{

    value.addEventListener('change',()=>{
        let price=document.querySelector('.TotalPrice')
        let weight=document.querySelector('.Totalweight')
let priceOfSocks=document.querySelector('.socks').value*1
let priceOfpants=document.querySelector('.pants').value*2
let priceOfshirts=document.querySelector('.shirts').value*3
let weightOfSocks=document.querySelector('.socks').value*0.31
let weightOfpants=document.querySelector('.pants').value*0.51
let weightOfshirts=document.querySelector('.shirts').value*81


let TotalPrice= priceOfSocks + priceOfpants +priceOfshirts
let TotalWeight= weightOfSocks + weightOfpants +weightOfshirts
price.textContent=TotalPrice;
weight.textContent=TotalWeight;

       
    })
})
