//@ts-check
import Queue from 'bull'

import * as queues from '../queues'
import * as jobs from '../job-models'

const allQueues = Object.values(queues).map(queue => ({
    bull: new Queue(queue.name, { redis: queue.options.redis, settings: { stalledInterval: 0 } })
}))

const allJobs = Object.values(jobs)

export default {
    addJob(type, data) {
        /*
        - Buscar em allJobs o job do tipo passado (type).
        - Por esse job, obtem-se a fila dele (propriedade queue).
        - Buscar queue em allQueues.
        - Incluir os dados do job em queue.
        */

        let job = allJobs.find(job => job.type === type)
        let queue = allQueues.find(q => q.bull.name === job.queue)

        if (job.options === undefined) job.options = {}

        queue.bull.add(data, job.options)
    },
    process() {
        allJobs.forEach(job => {
            let queue = allQueues.find(q => q.bull.name === job.queue)
            queue.bull.process(job.handle)

            queue.bull.on('failed', (job, err) => {
                console.log('Job failed', job.queue, job.data)
                console.log(err)
            })
        })
    }
}