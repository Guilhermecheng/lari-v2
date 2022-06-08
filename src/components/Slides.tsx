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
        areaDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque',
        areaBackground: '/images/direito_civil.png',
    },
    {
        areaId: 'direito_trabalhista',
        areaTitle: 'Direito Trabalhista',
        areaDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque',
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
                        <Flex
                            bg={`linear-gradient(0deg, rgba(51, 51,51, 0.8), rgba(51, 51,51, 0.8)), url(${ actArea.areaBackground })`}
                            h={{ base: "200px", md: "300px", lg: "400px" }}
                            backgroundPosition="center"
                            backgroundRepeat="no-repeat"
                            backgroundSize="cover"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            px={14}
                            color="#e1e1e1"
                        >
                            <Heading
                                fontFamily="Georgia, 'Times New Roman', Times, serif"
                                fontSize={{ base: 'xl', md: '4xl' }}
                                fontWeight="medium"
                                letterSpacing="1px"
                                mb={{ base: 0, lg: 10 }}
                                textAlign="center"
                            >
                                { actArea.areaTitle.toUpperCase() }
                            </Heading>

                            { breakPoint && <Text>{ actArea.areaDescription }</Text> }
                        </Flex>
                    </SwiperSlide>
                )
            }) }
            
        </Swiper>
    )
}