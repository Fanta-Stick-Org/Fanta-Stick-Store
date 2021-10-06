import Footer from 'components/footer';
import Header from 'components/header';

const LayoutContenido = ({ children }) => {
    return (
        <div className='flex flex-col justify-between h-screen'>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default LayoutContenido;
