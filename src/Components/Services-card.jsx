import { Link } from "react-router-dom";


function Services_card(props) {
    return (
        <div className="services-cards container ">
            <img src={props.img} alt="" />
            <h4 className="services-card-title">{ props.title }</h4>
            <small>{ props.text }</small>
            <div className="explore-btn">
            <Link to="/" className="">Explore page</Link>
            <i className="fa-solid fa-arrow-right-long"></i>
            </div>
        </div>
    );
}

export default Services_card;
