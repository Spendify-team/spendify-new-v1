import React, {useEffect, useState} from 'react';
import {
    Box,
    Container,
    Heading,
    SimpleGrid,
} from '@chakra-ui/react';
import {ArticleCard} from './ArticleCard';


const ArticlesSection = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch("https://api.spendify.ca/api/v1/admin/blogs");
                if (!response.ok) {
                    throw new Error("Failed to fetch blogs data");
                }
                const data = await response.json();
                const filteredBlogs = data.data.filter(blog => blog.status);
                setBlogs(filteredBlogs);
            } catch (error) {
                console.error("Error fetching blogs data:", error);
            }
        };

        fetchBlogs();
    }, []);

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
                <SimpleGrid columns={{base: 1, md: 2, lg: 3}} p={0}>
                    {blogs.map((blog) => (
                        <ArticleCard
                            imgBanner={blog.imgBanner}
                            link={blog.link}
                            title={blog.title}
                            description={blog.description}
                            key={blog.bid}
                        />
                    ))}
                </SimpleGrid>
            </Box>
        </Container>
    );
}

export default ArticlesSection;
