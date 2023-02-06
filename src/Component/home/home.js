import React from "react";
import { Box, Center, IconButton } from "@chakra-ui/react";
import { BsGithub, BsLinkedin} from 'react-icons/bs';

export default function Home () {
  return (
    <Box h='98vh' bg='none'>
      <Center 
        pt='25vh'
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize={{base:'5xl', md:'8xl'}}
        fontWeight='extrabold'
        _hover={{color:'green'}}
      >
        WELCOME!
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