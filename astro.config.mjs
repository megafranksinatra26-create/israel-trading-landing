import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

const mountPath = process.env.WEBFLOW_MOUNT_PATH ?? "CLOUD_MOUNT_PATH";

export default defineConfig({
  base: mountPath,
  build: {
    assetsPrefix: mountPath,
  },
  output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
