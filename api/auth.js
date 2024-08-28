// File: api/auth.js
export default (req, res) => {
    const { query } = req;
    const redirectUri = `https://smarthostly-docs.vercel.app/admin`;

    // Add your logic for handling authentication here
    // This is a simplified example that does not handle the actual OAuth flow

    res.writeHead(302, {
        Location: redirectUri,
    });
    res.end();
};
