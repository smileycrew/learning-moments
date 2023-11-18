import { useEffect, useState } from "react"
import { fetchPosts, fetchTopics } from "../../services/AllServices"
import { Post } from "../post/Post"
import { Input } from "../input/Input"
import "./ListAllPosts.css"

export const ListAllPosts = () => {
    // USE STATE SECTION
    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const [userInput, setUserInput] = useState("")
    // need to fetch the topics...
    // then store them in our state
    // then map them to make the drop down
    // then the selected topic gets stored in another state???
    // then i filter my posts that equal the topic id
    // then i display that filtered variable
    // USE EFFECT SECTION
    useEffect(() => {
        fetchPosts().then((response) => {
            setPosts(response)
        })
    }, [])
    
    useEffect(() => {
        setFilteredPosts(posts)
    }, [posts])

    useEffect(() => {
        const filterPosts = posts.filter((post) => {
            if (post.title.toLowerCase().includes(userInput.toLowerCase())) {
                return post
            }
        })
        setFilteredPosts(filterPosts)
    }, [userInput, posts])
    // RETURN SECTION
    return (
        <div>
            <div>
                <select className="">
                    <option>Select a Topic</option>
                    fetchTopics()
                </select>
                <Input setUserInput={setUserInput} />
                <Post filteredPosts={filteredPosts} />
            </div>
        </div>
    )
}