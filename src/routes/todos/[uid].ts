import type { RequestHandler } from "@sveltejs/kit"
import { api } from "./_api"

export const del: RequestHandler = ({request, params}) => {
    return api(request, undefined, params)
}