module.exports = {
  logo: {
    alt: "Logo",
    src: "img/logo.png",
  },
  items: [
    {
      label: 'User Docs',
      type: 'doc',
      position: 'left',
      docId: 'user_docs/overview/introduction',
    },
    {
      type: 'doc',
      label: 'Developer Docs',
      position: 'left',
      docId: 'developer_docs/overview',
    },
    {to: '/blog', label: 'Blogs', position: 'left'},
    {to: '/demo', label: 'Demo', position: 'left'},
    // {
    //   type: 'docsVersionDropdown',
    //   position: 'right',
    // },
    {
      href: 'https://github.com/apecloud/kubeblocks',
      position: 'right',
      className: 'header-github-link',
      label: "Go to GitHub",
    },
  ],
  // style: "dark",
  // style: "primary",
}


