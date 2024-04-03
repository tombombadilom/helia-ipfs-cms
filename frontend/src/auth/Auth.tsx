export type AuthData = {
  jwt: string;
  user: {
    email: string;
    id: string | number;
    username: string;
  };
  locale: string;
  avatar: string;
};

class Auth {
  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {AuthData} data - AuthData object containing the JWT and user information
   */
  static authenticateUser
    ..(data: AuthData) {
    // Set token and simple fields
    localStorage.setItem('token', data.jwt);
    localStorage.setItem('locale', data.locale);
    localStorage.setItem('avatar', data.avatar);

    // Set user related fields
    localStorage.setItem('email', data.user.email);
    localStorage.setItem('uid', data.user.id.toString());
    localStorage.setItem('name', data.user.username);
  }

  /**
   * Set locale for a user. Save a locale string in Local Storage
   *
   * @param {string} locale - locale string
   */
  static setLocale(locale: string) {
    localStorage.setItem('locale', locale);
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated(): boolean {
    return !!Auth.getToken();
  }

  /**
   * Return Items stored in localStorage
   *
   * @returns {AuthData}
   */
  static getData(): AuthData {
    return {
      jwt: localStorage.getItem('token') || '',
      user: {
        email: localStorage.getItem('email') || '',
        id: localStorage.getItem('uid') || '',
        username: localStorage.getItem('name') || '',
      },
      locale: localStorage.getItem('locale') || 'en',
      avatar: localStorage.getItem('avatar') || '',
    };
  }

  /**
   * Update avatar path in localStorage
   *
   * @param {string} path - The avatar path
   */
  static updateAvatar(path: string) {
    localStorage.setItem('avatar', path);
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser() {
    ['token', 'email', 'uid', 'name', 'locale', 'avatar'].forEach(key => {
      localStorage.removeItem(key);
    });
  }

  /**
   * Get a token value.
   *
   * @returns {string|null}
   */
  static getToken() {
    return localStorage.getItem('token');
  }

  /**
   * Helper method to set multiple items in local storage.
   *
   * @param {AuthData} items - Object containing key-value pairs to be set in local storage.
   */
  static setStorageItems(items: AuthData) {
    for (const [key, value] of Object.entries<string | number | boolean>(items)) {
      localStorage.setItem(key, value.toString());
    }
  }
}

export default Auth;




