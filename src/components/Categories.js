import React from 'react';

function Categories({ categories, filterItems }) {
	//const [newCateg, setNewCateg] =  useState(filterItems)
	return (
		<div className="btn-container">
			{categories.map((unique, index) => {
				// we use map functn to get the unique values and the index in the array.
				return ( // in the onClick method we filter only the unique to the unique catogory that is not repeated
					<buttonon type="button" className="filter-btn" key={index} onClick={() => filterItems(unique)}> 
						{unique}
					</buttonon>
				);
			})}
			<button />
		</div>
	);
}

export default Categories;
