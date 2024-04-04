class Authentication {
  constructor(token) {
    this.setToken(token);
  }

  setToken(token) {
    if (this.isValidToken(token)) {
      this.token = token;
    } else {
      throw new Error('Invalid token provided.');
    }
  }

  isValidToken(token) {
    // Token validation logic goes here
    // For example, checking if the token is not null and follows a certain pattern
    return token && typeof token === 'string' && /^[A-Za-z0-9-_]+$/.test(token);
  }

  getToken() {
    return this.token;
  }
}

// Usage
try {
  const auth = new Authentication('your-token-here');
  console.log(auth.getToken()); // Outputs the token if valid
} catch (error) {
  console.error(error.message); // Handles the error if the token is invalid
}
