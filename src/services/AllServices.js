export const fetchPosts = () => {
    return fetch("http://localhost:8088/posts?_expand=topic&_embed=likes").then((response) => response.json())
}

export const fetchTopics = () => {
    return fetch("http://localhost:8088/topics").then((response) => response.json())
}

export const fetchUsers = () => {
    return fetch("http://localhost:8088/users").then((response) => response.json())
}

export const fetchLikes = () => {
    return fetch("http://localhost:8088/likes").then((response) => response.json())
}