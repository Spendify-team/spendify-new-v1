import { Card, CardBody, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

export const ArticleCard = (props) => {
    const { id, name, subText } = props;

    return (
        <Card shadow={0}>
            {/* TODO: replace static data with dynamic backend response  */}
            <CardBody>
                <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading fontFamily="Gilroy700" size='md'>
                        <Link to={`/blog/${id}`}>Living room Sofa</Link>
                    </Heading>
                    <Text fontFamily="Gilroy400" fontWeight={400}>
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces, earthy toned spaces and for people who love a chic design with a
                        sprinkle of vintage design.
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    )
}
