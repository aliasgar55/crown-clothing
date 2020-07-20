import React from "react";

import MenuItem from "../menuitem-component/menuitem-component.jsx"
import "./directory-styles.scss"

class Directory extends React.Component {
	constructor() {
		super();


		this.state = {
			section : [{

				title: "hats",
				imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
				id: 1
			},
			{
				title: "sneakers",
				imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
				id: 2
			},
			{
				title: "jackets",
				imageUrl: "https://i.ibb.co/px2tCc3/jacket.png",
				id: 3
			},
			{
				title: "mens",
				size: "large",
				imageUrl: "https://i.ibb.co/R70vBrQ/mens.png",
				id: 4
			},
			{
				title: "women",
				size: "large",
				imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
				id: 5
			},

			]
		}
	}

	render() {
		return (
			<div className="directory-menu">
				{
					this.state.section.map(({title, imageUrl, id, size}) => (
						<MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
						))
				}
			</div>
		);
	}
}

export default Directory;