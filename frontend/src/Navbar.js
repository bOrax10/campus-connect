const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <img src="/assets/logo2.png" style={{ maxWidth: '200px', maxHeight: '80px'}} />
                <button className="btn-primary">Login</button>
                <button className="btn-primary">Sign up</button>
            </div>
        </nav>
    );
}

export default Navbar;
