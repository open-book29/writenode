import { addDoc, collection } from 'firebase/firestore';
import React from 'react'
import { auth, db } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';

export const CreatePage = () => {
  const navigate = useNavigate();
  useTitle("Creat Post")
  const postRef = collection(db, "posts");

  async function handleCreatePost(event){
    event.preventDefault();
    const document = {
      title: event.target.title.value,
      description: event.target.description.value,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    }
    await addDoc(postRef, document);
    navigate('/')
  }


  return (
    <section className='create'>
      <div className="heading">
        <h1>Add New Post</h1>
      </div>
      <form className='createPost' onSubmit={handleCreatePost}>
        <input type="text" className='title' name='title' placeholder='Title' maxLength='50' required />
        <textarea type='text' name="description" className="description" placeholder='Description' maxLength='600' required ></textarea>
        <button type='submit' className='submit'> Create</button>
      </form>
    </section>
  )
}
