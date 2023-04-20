const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


//a)  Las pizzas que tengan un id impar.

const PizzaImpar = pizzas.filter((pizzas)=>{
return pizzas.id % 2 !== 0 ;

})

PizzaImpar.forEach ((pizzas) => {
  console.log (`La ${pizzas.nombre} tiene id par` )
})

//b) Responder: ¿Hay alguna pizza que valga menos de $600?


const hayProductosConPreciosMayorA = (precio) => {
	return pizzas.some((pizzas) => {
		return pizzas.precio > precio;
	})
		? console.log(`Hay pizzas con precio mayor a $${precio}`)
		: console.log(`No hay pizzas con precio mayor a $${precio}`);
};

 hayProductosConPreciosMayorA(600);

 //c) El nombre de cada pizza con su respectivo precio.

pizzas.forEach ( pizzas => {
 console.log (` La ${pizzas.nombre} tiene un precio de $ ${pizzas.precio}`)
  })
 
  //d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo)


  pizzas.forEach ( pizzas => {
    console.log (` La ${pizzas.nombre} posee como ingredientes ${pizzas.ingredientes}`)
     })