import prof from './Post.module.css';



const Post = (props) => {
  
  return (
    <div className={prof.item}>
      <img
        src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
        alt="source"
      />
      {props.message}
      <div>
        <button id="likeButton">Like</button>
        <span id="likeCount">0</span> Likes    
          
      </div>
    </div>
    
  );
  
};

export default Post;
