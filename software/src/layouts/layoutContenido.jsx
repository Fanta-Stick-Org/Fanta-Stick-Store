import Footer from 'components/footer';
import Header from 'components/header';

const LayoutContenido = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default LayoutContenido;
