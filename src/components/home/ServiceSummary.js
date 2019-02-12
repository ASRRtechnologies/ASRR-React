import React, {Component} from "react";
import laptop from "../../images/services/laptop.svg";
import router from "../../images/services/router.svg";
import phone from "../../images/services/phone.svg";
import {translate} from "react-multi-lang"
import {Link} from "react-router-dom";

class ServiceSummary extends Component {
	render() {
		return (
			<div className="services-wrapper">
                <div>
                    <h1 style={{maxWidth: "90%", margin: "auto"}}>{this.props.t('home.services.tagline')}</h1>
                    <p style={{
                        width: "700px",
                        margin: "auto",
                        maxWidth: "90%"
                    }}>{this.props.t('home.services.tagsubtitle')}</p>
                </div>
				<hr/>
				<div>
                    <h2>{this.props.t('home.services.headline')}</h2>

					<div className="flex-container">
						<div>
							<img src={laptop} alt="webdesign"/>
							<h2>{this.props.t('home.services.web.name')}</h2>
							<div>{this.props.t('home.services.web.description')}</div>
						</div>

                        <div>
							<img src={phone} alt="app development"/>
							<h2>{this.props.t('home.services.app.name')}</h2>
	                        <div>{this.props.t('home.services.app.description')}</div>
						</div>

                        <div>
							<img src={router} alt="back-ends"/>
							<h2>{this.props.t('home.services.backend.name')}</h2>
	                        <div>{this.props.t('home.services.backend.description')}</div>

						</div>
					</div>

					<div className="centerButton-wrapper">
						<Link to="/Services"
						      className="rounded centerButton">{this.props.t('buttons.service')}</Link>
					</div>
				</div>
                <br/>
			</div>
		);
	}
}

export default translate(ServiceSummary);
