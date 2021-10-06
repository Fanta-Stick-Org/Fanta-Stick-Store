import FormSales from "components/formSales";
import 'styles/registerSale.css';

const RegisterSale = () => {
    return (
        <section className="containerSection">
            <h1 id="tittle">Registrar Venta</h1>
            <FormSales/>
            <div className="formSubmit">
                <button value='' id="btn-form-submit" name="FormButton" type='submit'>Procesar venta</button>
            </div>
        </section>
    )
}

export default RegisterSale;

