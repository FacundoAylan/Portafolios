import {
  IconButton,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsGithub} from "react-icons/bs";
import { BiWorld } from 'react-icons/bi'

export default function Cards({ image, name, description, github, web}) {
  return (
    <Center py={2}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "540px" }}
        height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={image}
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>{name}</Heading>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            {description}
          </Text>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <a href={github}  target="_blank" rel="noreferrer">
              <IconButton
                aria-label="github"
                variant="ghost"
                flex={1}
                fontSize={"sm"}
                isRound={true}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                _hover={{ bg: "green" }}
                icon={<BsGithub size="40px" color="#0f130c" />}
              />
            </a>
            <a href={web} target="_blank" rel="noreferrer">
              <IconButton
                aria-label="web"
                variant="ghost"
                flex={1}
                fontSize={"sm"}
                isRound={true}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                _hover={{ bg: "green" }}
                icon={<BiWorld size="45px" color="#0f130c" />}
              />
            </a>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
