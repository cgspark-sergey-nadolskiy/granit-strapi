module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-imagekit",  // Community providers need to have the full package name
      providerOptions: {
        publicKey: "public_gCC8rygIJc2UP7DLuHkcCwFvGts=",
        privateKey: "private_8g1lnPzHw4oGbe4XRZ47InvJFpg=",
        urlEndpoint: "https://ik.imagekit.io/granit",  // Example: https://ik.imagekit.io/username

        // Optional
        params: {
          folder: "/production/images"  // Defaults to "/" if value is not supplied
        }
      }
    }
  }
});