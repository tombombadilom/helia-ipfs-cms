import React, { lazy, ReactNode } from "react";

const Header = lazy(() => import("./Header"));
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
	<div className="flex flex-col min-h-screen">
		<Header />
		<Drawer>
			{children}
		</Drawer>
		<Footer />
	</div>
);

export default Layout;