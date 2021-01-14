import Q from '../queues/PersistenceJobsQueue'
import defs from '../lib/GlobalDefs'
import fs from 'fs'

export default {
    queue: Q.name,
    type: defs.JobType.PersistenceJob,
    handle: function ({ data }) {
        const { user } = data

        fs.writeFile('./userdata.txt', user.name + '\n' + user.email, () => { })
    }
}