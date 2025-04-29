import type { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => {
	const appName = process.env.APP_NAME;
	const appConfig = require(`./app-config/${appName}.cjs`);

	return {
		...config,
		...appConfig,
	};
};
