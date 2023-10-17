/* cuando trabajamos con objetos debo tener en cuenta que en un objeto se construye teniendo encuenta una clase*/
// el contructor crea la clase osea la estructura
let inputBusqueda = document.getElementById
("inputBusqueda");
class Automovil{
    constructor(marca,modelo,precio,imagen){

        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.imagen =imagen;

    }
}

let auto1= new Automovil("toyota", "TXL",15000000,"img/prado.disel.webp");

//alert(auto1.marca+ " "+auto1.modelo);


window.addEventListener("load",function(){
    let mainContent=document.getElementById("mainContent");
    let boxproducto=document.createElement("div");
    mainContent.appendChild(boxproducto);
    boxproducto.setAttribute("class", "box-producto");

    
    /*caja para la imagen*/
    let boximg= document.createElement("div");
    boxproducto.appendChild(boximg);
    boximg.setAttribute("class", "box-img");
    let imgAuto= document.createElement("img");
    boximg.appendChild(imgAuto);
    imgAuto.setAttribute("src", auto1.imagen);
    imgAuto.setAttribute("class", "img-auto");      


    
    //caja información
    let boxInfo = document.createElement("div");
    boxproducto.appendChild(boxInfo);
    boxInfo.setAttribute("class", "box-info");

    let marcaL = document.createElement("label");
    boxInfo.appendChild(marcaL);
    let txtNodeMarca = document.createTextNode(auto1.marca + " " + auto1.modelo);
    marcaL.appendChild(txtNodeMarca);
    marcaL.setAttribute("class","marca");

      
    /*precio*/
    let precio = document.createElement("label");
    boxInfo.appendChild(precio);
    
    let TxtNodeprecio  = document.createTextNode("$"+auto1.precio);
    precio.appendChild(TxtNodeprecio);
    precio.setAttribute("class","precio");

});