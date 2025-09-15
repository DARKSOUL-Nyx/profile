import React from 'react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "My First React Project",
      content: "This is a short summary of my first blog post. I'll write about the process of building this profile page.",
      link: "#" // Replace with a link to the full post
    },
    {
      id: 2,
      title: "How to Build a Newsletter Form",
      content: "This post will walk through the steps of creating a newsletter sign-up form.",
      link: "#" // Replace with a link to the full post
    }
  ];

  return (
    <section>
      <h2>My Blog</h2>
      {posts.map(post => (
        <div key={post.id} style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', borderRadius: '8px' }}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <a href={post.link}>Read More</a>
        </div>
      ))}
    </section>
  );
};

export default Blog;