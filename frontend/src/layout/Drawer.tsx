import React, { ReactNode } from "react";
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
import Header from "./Header";

/**
 * Renders the logo component.
 * @returns {ReactComponentElement<React.SVGProps<SVGSVGElement>>} The logo component.
 */

type SheetProps = {
  children: ReactNode;
};

const MySheet: React.FC<SheetProps> = ({ children }) => {
  const side = 'left';
  return (
    <Sheet key={side}>
      <Header>
        <SheetTrigger
          className="w-12 h-12 bg-transparent  rounded-lg p-1 focus:bg-opacity-60 active:bg-opacity-75 dark:bg-transparent dark:bg-opacity-10 dark:hover:bg-opacity-60 dark:focus:bg-opacity-60 dark:active:bg-opacity-75"
        >
          <Menu
            className="w-full h-full bg-opacity-light text-nav-foreground dark:bg-opacity-light dark:text-nav-foreground backdrop-filter backdrop-blur-lg rounded-md "
          />
        </SheetTrigger>
      </Header>
      <div
        className="flex flex-col items-center justify-center min-h-[90dvh] overflow-y-auto text-align-center"
      >
        {children}
      </div>
      
      <SheetContent 
        side={side} 
        className="w-drawerWidth bg-background bg-opacity-light text-nav-foreground dark:bg-background dark:bg-opacity-light dark:text-nav-foreground"
      >
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