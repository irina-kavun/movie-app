import React from "react";
import PropTypes from "prop-types";

const Button = ({ title, ...props }) => {
  return <button {...props}>{title}</button>;
};

Button.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number,]),
};

export default Button;
