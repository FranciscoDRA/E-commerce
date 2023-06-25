var productos = [];

// Variable donde guardamos el total del carrito
var total = 0;

// Función para eliminar un producto del carrito
function eliminarProducto(id) {
    // Buscamos el producto en el array por su id
    var producto = productos.find(p => p.id == id);
    // Si existe, lo eliminamos del array
    if (producto) {
        productos = productos.filter(p => p.id != id);
        // Restamos su precio al total
        total -= producto.precio;
        // Actualizamos la vista del carrito
        actualizarCarrito();
    }
}

// Función para agregar un producto al carrito
function agregarProducto(id, nombre, precio) {
    // Creamos un objeto con los datos del producto
    var producto = {
        id: id,
        nombre: nombre,
        precio: precio
    };
    // Lo añadimos al array de productos
    productos.push(producto);
    // Sumamos su precio al total
    total += precio;
    // Actualizamos la vista del carrito
    actualizarCarrito();
    // Mostramos un mensaje de confirmación
    alert("Producto agregado al carrito");
}

// Obtener todos los botones de agregar al carrito

const addCartButtons = document.querySelectorAll(".buy-cart");

// Recorrerlos y asignarles un evento click a cada uno

for (let button of addCartButtons) {

    button.addEventListener("click", addToCart);

}



const carrito = document.querySelector('#carrito-lista');
const total = document.querySelector('#carrito-total');
const productos = document.querySelectorAll('.agregar-carrito');

let carritoItems = [];

productos.forEach(producto => {
	producto.addEventListener('click', agregarAlCarrito);
});

function agregarAlCarrito(e) {
	const boton = e.target;
       const item = {
        nombre: boton.dataset.nombre,
        precio: boton.dataset.precio
        };
        carritoItems.push(item);
        actualizarCarrito();
        }
        
        function actualizarCarrito() {
        carrito.innerHTML = '';
        let totalCarrito = 0;
        carritoItems.forEach(item => {
        const {nombre, precio} = item;
        const itemCarrito = document.createElement('li');
        itemCarrito.innerHTML =  `${nombre} <span>${precio}</span>  `;
        carrito.appendChild(itemCarrito);
        totalCarrito += parseFloat(precio);
        });
        total.innerHTML =  `Total: $${totalCarrito.toFixed(2)}  `;
        }
    
    