import { axiosPrivate } from "../../api/axios";

export default async function storeDetails(accountId, postId, type, date, platform, userId) {
    try {
        const saveHistory = await axiosPrivate.post('/history', {
            accountId,
            postId,
            type,
            date,
            platform,
            userId
        })

        console.log('saved history', saveHistory)
    } catch (error) {
        console.error(error)
    }
}