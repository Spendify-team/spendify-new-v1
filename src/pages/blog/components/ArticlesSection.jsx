import React from 'react'
import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Stack,
} from '@chakra-ui/react'
import { ArticleCard } from './ArticleCard'
import { navItems } from '../../../utils/constants'

const ArticlesSection = () => {
  return (
    <Container h={"100%"} size="xl" py={55}>
        <Heading
            fontFamily="Gilroy400"
            fontSize={[20, null, 25]}
            fontWeight={400}
            color="neutralGray900"
            mt={[4, null, 6]}
            mb={10}
            data-aos="fade-up"
        >
          ALL ARTICLES  
        </Heading>
        <Box>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} p={0}>
                {/* TODO: replace navItems with blog array response from endpoint  */}
                {navItems.map((item, index) => (
                    <ArticleCard props={item} key={index} />
                ))}
            </SimpleGrid>
        </Box>
    </Container>
  )
}

export default ArticlesSection