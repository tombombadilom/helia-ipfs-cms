import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "../components/ui/drawer";
import {Button} from "../components/ui/button";

//import { ReactComponent as Logo } from '../assets/safari-pinned-tab.min.svg';

/**
 * Renders the logo component.
 * @returns {ReactComponentElement<React.SVGProps<SVGSVGElement>>} The logo component.
 */

type DrawerProps = {
  children: ReactNode;
};

const MyDrawer: React.FC<DrawerProps> = ({ children }) => {
  const navigate = useNavigate();
  return (
      <Drawer>
        {children}
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
            <DrawerDescription>
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
              This action cannot be undone.
            </DrawerDescription>
          </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MyDrawer;