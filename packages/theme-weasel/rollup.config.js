import { rollupTypescript, rollupVue } from "../../scripts/rollup";

export default [
  ...rollupTypescript("node/index", {
    external: [
      "@mr-huang/vuepress-shared",
      "@vuepress/utils"
    ]
  }),

  // ...rollupVue("client/components/navbar/Navbar.ts", {
  //   copy: [["client/components/navbar/styles", "client/components/navbar"]],
  //   external: [
  //     "@mr-hope/vuepress-shared/lib/client",
  //     "@vuepress/client",
  //     "@vuepress/plugin-external-link-icon/lib/client",
  //     "@vuepress/plugin-theme-data/lib/client",
  //     "@vuepress/shared",
  //     "vue",
  //     "vue-router",
  //     /\.scss$/,
  //   ],
  //   dtsExternal: [/\.scss$/],
  // }),
  // ...rollupVue("client/components/sidebar/Sidebar.ts", {
  //   copy: [["client/components/sidebar/styles", "client/components/sidebar"]],
  //   external: [
  //     "@mr-hope/vuepress-shared/lib/client",
  //     "@vuepress/client",
  //     "@vuepress/plugin-external-link-icon/lib/client",
  //     "@vuepress/plugin-theme-data/lib/client",
  //     "@vuepress/shared",
  //     "vue",
  //     "vue-router",
  //     /\.scss$/,
  //   ],
  //   dtsExternal: [/\.scss$/],
  // }),
  ...rollupVue("client/components/CommonWrapper.ts", {
    external: [
      // "@Navbar",
      // "@Sidebar",
      "@mr-huang/vuepress-shared/lib/client",
      "@vuepress/client",
      "@vuepress/plugin-theme-data/lib/client",
      "@vuepress/shared",
      "lodash.throttle",
      "vue",
      "vue-router",
      /\.scss$/,
    ],
    dtsExternal: [/\.scss$/],
  }),
  ...rollupVue("client/layouts/Layout.ts", {
    external: [
      // "@CommonWrapper",
      "@mr-huang/vuepress-shared/lib/client",
      "@vuepress/client",
      "@vuepress/plugin-external-link-icon/lib/client",
      "@vuepress/plugin-theme-data/lib/client",
      "@vuepress/shared",
      "lodash.throttle",
      "vue",
      "vue-router",
      /\.scss$/,
    ],
    dtsExternal: [/\.scss$/],
  }),
  // ...rollupVue("client/layouts/404.ts", {
  //   external: [
  //     "@CommonWrapper",
  //     "@mr-hope/vuepress-shared/lib/client",
  //     "@vuepress/client",
  //     "@vuepress/plugin-theme-data/lib/client",
  //     "@vuepress/shared",
  //     "vue",
  //     "vue-router",
  //     /\.scss$/,
  //   ],
  //   dtsExternal: [/\.scss$/],
  // }),
  // ...rollupTypescript("client/layouts/Slide", {
  //   external: ["vuepress-plugin-md-enhance/lib/client/SlidePage", "vue"],
  // }),
  ...rollupTypescript("client/appEnhance", {
    copy: [["client/styles", "client"]],
    external: [
      "@mr-huang/vuepress-shared",
      "@vuepress/client",
      "@vuepress/plugin-theme-data/lib/client",
      "@vuepress/shared",
      "vue",
      "vue-router",
      /\.scss$/,
    ],
    dtsExternal: [/\.scss$/],
  }),
  // ...rollupTypescript("client/appSetup", {
  //   external: [
  //     "@mr-hope/vuepress-shared/lib/client",
  //     "@vuepress/client",
  //     "@vuepress/plugin-external-link-icon/lib/client",
  //     "@vuepress/plugin-theme-data/lib/client",
  //     "@vuepress/shared",
  //     "vue",
  //     "vue-router",
  //   ],
  // }),
];
