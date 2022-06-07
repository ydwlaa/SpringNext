module.exports = {
    async rewrites() {
      return [
        {
          source: '/addition',
          destination: 'http://localhost:8081/addition' // Proxy to Backend
        },

        {
            source: '/read',
            destination: 'http://localhost:8081/read' // Proxy to Backend
          },

          {
            source: '/path',
            destination: 'http://localhost:8081/path' // Proxy to Backend
          }
      ]
    }
  }