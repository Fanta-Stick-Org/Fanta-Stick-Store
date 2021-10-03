
var Sales = []

    const form = document.getElementById("newSaleForm");

    form.addEventListener("submit", function(event){
        event.preventDefault();
        let registerFormData = new FormData(form);
        
        
        
        let idSale = registerFormData.get("idSale");
        let dateSale = registerFormData.get("dateSale");
        let idSeller = registerFormData.get("idSeller");
        let stateSaleCancel = registerFormData.get("stateSaleCancel")
        let idCustomer = registerFormData.get("idCustomer");
        let nameCustumer = registerFormData.get("nameCustumer");
        let totalPriceProducts = registerFormData.get("totalPriceProducts");
        let totalSale = registerFormData.get("totalSale");

       var newLine = "\r\n";
        let message = ("Se registro la factura con el ID: " + idSale + "En fecha: " + dateSale + newLine +
                        "Codigo del vendedor: " +  idSeller + newLine + "Por un monto de: " + totalSale);
        alert(message);

        var newSale = {
            idSale : idSale,
            dateSale : dateSale,
            idSeller : idSeller,
            idCustomer : idCustomer,
            nameCustumer : nameCustumer
        };
        Sales.push(newSale);
        console.log(Sales);
    })


    




/*document.querySelector("#FormButton").addEventListener('click', RegisterSale);

function RegisterSale(){
    var idSale = document.querySelector("#idSale");
    alert(idSale);
}*/





