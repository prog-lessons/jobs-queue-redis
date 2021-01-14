import redisConfig from '../../config/redis'

export default {
    name: 'MailJobsQueue',
    options: {
        redis: redisConfig
    }
}