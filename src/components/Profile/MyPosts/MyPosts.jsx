import prof from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let posts = props.postData.map((el) =>{
    return <Post message = {el.message} />

  })

  return (
    <div className={prof.description}>
      
      <div>
        <textarea></textarea>
        <button>add post</button>
      </div>
      <div className={prof.posts}>
      {posts}
     
      </div>
      

      
      
    </div>
  );
};
export default MyPosts;
