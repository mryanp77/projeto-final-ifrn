const fetch = require('node-fetch');

const CLIENT_ID = 'u2d3yzuoim79a7wj6cgrmvxo77wmld';
const CLIENT_SECRET = 's0r3jbqk10yw24k3b1hzfoq6350mgw';

async function getAccessToken() {
    const url = 'https://id.twitch.tv/oauth2/token';
    const params = new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'client_credentials',
    });

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: params,
        });

        const data = await response.json();
        console.log('Access Token:', data.access_token);
    } catch (error) {
        console.error('Erro ao obter o token:', error);
    }
}

getAccessToken();
