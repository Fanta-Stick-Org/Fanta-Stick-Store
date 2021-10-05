import FormProduct from 'components/formProduct';
import 'styles/general.css';

const RegisterProduct = () => {
    return (
        <section className="containerSection">
            <h1 id="tittle">Registro de Productos</h1>
            <FormProduct/>
            <div className="formSubmit">
                <button value="Login" id="btn-form-submit" type="submit">Agregar</button>
            </div>
        </section>
    )
}

export default RegisterProduct;
