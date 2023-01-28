import { Box, Button, Card, CardBody, CardFooter, Center, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

function Proyect() {
  return (
    <Flex
      h="100%"
      flexDirection='column'
      overflow='scroll'
    >
      <Card
        direction={{ base: "column", md:'column', lg: 'row' }}
        bg="#111"
        color='white'
        borderRadius={12}
        m={{ base: 1, md: 1, lg: 5 }}
      >
        <Image
          objectFit="cover"
          maxW={{ base: '100%', md:'100%', lg: '200px' }}
          src="https://i.ibb.co/BT7F5ZZ/weather.png"
          alt="Weather"
          borderTopLeftRadius={{ base: 12, md:12, lg: 12 }}
          borderTopRightRadius={{ base: 12, md:12, lg: 0 }}
          borderBottomLeftRadius={{ base: 0, md:0, lg: 12 }}
        />
        <Stack>
          <CardBody>
            <Heading size="md">
              <Center>
                Weather
              </Center>
            </Heading>
            <Text>
              App donde podras consulta el clima de tu pais o cuidad.
            </Text>
          </CardBody>
          <CardFooter>
            <Box ml={{base:'5%', md:'35%', lg:'28%'}}>
              <Button
                bg="green"
                color="white"
                _hover={{ bg: "green" }}
                textDecoration="none"
              >
                <a
                  href="https://cursort.onrender.com/#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
              </Button>
              <a
                href="https://cursort.onrender.com/#/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  bg="green"
                  color="white"
                  _hover={{ bg: "green" }}
                  ml={2}
                >
                  Git-Hub
                </Button>
              </a>
            </Box>
          </CardFooter>
        </Stack>
      </Card>

      <Card
        direction={{ base: "column", md:'column', lg: 'row' }}
        mt={5}
        bg="#111"
        color='white'
        borderRadius={12}
        m={{ base: 1, md: 1, lg: 5 }}
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', md:'100%', lg: '200px' }}
          src="https://i.ibb.co/DbPQfq0/Cursort.png"
          alt="Cursort"
          borderTopLeftRadius={{ base: 12, md:12, lg: 12 }}
          borderTopRightRadius={{ base: 12, md:12, lg: 0 }}
          borderBottomLeftRadius={{ base: 0, md:0, lg: 12 }}
        />
        <Stack>
          <CardBody>
            <Heading  size='md'>
              <Center>
                Cursort
              </Center>
            </Heading>
            <Text py='2'>Ecommerce donde vas a poder comprar tus cursos de programacion.</Text>
          </CardBody>
          <CardFooter>
            <Box ml={{base:'5%', md:'35%', lg:'28%'}}>
              <Button
                bg="green"
                color="white"
                _hover={{ bg: "green" }}
                textDecoration="none"
              >
                <a
                  href="https://cursort.onrender.com/#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
              </Button>
              <a
                href="https://cursort.onrender.com/#/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  bg="green"
                  color="white"
                  _hover={{ bg: "green" }}
                  ml={2}
                >
                  Git-Hub
                </Button>
              </a>
            </Box>
          </CardFooter>
        </Stack>
      </Card>

      <Card
        direction={{ base: "column", md:'column', lg: 'row' }}
        mt={5}
        bg="#111"
        color='white'
        borderRadius={12}
        m={{ base: 1, md: 1, lg: 5 }}
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', md:'100%', lg: '200px' }}
          src="https://i.ibb.co/BT7F5ZZ/weather.png"
          alt="Weather"
          borderTopLeftRadius={{ base: 12, md:12, lg: 12 }}
          borderTopRightRadius={{ base: 12, md:12, lg: 0 }}
          borderBottomLeftRadius={{ base: 0, md:0, lg: 12 }}

        />
        <Stack>
          <CardBody>
            <Heading  size='md'>
              <Center>
                Videogames
              </Center>
            </Heading>
            <Text py='2'>App donde vas a poder buscar informacion de tus videojuegos favoritos.</Text>
          </CardBody>
          <CardFooter>
          <Box ml={{base:'5%', md:'35%', lg:'28%'}}>
              <Button
                bg="green"
                color="white"
                _hover={{ bg: "green" }}
                textDecoration="none"
              >
                <a
                  href="https://cursort.onrender.com/#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
              </Button>
              <a
                href="https://cursort.onrender.com/#/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  bg="green"
                  color="white"
                  _hover={{ bg: "green" }}
                  ml={2}
                >
                  Git-Hub
                </Button>
              </a>
            </Box>
          </CardFooter>
        </Stack>
      </Card> 
    </Flex>
  );
}

export default Proyect;
