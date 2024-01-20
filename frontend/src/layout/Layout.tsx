import React, { lazy, ReactNode } from "react";
import { Toaster } from "../components/ui/toaster"
// import Jumbo from '../lib/BackgroundCanvas/Jumbo'
// import Molten from '../lib/BackgroundCanvas/Molten';
const Footer = lazy(() => import("./Footer"));
const Drawer = lazy(() => import("./Drawer"));

/**
 * Renders the layout component.
 *
 * @param {Object} props - The props for the Layout component.
 * @param {ReactNode} props.children - The child components to be rendered.
 * @returns {ReactNode} The rendered layout component.
 */
const Layout = ({ children }: { children: ReactNode }): ReactNode => (
	<div 
		className="layout w-[100vw] min-h-[100dvh] bg-background text-primary-foreground dark:bg-background dark:text-primary-foreground h-dvh flex flex-col overflow-x-hidden transition-bg">
		{/* <Molten  /> */}
		<Drawer>
			<div
				className="flex flex-col items-center justify-center w-[100vw]min-h-[90dvh] overflow-y-auto text-align-center bg-transparent"
			>
				{children}
			</div>
		</Drawer>
		<Toaster />
		<Footer />
	</div>
);

export default Layout;