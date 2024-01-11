import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavLink({ link, text, children, }) {
  return (
    <li>
      <Link className="" to={link}>
        <i className=""></i> {text}{" "}
        {children}
      </Link>
    </li>
  );
}

NavLink.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    category: PropTypes.string,
    isSale: PropTypes.bool,
    company: PropTypes.shape({
      name: PropTypes.string,
      countries: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
};

export default NavLink;