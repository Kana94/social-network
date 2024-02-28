import prof from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
  return (
    <div>
      
      <div>
        <textarea></textarea>
        <button>add post</button>
      </div>
      <div className={prof.posts}>
      <Post message = 'Hei how are you'/>
      <Post message = 'Hei how are you'/>
     
      </div>
      

      
      
    </div>
  );
};
export default MyPosts;
