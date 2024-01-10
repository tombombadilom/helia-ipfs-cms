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
import ModeToggle from '../lib/mode-toggle';
import Auth from "../auth/Auth";
type HeaderProps = {
  children: ReactNode;
};

const Header = ({ children}:HeaderProps): ReactElement => {
  return (
    <Menubar className="w-dvh flex items-center justify-between p-2 h-dvh ng-transparent dark:bg-transparent text-primary-foreground">
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
        <ModeToggle />
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