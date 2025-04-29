/**
 * @type {import("expo/config").ExpoConfig}
 */
const appConfig = {
  name: "practice-expo-app-config-b",
  slug: "practice-expo-app-config-b",
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: "com.moeyashi.practiceexpoappconfigb",
  },
  extra: {
    router: {
      origin: false,
    },
    eas: {
      projectId: "1a79e4af-2ac7-4858-97e9-eeea79cff934",
    },
    message: "Hello from app-b",
  },
};

module.exports = appConfig;
