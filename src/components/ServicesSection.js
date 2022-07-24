import React from 'react'
import { Box, Text, VStack,useMediaQuery } from '@chakra-ui/react'
import { BiMenu, BiAbacus } from 'react-icons/bi'

function ServicesSection() {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
    return (
        <Box bgColor="#ca1616" display='flex' justifyContent='space-evenly' alignItems='center' height={isLargerThan768?'300':'100%'}>
            <Box color='white' fontSize="3xl">
                <h1>WTF Fitness Experience?</h1>
            </Box>
            <Box display='flex' gap='10' p='8' justifyContent='center' alignItems='center' flexDir={{ md: 'row',sm:'column' }}>
                <Box boxShadow='1px -5px 23px 6px rgba(0,0,0,0.5)' p='6' rounded='md' bg='#cb3838' color='white'>
                    <VStack>
                        <BiMenu />
                        <Text>Modern Equipments</Text>
                    </VStack>
                </Box>
                <Box boxShadow='1px -5px 23px 6px rgba(0,0,0,0.5)' p='6' rounded='md' bg='#cb3838' color='white'>
                    <VStack>
                        <BiAbacus />
                        <Text>Skilled Trainer</Text>
                    </VStack>
                </Box>
                <Box boxShadow='1px -5px 23px 6px rgba(0,0,0,0.5)' p='6' rounded='md' bg='#cb3838' color='white'>
                    <VStack>
                        <BiMenu />
                        <Text>Top Class Ambiance</Text>
                    </VStack>
                </Box>
                <Box boxShadow='1px -5px 23px 6px rgba(0,0,0,0.5)' p='6' rounded='md' bg='#cb3838' color='white'>
                    <VStack>
                        <BiMenu />
                        <Text>Sanitized GYMS</Text>
                    </VStack>
                </Box>
            </Box>
        </Box>
    )
}

export default ServicesSection