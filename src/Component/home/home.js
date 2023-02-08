import React from "react";
import { Box, Center, keyframes } from "@chakra-ui/react";
import { BsGithub, BsLinkedin} from 'react-icons/bs';

export default function Home () {
  const key = keyframes`
  0%{-webkit-transform:translateY(0px);color:#F0F8FF}
  10%{-webkit-transform:translateY(2px);color:#FAEBD7}
  20%{-webkit-transform:translateY(-2px);color:#00FFFF}
  30%{-webkit-transform:translateY(2px);color: #9932CC}
  40%{-webkit-transform:translateY(-2px);color:#FFFFFF}
  50%{-webkit-transform:translateY(2px); color: #FF0000}
  60%{-webkit-transform:translateY(-2px);color:#00FF00}
  70%{-webkit-transform:translateY(2px); color:#0000FF}
  80%{-webkit-transform:translateY(-2px);color:#FFFF00}
  90%{-webkit-transform:translateY(2px);color:#00FFFF}
  100%{-webkit-transform:translateY(0px);color:#FF00FF}

  `
  const key1 = keyframes`
  0%{-webkit-transform:translateY(0px);color:#F0F8FF}
  10%{-webkit-transform:translateY(2px);color:#FAEBD7}
  20%{-webkit-transform:translateY(-2px);color:#00FFFF}
  30%{-webkit-transform:translateY(2px);color: #9932CC}
  40%{-webkit-transform:translateY(-2px);color:#FFFFFF}
  50%{-webkit-transform:translateY(2px); color: #FF0000}
  60%{-webkit-transform:translateY(-2px);color:#00FF00}
  70%{-webkit-transform:translateY(2px); color:#0000FF}
  80%{-webkit-transform:translateY(-2px);color:#FFFF00}
  90%{-webkit-transform:translateY(2px);color:#00FFFF}
  100%{-webkit-transform:translateY(0px);color:#FF00FF}

  `
  const animation = `${key} 3 5s reverse`
  const animation1 = `${key1} 3 5s reverse`
  return (
    <Box h='98vh' bg='none'>
      <Center 
        pt='22vh'
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize={{base:'3xl', md:'8xl'}}
        fontWeight='extrabold'
        _hover={{color:'green'}}
        animation={animation}
      >
        Bienvenidos! Soy 
      </Center>
      
      <Center 
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize={{base:'3xl', md:'8xl'}}
        fontWeight='extrabold'
        _hover={{color:'green'}}
        animation={animation1}
      >
        Facundo Aylan 
      </Center>
      <Center mt={10}>
        <a href="https://github.com/FacundoAylan" target="_blank" rel="noreferrer">
          <Box
            borderRadius='full'
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            _hover={{ bg: "green" }}
            fontSize={'9vh'}
          >
          <BsGithub  color="#0f130c" />
          </Box>
        </a>
        <a href="https://www.linkedin.com/in/facundo-aylan-582b52257/" target="_blank" rel="noreferrer" >
          <Box
            borderRadius={12}
            fontSize={'9vh'}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            _hover={{ bg: "green" }}
            ml={4}
          >
            <BsLinkedin  color="#0f130c" />
          </Box>
        </a>
      </Center>
    </Box>
  )
}