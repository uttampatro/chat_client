const isProduction = process.env.REACT_APP_ENVIRONMENT === 'production';
const isDevelopment = process.env.REACT_APP_ENVIRONMENT === 'development';

const localApiConfig = {
    baseUrl: 'http://localhost:5000',
};
const prodApiConfig = {
    baseUrl: 'http://localhost:8080', //TODO: put heroku url
};

let apiConfig = localApiConfig;
if (isProduction) {
    apiConfig = prodApiConfig;
}

export { apiConfig };
  