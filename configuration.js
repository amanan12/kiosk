var ConfigurationSettings = function(settings) {

    var config = {
        production: {
            root: "https://aoit-api.azurewebsites.net/",
            port: process.env.PORT || 8082
        },
        development: {
            root: "https://localhost",
            port: process.env.PORT || 8082
        }
    };
    return config[settings];
}

module.exports = ConfigurationSettings;