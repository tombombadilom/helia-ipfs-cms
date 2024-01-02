import React, { ReactElement } from 'react';
import { useNavigate, NavigateFn } from 'react-router-dom';
import Auth from "../auth/Auth";

const Header = (): ReactElement => {
  const navigate: NavigateFn = useNavigate();
  return (
    <div className="navbar bg-primary text-primary-content p-0 md:p-2">
      <div className="navbar-start">
        <label
          tabIndex={0} 
          htmlFor="my-drawer" 
          className="btn btn-primary drawer-button"
          role="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </label>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle"></div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-secondary text-secondary-content rounded-box w-52">
            <li><a onClick={() => navigate('/')}>Homepage</a></li>
            <li><a onClick={() => navigate('/about')}>About</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">

      </div>
      <div className="navbar-end">
        <label className="cursor-pointer grid place-items-center">
          <input type="checkbox" value="synthwave" className="toggle theme-controller bg-base-primary-content row-start-1 col-start-1 col-span-2" />
          <svg className="col-start-1 row-start-1 stroke-base-1 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg className="col-start-2 row-start-1 stroke-base-1 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
        {Auth.isUserAuthenticated() ?
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-secondary text-secondary-content rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a onClick={() => navigate('/logout')}>Logout</a></li>
            </ul>
          </div>
        : <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-secondary text-secondary-content rounded-box w-52">
              <li><a onClick={() => navigate('/login')}>Login</a></li>
              <li><a onClick={() => navigate('/register')}>Register</a></li>
            </ul>
          </div>
        }
      </div>
    </div>
  )
}

export default Header;