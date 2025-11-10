// import React from 'react';
// import { useParams, Link } from 'react-router-dom'; // <--- MANDATORY IMPORTS
// import { posts } from '../../data/blogPosts'; // Assuming you have an array called 'posts'

// const BlogDetail = () => {
//   const { postId } = useParams();
//   // Simple logic to find the post.
//   // Note: Your posts.js file was not provided, so this assumes it exports an array named 'posts'.
//   // We should also check if posts is defined to prevent errors.
//   const post = posts ? posts.find(p => p.id.toString() === postId) : null; 

//   if (!post) {
//     return (
//       <div className="detail-page-container">
//         <h1>Post Not Found or Data Missing</h1>
//         <p>The blog post you are looking for does not exist. Ensure `src/data/blogPosts.js` is correctly formatted and exported.</p>
//         <Link to="/blog" className="back-link">Back to Blog</Link>
//       </div>
//     );
//   }

//   return (
//     <div className="detail-page-container">
//       <Link to="/blog" className="back-link">$\leftarrow$ Back to All Posts</Link>
//       <article className="blog-article">
//         <h1 className="article-title">{post.title}</h1>
//         <p className="article-meta">Published on {post.date} | Tags: {post.tags.join(', ')}</p>
        
//         <div className="article-content">
//           <p>This is the full body text for the post titled "{post.title}". This page is designed for high readability without the 3D scene in the background.</p>
//           <p>The article starts here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
//           {/* Note: If your original post object had a 'content' field, you'd render it here. */}
//         </div>
//       </article>
//     </div>
//   );
// };

// export default BlogDetail;
