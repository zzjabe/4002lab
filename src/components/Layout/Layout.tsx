import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './Layout.css'

function Layout() {
    return(
        <>
            <Header />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;