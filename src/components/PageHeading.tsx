import { Divider, Heading } from "@chakra-ui/react";

interface PageHeadingProps {
    children: string | any;
    isBgDark: boolean;
    fontSize?: 'h1' | 'h2';
    isMarginYNotNecessary?: boolean;
}

export function PageHeading({children, isBgDark, fontSize, isMarginYNotNecessary}: PageHeadingProps) {
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
        <>
        <Heading 
            as="h1" 
            color={ headingColor }
            fontSize={ headingFontSize }
            fontFamily="Georgia, 'Times New Roman', Times, serif"
            fontWeight="medium"
            my={!isMarginYNotNecessary ? { base: 4, md: 8 } : 0}
        >
            { children }

            <Divider 
                display="flex" 
                borderColor={headingColor} 
                borderBottomWidth="5px" 
                width="50px"
                mt="8px" 
                opacity="1" 
            />

        </Heading>
        </>
    )
}