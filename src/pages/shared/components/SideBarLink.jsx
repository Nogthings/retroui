import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const SideBarLink = ({to, children}) => {
    return(
        <div>
            <Link to={to}>{children}</Link>
        </div>
    )
};

SideBarLink.propTypes = {
     to: 
    PropTypes.string.isRequired,
     children: 
    PropTypes.string.isRequired,
}

export default SideBarLink;