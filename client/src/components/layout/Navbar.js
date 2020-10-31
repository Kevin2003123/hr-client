import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
const Navbar = ({ user: { isAdmin, user }, logout }) => {
  return (
    <nav
      className='d-flex justify-content-between w-100 align-items-center py-3 '
      style={{ height: 95 }}
    >
      <div className='ml-5 pl-5 d-flex align-items-center mr-1'>
        <img
          className='img-fluid border-right pr-2 border-secondary'
          src={require('../../img/graph2.png')}
          alt='wi2.jpg'
          width='50'
          height='50'
        />
        <h5 className='pl-1 font-weight-bold'>HR Client</h5>
      </div>
      <div className='d-flex align-items-center mr-5 pr-5'>
        <h6 className='text-danger mr-3'>
          {isAdmin ? 'Employees' : 'Reviews'}
        </h6>

        <div className='dropdown'>
          <div
            type='button'
            id='dropdownMenuButton'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
            className='dropdown-toggle'
          >
            {user.avatar === '' ? (
              <img
                className='img-fluid rounded-circle'
                src={require('../../img/perfil.jpg')}
                alt='imagen prueba'
                height='40'
                width='40'
              />
            ) : (
              <img
                className='img-fluid rounded-circle'
                src={user.avatar}
                alt='imagen usuario'
                height='40'
                width='40'
              />
            )}{' '}
            {user.name}
          </div>
          <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
            <div className='dropdown-item disabled'>
              {isAdmin ? 'Employees' : 'Reviews'}
            </div>
            <div className='dropdown-divider'></div>
            <div
              className='dropdown-item'
              role='button'
              onClick={() => logout()}
            >
              Logout
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  user: state.auth
});
export default connect(mapStateToProps, { logout })(Navbar);