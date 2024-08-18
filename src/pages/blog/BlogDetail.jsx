import React from 'react'
import Experience from '../../components/Experience'
import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import { navItems } from '../../utils/constants'
import { Box, Container, Heading, VStack, SimpleGrid, Image } from '@chakra-ui/react'
import { ArticleCard } from './components/ArticleCard'

export const BlogDetail = () => {
    return (
        <main>
            <Header />
            <Container w={["100%","80%"]} h={"100%"} size="xl" p={[30, 55]}>
                <VStack pt={100}>
                    <Container size={"xl"} textAlign="center">
                        {/* TODO: replace text  */}
                        <Heading 
                            fontSize={[14, 18, 20]}
                            pb={3}
                            fontWeight={400}
                            >
                                Business News — 21 Mar 2024
                        </Heading>
                        {/* TODO: replace text */}
                        <Heading 
                            fontSize={[20, 25, 42]}
                            fontFamily="Gilroy700" 
                            fontWeight={700}
                            mb={10}
                            >
                                Boosting Your Marketing Strategy: Key Trends to Watch in 2023
                        </Heading>
                    </Container>
                    <Container>
                        {/* TODO: replace image  */}
                        <Box w={"100%"} maxW={"700px"}>
                            <Image
                            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='Green double couch with wooden legs'
                            borderRadius='xl'
                            boxSize='100%'
                            objectFit='cover'
                            />
                        </Box>
                        {/* TODO: Add text here  */}
                        <Box></Box>
                    </Container>
                </VStack>
            </Container>

            <Container w={["100%","90%"]} h={"100%"} size="xl" p={[0, 25, 55]}>
                <Box>
                    <Heading
                        fontFamily="Gilroy700"
                        fontSize={[20, null, 25]}
                        fontWeight={600}
                        color="neutralGray900"
                        mt={[4, null, 6]}
                        px={[10, 0]}
                        mb={4}
                        data-aos="fade-up"
                    >
                    Read More Stories
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 2 }} p={0}>
                        {/* TODO: replace navItems with blog array response from endpoint  */}
                        {navItems.slice(0, 2).map((item, index) => (
                            <ArticleCard props={item} key={index} />
                        ))}
                    </SimpleGrid>
                </Box>
            </Container>
            <Experience />
            <Footer />
        </main>
    )
}
