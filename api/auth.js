const fetch = require('node-fetch');
console.log('GITHUB entry1');

exports.handler = async function (event, context) {
    const { code } = event.queryStringParameters;
    console.log('GITHUB entry2', code);

    if (!code) {
        const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=repo`;
        return {
            statusCode: 302,
            headers: {
                Location: githubAuthUrl,
            },
        };
    }
    console.log('GITHUB entry3');

    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code,
        }),
    });

    const tokenData = await tokenResponse.json();
    console.log('GITHUB entry4', tokenData);

    if (tokenData.error) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                error: 'Failed to obtain access token',
                details: tokenData.error_description,
            }),
        };
    }

    return {
        statusCode: 302,
        headers: {
            Location: `https://<your-netlify-site>.netlify.app/admin`,
            'Set-Cookie': `token=${tokenData.access_token}; Path=/; HttpOnly; Secure;`,
        },
    };
};
