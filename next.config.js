// module.exports = {
//   async headers() {
//     return [
//       {
//         source: '/cv',
//         headers: [
//           {
//             key: 'Content-Security-Policy',
//             value: 'script-src self https://apis.google.com',
//           },
//         ],
//       },
//     ]
//   },
// }

// TODO: learn CSP

// source: https://www.cspisawesome.com/content_security_policies

module.exports = {
  target: 'serverless',
  images: {
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}
