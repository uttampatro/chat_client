const isProduction = process.env.REACT_APP_ENVIRONMENT === 'production';
// const isDevelopment = process.env.REACT_APP_ENVIRONMENT === 'development';

const localApiConfig = {
    baseUrl: 'http://localhost:5000',
};
const prodApiConfig = {
    baseUrl: 'https://chat-serverr.herokuapp.com', //TODO: put heroku url
};
console.log(process.env.REACT_APP_ENVIRONMENT);

let apiConfig = localApiConfig;
if (isProduction) {
    apiConfig = prodApiConfig;
}

export { apiConfig };
