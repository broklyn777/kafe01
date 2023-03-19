


import { OAuth2Client } from 'google-auth-library';

async function getOAuth2Token(): Promise<string> {
  const oauth2Client = new OAuth2Client(
 process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  );

  oauth2Client.setCredentials({
    refresh_token: 'your-refresh-token'
  });

  const accessToken = await oauth2Client.getAccessToken();
  
  if (accessToken.token === null || accessToken.token === undefined) {
    throw new Error('Failed to retrieve access token');
  }
  
  return accessToken.token;
}

export { getOAuth2Token };
