import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

import Link from 'next/link';

import { Collapse, Divider, Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react';

import styled from '@emotion/styled';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { useState } from 'react';

const actingAreas = [
    {
        areaId:  'direito_civil',
        areaTitle: 'Direito Civil',
        areaDescription: 'Área essencial para tratar de questões que afetam o cotidiano de indivíduos e empresas. Trata normas reguladoras de direitos, obrigações dos cidadãos e as relações entre pessoas naturais e jurídicas.',
        areaBackground: '/images/direito_civil.png',
    },
    {
        areaId: 'direito_trabalhista',
        areaTitle: 'Direito Trabalhista',
        areaDescription: 'Área que trata dos assuntos relacionados ao trabalho. Dentre os diversos serviços, podemos destacar ações trabalhistas, acidente de trabalho, indenizações, aposentadoria.',
        areaBackground: '/images/direito_trabalhista.jpg',
    },
    {
        areaId: 'familia_sucessao',
        areaTitle: 'Família e Sucessão',
        areaDescription: 'Área do direito que regula as relações familiares, bem como os direitos e obrigações que advirem delas, de acordo com as normas jurídicas.',
        areaBackground: '/images/familia_sucessao.jpg',
    },
]

export function Slides() {
    const breakPoint = useBreakpointValue({ base: false, md: true })

    // banner mouse hover
    const [hovering, setHovering] = useState(false);

    return (
        <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination
            autoplay={{delay: 5000}}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            { actingAreas.map((actArea) => {
                return (
                    <SwiperSlide
                        key={ actArea.areaId }
                    >
                        <Link href="/areas">
                            <Flex
                                bg={`linear-gradient(0deg, #1d1d1d99, #0e0d0dcc), url(${ actArea.areaBackground })`}
                                h={{ base: "200px", md: "300px", lg: "350px" }}
                                backgroundPosition="center"
                                backgroundRepeat="no-repeat"
                                backgroundSize="cover"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center"
                                px={20}
                                color="brand.title_bg_black"
                                onMouseEnter={() => setHovering(true)}
                                onMouseLeave={() => setHovering(false)}
                                transition="0.3s"
                            >
                                <Heading
                                    fontFamily="Georgia, 'Times New Roman', Times, serif"
                                    fontSize={{ base: 'xl', md: '4xl' }}
                                    fontWeight="medium"
                                    letterSpacing="1px"
                                    // mb={{ base: 0, lg: 5 }}
                                    textAlign="center"
                                >
                                    { actArea.areaTitle.toUpperCase() }
                                </Heading>
                                <Divider 
                                    display={{ base: "none", md: "flex"  }}
                                    borderColor="brand.title_bg_black"
                                    borderBottomWidth="5px" 
                                    width="50px"
                                    mt="8px" 
                                    opacity="1" 
                                />

                                {
                                    breakPoint && (
                                        <Collapse
                                            in={ hovering }
                                        >
                                            <Text mt={5} fontSize={{ base:'lg', lg: 'xl' }} color="#efefef" textAlign='justify'>{ actArea.areaDescription }</Text>
                                        </Collapse>
                                    )
                                }
                            </Flex>
                        </Link>
                    </SwiperSlide>
                )
            }) }

        </Swiper>
    )
}