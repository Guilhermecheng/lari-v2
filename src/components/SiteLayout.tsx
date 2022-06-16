import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsButton } from "./WhatsButton";

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
				zIndex="10"
				// w="100%"
			>
            	{ children }
			</Box>
			
			<Footer />
			{/* <WhatsButton /> */}
		</Flex>
	)
}