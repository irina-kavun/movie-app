import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const BackPopup = ({openPopup}) => {
    return <div className="backPopup" onClick={openPopup}/>;
};

BackPopup.propTypes = {
    openPopup: PropTypes.func.isRequired
};
export default BackPopup;