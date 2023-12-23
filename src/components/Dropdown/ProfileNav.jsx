import React from 'react';
import { Link } from 'react-router-dom';
import settingsIcon from '../../assets/img/settings-icon.svg';
import logOutIcon from '../../assets/img/log-out-icon.svg';

const ProfileNav = ({ isProfileDropdownVisible, closeDropdown }) => {

  return (
    <>
      {isProfileDropdownVisible && (
        <div className="parent">
          <div className="profile-dropdown-wrapper">
            <div className="item-wrap">
              <div className="item">
                <Link to="">
                  <div className="icon">
                    <img src={settingsIcon} alt="Settings" />
                  </div>
                  <div className="desc">
                    <p>Profile Settings</p>
                  </div>
                </Link>
              </div>
              <div className="item">
                <Link to="">
                  <div className="icon">
                    <img src={logOutIcon} alt="Log Out" />
                  </div>
                  <div className="desc">
                    <p>Log Out</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileNav;
