import {
  Box,
  Button,
  Center,
  IconButton,
  Input,
  Textarea,
  Heading,
  VStack,
  HStack,
  FormControl,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
// import { ArrowLeftIcon } from "@chakra-ui/icons";
import React from "react";

function Contact() {
  return (
    <Box
      bg="none"
      color="black"
      borderRadius="lg"
      w="98%"
      m={{ base: "1%", md: "", lg: 3 }}
      overflow='auto'
      maxH={{ base: "65vh", md: "30vh", lg: '72vh' }}
    >
      <Center>
        <Heading>Contact us</Heading>
      </Center>

      <Center mt={{ base: 5, md: 1, lg: 5 }}>
        <Box
          color="white"
          borderRadius="lg"
          w={{ base: "90%", md: "50%", lg: "50%" }}
          p={{ base: 1, md: "3", lg: 5 }}
        >
          <VStack spacing={5}>
            <form
              action="https://formsubmit.co/2375b55a786a8aa1e0447ba34487bc4b "
              method="POST"
            >
              <FormControl id="name">
                <Center color='black'>Your name</Center>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BsPerson color="#111" />}
                  />
                  <Input
                    type="text"
                    size="md"
                    name="name"
                    required
                    bg="white"
                    color='black'
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="name">
                <Center color='black'>Mail</Center>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<MdOutlineEmail color="#111" />}
                  />
                  <Input
                    type="email"
                    name="email"
                    required
                    size="md"
                    bg="white"
                    color='black'
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="name">
                <Center color='black'>Message</Center>
                <Textarea
                  borderColor="gray.300"
                  _hover={{
                    borderRadius: "green",
                  }}
                  placeholder="comment..."
                  type="Comments"
                  name="Comments"
                  required
                  bg="white"
                  color='black'
                />
              </FormControl>
              <FormControl id="name" float="right" mt="3%">
                <Button
                  variant="solid"
                  bg="green"
                  color="white"
                  width="100%"
                  type="submit"
                  _hover={{bg:'green'}}
                >
                  Send
                </Button>
              </FormControl>
              <Input
                type="hidden"
                name="_next"
                value="https://portafolios-rose.vercel.app/"
              />
              <Input type="hidden" name="_captcha" value="false" />
            </form>
          </VStack>
        </Box>
      </Center>

      <Box>
        <HStack
          mt={{ base: 1, md: 1, lg: 7 }}
          spacing={5}
          px={{ base: 1, md: 1, lg: 5 }}
          alignItems="flex-start"
          justifyContent="center"
        >
          <a href="https://github.com/FacundoAylan/CurSort">
            <IconButton
              aria-label="github"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: "green" }}
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
              _hover={{ bg: "green" }}
              icon={<BsLinkedin size="40px" />}
            />
          </a>
        </HStack>
      </Box>
    </Box>
  );
}

export default Contact;
