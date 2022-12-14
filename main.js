let ventanas =[ {
    id:"Banderola",
    premarco: true,
    precio: "$41.000",
    stock: true,
    descripcion: "Banderola de 600x 600 con DVH", 
    oferta:true,
  },
  {
    id:"Ventana Patagonica",
    premarco: true,
    precio: "$92.000",
    stock: true,
    descripcion: "Ventana patagonica de 1500x 1200 con DVH", 
    oferta:true,
  },
  {
    id:"Puerta Balcon",
    premarco: true,
    precio: "$220.000",
    stock: true,
    descripcion: "Puerta de 1800x 2050 con DVH", 
    oferta:false
  },
  {
    id:"Puerta Ciega Simple",
    premarco: true,
    precio: "$118.000",
    stock: true,
    descripcion: "Banderola de 900x 2050 con DVH", 
    oferta:false
  },
  {
    id:"Paño Fijo",
    premarco: true,
    precio: "$75.000",
    stock: true,
    descripcion: "Banderola de 1200x 600 con DVH", 
    oferta:true
  },
  {
    id:"Ventiluz",
    premarco: true,
    precio: "$38.000",
    stock: true,
    descripcion: "Ventiluz de 300x 300 con DVH", 
    oferta:true
  },
  {
    id:"Ventana De Abrir 2 hojas",
    premarco: true,
    precio: "$90.000",
    stock: false,
    descripcion: "Ventana de 1600x 1600 con DVH", 
    oferta:false
  },
]
let ventanasSlice= ventanas.slice(0,7);
console.log(ventanas);
console.log(ventanasSlice);

ventanasSlice.sort((a, b) => {
  if (a.id < b.id){
    return -1;
  }
  if (a.id > b.id){
    return 1;
  }
  return 0;
});
if confirm("Quiere ver Nuestras ofertas"){

}
