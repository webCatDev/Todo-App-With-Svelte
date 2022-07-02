// TODO: PERSIST IN DATABASE
let todos: Todo[] = [];

export const api = (request: Request, todo?: any, params?: any) => {
    let body = {};
    let status = 500;

    switch (request.method.toUpperCase()) {
        case "GET":
            body = todos
            status = 200
            break
        case "POST":
            todos.push(todo)
            return {
                status: 303,
                headers: {
                    location: '/'
                }
            }
            case "DELETE":
                todos = todos.filter(todo => todo.uid !== params.uid)
                return {
                    status: 303,
                    headers: {
                        location: '/'
                    }
                }
        default:
break

    }

    return {
        status, body
    }
}