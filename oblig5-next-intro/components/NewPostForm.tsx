import axios from 'axios';
import React from 'react';

function NewPostForm() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const post = {
      title: formData.get('title'),
      content: formData.get('content'),
    };

    await axios.post('https://api.example.com/posts', post);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" type="text" />
      <textarea name="content" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewPostForm;