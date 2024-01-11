import { Component } from "react";
import Services_card from "./Services-card";

class Services extends Component {
    render () {
        return (
            <>
            <div className="services-texts">
                <small>Our services</small>
                <h2 className="services-title"> Handshake infographic mass market <br/> crowdfunding iteration.</h2>
            </div>
            <div className="services">
                <Services_card img="/services-1.png" title="Cool feature title" text="Learning curve network effects return on investment." />
                <Services_card img="/services-2.png" title="Even cooler feture" text="Learning curve network effects return on investment."/>
                <Services_card img="/services-3.png" title="Cool feature title" text="Learning curve network effects return on investment."/>
            </div>
            </>
        )
    }
}

export default Services;
