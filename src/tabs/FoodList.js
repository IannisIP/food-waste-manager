import React from "react";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import "./styles/FoodStyle.css";
import { makeStyles } from "@material-ui/core/styles";
import FoodForm from "./partials/forms/FoodForm";
import Product from "./partials/Product";

const useStyles = makeStyles((theme) => ({
	paper: {
		position: "absolute",
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

function FoodList() {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const classes = useStyles();

	const body = (
		<div className={classes.paper}>
			<FoodForm />
		</div>
	);

	const foodlists = [
		{
			title: "Lista noua",
			produse: [
				{
					name: "Lapte",
					categorie: "Lactate",
					dataExpirare: "12/12/2020",
				},
				{
					name: "Bors",
					categorie: "Altceva",
					dataExpirare: "12/12/2020",
				},
			],
		},
		{
			title: "Lista noua 2",
			produse: [
				{
					name: "Lapte 2",
					categorie: "Lactate",
					dataExpirare: "12/12/2020",
				},
				{
					name: "Lapte 5",
					categorie: "Lactate",
					dataExpirare: "12/12/2020",
				},
			],
		},
	];

	const lists = foodlists.map((list) => {
		const productsTemplate = list.produse.map((prod) => (
			<li>
				<Product product={prod} />
			</li>
		));
		return (
			<div className="foodlist-container">
				<div className="foodlist-title">{list.title}</div>

				<ol className="products">{productsTemplate}</ol>
			</div>
		);
	});

	return (
		<div className="fl-container">
			<div className="btn-container">
				<Button variant="contained" color="primary" onClick={handleOpen}>
					Create food list
				</Button>
			</div>
			<div className="lists-container">{lists}</div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				{body}
			</Modal>
		</div>
	);
}

export default FoodList;
