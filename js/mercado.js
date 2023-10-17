/* cuando trabajamos con objetos debo tener en cuenta que en un objeto se construye teniendo encuenta una clase*/
// el contructor crea la clase osea la estructura

class Automovil{
    constructor(marca,modelo,edad){

        this.marca = marca;
        this.modelo = modelo;
        this.edad = edad;

    }
}

let auto1= new Automovil("toyota", "TXL");

alert(auto1.marca+ " "+auto1.modelo);


inputBusqueda.addEvenListener("Keydown",function(){
    let mainContent=document.getElementById("mainContent");
    let boxproducto=document.createElement("div");
    mainContent.appendChild(boxproducto);
    boxproducto.setAttribute("class", "box-producto");

    /*caja para el producto*/
    let boxProducto = document.createElement("div");

    /*caja para la imagen*/
    let boximg= document.createElement("div");
    boxproducto.appendChild(boximg);
    boximg.setAttribute("class", "box-img");
    let imgAuto= document.createElement("img");
    boximg.appendChild(imgAuto);
    imgAuto.setAttribute("src", img/prado.disel.webp);
    imgAuto.setAttribute("class", "img-auto");


    /*caja para la informacion*/
    let boxInfo = document.createElement("div");
    boxproducto.appendChild(boxInfo);
    boxInfo.setAttribute("class", "box-info");

});

