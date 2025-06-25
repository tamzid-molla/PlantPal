
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import { useContext } from 'react';
import Loader from '../Components/Loader';
import { AuthContext } from '../Context/FirebaseContext';

const Root = () => {
    const { loading,dark } = useContext(AuthContext);
    return (
        <div className={`${dark && "bg-gray-800"}`}>
            {
                loading ? <Loader></Loader>
                    :
                    <>
                    <nav className={`${dark?"bg-[#2E7D32]":"bg-primary"} py-5`}>
                    <Nav></Nav>
                </nav>
            <main className=''>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
                    </>
            }
                
        </div>
    );
};

export default Root;