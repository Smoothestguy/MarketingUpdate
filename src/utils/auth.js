// Auth utility functions
export const isAuthenticated = () => {
  const user = localStorage.getItem('user');
  return user !== null;
};

export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const setUser = (userData) => {
  localStorage.setItem('user', JSON.stringify({
    ...userData,
    isAuthenticated: true
  }));
};

export const clearUser = () => {
  localStorage.removeItem('user');
};