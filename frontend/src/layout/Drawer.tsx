import React, { ReactNode, ReactComponentElement } from "react";
import { useNavigate } from "react-router-dom";
//import { ReactComponent as Logo } from '../assets/safari-pinned-tab.min.svg';

/**
 * Renders the logo component.
 * @returns {ReactComponentElement<React.SVGProps<SVGSVGElement>>} The logo component.
 */
function renderLogo(): ReactComponentElement<React.SVGProps<SVGSVGElement>> {
  return <Logo />;
}

type DrawerProps = {
  children: ReactNode;
};

const Drawer: React.FC<DrawerProps> = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="drawer h-screen xl:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-base-100">{children}</div>
      <div className="drawer-side h-screen">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>

        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li>
            <React.Fragment>
              <a onClick={() => navigate("/")}>Homepage</a>
            </React.Fragment>
          </li>
          <li>
            <React.Fragment>
              <a onClick={() => navigate("/about")}>About</a>
            </React.Fragment>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;