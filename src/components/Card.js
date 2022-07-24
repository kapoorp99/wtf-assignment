import React from 'react'
import { Flex, VStack, Box,Button } from '@chakra-ui/react'
import { BiStar, BiShare } from 'react-icons/bi'
import './customStyles.css'

function Card(props) {
    return (
        <Flex margin='2' borderRadius='md' bg='#131313' style={{height:"300px"}}>
            <Box flex='0.5' w='52' borderRadius='md'>
                <img height='100px' style={{borderRadius:"5px",objectFit:"contain"}} src={props.data.cover_image || "https://www.houstonmethodist.org/-/media/images/contenthub/article-images/exercise/hub_returningtogym_article.ashx?mw=1382&hash=3D71A3DA41EE783E0724E9C25D0998B4"}  />
            </Box>
            <VStack boxShadow="-28px 2px 24px 0px rgba(0,0,0,0.8)" color='white' flex='0.5' zIndex='2'>
                <h1>{props.data.gym_name}</h1>
                <Flex>
                    {[...Array(props.data.rating)].map((s,i) => {
                        return (
                            <BiStar key={i} />
                        )
                    })}
                </Flex>
                <p>{props.data.address1 + " " + props.data.address2}</p>
                <Flex>
                    <BiShare />
                    <p></p>
                </Flex>
                <Flex justifyContent='space-between' w='80%' alignItems='center'>
                    <p>
                        ₹3600 for 3 months
                    </p>
                    <Button colorScheme='red'>Book Now</Button>
                </Flex>
            </VStack>
        </Flex>
    )
}

export default Card