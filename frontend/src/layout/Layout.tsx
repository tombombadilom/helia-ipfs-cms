import React, { lazy, ReactNode } from "react";
import { Toaster } from "../components/ui/toaster"

const Footer = lazy(() => import("./Footer"));
const Drawer = lazy(() => import("./Drawer"));

/**
 * Renders the layout component.
 *
 * @param {Object} props - The props for the Layout component.
 * @param {ReactNode} props.children - The child components to be rendered.
 * @returns {ReactNode} The rendered layout component.
 */
const Layout = ({ children }: { children: ReactNode }) => (
	<div 
		className="layout w-[100vw] min-h-[100dvh] bg-transparent dark:bg-transparent h-dvh flex flex-col overflow-x-hidden">
		<Drawer>
			{children}
		</Drawer>
		<Toaster />
		<Footer />
	</div>
);

export default Layout;