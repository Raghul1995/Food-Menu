import React from 'react';

function MenuItems({ items }) {
	return (
		<div className="section-center">
			{items.map((menu) => {
				const { id, title, img, price, desc } = menu; // destrucuture all the items from the destrucuted items prop, whch we gt from menu compnent
				return (
					<article key={id} className="menu-item">
						<img src={img} alt={title} className="photo" />
						<div className="item-info">
							<header>
								<h4>{title} </h4>
								<h4 className="price">Kr {price}</h4>
							</header>
							<p className="item-text" >{desc}</p>
						</div>
					</article>
				);
			})}
		</div>
	);
}

export default MenuItems;
