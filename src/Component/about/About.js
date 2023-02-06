import { Avatar, Box, Center, Flex, Image, keyframes, Text } from '@chakra-ui/react';

function AvatarAbout() {
  const size = '96px';
  const color = 'teal';

  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      w="full"
      overflow="hidden"
      h='100vh'
      >
      <Box
        as="div"
        position="relative"
        w={size}
        h={size}
        _before={{
          content: "''",
          position: 'relative',
          display: 'block',
          width: '300%',
          height: '300%',
          boxSizing: 'border-box',
          marginLeft: '-100%',
          marginTop: '-100%',
          borderRadius: '50%',
          bgColor: color,
          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        }}>
        <Avatar
          src="https://i.ibb.co/N2sRTJ8/link.jpg"
          size="full"
          position="absolute"
          top={0}
        />
      </Box>
      <Box>
        <Text color='black'>Desarrolador  full stack  con background en ingenieria naval .</Text>
        <Text>
          Estos ultimos meses he tenido el privilegio  formar parte en la creación de un ecommerce, en el cual cumplia el rol de front end ,que me han permitido reforzar  mi habilidades en tegnologias como react js y chakra ui . 
          Me describo como una persona  creativa, detallista y apasionada por el aprendizaje
          constante  , ademas de poder  adaptarme rápidamente  a nuevos cambios y ser muy comprometido,colaborativo y estusiasta por las cosas que realizo. 
        </Text>
      </Box>
      <Center>Skills</Center> 
      <Center>Frontend</Center>  
      <Flex flexWrap='wrap' justifyContent='center'> 
        <Image m='10px' src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" h="50" />
        <Image m='10px' src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" h="50" /> 
        <Image m='10px' src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" h="50" /> 
        <Image m='10px' src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" h="50" />  
        <Image m='10px' src="https://profilinator.rishav.dev/skills-assets/redux-original.svg" alt="Redux" h="50" /> 
        <Image m='10px' src="https://profilinator.rishav.dev/skills-assets/chakraui.png" alt="Chakra UI" h="50" />
      </Flex>

      <Center>Backend</Center>   
      <Flex flexWrap='wrap' justifyContent='center'> 
        <Image m='10px' src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="50" />  
        <Image m='10px' src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" height="50" />  
        <Image m='10px' src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" alt="MySQL" height="50" /> 
        <Image m='10px' src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg" alt="PostgreSQL" height="50" /> 
      </Flex>

    </Box>
  );
};

export default AvatarAbout;