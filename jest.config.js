module.exports = {
  resetModules: true,
  restoreMocks: true,
  modulePaths: ["<rootDir>"],
  modulePathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/dist"],
  moduleFileExtensions: ["ts", "js", "json", "vue"],
  prettierPath: "<rootDir>/node_modules/prettier",
  transform: {
    "^.+\\.ts?$": "ts-jest",
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest"
  }
};
