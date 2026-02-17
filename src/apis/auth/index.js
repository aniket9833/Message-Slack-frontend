import axios from '@/config/axiosConfig.js';

export const signUpRequest = async ({ email, password, username }) => {
  try {
    const response = await axios.post('/users/signup', {
      email,
      password,
      username,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error.response.data;
  }
};

export const signInRequest = async ({ email, password }) => {
  try {
    const response = await axios.post('/users/signin', {
      email,
      password,
    });
    console.log('Sign in API response:', response);
    console.log('Response data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Sign in API error:', error);
    console.error('Error response:', error.response?.data);
    throw error.response?.data || error;
  }
};
