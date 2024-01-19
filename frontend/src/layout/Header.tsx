import React, { ReactElement, ReactNode } from 'react';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "../components/ui/menubar";
import ThemeSwitcher from '../lib/ThemeSwitcher';

import Auth from "../auth/Auth";
type HeaderProps = {
  children: ReactNode;
};

const Header = ({ children}:HeaderProps): ReactElement => {
  return (
    <Menubar 
      className="w-[100vw] min-h-[5dvh] bg-nav text-nav-foreground rounded-md bg-clip-padding backdrop-blur-md bg-opacity-light flex items-center border-0 justify-between dark:bg-nav dark:bg-opacity-heavy dark:text-nav-foreground p-1">
      <MenubarMenu>
       {children}
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <ThemeSwitcher />
      </MenubarMenu>
      {Auth.isUserAuthenticated() && (
        <MenubarMenu>
          <MenubarTrigger>Profiles</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="benoit">
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>Edit...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Add Profile...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      )}
    </Menubar>
  );
}
export default Header;