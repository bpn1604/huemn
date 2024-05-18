import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../redux/recipesSlice';
import { Box, Text, SimpleGrid, Button } from '@chakra-ui/react';

const Favorite = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.recipes.favorites);

  const handleRemoveFromFavorites = (recipeId) => {
    dispatch(removeFromFavorites(recipeId));
  };

  return (
    <Box style={{ width: '40%', margin: '0 auto', float: "left", marginTop: "60px", padding:"20px" }} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
      <Text as="h2" fontSize="2xl" mb="6" color="teal.500" textAlign="center">Favorite Recipes</Text>
      <SimpleGrid columns={2} spacing={10}>
        {favorites.map((recipe) => (
          <Box
            key={recipe.idMeal}
            p="4"
            border="2px solid #e2e8f0"
            borderRadius="lg"
            boxShadow="lg"
            bg="white"
            _hover={{ boxShadow: 'xl', transform: 'scale(1.05)' }}
            transition="all 0.2s"
            position="relative"
            textAlign="center"
          >
            <div>
              <Text fontWeight="bold" fontSize="lg" mb="2">{recipe.strMeal}</Text>
              <Text mb="2">Category: {recipe.strCategory}</Text>
              <Text mb="4">Area: {recipe.strArea}</Text>
            </div>
            <Button
              colorScheme="red"
              onClick={() => handleRemoveFromFavorites(recipe.idMeal)} // Call handleRemoveFromFavorites with recipe id
              size="sm"
              variant="outline"
              aria-label="Delete"
              cursor="pointer"
              mt="4" // Add margin top to separate from text
            >
              Delete
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Favorite;
