import React from 'react';

const PostTable = ({posts,onDelete}) =>{
    return(
        <table border={'1px solid black'}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {posts.map(post =>(
                    <tr key={post.id}>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                        <td><button onClick={()=>onDelete(post.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default PostTable;