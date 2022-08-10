import { Link } from 'react-router-dom';



const Nav = () => {
    return ( 
        <nav className="navbar">
            <h1>The missing block</h1>
            <div className="links">
                <Link to = "/">Home</Link>
                <Link className = 'afro' to = "/create">New Blog</Link>
            </div>
        </nav> 
     );
}
 
export default Nav;