module.exports = {
  async headers() {
    return [
      {
        source: '/cv',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: 'script-src self https://apis.google.com',
          },
        ],
      },
    ]
  },
}

// source: https://www.cspisawesome.com/content_security_policies