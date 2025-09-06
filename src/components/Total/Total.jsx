
import './Total.css'
const Total = ({icon,text,number,cNamber}) => {
return (
    <div className='total'>
      <div className='total-div'>
        <div className='image-total'>
            <img src={icon} alt="icon" />
        </div>
        <h3 className='text-total'>{text}</h3>
      </div>
      <p className={`number-total ${cNamber}`}>{number}</p>
    
    </div>
    
  )
}

export default Total
