import { Box, Container, Flex, Text } from '@chakra-ui/react';
import { ColorModeButton, useColorModeValue } from './theme/color-mode';

const Navbar = () => {
    //const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Container maxW={"900px"}>
            <Box bg={useColorModeValue("gray.400", "gray.700")} px={4} my={4} borderRadius={5}>
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    {/* Left Side */}
                    <Flex alignItems={"center"} justifyContent={"center"} gap={3} display={{ base: "none", sm: "flex" }}>
                        <img src='/react.png' alt='logo' width={50} height={50} />
                        <Text fontSize={"40"}>+</Text>
                        <img src='/go.png' alt='logo' width={40} height={40} />
                        <Text fontSize={"40"}>+</Text>
                        <img src='/explode.png' alt='logo' width={50} height={50} />
                    </Flex>
                    {/* Right Side */}
                    <Flex alignItems={"center"} gap={3}>
                        <Text fontSize={"lg"} fontWeight={500}>Daily Tasks</Text>
                    </Flex>
                    {/* Toggle color mode */}
                    <ColorModeButton/>
                </Flex>
            </Box>
        </Container>
    )
}

export default Navbar

