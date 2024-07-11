const http = require('http');

const requestURL = 'https://catfact.ninja/fact';

http.get(requestURL, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        console.log(data); // Log the response data
        console.log(typeof data); // Likely string
    });
}).on('error', (error) => {
    console.error(error);
});