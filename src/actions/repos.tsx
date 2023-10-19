import axios from "axios";

export const getRepos = (searchQuery:any) => {
    return async (dispatcn:any) => {
        const responce = await axios.get(`https://${searchQuery}`)
    }
}