const apiUrl = 'https://www.themealdb.com/api/json/v1/1/';
export const getCategorieMeals = {
  fetchData: async () => {
    try {
      const response = await fetch(`${apiUrl}categories.php`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
  async fetchMealsByCategory(category) {
    try {
      const response = await fetch(`${apiUrl}filter.php?c=${category}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching meals by category');
    }
  },
};

export const searchMeals = async (searchTerm) => {
  try {
    if (searchTerm.trim() !== '') {
      const response = await fetch(`${apiUrl}/search.php?s=${searchTerm}`);
      const data = await response.json();
      return data.meals || [];
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getRandomMeals = {
  fetchData: async () => {
    try {
      const response = await fetch(`${apiUrl}random.php`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
};

export const getMealDetails = {
  async fetchMealById(mealId) {
    try {
      const response = await fetch(`${apiUrl}lookup.php?i=${mealId}`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching meal details:', error);
      throw error;
    }
  },
};
