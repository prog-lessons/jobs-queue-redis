export default {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secureConnection: process.env.MAIL_SECURE,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
}