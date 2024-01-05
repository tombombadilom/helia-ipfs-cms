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
      <SheetContent side={side} className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>
            <Logo width={100} height={100} />
            Helia IPFS CMS
          </SheetTitle>
          <SheetDescription>
            <div data-radix-scroll-area-viewport=""
              className="h-full w-full rounded-[inherit]"
            >
              <div className="table">
                <div className="flex flex-col space-y-3">
                  <a  href="/">Home</a>
                  <a  href="/Login">Login</a>
                  <a  href="/Register">Register</a>
                  <a  href="/logout">Logout</a>
                  <a  href="/docs/figma">Figma</a>
                </div>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MySheet;