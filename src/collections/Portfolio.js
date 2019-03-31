import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import blue from "../images/backgrounds/midblue.svg";
import orange from "../images/backgrounds/orange.svg";
import Websites from "../components/portfolio/Websites";

import kroontje from "../images/portfolio/kroontje.png";
import moves4vitality from "../images/portfolio/m4v.png";
import milanotassen from "../images/portfolio/milanotassen.PNG";
import mustique from "../images/portfolio/mustique.PNG";
import windowshop from "../images/portfolio/windowshop.PNG";
import asrrold from "../images/portfolio/asrrold.PNG";
import form from "../images/portfolio/form.PNG";
import BusinessCases from "../components/portfolio/BusinessCases";
import ClientGrid from "../components/ClientGrid";
import Achievements from "../components/portfolio/Achievements";
import InternalButton from "../components/InternalButton";
import NewLanding from "../components/shared/NewLanding";


var websites = [
	{
		name: "Kroontje",
		image: kroontje,
		url: "www.hetkroontjeweebosch.nl"
	},
	{
		name: "Moves4Vitality",
		image: moves4vitality,
		url: "www.moves4vitality.nl"
	},
	{
		name: "Milanotassen",
		image: milanotassen,
		url: "milanotassenhaagsemarkt.nl"
	},
	{
		name: "TheWindowShop",
		image: windowshop,
		url: "vps.asrr.nl/portfolio/samples/thewindowshop/index.html"
	},
	{
		name: "MustiqueSuites",
		image: mustique,
		url: "mustiquesuites.com"
	},
	{
		name: "ASRR Old Website",
		image: asrrold,
		url: "vps.asrr.nl"
	}
];

var desktop = [
	{
		name: "FORM",
		image: form,
		url: "form.nl"
	}, {
		name: "ASRR",
		image: asrrold,
		url: "vps.asrr.nl"
	}
];

const button =
	{
		text: "buttons.contact",
		href: "/Contact",
		fa: ["fas", "envelope"]
	};

class Portfolio extends Component {
	render() {
		return (
			<div className="portfolio-wrapper">
				<Fade bottom>
					<NewLanding name="portfolio.landing"/>
				</Fade>
				<Fade bottom>
					<ClientGrid headline="portfolio.clientHeadline" subtitle="portfolio.clientSubtitle"/>
				</Fade>
				<Fade bottom>
					<Achievements/>
					<BusinessCases/>
				</Fade>
				<Fade bottom>
					<Websites section="portfolio.websites" items={websites} background={orange}/>
				</Fade>
				<Fade bottom>
					<Websites section="portfolio.desktop" items={desktop} background={blue}/>
				</Fade>
				<Fade bottom>
					<InternalButton button={button}/>
				</Fade>
			</div>
		);
	}
}

export default Portfolio;