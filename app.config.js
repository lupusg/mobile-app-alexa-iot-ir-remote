
module.exports = {
	name: "Alexa Infrared Remote",
	slug: "mobile-alexa-infrared-remote",
	version: "1.0.0",
	icon: "./assets/icon.png",
	userInterfaceStyle: "light",
	splash: {
		image: "./assets/splash.png",
		resizeMode: "contain",
		backgroundColor: "#ffffff"
	},

	extra: {
		eas: {
			projectId: ""
		},
		API_URL: "",
		API_USERNAME: "",
		API_PASSWORD: ""
	},
	android: {
		package: "com.lupusg.NodemcuAlexaIotIrRemoteApp",
		versionCode: 1
	}
};