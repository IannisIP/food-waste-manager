function Product(props) {
	return (
		<div>
			<div>{props.product.name}</div>
			<div>{props.product.categorie}</div>
			<div>{props.product.dataExpirare}</div>
		</div>
	);
}

export default Product;
