import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import orange from "../../images/backgrounds/orange.svg";
import team from "../../images/sectionimages/team.svg"
import TeamCards from "../about/TeamCards";
import Why from "../about/Why";
import NewLanding from "../shared/NewLanding";
import TeamPictures from "../about/TeamPictures";
import TeamText from "../about/TeamText";

const founders = [
	{
		name: "Amar",
		fullName: "Amar Ramdas",
		jobTitle: "Lead Developer",
		background: "Applied Physics",
		tasks: "Project lead, Front-end, back-end",
		languages: "C#, Java, JS, HTML, CSS, MATLAB, VBA, .NET, ReactJS, React Native",
		github: "Amar97",
		linkedin: "https://www.linkedin.com/in/amarramdas/"
	},

	{
		name: "Satyam",
		fullName: "Satyam Mohan",
		jobTitle: "Technical Expert",
		background: "Computer Science",
		tasks: "Back-end, Technology Research, Reverse Engineering",
		languages: "Java, Spring, Spring-Boot, C, C++, C#, JS",
		github: "Satyam126",
		linkedin: "https://www.linkedin.com/in/satyam-mohan-26188a174/"
	},

	{
		name: "Reangelo",
		fullName: "Ré-Angelo Jarvis",
		jobTitle: "Public Relations & Developer",
		background: "Biofarmacy",
		tasks: "Marketing, App-Development",
		languages: "JS, ReactJS, React-Native, Python",
		github: "HesusDios",
		linkedin: "https://www.linkedin.com/in/reangelojarvis/"
	},

	{
		name: "Rayel",
		fullName: "Rayel Hardwarsing",
		jobTitle: "Finances & Developer",
		background: "Econometrics",
		tasks: "Finances, Data Analysis, Database Design",
		languages: "Java, SQL, R, C#, MatLab, Python",
		github: "RayelH",
		linkedin: "https://www.linkedin.com/in/rayel-hardwarsing-371b16133/"
	}];

const support = [
	{
		name: "Amy",
		fullName: "Amy Mkrtsjan",
		jobTitle: "HR Advisor",
		background: "Human Resource Management",
		tasks: "Advise on matters around human resources as well as general advise for the company",
		languages: "English, Dutch, Russian",
		linkedin: "https://www.linkedin.com/in/amarramdas/",
		github: "none"
	},
	{
		name: "Amit",
		fullName: "Amit Ramdas",
		jobTitle: "Marketing Trainee",
		background: "Commercial Economics",
		tasks: "Researching marketing opportunities for the company and contacting potential customers",
		languages: "English, Dutch, Spanish",
		linkedin: "https://www.linkedin.com/in/amitniteshramdas/",
		github: "none"
	},
	{
		name: "Azat",
		fullName: "Azat Arica",
		jobTitle: "Developer & DB Engineer",
		background: "Electrical Engineering",
		tasks: "Writing code for our projects and designing databases.",
		languages: "English, Dutch",
		linkedin: "https://www.linkedin.com/in/azatarica/",
		github: "azatt"
	}

];


class Team extends Component {
	render() {
		return (
			<div>
				<Fade bottom>
					<NewLanding header="about.headline" subtitle="about.subtitle" background={orange} image={team}
					/>
					<TeamPictures/>
					<TeamText/>
				</Fade>


				<Fade bottom>
					<TeamCards id="team" section="about.founders" items={founders}/>
					<TeamCards section="Support" items={support}/>
					<Why/>
				</Fade>
				<Fade bottom>
				</Fade>
			</div>
		);
	}
}

export default Team;