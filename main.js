let productos = [
  "Llavero de 5 a 10 centímetros/hasta 50 gramos",
  "Figura de 5 a 10 centímetros/100 a 200 gramos",
  "Figura de 10 a 20 centímetros/200 a 500 gramos",
  "Figura de 20 a 30 centímetros/500 a 750 gramos",
  "Figura de 30 a 50 centímetros/750gr a 1 kg",
  "Figura de 50 a 75 centímetros/1kg a 3kg",
  "Figura de 75cm a 1mt/3kg a 5kg"
];

let boton = document.createElement("button")
boton.innerHTML = "Buscar producto"
document.body.appendChild(boton)

let lista = document.createElement("ul")
document.body.appendChild(lista)

for (let i = 0; i < productos.length; i++) {
  let item = document.createElement("li")
  item.innerHTML = productos[i]
  lista.appendChild(item)
}

boton.addEventListener("click", function() {
  let seleccion = document.getElementById("busqueda").value
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].toLowerCase().includes(seleccion.toLowerCase())) {
      alert("Presione Enter para confirmar si desea seleccionar " + productos[i] + ".")
    }
  }
});

document.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    let seleccion = document.getElementById("busqueda").value;
    for (let i = 0; i < productos.length; i++) {
      if (productos[i].toLowerCase().includes(seleccion.toLowerCase())) {
        alert("Presione Enter para confirmar si desea seleccionar " + productos[i] + ".")
      }
    }
  }
})
