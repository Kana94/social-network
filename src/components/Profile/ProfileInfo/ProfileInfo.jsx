import prof from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      
      <div className={prof.content}>
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" />
      </div>
      <div>ava + description</div>

    </div>
  );
};
export default ProfileInfo;
