// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/dracula");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const navbarConfig = require("./config/navbar");
const footerConfig = require("./config/footer");
const versionsConfig = require("./config/versions");

const kubeblocksRepos = "https://github.com/apecloud/kubeblocks/tree";
const websiteRepos = "https://github.com/apecloud/kubeblocks.io/tree/master";
const lastVersion = versionsConfig[0]?.version || "current";

const versions = (() => {
  const _versions = {};
  versionsConfig.forEach(config => {
    Object.assign(_versions, {
      [config.version]: {
        label: config.version,
        path: config.version,
      }
    })
  });
  return _versions;
})();

const config = {
  title: "Kubeblocks",
  url: "https://apecloud.github.io",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  noIndex: true,
  organizationName: "ApeCloud",
  projectName: "kubeblocks.io",
  trailingSlash: false,
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    path: "i18n",
    localeConfigs: {
      en: {
        label: "English",
        htmlLang: "en-US",
      },
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          lastVersion,
          versions,
          path: "docs",
          sidebarPath: require.resolve("./config/sidebars"),
          docLayoutComponent: require.resolve('./src/components/docLayoutComponent.tsx'),
          docItemComponent: require.resolve('./src/components/docItemComponent.tsx'),
          editUrl: ({ version, versionDocsDirPath, docPath, permalink, locale }) => {
            const branch = (version === "current" ? "main" : version);
            if(locale != 'en') {
              return `${kubeblocksRepos}/i18n/${locale}/docusaurus-plugin-content-docs/${branch}/docs/${docPath}`
            }
            return `${kubeblocksRepos}/${branch}/docs/${docPath}`;
          },
        },
        blog: {
          editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
            `${websiteRepos}/${blogDirPath}/${blogPath}`,
        },
        theme: {
          customCss: require.resolve("./src/style/custom.less"),
        },
        gtag: {
          trackingID: 'G-1P80WT42PB',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      },
    ]
  ],
  stylesheets: [],
  plugins: [
    "@docusaurus/theme-live-codeblock", 
    "docusaurus-plugin-less",
  ],
  themeConfig: {
    navbar: navbarConfig,
    footer: footerConfig,
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    // algolia: {
    //   appId: "PXEV8M89HY",
    //   apiKey: "b81d26901658d9dfea759151e5fd158d",
    //   indexName: "kubeblocks"
    // }
  },
};

module.exports = config;
