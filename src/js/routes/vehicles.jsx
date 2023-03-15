import React from "react";

export const Vehicles = () => {
	return (
		fetch("https://www.swapi.tech/api/vehicles/4")
			.then(res => res.json())
				.then(data => console.log(data)
					.catch(err => console.error(err)
					)
				)
	)
}
