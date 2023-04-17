const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = (app) => {
    app.use(
        '/jira',
        createProxyMiddleware({
            target: 'https://alexgptplus.atlassian.net/rest/api/3/',
            changeOrigin: true,
            pathRewrite: { '^/jira': '' },
            headers: {
                'User-Agent': 'PostmanRuntime/7.30.0'
            }
        })
    )
}