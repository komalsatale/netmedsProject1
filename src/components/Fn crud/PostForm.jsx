import React from 'react';

const PostForm = ({post, onChange ,onSubmit}) =>{
    return(
        <div>
           <label>
            Title : <input type="text" name="title" value={post.title} onChange={onChange} />
           </label>
           <label>
            Body : <input type="text" name="body" value={post.body} onChange={onChange} />
           </label>
           <button onClick={onSubmit}>Create Post</button>
        </div>
    )
}
export default PostForm;