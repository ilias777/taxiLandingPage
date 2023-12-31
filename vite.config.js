import path from "path";

export default {
  root: path.resolve(__dirname),
  build: {
    outDir: "./dist",
  },
  server: {
    port: 8080,
  },
};
