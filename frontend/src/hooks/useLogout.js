import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    //delete mail and jwt from the server response
    localStorage.removeItem('user');
    // update context
    dispatch({ type: 'LOGOUT' });
  };
  return { logout };
};
