import { Box, Center, Flex, IconButton, Text } from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsTelephoneForward } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai"
import React from "react";

function Icons() {
  return (
    <Box mt='5%' color="rgba(0,0,0,0.5)">
      <Flex>
        <AiOutlineMail/>
        <Text>facundoaylan3@gmail.com</Text>
      </Flex>
      <Flex>
        <BsTelephoneForward/>
        <Text>(+54) 11 36747801</Text>
      </Flex>

      <Center>
        <a
          href="https://github.com/FacundoAylan"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            aria-label="github"
            variant="ghost"
            size="lg"
            isRound={true}
            _hover={{ color: "green" }}
            icon={<BsGithub size="40px" />}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/facundo-aylan-582b52257/"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            aria-label="github"
            variant="ghost"
            size="lg"
            _hover={{ color: "green" }}
            icon={<BsLinkedin size="40px" />}
            ml={8}
          />
        </a>
      </Center>
    </Box>
  );
}

export default Icons;
