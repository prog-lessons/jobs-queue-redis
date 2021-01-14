import Q from '../queues/MailJobsQueue'
import defs from '../lib/GlobalDefs'
import Mail from "../lib/Mail"

export default {
    queue: Q.name,
    type: defs.JobType.MailJob,
    async handle({ data }) {
        const { emailData } = data

        await Mail.sendMail({
            from: emailData.sender,
            to: `${emailData.recipient_name} <${emailData.recipient_email}>`,
            subject: emailData.subject,
            html: emailData.message
        })
    }
}