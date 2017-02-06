import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const NavLink = ({ children, ...props }) => (
  <Link {...props} activeClassName="nav-active">{children}</Link>
);

NavLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default NavLink;
