class Auth {
  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   * @param {string} email
   * @param {string} password
   * @param {string} userRole
   * @param {string} firstName
   * @param {array} events
   */
  static authenticateUser(token, json) {
    console.log(json);
    localStorage.setItem('token', token);
    localStorage.setItem('email', json.user.email);
    localStorage.setItem('password', json.user.password);
    localStorage.setItem('userRole', json.user.userRole);
    localStorage.setItem('events', JSON.stringify(json.user.events));
    localStorage.setItem('firstName', json.user.firstName);
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAdmin() {
    return localStorage.getItem('userRole') === 'admin';
  }

  /**
   * Deauthenticate a user. Remove token and email from Local Storage.
   *
   */
  static deauthenticateUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('userRole');
    localStorage.removeItem('events');
    localStorage.removeItem('firstName');
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */
  static getToken() {
    return localStorage.getItem('token');
  }

  /**
   * Get email.
   *
   * @returns {string}
   */
   static getEmail() {
     return localStorage.getItem('email');
   }

   /**
    * Get password.
    *
    * @returns {string}
    */
    static getPassword() {
      return localStorage.getItem('password');
    }

   /**
    * Get userRole.
    *
    * @returns {string}
    */
    static getUserRole() {
      return localStorage.getItem('userRole');
    }

    /**
     * Get events.
     *
     * @returns {array}
     */
     static getEvents() {
       return JSON.parse(localStorage.getItem('events'));
     }

     /**
      * Get firstName.
      *
      * @returns {string}
      */
      static getFirstName() {
        return localStorage.getItem('firstName');
      }
}

export default Auth;
