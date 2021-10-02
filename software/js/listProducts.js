const listProductsButton = document.getElementById("list-submit");

listProductsButton.addEventListener("click", (e) => {
    e.preventDefault();

    insertRows();
})

function insertRows(params) {
    let transactionTableRef = document.getElementById("transactionTable");
    let newTransactrioRowRef = transactionTableRef.insertRow(-1);

    let newTransactrioCellRef = newTransactrioRowRef.insertCell(0);
    newTransactrioCellRef.textContent = "004";

    newTransactrioCellRef = newTransactrioRowRef.insertCell(1);
    newTransactrioCellRef.textContent = "Gabinete RGB";

    newTransactrioCellRef = newTransactrioRowRef.insertCell(2);
    newTransactrioCellRef.textContent = "$200.000";

    newTransactrioCellRef = newTransactrioRowRef.insertCell(3);
    newTransactrioCellRef.textContent = "Disponible";
}