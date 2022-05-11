import { useMutation, useQuery } from "@apollo/client";
import { CREATE_POST, DELETE_POST , UPDATE_POST } from "./GraphQL/Mutation";
import { getALL } from "./GraphQL/Query";
import { useState , useEffect } from "react";
import './App.css';


function App() {

  const { loading : PostsLoading , error, data : Posts } = useQuery(getALL);

  const [createPost, { err1 }] = useMutation(CREATE_POST);
  const [deletePost, { err2 }] = useMutation(DELETE_POST);
  const [updatePost, { err3 }] = useMutation(UPDATE_POST);
  
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  useEffect(() => {
     console.log(Posts);
  }, [Posts])

  const removeHandler = (id) => {

    if(!window.confirm('sure wanna delete?')) return;
    console.log(id);
    deletePost({
      variables: {
        id: id,
      },
    });
  };


  const addPostHandler = (e) => {
    e.preventDefault();

    if(!title) return

    try {
      createPost({
        variables: {
          title: title,
          description: description,
        },
      }).then(x => console.log(x))
    } catch (error) {
      console.log(error);
    }

  };
  

  return (
    <div className="App">
      {!PostsLoading && Posts.getAll.map((data) => (
        <>
          <p key={data.title}>
            {data.title}----{data.description}
          </p>
          <button onClick={() => removeHandler(data.id)}> Delete it </button>
        </>
      ))}

      <br/>
      <br/>

      <form onSubmit={addPostHandler} >
        <input value={title} onChange={e=>setTitle(e.target.value)} required/>
        <input value={description} onChange={e=>setDescription(e.target.value)}/>
        <button type="submit">Create</button>
      </form>
      
    </div>
  );
}

export default App;
