import React from 'react'
import { Box, Input,Button } from '@chakra-ui/react'
import { BiSearch, BiLocationPlus } from 'react-icons/bi'

function SearchBar() {
    return (
        <Box border='1px solid white' display='flex' minW='250px' alignItems='center' borderRadius='md'>
            <BiSearch size='40' color='white' />
            <Input border='none'  focusBorderColor='none' style={{caretColor:"red"}} placeholder='Search gym name here' />
            <BiLocationPlus size='40' color='white' />
            <Button colorScheme='red' borderRadius='md'>Clear</Button>
        </Box>
    )
}

export default SearchBar