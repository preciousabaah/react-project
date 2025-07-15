import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('presh');
    const history = useHistory();


    const handlesubmit = (e) =>{
     e.preventDefault();
     const Blog = { title, body, author};
   

     fetch('http://localhost:5000/blogs', {
        method: 'post',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(Blog)
     }).then(() => {
       
        //history.go(-1);
        history.push('/');
     })
    }

    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handlesubmit}>
               <label>Blog title:</label> 
               <input  type="text"
                required 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}/>

               <label>Blog Body:</label> 
               <textarea  type="text"
                required 
                value={body}
                onChange={(e) => setBody(e.target.value)}>
                </textarea>

               <label>Blog author:</label>
               <input type="text" 
                required  
                value={author} 
                  onChange={(e) => setAuthor(e.target.value)} />
              <button>Add Blog</button>

            </form>
        </div>
    );
}

export default Create; 