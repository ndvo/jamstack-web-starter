/**
 * Configure the default values for your Foxy Store.
 *
 * This values are overriden by environment variables.
 *
 */
foxyDefaultValues = {
  subdomain: "jamstackecommerceexample",
  name: "My Store",
  logo: "static/img/mylogo.png" // Relative to the web root
}

/**
 * If you're not creating new Foxy environment variables,
 * it's probably not a good idea to change the values bellow.
 * FOXYSTORESECRET should not be used in the templates. You
 * can find it in process.env['FOXYSTORESECRET']
 */
foxyEnvironmentVariables = {
  FOXYSTORESUBDOMAIN:'subdomain',
  FOXYSTORENAME:'name',
  FOXYSTORELOGO:'logo'
};

foxySettings = {};

for (let e of Object.keys(foxyEnvironmentVariables)) {
  if (process.env[e]) {
    foxySettings[foxyEnvironmentVariables[e]] = process.env[e];
  } else {
    foxySettings[foxyEnvironmentVariables[e]] = foxyDefaultValues[foxyEnvironmentVariables[e]];
  }
}

foxySettings.cart_url = `https://${foxySettings.subdomain}.foxycart.com/cart`;

module.exports = foxySettings;
