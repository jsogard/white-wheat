import React from 'react';
import './HobbyCard.css';
import {Row, Col, Image} from 'react-bootstrap';

class HobbyCard extends React.Component {


	render() {
		return (
		<Col sm={4} className="float-left hobby-card">
			<Row>
				<Col sm={4} >
					<Image src='./img/250x250.png' rounded fluid/>
				</Col>
				<Col sm={8} >
					<h6>{this.props.Hobby.title}</h6>
					<hr/>
					<p>{this.props.Hobby.submission}</p>
				</Col>
			</Row>
		</Col>);
	}
}


export default HobbyCard;