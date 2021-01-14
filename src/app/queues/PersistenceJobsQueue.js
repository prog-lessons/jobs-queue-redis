import redisConfig from '../../config/redis'

export default {
    name: 'PersistenceJobsQueue',
    options: {
        redis: redisConfig
    }
}