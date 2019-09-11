import React, {Component} from "react";
import AOS from 'aos';
import phone from "../../assets/images/home/hes_phone.png";
import NWO from "../../assets/images/home/laptop-nwo.png";
import ValueCards from "./ValueCards";

class Section3 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount () {
        AOS.init()
    }


    render() {

        return (
            <div className="section-container beautiful-purple">
                <div className="section-wrapper value-cards">
                    <ValueCards/>
                    <ValueCards/>
                    <ValueCards/>
                    <ValueCards/>
                </div>
            </div>
        );
    }
}

export default Section3;
