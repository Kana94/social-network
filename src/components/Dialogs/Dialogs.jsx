import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
const Dialogs = (props) => {
debugger;


let dialogs = props.dialogData.map((el) => {
  return <DialogItem name={el.name} id = {el.id}/>

})
let messages = props.messageData.map((el)=>{
  return <Message message = {el.message}/>
})
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogs}
        
      </div>
      <div className={s.messages}>
        {messages}
        
      </div>
    </div>
  );
};
export default Dialogs;
