module.exports = {
  roots: ["<rootDir>"],
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "cjs-jest",
  },
};
