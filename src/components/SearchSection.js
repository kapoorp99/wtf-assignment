import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import { Flex, VStack, Select } from '@chakra-ui/react'
import Card from './Card'
import { useSelector } from 'react-redux'

function SearchSection() {
    const gyms = useSelector(state => state.gyms)
    const [data, setData] = useState([])
    useEffect(() => {
        setData(gyms.data.data)
    }, [gyms])
    return (
        <Flex flexDir='column' bgColor='black' p='6'>
            <SearchBar />
            <Flex flexDir={{ md: 'row', sm: 'column' }} gap="4">
                <Flex flex='0.2' color='white' flexDir='column' fontWeight="bold" fontSize="md">
                    <h1>Filters</h1>
                    <Flex flexDir='column'>
                        <Flex flexDir='column'>
                            <h1>Location</h1>
                            <input className='filter__inputs location__input' type='text' placeholder='Enter Location' />
                        </Flex>
                        <Flex flexDir='column'>
                            <h1>Price</h1>
                            <Flex gap='6'>
                                <input className='filter__inputs' type='number' placeholder='min' min='0' />
                                <input className='filter__inputs' type='number' placeholder='max' />
                            </Flex>
                        </Flex>
                        <Flex flexDir='column'>
                            <h1>Cities</h1>
                            <Select bg="#2e2e2e;" defaultValue='New Delhi'>
                                <option style={{background:"#2e2e2e",color:"white"}} value="New Delhi">
                                    New Delhi
                                </option>
                                <option style={{background:"#2e2e2e",color:"white"}} value="ghaziabad">
                                    Ghaziabad
                                </option>
                                <option style={{background:"#2e2e2e",color:"white"}} value="Noida">
                                    Noida
                                </option>
                                <option style={{background:"#2e2e2e",color:"white"}} value="Delhi">
                                    Delhi
                                </option>
                            </Select>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex flexDir='column' flex='0.8' height='500' overflowY="scroll" scrollBehavior='smooth' className='custom__scrollbar' >
                    {data && data.map((g, i) => {
                        return (
                            <Card data={g} key={i} />
                        )
                    })}
                </Flex>
            </Flex>
        </Flex>
    )
}

export default SearchSection