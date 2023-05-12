
function CategoryComponent({product}){
 
    const {title,price,description} = product;

    return(
        <>
       <div className="product-card"style={{width:'300px',margin:'20px auto',background:"#f2f2f2",padding:'15px'}}>
        <h1>{title}</h1>
        <h3>{price} $</h3>
        <p>{description}</p>
       </div>
        </>
    )
}
export default CategoryComponent;