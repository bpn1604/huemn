import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Heading, Image, Text } from '@chakra-ui/react';

const RecipeDetails = () => {
  const selectedRecipe = useSelector((state) => state.recipes.selectedRecipe);

  return (
    <Box
      width={{ base: '90%', md: '50%' }}
      margin={{ base: '20px auto', md: '0 auto' }}
      marginTop={{ base: '20px', md: '0' }}
      bg="gray.50"
      p="6"
      borderRadius="lg"
      boxShadow="md"
      float={{ md: 'right' }}
      clear="both"
    >
      <Heading as="h2" fontSize="2xl" mb="6" color="teal.500" textAlign="center">
        Recipe Details
      </Heading>
      {selectedRecipe ? (
        <Box>
          <Heading as="h3" fontSize="xl" mb="4" color="teal.600" textAlign="center">
            {selectedRecipe.strMeal}
          </Heading>
          <Image
            src={selectedRecipe.strMealThumb}
            alt={selectedRecipe.strMeal}
            borderRadius="md"
            mb="4"
            maxH="300px"
            mx="auto"
          />
          <Text fontSize="md" color="gray.700" textAlign="justify">
            {selectedRecipe.strInstructions}
          </Text>
        </Box>
      ) : (
        <Text fontSize="md" color="gray.500" textAlign="center">
          No recipe selected. Please select a recipe to see the details.
        </Text>
      )}
    </Box>
  );
};

export default RecipeDetails;
