import type { RequestHandler } from "@sveltejs/kit"

// TODO : PERSIST DATA IN DATABASE
let todos: Todo[] = []

export const get = () => {
    return {
        status: 200,
        body: todos

    }
}

export const post: RequestHandler = async ({request}) => {
   const data = await request.formData();
   todos.push({
    created_at: new Date(),
    text: data.get('text') as String,
    done: false
})

   if(!data) {
    return {
        status: 404,
        body: 'Todo is not found!'
    }
   }

     return {
        status: 303,
        headers: {
            location: '/'
        }
     }
}