import rectangle2 from '../../assets/img/Rectangle 157.png'
import rectangle1 from '../../assets/img/Rectangle 29.png'
import './Rate.css'
const Rate = () => {
  return (
    <div className='Rate'>
       <div className='rate-position'>
        <img src={rectangle1} alt="rectangle" />
         <div className='position2'>
            <img src={rectangle2} alt="rectangle" />
          </div>
            <p className='position3'>$20,000.00</p>
            <p className='position4'>30%</p>
        </div>
        
       

    </div>
  );
}

export default Rate;

