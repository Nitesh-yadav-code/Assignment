import React,{useState} from 'react'
import styles from "../styles/Posts.module.css";

const posts = (props) => {
  const [post, setPost] = useState(props.response)
  return (
    <>
      {post.posts.map((postItem)=>(
         <div key={postItem.title} className={styles.postItem}>  {postItem.title}  </div>
      ))}
   </>
  )
}
export async function getServerSideProps(context) {
  let data = await fetch('http://dummyjson.com/posts')
      let response = await data.json()
  return {
    props: {response}
  }
}

export default posts