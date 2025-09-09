import check from '../../assets/img/check.png'
import rec from '../../assets/img/Vec.png'
import './Expenses.css'
const Expenses = ({expression}) => {
  return (
    <div className='expenses'>
        <div className={`check ${expression=='true'?'none':''}` }><img src={check} alt="check" /></div>
        <div className={`check ${expression=='true'?'':'none'}` }> <img src={rec} alt="rec" /></div>
        <p>30% Of Your Expenses, Looks Good.</p>
    </div>
  );
}

export default Expenses;
