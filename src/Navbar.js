const Nabvar = () => {
    const ytLink = "http://www.youtube.com/@menyepy";
    return ( 
        <nav className="navbar">
            <h1>Menye's Recipes</h1>
            <div className="links">
                <a href="/">Home page</a>
                <a href={ytLink}>YouTube</a>
                <a href="/create">Add Recipes</a>
            </div>
        </nav>
     );
}
 
export default Nabvar;