import FormProduct from 'components/formProduct';
import 'styles/general.css';

const UpdateProduct = () => {
    return (
        <section className="containerSection">
            <h1 id="tittle">Actualizar Productos</h1>
            <FormProduct/>
            <div className="formSubmit">
                <button value="Login" id="btn-form-submit" type="submit">Actualizar</button>
            </div>
        </section>
    )
}

export default UpdateProduct;
