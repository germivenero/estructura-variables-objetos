const productos = [
    {id:"1", nombre:"1. Lollapalooza", precio: 100000 },
    {id:"2", nombre:"2. Cosquin Rock", precio: 60000 },
    {id:"3", nombre:"3. Primavera Sound", precio: 80000 },
    {id:"4", nombre:"4. Coldplay", precio: 55000 }
  ];
  let carrito = [];
  const listaNombres = productos.map(nombre => nombre.nombre);
  let seleccion = prompt("Bienvenido a TicketWeb, ¿desea comprar alguna entrada? Responda SI o NO").toLowerCase();
  while(seleccion !== "si" && seleccion !== "no" ){
    alert("Por favor ingrese SI o NO");
    seleccion = prompt("Bienvenido, ¿desea comprar algún producto? (Ingrese 'SI' o 'NO')").toLowerCase();
  }
  if(seleccion === "si"){
    let todoslosProductos = productos.map(
        (producto) => producto.nombre + " " + "$" + producto.precio 
    );
    alert("A continuación se visualizará nuestro catálogo." + "\n" + "(Presione Aceptar para continuar)");
  } else if (seleccion === "no"){
    alert("Gracias por ingresar, vuelva pronto");
  }
  while(seleccion !== "no"){
    let todoslosProductos = productos.map(
        (producto) => producto.nombre + " " + "$" + producto.precio 
    );
    let producto = prompt("Seleccione mediante el número, la entrada que desea adquirir: "  + "\n" + "\n" + todoslosProductos.join("\n"));
    let precio = 0;
    if(producto === "1" || producto === "2" || producto === "3" || producto === "4"){
      switch(producto){
        case "1":
          precio = 100000;
          break;
        case "2":
          precio = 60000;
          break;
        case "3":
          precio = 80000;
          break;
        case "4":
          precio = 55000;
          break;
        default:
          break;
      }
      let unidades = parseInt(prompt("¿Cuántas entradas desea comprar?"));
      carrito.push({producto, unidades, precio});
      console.log(carrito);
    } else {
      alert("No disponemos de esa entrada");
    }
    seleccion = prompt("¿Desea seguir comprando? (Ingrese 'si' o 'no')").toLowerCase();
    if(seleccion === "no"){
      alert("Gracias por su compra, vuelva pronto");
      carrito.forEach((carritoFinal) => {
        console.log(`producto ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto $${carritoFinal.unidades * carritoFinal.precio}`);
      });
      break;
    }
  }
  const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
  console.log(`El total a pagar por su compra es $${total}`);
  document.body.innerHTML = (`El total a pagar por su compra es $${total}`);

  //Pre-Entrega 2 :)