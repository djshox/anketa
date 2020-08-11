import axios from 'axios';

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    // headers: {
    //     "API-KEY": "C6G5-ACCD"
    // }
});

export const getUsers = () => {
    return axios.get(`https://www.reddit.com/r/reactjs.json`)
        .then(res => {
            const persons = res.data.data.children;
            let clients = []
            clients = persons.map((person, key) => (
                {
                    kind: person.kind,
                    key: key,
                    name: person.data.author,
                    age: person.data.author_flair_type,
                    address: person.data.author_fullname,
                }
            ))
            return {
                data: clients,
                isSuccess: true
            };
        }).catch(er => {
            return {
                data: er,
                isSuccess: false
            };
        })
}

export const AuthAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logOut() {
        return instance.delete('auth/login')
    }

}

