import { Box, Flex} from "@chakra-ui/react";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { DiVisualstudio, DiReact, DiGit } from "react-icons/di";
import { FiLinkedin } from "react-icons/fi";
import { VscTerminalLinux, VscServer } from "react-icons/vsc";
import { FaGit, FaNodeJs, FaNpm, FaHtml5, FaNode } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";



function Background () {
  const image = [1,2,3,4,5,6,7,8] 
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
            _hover={{ color: "green" }}
          >
            <VscServer />
          </Box>
          <Box transform="rotate(-30deg)" _hover={{ color: "green" }}>
            <DiGit />
          </Box>
          <Box
            transform="rotate(-30deg)"
            _hover={{ color: "green" }}
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
            _hover={{ color: "green" }}
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
            _hover={{ color: "green" }}
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
            _hover={{ color: "green" }}
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
            _hover={{ color: "green" }}
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
            _hover={{ color: "green" }}
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