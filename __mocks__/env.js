// Mock for @env (react-native-dotenv) in Jest
module.exports = {
  API_URL: process.env.API_URL || 'http://localhost:8080',
};
