module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    // react-native-dotenv
    [
      'module:react-native-dotenv',
      {
        "envName": "APP_ENV",
        "moduleName": "@env",
        "path": ".env.local",
        "blocklist": null,
        "allowlist": null,
        "blacklist": null,
        "whitelist": null,
        "safe": false,
        "allowUndefined": true,
        "verbose": false
      },
    ],
  ]
}
