import React from 'react'
import Header from './Header'
import './customStyles.css'
import { Box} from '@chakra-ui/react'

function HeroSection() {
    return (
        <Box height='700' bgImage='https://assets.telegraphindia.com/telegraph/2020/Oct/1603383828_gyms.jpg' bgSize='cover' bgRepeat='no-repeat'>
            <Header />
            {/* <img className='hero_img' src='https://assets.telegraphindia.com/telegraph/2020/Oct/1603383828_gyms.jpg' alt='' /> */}
        </Box>
    )
}

export default HeroSection