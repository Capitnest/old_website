// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import EmptyList from "./components/EmptyList";
// import "./styles.css";
// import { Link } from "react-router-dom";
// import { Layout } from "../components/Layout";
// import { Button, Badge } from "@chakra-ui/react";

// const Blog = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     let blog = blogList.find((blog) => blog.id === parseInt(id));
//     if (blog) {
//       setBlog(blog);
//     }
//   }, []);

//   return (
//     <>
//       <Layout>
//         <br />
//         <br />
//         <br />
//         <br />
//         <Link className="blog-goBack" to="/news">
//           <Button colorScheme="teal">
//             <span> &#8592; </span> <span>Go Back </span>
//           </Button>
//         </Link>
//         {blog ? (
//           <div className="blog-wrap">
//             <header>
//               <p className="blog-date">
//                 Published {blog.createdAt} by {blog.authorName}
//               </p>
//               <h1 style={{ fontSize: "35px", fontWeight: "600" }}>
//                 {blog.title}
//               </h1>
//               <div className="blog-subCategory">
//                 {blog.subCategory.map((category, i) => (
//                   <div key={i}>
//                     <Badge colorScheme="green">{category}</Badge>
//                   </div>
//                 ))}
//               </div>
//             </header>
//             <img src={blog.cover} alt="cover" />
//             <p className="blog-desc">{blog.content}</p>
//           </div>
//         ) : (
//           <EmptyList />
//         )}
//       </Layout>
//     </>
//   );
// };

// export default Blog;
