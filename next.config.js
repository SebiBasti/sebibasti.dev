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
  images: {
    deviceSizes: [3840, 2048, 1920, 1200, 1080, 828, 750, 640, 480, 320],
    imageSizes: [384, 256, 128, 96, 64, 48, 32, 16],
  },
}
