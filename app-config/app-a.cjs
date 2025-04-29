/**
 * @type {import("expo/config").ExpoConfig}
 */
const appConfig = {
  name: "practice-expo-app-config",
  slug: "practice-expo-app-config",
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: "com.moeyashi.practiceexpoappconfig",
  },
  extra: {
    router: {
      origin: false,
    },
    eas: {
      projectId: "56c00617-4068-4c37-a594-c077e978ec8a",
    },
    message: "Hello from app-a",
  },
};

module.exports = appConfig;
