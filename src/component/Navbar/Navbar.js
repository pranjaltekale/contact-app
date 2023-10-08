import "./Navbar.css"


 function Navbar() {
    return(
        <div className ="navbar-txt">
            <h1 className = "nav-brand m" >ReactJs</h1>
            <a className = "nav-menu m" href="/" >Home</a>
            <a className = "nav-menu m" href ="/About" >About</a>
            <a className = "nav-menu m"  href="/Contact">Contact</a>

        </div>
    )
    
}
export default Navbar