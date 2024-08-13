import React, { useEffect, useState } from 'react';
import PostTable from './PostTable';
import axios from 'axios';
import PostForm from './PostForm';

const Fun_Crud =()=>{

    const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

     const [posts,setPosts]=useState([]);
     const [post,setPost]=useState({title : "", body : ""});

    const fetchData = async () =>{
        try {
            const result = await axios.get(BASE_URL);
            console.log(result);
            setPosts(result.data);

        } catch (error) {
            console.log('data fetching error', error);
        }
    }

    const deletePost = async (id)=>{
        try {
            await axios.delete(`${BASE_URL}/${id}`);
            setPosts(posts.filter(post => post.id !== id));
        } catch (error) {
            console.log('data deleting error', error);
        } 
    }

    const createPost = async () =>{
        try {
            const result = await axios.post(BASE_URL,post);
            console.log(result);
            setPosts([...posts,result.data]);
            setPost({title:"",body:""})
        } catch (error) {
            console.log("createPost error", error);
        }
    }
    const handleChange = (e) => {
       const {name,value}= e.target;
       setPost((prevPost)=>({...prevPost, [name]:value}))
    }

    useEffect(()=>{
      fetchData();
    },[])

    return(
        <div>
           <h4> Functional crud </h4>
           <PostForm post={post}
           onChange={handleChange}
           onSubmit={createPost}/>

           <PostTable posts={posts}
           onDelete={deletePost}/>
        </div>
    )

}
export default Fun_Crud;