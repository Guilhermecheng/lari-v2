import { Heading } from "@chakra-ui/react";


interface PageHeadingProps {
    children: string;
    isBgDark: boolean;
    fontSize?: 'h1' | 'h2';
}

export function PageHeading({children, isBgDark, fontSize}: PageHeadingProps) {
    const headingColor =  !isBgDark ? '#000' : 'brand.title_bg_black'
    let headingFontSize = {base: "2em", md: "3em"}

    if(fontSize) {
        if(fontSize == 'h1') {
            headingFontSize = {base: "2em", md: "3em"}
        } else if (fontSize == 'h2') {
            headingFontSize = {base: "1.6em", md: "2em"}
        }
    }

    return (
        <Heading 
            as="h1" 
            color={ headingColor }
            fontSize={ headingFontSize }
            fontFamily="Georgia, 'Times New Roman', Times, serif"
            fontWeight="medium"
            // bg="red"
            py="4"
            _after={{ content: `""`,  display: 'block', height: '5px', width: '50px', marginTop: '8px', background: headingColor }}
        >
            { children }
        </Heading>
    )
}