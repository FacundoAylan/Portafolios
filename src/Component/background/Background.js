import { Box, Flex} from "@chakra-ui/react";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { DiVisualstudio, DiReact, DiGit } from "react-icons/di";
import { FiLinkedin } from "react-icons/fi";
import { VscTerminalLinux, VscServer } from "react-icons/vsc";
import { FaGit, FaNodeJs, FaNpm, FaHtml5, FaNode } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";



function Background () {
  const image = [...Array(30).keys()] 
  return (
    <>
    { 
    image.map((value) =>{
      return (
        <Flex
          gap={25}
          flexDirection={value % 2 !== 0 ? "row-reverse" : ""}
          overflow="hidden"
          color="rgba(0,0,0,0.5)"
          fontSize={'11.5vh'}
        >
          <Box
            transform="rotate(-30deg)"
            _hover={{ bgGradient:'linear(to-l, #7928CA, #FF0080)' }}
          >
            <VscServer />
          </Box>
          <Box transform="rotate(-30deg)" _hover={{ color: "green" }}>
            <DiGit />
          </Box>
          <Box
            transform="rotate(-30deg)"
            _hover={{ bgGradient:'linear(to-l, #7928CA, #FF0080)' }}
          >
            <SiPostgresql />
          </Box>
          <Box
            transform="rotate(-30deg)"
            _hover={{ color: "green" }}
          >
            <FiGithub />
          </Box>
          <Box
            transform="rotate(-30deg)"
            _hover={{ bgGradient:'linear(to-l, #7928CA, #FF0080)' }}
          >
            <DiVisualstudio />
          </Box>
          <Box
            transform="rotate(-30deg)"
            _hover={{ color: "green" }}
          >
            <DiReact />
          </Box>
          <Box
            transform="rotate(-30deg)"
            _hover={{ bgGradient:'linear(to-l, #7928CA, #FF0080)' }}
          >
            <FiLinkedin />
          </Box>
          <Box
            transform="rotate(-30deg)"
            _hover={{ color: "green" }}
          >
            <VscTerminalLinux />
          </Box>
          <Box
            transform="rotate(-30deg)"
            _hover={{ bgGradient:'linear(to-l, #7928CA, #FF0080)' }}
          >
            <FaGit />
          </Box>
          <Box
            transform="rotate(-30deg)"
            _hover={{ color: "green" }}
          >
            <FaNodeJs />
          </Box>
          <Box
            transform="rotate(-30deg)"
            _hover={{ bgGradient:'linear(to-l, #7928CA, #FF0080)' }}
          >
            <FaNpm />
          </Box>
          <Box
            transform="rotate(-30deg)"
            _hover={{ color: "green" }}
          >
            <FaHtml5 />
          </Box>
          <Box
            transform="rotate(-30deg)"
            _hover={{ bgGradient:'linear(to-l, #7928CA, #FF0080)' }}
          >
            <FaNode />
          </Box>
        </Flex>
      );
    })

    }
    </>
  )
};

export default Background;