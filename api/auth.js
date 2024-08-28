// api/auth.js
export default function handler(req, res) {
    const { query } = req;
    const redirectUri = `https://smarthostly-docs.vercel.app/admin`;

    // Check if the request is authorized
    if (query.access_token) {
        // Redirect back to the admin with the access token
        res.writeHead(302, {
            Location: redirectUri,
        });
        res.end();
    } else {
        // If there is no access token, redirect to GitHub OAuth
        const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=Ov23liikQ6h1wViR9G0M&scope=repo`;
        res.writeHead(302, {
            Location: githubAuthUrl,
        });
        res.end();
    }
}
