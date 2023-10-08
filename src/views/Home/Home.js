import"./Home.css";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
export default function Home()
{
    return(
        <div className="home-cont">
            <Navbar/>
            <h1>Home</h1>

            <p>This Is Home Page.</p>
            <Footer/>
        </div>
    );
}