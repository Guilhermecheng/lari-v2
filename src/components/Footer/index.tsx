import { Flex, Text } from '@chakra-ui/react';


export function Footer() {
    return (
        <Flex
			h={70}
			backgroundColor="brand.bg"
			w="100%"
			justifyContent="center"
			alignItems="center"
		>
            <Text
                color="brand.title_bg_black"
            >
                Footer
            </Text>
      	</Flex>

    )
}