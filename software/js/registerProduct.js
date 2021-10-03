const formProducts = document.getElementById("form-register-products");
const formProductsButton = document.getElementById("register-form-submit");
/* const loginErrorMsg = document.getElementById("login-error-msg"); */

formProductsButton.addEventListener("click", (e) => {
    e.preventDefault();
    const idProducto = formProducts.idProducto.value;
    const descripcion = formProducts.descripcion.value;
    const valorUnitario = formProducts.valorUnitario.value;
    const estado = formProducts.estado.value;

    if (idProducto && descripcion && valorUnitario && estado) {
        alert("Producto registrado correctamente :)");
        location.reload();
    } else {
        /* loginErrorMsg.style.opacity = 1; */
        alert("Algo no va bien :(");
    }
})