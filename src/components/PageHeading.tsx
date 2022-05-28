import { Heading } from "@chakra-ui/react";


interface PageHeadingProps {
    children: string;
    isBgDark: boolean;
}

export function PageHeading({children, isBgDark}: PageHeadingProps) {
    const headingColor =  !isBgDark ? '#000' : 'brand.title_bg_black'
    return (
        <Heading 
            as="h1" 
            color={ headingColor }
            fontSize={{base: "3xl", md: "4xl"}}
            // bg="red"
            py="4"
            _after={{ content: `""`,  display: 'block', height: '5px', width: '50px', marginTop: '8px', background: headingColor }}
        >
            { children }
        </Heading>
    )
}