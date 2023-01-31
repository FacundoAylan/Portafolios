import React from "react";
import {
  Box,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { BsGithub} from "react-icons/bs";
import { BiWorld } from 'react-icons/bi'

function IconsProyect ({ github, web }) {
  return (
    <Box ml={{ base: "12%", md: "35%", lg: "28%" }} >
    <HStack
      mt={{ base: 1, md: 1, lg: 0 }}
      spacing={4}
      px={{ base: 1, md: 1, lg: 1 }}
      alignItems="flex-start"
      justifyContent="center"
    >
      <a href={github}>
        <IconButton
          aria-label="github"
          variant="ghost"
          size="lg"
          isRound={true}
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          _hover={{ bg: "green" }}
          icon={<BsGithub size="40px" color="#0f130c"/>}
        />
      </a>
      <a
        href={web}
        target="_blank"
        rel="noreferrer"
      >
        <IconButton
          aria-label="web"
          variant="ghost"
          size="lg"
          isRound={true}
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          _hover={{ bg: "green" }}
          icon={<BiWorld size="45px" color="#0f130c" />}
        />
      </a>
    </HStack>
  </Box>
  ) 
};

export default IconsProyect;