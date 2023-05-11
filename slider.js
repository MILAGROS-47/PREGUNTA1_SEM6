 // Array para almacenar los productos
 var products = [];

function getCurrentDate(){
    var date = new Date();
    var day =date.getDate();
    var month=date.getMonth() +1;
    var year=date.getFullYear();
    return day + '/' + month + '/' + year;
}
$(document).ready(function()){
    var products=[
        {id: 1, name: "Chocolate", description: "Una caja, marca Chocolets", price: 10, quantity: 5, date: "01/01/2023"},
        {id: 2, name: "Gaseosa", description: "Una botella, marca InkaCola", price: 23, quantity: 4, date: "02/01/2023"}

    ]
}

function addProduct(name, description, price, quantity) {
    var date = getCurrentDate();
    var id = products.length + 1;
    var product = { id: id, name: name, description: description, price: price, quantity: quantity, date: date };
    products.push(product);
    displayProducts();
}
