const productos = [
{id: '1', title:"Cafe Brasil",categoria: 'Granos',description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." ,price: 700 , pictureUrl: "/images/CafeBrasil.png", stock: 10},
{id:'2' ,title:"Cafe Colombia",categoria: 'Granos',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."  , price: 700 , pictureUrl: "/images/CafeColombia1.jpg",stock: 3},
{id:'3' ,title:"Cafetera V60",categoria: 'Cafeteras',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."  , price: 1000 , pictureUrl: "/images/CafeteraV60.jpg",stock: 0},
{id:'4' ,title:"Cafetera AeroPress",categoria: 'Cafeteras',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."  , price: 13000 , pictureUrl: "/images/CafeteraAeroPress.jpg",stock: 6},
{id:'5' ,title:"Cafetera Italiana",categoria: 'Cafeteras',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."  , price: 4500 , pictureUrl: "/images/CafeteraItaliana1.jpg",stock: 5},
{id:'6' ,title:"Cafetera Italiana",categoria: 'Cafeteras',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."  , price: 9000 , pictureUrl: "/images/CafeteraItaliana2.jpg",stock: 7} 
 
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

