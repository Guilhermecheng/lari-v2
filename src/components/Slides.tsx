import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import Link from 'next/link';

import { Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const actingAreas = [
    {
        areaId:  'direito_civil',
        areaTitle: 'Direito Civil',
        areaDescription: 'Trata normas reguladoras de direitos, obrigações dos cidadãos e as relações entre pessoas naturais e jurídicas',
        areaBackground: '/images/direito_civil.png',
    },
    {
        areaId: 'direito_trabalhista',
        areaTitle: 'Direito Trabalhista',
        areaDescription: 'Área do direito que regula a relação entre empregado e empregador. Ramo essencial para preservar a justiça na sociedade.',
        areaBackground: '/images/direito_trabalhista.jpg',
    },
    {
        areaId: 'familia_sucessao',
        areaTitle: 'Família e Sucessão',
        areaDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaqueSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque',
        areaBackground: '/images/familia_sucessao.jpg',
    },
]

export function Slides() {
    const breakPoint = useBreakpointValue({ base: false, lg: true })

    return (
        <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            // height={1400}
        >
            { actingAreas.map((actArea) => {
                return (
                    <SwiperSlide
                        key={ actArea.areaId }
                    >
                        <Link href="/areas">
                            <Flex
                                bg={`linear-gradient(0deg, rgba(51, 51,51, 0.8), rgba(51, 51,51, 0.8)), url(${ actArea.areaBackground })`}
                                h={{ base: "200px", md: "300px", lg: "400px" }}
                                backgroundPosition="center"
                                backgroundRepeat="no-repeat"
                                backgroundSize="cover"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center"
                                px={20}
                                color="brand.title_bg_black"
                                _hover={{ opacity: 0.8 }}
                            >
                                <Heading
                                    fontFamily="Georgia, 'Times New Roman', Times, serif"
                                    fontSize={{ base: 'xl', md: '4xl' }}
                                    fontWeight="medium"
                                    letterSpacing="1px"
                                    mb={{ base: 0, lg: 5 }}
                                    textAlign="center"
                                >
                                    { actArea.areaTitle.toUpperCase() }
                                </Heading>

                                { breakPoint && <Text fontSize='xl'>{ actArea.areaDescription }</Text> }
                            </Flex>
                        </Link>
                    </SwiperSlide>
                )
            }) }
            
        </Swiper>
    )
}