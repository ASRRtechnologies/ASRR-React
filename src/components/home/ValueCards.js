import React, {Component} from "react";
import AOS from 'aos';
import phone from "../../assets/images/home/hes_phone.png";
import NWO from "../../assets/images/home/laptop-nwo.png";
import lightning from "../../assets/images/home/lightning-white.png"

class ValueCards extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount () {
        AOS.init()
    }


    render() {

        return (
            <div  className="value-cards-wrapper "> 
                <div className="value-cards-information">

                <img src={lightning} className="value-cards-image" />
                <h3>Fast and secure</h3>
                <p> See how ASRR can provide security</p>
                <p>Learn more</p>

                </div> 
            </div>
        );
    }
}

export default ValueCards;
