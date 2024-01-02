import React, {lazy} from "react"
const Header = lazy(() => import("./Header")) 
const Footer = lazy(() => import("./Footer"))


/**
 * Renders the layout component.
 *
 * @param {React.ReactNode} children - The child components to be rendered.
 * @return {React.ReactNode} The rendered layout component.
 */
const Layout = ({ children }: { children: React.ReactNode }) => (
	<div className="md:container md:mx-auto">
		<Header />
		{children}
		<Footer />
	</div>
);

export default Layout;