import React from "react";

import ItemCollection from "../items-component/items-component.jsx"
import "./preview-collection-styles.scss";

const CollectionPreview =({title, items}) => (
	<div className="collection-preview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="preview">
			{items
				.filter((item, idx) => idx < 4)
				.map((item) => (
				<ItemCollection key={item.id} item={item} />
			))}
		</div>
	</div>
)

export default CollectionPreview;
