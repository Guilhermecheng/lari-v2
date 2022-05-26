import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
    children: ReactNode;
}

export default function SiteLayout({ children }: LayoutProps) {
    return (
		<Flex
			w="100%"
			flexDirection="column"
		>
			<Header />

            { children }
			
			<Footer />
		</Flex>
	)
}