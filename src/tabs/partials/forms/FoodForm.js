import React from "react";
import Button from "@material-ui/core/Button";
import "./styles/FoodFormStyles.css";
import Product from "../Product";

function FoodForm() {
	const [crtListProducts, setCrtListProducts] = React.useState([]);

	const [listName, setListName] = React.useState("New list");

	const [denumireProdus, setDenumireProdus] = React.useState();
	const [categProd, setCategProd] = React.useState();
	const [dataExp, setDataExp] = React.useState();

	const handlSubmit = (e) => {
		e.preventDefault();
		alert("Sumbitted!");
	};

	const productsTemplate = crtListProducts.map((product) => {
		return (
			<div className="foodlist-container">
				<Product product={product} />
			</div>
		);
	});

	const handleAddProduct = (e) => {
		e.preventDefault();
		const updatedList = [...crtListProducts];
		updatedList.push({
			name: denumireProdus,
			categorie: categProd,
			dataExpirare: dataExp,
		});
		setCrtListProducts(updatedList);
	};

	const handleDenumire = (e) => {
		const value = e.target.value || "";
		setDenumireProdus(value);
	};

	const handleCategorie = (e) => {
		const value = e.target.value || "";
		setCategProd(value);
	};

	const handleExpirare = (e) => {
		const value = e.target.value || "";
		setDataExp(value);
	};

	const handleListName = (e) => {
		const value = e.target.value || "";
		setListName(value);
	};

	return (
		<div>
			<div className="ff-container">
				<div className="ff-title">
					<div>Formular pentru adaugare produselor in lista</div>
					<div>
						<label>Seteaza numele listei</label>
						<input
							type="text"
							onChange={handleListName}
							value={listName}
						></input>
					</div>
				</div>
				<div className="ff-form-container"></div>
				<form id="food-form" onSubmit={handlSubmit}>
					<div className="ff-field-container">
						<label>Denumire produs</label>
						<input type="text" id="denProd" onChange={handleDenumire}></input>
					</div>

					<div className="ff-field-container">
						<label>Categorie produs</label>
						<select
							id="catgProd"
							name="categorie"
							form="food-form"
							onChange={handleCategorie}
						>
							<option value="Lactate">Lactate</option>
							<option value="Carne">Carne</option>
							<option value="Desert">Desert</option>
							<option value="Panificatie">Paine si panificatie</option>
						</select>
					</div>

					<div className="ff-field-container">
						<label>Data expirare</label>
						<input type="date" id="expDate" onChange={handleExpirare}></input>
					</div>

					<div className="buttons-container">
						<Button
							variant="contained"
							color="primary"
							className="btn"
							onClick={handleAddProduct}
						>
							Add product
						</Button>

						<Button
							type="submit"
							variant="contained"
							color="primary"
							className="btn"
						>
							Save list
						</Button>
					</div>
				</form>
			</div>

			<div className="crt-list-preview">
				<div className="foodlist-container">
					<div className="foodlist-title">{listName}</div>

					<ol className="products">
						<ol className="products">{productsTemplate}</ol>
					</ol>
				</div>
			</div>
		</div>
	);
}

export default FoodForm;
