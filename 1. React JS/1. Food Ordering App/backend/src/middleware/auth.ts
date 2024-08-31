import { auth } from "express-oauth2-jwt-bearer";

// this "jwtCheck" function will be passed as middleware, and Whatever bearer token we have received through front-end in the authorization header, this fn. is gonna connect to Auth0 server and check if the incoming token is same as the Logged in User.

const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH_ISSUER_BASE_URL,
  tokenSigningAlg: "RS256",
});

export default jwtCheck;
