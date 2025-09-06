import line from '../../assets/img/Line 11.png'
import './ContantTap.css'
const ContantTap = ({img,text1,text2,text3,colorText,text4,index}) => {
return (
    <div className={`content ${index==1?'contentPadding':''} ${index==3?'contentPad':''}`} >
      <div className='ImgTap'><img src={img} alt={text1}/></div>
      <div className='containerText'>
        <p className='tap-text1'>{text1}</p>
        <p className='tap-text2'>{text2}</p>
      </div>
      <div className='tapLine'><img src={line} alt="line" /></div>
      <p className='tap-text3'>{text3}</p>
      <div className='tapLinee'><img src={line} alt="line" /></div>
      <p className={`tap-text4 ${colorText}`}>{text4}</p>
    </div>

  );
}

export default ContantTap;
