import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes, selectRecipe ,addToFavorites} from '../redux/recipesSlice';
import { Box, Button, Text, IconButton, Tooltip, SimpleGrid } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const Favroite = () => {
    const dispatch = useDispatch();
  //const recipes = useSelector((state) => state.recipes.list);
  const favorite = useSelector((state) =>state.recipes.favorites)
  return (
    <Box style={{ width: '40%', margin: '0 auto', float:"left" ,marginTop:"60px"}} box-shadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px">
      <Text as="h2" fontSize="2xl" mb="6" color="teal.500" textAlign="center">Recipes</Text>
      <SimpleGrid columns={2} spacing={10}>
        {favorite.map((recipe) => (
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
          >
            <Text fontWeight="bold" fontSize="lg" mb="2">{recipe.strMeal}</Text>
            <Text mb="2">Category: {recipe.strCategory}</Text>
            <Text mb="4">Area: {recipe.strArea}</Text>
            {/* <Button
              colorScheme="teal"
              onClick={() => handleRecipeSelect(recipe)}
              size="m"
              background="teal"
              color="white"
              height="30px"
              padding="5px"
              cursor="pointer"
            >
              Click to know more
            </Button> */}
            {/* <Tooltip label="Add to favorite" aria-label="Add to favorite">
              <IconButton
                icon={<StarIcon />}
                variant="outline"
                colorScheme="yellow"
                position="absolute"
                top="4"
                right="4"
                onClick={() => handleAddToFavorites(recipe)}
                size="sm"
                aria-label="Add to favorite"
                cursor="pointer"
              />
            </Tooltip> */}
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Favroite
