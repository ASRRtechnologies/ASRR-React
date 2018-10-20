import React, {Component} from 'react';
import {translate} from 'react-multi-lang';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Landing extends Component {
	render() {
		let divStyle = {
			backgroundImage: 'url(' + this.props.background + ')',
		};
		return (
			<div className="landing-wrapper parallax" style={divStyle}>
				<div id="landing-text">
					<h1>{this.props.t(this.props.header)}</h1>
                    <p>{this.props.t(this.props.subtitle)}</p>
					<a href={this.props.button.href} className="rounded"><FontAwesomeIcon
						icon={this.props.button.fa}/> {this.props.t(this.props.button.text)}</a>
				</div>

				<div id="landing-image">
					<img src={this.props.image} alt="browser"/>
				</div>
			</div>
		);
	}
}

export default translate(Landing);
