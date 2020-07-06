const USER_KEY = '@systemName';

// Change all "sessionStorage" to "localStorage" if you prefer.
export const isAuthenticated = () => !!sessionStorage.getItem(USER_KEY);

export const getUser = () => JSON.parse(sessionStorage.getItem(USER_KEY));

export const login = (user) =>
  sessionStorage.setItem(USER_KEY, JSON.stringify(user));

export const logout = () => {
  sessionStorage.removeItem(USER_KEY);
  sessionStorage.clear();
  // Forcing reloading page
  window.location.reload();
};
