const productos = [
{id: 1, title:"Cafe Brasil",description:"lalala" ,  price: 350  ,pictureUrl:"../images/CafeBrasil.png"},
{id:2 ,title:"Cafe Colombia",description:"lalala"  , price: 700 , pictureUrl: "../images/CafeColombia3.jpg"},
{id:3 ,title:"Cafetera V60",description:"lalala"  , price: 1000 , pictureUrl: "./images/CafeteraV60.jpg"},
{id:4 ,title:"Cafetera AeroPress",description:"lalala"  , price: 13000 , pictureUrl: "./images/CafeteraAeroPress.jpg"},
{id:5 ,title:"Cafetera Italiana",description:"lalala"  , price: 4500 , pictureUrl: "./images/CafeteraItaliana1.jpg"},
{id:6 ,title:"Cafe Italiana",description:"lalala"  , price: 9000 , pictureUrl: "./images/CafeteraItaliana2.jpg"}
]

 export const getFech = new Promise((resolve,reject)=>{
    let condicion = true
    if (condicion)
    {
        setTimeout(() => {
            resolve(productos)
        },2000);
       
    } else {
        reject("400-  NOT FOUND")
    
    }



})

