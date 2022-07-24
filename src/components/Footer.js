import React from 'react'
import './customStyles.css'
import { Flex, useMediaQuery } from '@chakra-ui/react'
import { FiInstagram, FiFacebook, FiLinkedin, FiMapPin, FiPhone, FiMail } from "react-icons/fi";

function Footer() {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
    return (
        <Flex pt='6' pb='6'
        bgColor='primaryBg' color='white' justifyContent='space-around' direction={isLargerThan768 ? "row" : "column"}>
            <Flex flexDir='column' flex='0.2'>
                <img style={{ display: "block", margin: "10px auto" }} src='https://e1.pngegg.com/pngimages/203/519/png-clipart-wordcons-wtf-text-thumbnail.png' alt='' width="100px" height="100px" />
                <Flex gap='8' justifyContent='center' mt='6'>
                    <FiInstagram size="50" />
                    <FiFacebook size="50" />
                    <FiLinkedin size="50" />
                </Flex>
            </Flex>
            <Flex justifyContent='space-evenly' w={isLargerThan768 ? "50%" : "100%"}>
                <Flex flexDir='column'>
                    <h1 className='footer__heading'>Qucik Links</h1>
                    <Flex flexDir='column' gap='5'>
                        <a href='#'>About</a>
                        <a href='#'>FAQs</a>
                        <a href='#'>Privacy Policy</a>
                        <a href='#'>Terms & Conditons</a>
                        <a href='#'>Refund & Cancellation</a>
                    </Flex>
                </Flex>
                <Flex flexDir='column'>
                    <h1 className='footer__heading'>Explore</h1>
                    <Flex flexDir='column' gap='5'>
                        <a href='#'>Arenas</a>
                        <a href='#'>Studios</a>
                        <a href='#'>Nutrition</a>
                    </Flex>
                </Flex>
            </Flex>
            <Flex flex='0.3' flexDir='column' alignItems={isLargerThan768 ? "normal" : "center"}>
                <h1 className='footer__heading'>Contact</h1>
                <Flex flexDir='column'>
                    <Flex gap='4'>
                        <FiMapPin size="40" />
                        <p>Ro: S1502, Amrapali Silicon City, Sector 76, Noida, Uttar Pradesh, India</p>
                    </Flex>
                    <Flex gap='4'>
                        <FiMapPin size="40" />
                        <p>Ho: C-86 B, Ground Floor,Sector-8,Noida,Uttar Pradesh. India</p>
                    </Flex>
                    <Flex gap='4'>
                        <FiPhone size="20" />
                        <p>+91 9090639005</p>
                    </Flex>
                    <Flex gap='4'>
                        <FiMail size="20" />
                        <p>support@wtfup.me</p>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Footer