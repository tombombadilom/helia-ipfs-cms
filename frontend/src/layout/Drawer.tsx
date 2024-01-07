import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet"
import { Menu } from 'lucide-react';
import SideMenu from './Menu';

import {Button} from "../components/ui/button";
import Header from "./Header";
import Logo  from "../components/logo/logo";

/**
 * Renders the logo component.
 * @returns {ReactComponentElement<React.SVGProps<SVGSVGElement>>} The logo component.
 */

type SheetProps = {
  children: ReactNode;
};

const MySheet: React.FC<SheetProps> = ({ children }) => {
  const side = 'left';
  const navigate = useNavigate();
  return (
    <Sheet key={side}>
      <Header>
        <SheetTrigger><Menu/></SheetTrigger>
      </Header>
      {children}
      <SheetContent side={side} className="w-[200px] md:w-[140px]">
        <SheetHeader>
          <SheetTitle>
            <img src="/icon/mstile-150x150.png" alt="Helia IPFS CMS" className="mx-auto h-[150px] md:h-[100px]" />
            <p className="mt-6 text-center text-1xl  text-gray-300">Helia IPFS CMS</p>
          </SheetTitle>
          <SheetDescription>
            <div data-radix-scroll-area-viewport=""
              className="h-full w-full rounded-[inherit]"
            >
              <div className="table">
                <SideMenu />
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MySheet;