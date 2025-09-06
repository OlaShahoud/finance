import food from '../../assets/img/Food.png'
import './Week.css'
const Week = ({img,text,text1,ctextColor}) => {
  return (
    <div className='week'>
      <div className='weekImg'><img src={img} alt="food" /></div>
      <div>
        <p className='weekText'>{text}</p>
        <p className={` weekText2 ${ctextColor} `}>{text1}</p>
      </div>
    </div>
  );
}

export default Week;
