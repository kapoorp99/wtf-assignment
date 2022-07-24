import { Button, HStack, Image, Link, Box, Show, Hide } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { BiMenu } from 'react-icons/bi'

function Header() {
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });


  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 50 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
  };
  return (
    <header>
      <HStack backgroundColor='transparent' className='header-section' color='white' display='flex' alignItems='center' justifyContent='space-between' padding='18px'>
        <HStack>
          <Show breakpoint='(max-width: 968px)'>
            <BiMenu />
          </Show>
          <Image src='https://e1.pngegg.com/pngimages/203/519/png-clipart-wordcons-wtf-text-thumbnail.png' width="50px" height="50px" />
        </HStack>
        <HStack>
          <HStack>
            <Hide breakpoint='(max-width: 968px)'>
              <HStack spacing='10' mr='5' fontSize='lg' fontWeight='500'>
                <a>Fitness</a>
                <a>Nutrition</a>
                <a style={{ textDecoration: 'underline', textDecorationColor: "red" }}>Gyms</a>
                <a>Become WTF Partner</a>
                <a>About Us</a>
              </HStack>
            </Hide>
            <Button colorScheme='red'>Login</Button>
          </HStack>
        </HStack>
      </HStack>
    </header>
  )
}

export default Header