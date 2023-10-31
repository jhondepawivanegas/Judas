let inputBusqueda = document.getElementById("inputBusqueda");

class Automovil {
    constructor(marca, modelo, precio, imagen, fecha, kilometraje, ubicacion) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.imagen = imagen;
        this.fecha = fecha;
        this.kilometraje = kilometraje;
        this.ubicacion = ubicacion;
    }
}

let autos = [
    new Automovil("toyota", "TXL", 115000000, "imagenes/prado.disel.webp", "2022", "30.000 km", "Bogotá - Colombia"),
    new Automovil("Yz-125", "YZ", 45000000, "img/Yz-supreme.jpg", "2023", "15.000 km", "Medellín - Colombia"),
    new Automovil("Dt-125", "Dt", 50000000, "imagenes/dt.jpg", "2021", "20.000 km", "Cali - Colombia")
];

window.addEventListener("load", function () {
    let mainContent = document.getElementById("mainContent");

    autos.forEach(auto => {
        let boxproducto = document.createElement("div");
        mainContent.appendChild(boxproducto);
        boxproducto.setAttribute("class", "box-producto");

        let boximg = document.createElement("div");
        boxproducto.appendChild(boximg);
        boximg.setAttribute("class", "box-img");

        let imgAuto = document.createElement("img");
        boximg.appendChild(imgAuto);
        imgAuto.setAttribute("src", auto.imagen);
        imgAuto.setAttribute("class", "img-auto");

        let boxInfo = document.createElement("div");
        boxproducto.appendChild(boxInfo);
        boxInfo.setAttribute("class", "box-info");

        let marcaL = document.createElement("label");
        boxInfo.appendChild(marcaL);
        let txtNodeMarca = document.createTextNode(auto.marca + " " + auto.modelo);
        marcaL.appendChild(txtNodeMarca);
        marcaL.setAttribute("class", "marca");

        let precio = document.createElement("label");
        boxInfo.appendChild(precio);

        let precioFormateado = auto.precio.toLocaleString();
        let txtNodePrecio = document.createTextNode("$" + precioFormateado);
        precio.appendChild(txtNodePrecio);
        precio.setAttribute("class", "precio");

        let infoAdicional = document.createElement("label");
        boxInfo.appendChild(infoAdicional);

        // Utilizamos los valores individuales de fecha, kilometraje y ubicación para cada automóvil
        let infoText = document.createTextNode(`${auto.fecha} - ${auto.kilometraje},  ${auto.ubicacion}`);
        infoAdicional.appendChild(infoText);
        infoAdicional.setAttribute("class", "info-adicional");

        let boxCorazon = document.createElement("div");
        boximg.appendChild(boxCorazon);
        boxCorazon.setAttribute("class", "box-corazon");

        let iconoCorazon = document.createElement("i");
        boxCorazon.appendChild(iconoCorazon);
        iconoCorazon.setAttribute("class", "icon-corazon fa-regular fa-heart");

        let lineaDiv = document.createElement("hr");
        boxproducto.appendChild(lineaDiv);
        lineaDiv.setAttribute("class", "linea-div");
    });
});
