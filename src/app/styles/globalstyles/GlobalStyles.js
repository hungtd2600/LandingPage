import PropTypes from "prop-types";
import "app/styles/globalstyles/globalStyles.scss";

function GlobalStyles({ children }) {
  return children;
}

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyles;
