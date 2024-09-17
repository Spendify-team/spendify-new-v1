import {Card, CardBody, Heading, Image, Stack, Text} from '@chakra-ui/react';
import React from 'react';
import {Link} from 'react-router-dom';


export const ArticleCard = ({imgBanner, link, title, description}) => {
    return (
        <Card shadow={0}>
            <CardBody>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <Image
                        src={imgBanner}
                        alt={title}
                        borderRadius='lg'
                        mb={4}
                    />
                </a>
                <Stack spacing='3'>
                    <Heading fontFamily="Gilroy700" size='md'>
                        {/*<Link to={link}>{title}</Link>*/}
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <span dangerouslySetInnerHTML={{__html: title}}/>
                        </a>
                    </Heading>
                    <Text fontFamily="Gilroy400" fontWeight={400} dangerouslySetInnerHTML={{__html: description}}/>
                </Stack>
            </CardBody>
        </Card>
    );
};
