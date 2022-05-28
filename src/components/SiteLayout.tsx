import { Box, Flex } from "@chakra-ui/react";
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
			<Box
				position="relative"
				top={{ base: "68px", md: "80px" }}
				zIndex="-1"
				// w="100%"
			>
            	{ children }
			</Box>
			
			<Footer />
		</Flex>
	)
}