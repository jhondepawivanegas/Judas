let count = document.getElementById("count")
let subTotal = document.getElementById("subTotal")
let cantProductos = document.getElementById("cantProducts")
let deleteButton = document.getElementById("delete")
let btn3 = document.getElementById("btn-3")
let btn1 = document.getElementById("btn-1")
let numProduct = document.getElementById("numProduct")

let num = 0;
let valor = 5000;
btn3.addEventListener("click", function() {
    num++;
    count.textContent = num;
    subTotal.textContent = valor * num;
    cantProductos.textContent = num;

    if (num == 1) {
        numProduct.textContent = "producto";
    } else if (num > 1) {
        numProduct.textContent = "productos"
    }
   
})

btn1.addEventListener("click", function() {
    if (num > 0 ) {
        num--;
        count.textContent = num;
        subTotal.textContent = valor * num;
        cantProductos.textContent = num;
    } else if (num <= 0) {
        count.textContent = 0;
        subTotal.textContent = 0;
        numProduct.textContent = " ";
    }
})
deleteButton.addEventListener("click", function() {
    num = 0;
    count.textContent = 0;
    subTotal.textContent = 0;
    cantProductos.textContent = 0;
    numProduct.textContent = " ";
})  