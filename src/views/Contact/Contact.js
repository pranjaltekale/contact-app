import"./Contact.css";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
export default function Contact()
{
    return(
        <div  className="Contact-cont">
            <Navbar/>
            <h1>Contact</h1>

            <p>This Is Contact Page.</p>
            <Footer/>
        </div>
    );
}