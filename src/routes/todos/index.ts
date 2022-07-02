import type { RequestHandler } from "@sveltejs/kit"
import { api } from "./_api"



export const get: RequestHandler = ({ request }) => {
    return api(request)
}

export const post: RequestHandler = async ({ request }) => {
    const data = await request.formData();
    if (!data) {
        return {
            status: 404,
            body: 'Todo is not found!'
        }
    }
    return api(request, {
        uid: `${Date.now()}`, // TODO: DECLARE UUID WITH DATABASE
        created_at: new Date(),
        text: data.get('text') as String,
        done: false
    })



}