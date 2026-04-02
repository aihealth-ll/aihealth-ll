import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AIHealth-LL',
  tagline: 'A Living Lab on the Development of Artificial Intelligence-enabled Systems for Health',
  favicon: 'img/favicon.ico',
  url: 'https://aihealth-ll.github.io',
  baseUrl: '/aihealth-ll/',
  organizationName: 'aihealth-ll',
  projectName: 'aihealth-ll',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/gillamga/VCU-Living-Lab/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'AIHealth-LL',
      logo: {
        alt: 'AIHealth-LL Logo',
        src: 'img/aihealth-logo.png',
      },
      items: [
        {
          href: 'https://github.com/gillamga/VCU-Living-Lab',
          label: 'GitHub',
          position: 'right',
        },
        { to: 'docs/program', label: 'Program', position: 'left' },
        { to: '/team', label: 'Team', position: 'left' },
        { to: '/governance', label: 'Governance', position: 'left' },
        { to: '/partners', label: 'Partners', position: 'left' },
        { to: '/apply', label: 'Apply', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          html: `
            <div style="text-align: center;">
              <div style="display: flex; justify-content: center; align-items: center; gap: 20px;">
                <a href="https://www.vcuhealth.org/" style="display: inline-block;">
                  <img
                    src="/aihealth-ll/img/VCU/vcuhealth-logo.png"
                    alt="VCU Health Logo"
                    style="width: 150px; height: auto;"
                  />
                </a>
                <a href="https://www.nsf.gov/" style="display: inline-block;">
                  <img
                    src="/aihealth-ll/img/VCU/1019px-NSF_logo.png"
                    alt="NSF Logo"
                    style="width: 130px; height: auto;"
                  />
                </a>
                <a href="https://secenter.vcu.edu/" style="display: inline-block;">
                  <img
                    src="/aihealth-ll/img/VCU/secenter-logo.png"
                    alt="SE Center Logo"
                    style="width: 150px; height: auto;"
                  />
                </a>
              </div>
            </div>
          `,
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AIHealth`,
    },
    prism: {
      theme: prismThemes.gruvboxMaterialLight,
      darkTheme: prismThemes.synthwave84,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
