import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <ul>
      <li>
      <i class="fas fa-cubes"></i>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
      <i class="fab fa-slack"></i>

        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/dashboard">
        <i class="fas fa-chart-line"></i>{' '}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
      <i class="fab fa-codepen"></i>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
      <i class="fas fa-user-plus"></i>
        <Link to="/register">Register</Link>
      </li>
      <li>
      <i class="fas fa-sign-in-alt"></i>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
        <i class="fab fa-codepen"></i> Dev Portfolio
        </Link>
      </h1>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);