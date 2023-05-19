import Footer from "./Footer/Footer"
import Header from "./Header/Header"

const Layout = (props) => {
    return (
        <div>
            <Header/>
            <main>
                <h2>메인</h2>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout