import { Box, Container, Flex, Heading, Image, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const cities = [
    { name: "Bali", country: "Indonesia", rank: 1 },
    { name: "Lisbon", country: "Portugal", rank: 2 },
    { name: "Bangkok", country: "Thailand", rank: 3 },
    { name: "Barcelona", country: "Spain", rank: 4 },
    { name: "Buenos Aires", country: "Argentina", rank: 5 },
  ];

  return (
    <Container maxW="container.xl" p={0}>
      <Box as="nav" bg="teal.500" color="white" py={4} px={8}>
        <Heading size="md">NomadRank</Heading>
      </Box>
      <Flex direction="column" align="center" justify="center" bgImage="https://images.unsplash.com/photo-1646641678236-a04abdc78b49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGRlc3RpbmF0aW9ufGVufDB8fHx8MTcxNTU0NTA4OXww&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPos="center" h="60vh">
        <VStack spacing={4} p={8} bg="whiteAlpha.800" borderRadius="lg">
          <Heading size="lg" textAlign="center">
            Discover the Best Cities for Digital Nomads
          </Heading>
          <Text fontSize="md" textAlign="center">
            Ranking cities by their nomad-friendliness based on community reviews and data.
          </Text>
        </VStack>
      </Flex>
      <Box p={8}>
        <Flex mb={4} align="center">
          <Input placeholder="Search cities..." size="lg" mr={2} />
          <FaSearch color="gray.500" size="24px" />
        </Flex>
        <Stack spacing={5}>
          {cities.map((city, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="lg">
              <Heading size="md">{city.name}</Heading>
              <Text>{city.country}</Text>
              <Text fontWeight="bold">Rank: {city.rank}</Text>
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default Index;
