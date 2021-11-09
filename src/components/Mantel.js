import React from 'react';
import Plato from './Plato';
import Cubierto from './Cubierto';

class Mantel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			backgroundColor: 'darkSalmon',
			height: '120px'
		}
	}

	render() {
		const colorValido =
			this.props.backgroundColor !== undefined && this.props.backgroundColor !== "red" ?
			this.props.backgroundColor : this.state.backgroundColor;

		return (
			<div
				className="mantel spaceAround"
				style={{
					backgroundColor: colorValido,
					height: this.props.height || this.state.height
				}}
			>
				<Cubierto />
				<Plato />
				<Cubierto />
			</div>
		);
	}
};


export default Mantel;