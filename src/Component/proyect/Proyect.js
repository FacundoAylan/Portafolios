import { Card, CardBody, CardFooter, Center, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import IconsProyect from "./icons";

function Proyect() {
  return (
    <Flex
      flexDirection="column"
      h='96%'
      overflow='scroll'
    >
      <Card
        direction={{ base: "column", md: "column", lg: "row" }}
        color="black"
        borderRadius={12}
        m={{ base: 1, md: 1, lg: 5 }}
        border="2px"
        borderColor="green"
        bg="white"
        h='100%'
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", md: "100%", lg: "200px" }}
          src="https://i.ibb.co/BT7F5ZZ/weather.png"
          alt="Weather"
          borderTopLeftRadius={{ base: 12, md: 12, lg: 12 }}
          borderTopRightRadius={{ base: 12, md: 12, lg: 0 }}
          borderBottomLeftRadius={{ base: 0, md: 0, lg: 12 }}
        />
        <Stack>
          <CardBody>
            <Heading size="md">
              <Center>Weather</Center>
            </Heading>
            <Text>App donde podras consulta el clima de tu pais o cuidad.</Text>
          </CardBody>
          <CardFooter p={1} >
            <IconsProyect github='' web=''/>
          </CardFooter>
        </Stack>
      </Card>

      <Card
        direction={{ base: "column", md: "column", lg: "row" }}
        mt={5}
        color="black"
        borderRadius={12}
        m={{ base: 1, md: 1, lg: 5 }}
        border="2px"
        borderColor="green"
        bg="white"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", md: "100%", lg: "200px" }}
          src="https://i.ibb.co/DbPQfq0/Cursort.png"
          alt="Cursort"
          borderTopLeftRadius={{ base: 12, md: 12, lg: 12 }}
          borderTopRightRadius={{ base: 12, md: 12, lg: 0 }}
          borderBottomLeftRadius={{ base: 0, md: 0, lg: 12 }}
        />
        <Stack>
          <CardBody>
            <Heading size="md">
              <Center>Cursort</Center>
            </Heading>
            <Text py="2">
              Ecommerce donde vas a poder comprar tus cursos de programacion.
            </Text>
          </CardBody>
          <CardFooter p={1}>
            <IconsProyect github='' web=''/>
          </CardFooter>
        </Stack>
      </Card>

      <Card
        direction={{ base: "column", md: "column", lg: "row" }}
        mt={5}
        color="black"
        borderRadius={12}
        m={{ base: 1, md: 1, lg: 5 }}
        border="2px"
        borderColor="green"
        bg="white"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", md: "100%", lg: "200px" }}
          src="https://i.ibb.co/BT7F5ZZ/weather.png"
          alt="Weather"
          borderTopLeftRadius={{ base: 12, md: 12, lg: 12 }}
          borderTopRightRadius={{ base: 12, md: 12, lg: 0 }}
          borderBottomLeftRadius={{ base: 0, md: 0, lg: 12 }}
        />
        <Stack>
          <CardBody>
            <Heading size="md">
              <Center>Videogames</Center>
            </Heading>
            <Text py="2">
              App donde vas a poder buscar informacion de tus videojuegos
              favoritos.
            </Text>
          </CardBody>
          <CardFooter p={1}>
            <IconsProyect github='' web=''/>
          </CardFooter>
        </Stack>
      </Card>
    </Flex>
  );
}

export default Proyect;
