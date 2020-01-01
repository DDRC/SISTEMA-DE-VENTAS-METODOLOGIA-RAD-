var productos = document.getElementById("productos");
var prodVenta = document.getElementById("codprod");
var prodLlevar = document.getElementById("aLlevar");
var cantidad = document.getElementById("cantidad").value;
var dinero = document.getElementById("cash").value;
var todos = [];
var catalogo = [
    { codigo: 'chpt', precio: 0.25, descripcion: 'Chupetes' },
    { codigo: 'plt', precio: 0.10, descripcion: 'Paletas' },
    { codigo: 'crml', precio: 0.05, descripcion: 'Caramelos' },
    { codigo: 'chltB', precio: 0.50, descripcion: 'Chocolate en barra' },
    { codigo: 'chltM', precio: 0.15, descripcion: 'Chocolate de moneda' },
    { codigo: 'hllsB', precio: 0.50, descripcion: 'Halls en barra' },
    { codigo: 'hllsP', precio: 0.05, descripcion: 'Halls en pepa' },
    { codigo: 'hKnder', precio: 2.00, descripcion: 'Huevos Kinder' },
    { codigo: 'hnta', precio: 0.45, descripcion: 'Hanuta' },
    { codigo: 'ntla', precio: 0.35, descripcion: 'Nutela' }
];
for (let i = 0; i < 10; i++) {
    var op = document.createElement('option');
    var tr = document.createElement('tr');
    op.appendChild(document.createTextNode(catalogo[i].codigo));
    prodVenta.appendChild(op);
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(catalogo[i].codigo));
    var td2 = document.createElement('td');
    td2.appendChild(document.createTextNode(catalogo[i].descripcion));
    var td3 = document.createElement('td');
    td3.appendChild(document.createTextNode(catalogo[i].precio));
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    productos.appendChild(tr);
}

function agregar() {
    var cant = document.getElementById("cantidad").value;
    var prod = document.getElementById("codprod").value;
    document.getElementById("cantidad").innerHTML = "";
    document.getElementById("cantidad").focus();
    for (let k = 0; k < 10; k++) {
        if (prod == catalogo[k].codigo) {

            var tr = document.createElement('tr');
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(catalogo[k].codigo));
            var td2 = document.createElement('td');
            td2.appendChild(document.createTextNode(catalogo[k].descripcion));
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');
            td3.appendChild(document.createTextNode(catalogo[k].precio));
            td4.appendChild(document.createTextNode(cant));
            tr.appendChild(td4);
            tr.appendChild(td);
            tr.appendChild(td2);
            tr.appendChild(td3);
            prodLlevar.appendChild(tr);
            todos.push(catalogo[k].precio * cant);

            break;
        }
    }
}

function pago() {
    var dinero = document.getElementById("cash").value;
    var total = todos.reduce((a, b) => a + b, 0);
    var vuelto = document.getElementById("cambio");
    if (dinero < total) {
        alert('no tiene saldo suficiente');
    } else {
        vuelto.innerHTML = 'Cambio a dar: ' + (dinero - total).toString();
    }
}
//catalogo[i].codigo