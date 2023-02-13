import { Avatar, Box, Center, Flex, Image, Text } from '@chakra-ui/react';

function AvatarAbout() {

  return (
    <Box h={{base:'100%', md:'100vh'}} pt={{base:'60px', md:'40px'}}>
      <Center fontSize={{base:'20', md:'62'}}>Sobre mi ...</Center>
      <Center>
        <Avatar
          src="https://i.ibb.co/N2sRTJ8/link.jpg"
          size={{base:'2xl', md:'2xl'}}
          top={0}
        />
      </Center>
      <Box>
        <Text>Desarrolador  full stack  con background en ingenieria naval .</Text>
        <Text>
          Estos ultimos meses he tenido el privilegio  formar parte en la creación de un ecommerce, en el cual cumplia el rol de front end ,que me han permitido reforzar  mi habilidades en tegnologias como react js y chakra ui . 
          Me describo como una persona  creativa, detallista y apasionada por el aprendizaje
          constante  , ademas de poder  adaptarme rápidamente  a nuevos cambios y ser muy comprometido,colaborativo y estusiasta por las cosas que realizo. 
        </Text>
      </Box>
      <Center>Skills</Center> 
      <Flex flexWrap='wrap' justifyContent='center' bg='green'> 
        <Image m='10px' src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" h="58" />
        <Image m='10px' src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" h="58"  /> 
        <Image m='10px' src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" h="58" /> 
        <Image m='10px' src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" h="58" />  
        <Image m='10px' src="https://profilinator.rishav.dev/skills-assets/redux-original.svg" alt="Redux" h="58" /> 
        <Image m='10px' src="https://profilinator.rishav.dev/skills-assets/chakraui.png" alt="Chakra UI" h="58" />
        <Image m='10px' src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" h="20" />  
        <Image m='10px' src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" h="20" />  
        <Image m='10px' src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" alt="MySQL" h="20" /> 
        <Image m='10px' src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg" alt="PostgreSQL" h="20" /> 
      </Flex>

    </Box>
  );
};

export default AvatarAbout;