/**
 * @module
 * This module defines the settings that need to be configured for a new
 * environment.
 * The clientId and clientSecret are provided when you create
 * a new security profile in Login with Amazon.  
 * 
 * You will also need to specify
 * the redirect url under allowed settings as the return url that LWA
 * will call back to with the authorization code.  The authresponse endpoint
 * is setup in app.js, and should not be changed.  
 * 
 * lwaRedirectHost and lwaApiHost are setup for login with Amazon, and you should
 * not need to modify those elements.
 */
var config = {
    clientId: "amzn1.application-oa2-client.872eb1f321c34a6dac47ed34fa267f36",
    clientSecret: "b9f23ff1a6743b52b397a52dabcd20b6e6cde8099588d5c68a490b31fb572ceb",
    redirectUrl: 'https://localhost:3000/authresponse',
    lwaRedirectHost: "amazon.com",
    lwaApiHost: "api.amazon.com",
    validateCertChain: true,
    sslKey: "/home/pi/Documents/alexa-avs-sample-app-master/samples/javaclient/certs/server/node.key",
    sslCert: "/home/pi/Documents/alexa-avs-sample-app-master/samples/javaclient/certs/server/node.crt",
    sslCaCert: "/home/pi/Documents/alexa-avs-sample-app-master/samples/javaclient/certs/ca/ca.crt",
    products: {
        "my_device": ["123456789"],
    },
};

module.exports = config;
