const RecipeList = ({recipes}) => {
    return ( 
        <div className="blogList">
            {recipes.map((blog) => (
                <div className="recipePreview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default RecipeList;