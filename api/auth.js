import fetch from "node-fetch";

export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=Ov23liikQ6h1wViR9G0M&scope=repo`;
    res.writeHead(302, {
      Location: githubAuthUrl,
    });
    res.end();
    return;
  }

  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: "Ov23liikQ6h1wViR9G0M",
      client_secret: "538783cf977d73285d5d7e57079802e9e8b52eb8",
      code: code,
    }),
  });

  const data = await response.json();

  if (data.access_token) {
    return res.status(200).writeHead(302, {
      Location: `https://smarthostly-docs.vercel.app/admin`,
      "Set-Cookie": `token=${data.access_token}; Path=/; HttpOnly`,
    });
  } else {
    res.status(500).json({ error: "Failed to obtain access token" });
  }
}
