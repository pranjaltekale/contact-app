import"./About.css";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
export default function About()
{
    return(
        <div className="About-cont">
            <Navbar/>
            <h1>About</h1>

            <p>This Is About Page.</p>
            <Footer/>
        </div>
    );
}