import { useMutation } from '@tanstack/react-query';

import { signInRequest } from '@/apis/auth';
import { useAuth } from '@/hooks/context/useAuth';
import { useToast } from '@/hooks/use-toast';

export const useSignin = () => {
  const { toast } = useToast();
  const { setAuth } = useAuth();

  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signinMutation,
  } = useMutation({
    mutationFn: signInRequest,

    onSuccess: (response) => {
      console.log('Full response received:', response);
      console.log('Response structure:', Object.keys(response));

      // The API should return {success, message, data: {user object}, err}
      // If data is missing, the backend signInService is returning undefined
      let userData = response?.data;

      if (!userData) {
        console.error('userData is missing. Full response:', response);
        // If userData is missing, throw an error that will trigger onError handler
        throw new Error(
          'Server returned invalid response. Please contact support if this persists.',
        );
      }

      const token = userData?.token;

      if (!token) {
        console.error('No token in userData:', userData);
        throw new Error('No token received from server');
      }

      const userObject = JSON.stringify(userData);
      localStorage.setItem('user', userObject);
      localStorage.setItem('token', token);

      setAuth({
        token: token,
        user: userData,
        loading: false,
      });

      toast({
        title: 'Successfully signed in',
        message: 'You will be redirected to the home page in a few seconds',
        type: 'success',
      });
    },

    onError: (error) => {
      console.error('Failed to sign in', error);

      toast({
        title: 'Failed to sign in',
        message: error.message,
        type: 'error',
        variant: 'destructive',
      });
    },
  });

  return {
    isPending,
    isSuccess,
    error,
    signinMutation,
  };
};
