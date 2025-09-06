import check from '../../assets/img/check.png'
import './Expenses.css'
const Expenses = () => {
  return (
    <div className='expenses'>
        <div className='check'><img src={check} alt="check" /></div>
        <p>30% Of Your Expenses, Looks Good.</p>
    </div>
  );
}

export default Expenses;
