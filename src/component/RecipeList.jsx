import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes, selectRecipe, addToFavorites } from '../redux/recipesSlice';
import { Box, Button, Text, IconButton, Tooltip, SimpleGrid, Spinner, Center } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const RecipeList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.list);
  const status = useSelector((state) => state.recipes.status);
  const favorite = useSelector((state) => state.recipes.favorites);
  
  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const handleRecipeSelect = (recipe) => {
    dispatch(selectRecipe(recipe));
  };

  const handleAddToFavorites = (recipe) => {
    dispatch(addToFavorites(recipe));
    console.log(`Added ${recipe.strMeal} to favorites!`);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return; // If dropped outside the list
    const items = Array.from(recipes);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    // Dispatch action to update order in Redux state
    // For example, you could dispatch an action to update the order of recipes in the Redux state
  };

  if (status === 'loading') {
    return (
      <Center height="100vh" marginLeft="30%">
        <Spinner size="xl" color="teal.500" />
      </Center>
    );
  }

  if (status === 'failed') {
    return (
      <Box textAlign="center" mt="20">
        <Text fontSize="xl" color="red.500">Failed to load recipes. Please try again later.</Text>
      </Box>
    );
  }

  return (
    <Box width={{ base: '90%', md: '40%' }} margin="10px 10px" padding ="20px" marginTop="60px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
      <Text as="h2" fontSize="2xl" mb="6" color="teal.500" textAlign="center">Recipes</Text>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="recipes">
          {(provided) => (
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacing={10}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {recipes.map((recipe, index) => (
                <Draggable key={recipe.idMeal} draggableId={recipe.idMeal} index={index}>
                  {(provided) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
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
                      <Button
                        colorScheme="teal"
                        onClick={() => handleRecipeSelect(recipe)}
                        size="sm"
                        background="teal"
                        color="white"
                        height="30px"
                        padding="5px"
                        cursor="pointer"
                      >
                        Click to know more
                      </Button>
                      <Tooltip label="Add to favorite" aria-label="Add to favorite">
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
                      </Tooltip>
                    </Box>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </SimpleGrid>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
};

export default RecipeList;
