// TODO: PERSIST IN DATABASE
let todos: Todo[] = [];

export const api = (request: Request, todo?: Todo, params?: any) => {
    let body = {};
    let status = 500;
    const METHOD = request.method.toUpperCase()

    switch (METHOD) {
        case "GET":
            body = todos
            status = 200
            break
        case "POST":
            if(!todo){

                todos.push(todo)
            }
            break
        case "DELETE":
            todos = todos.filter(todo => todo?.uid !== params.uid)
            break
        case "PATCH":
            const todo = todos.find(todo => todo?.uid === params.uid)
            break
        default:
            break

    }


    if (METHOD !== "GET") {
        return {
            status: 303,
            headers: {
                location: '/'
            }
        }
    }


    return {
        status, body
    }
}