import './Name.css';
import { useNavigate } from 'react-router-dom'

function Name() {

  let navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault();
    navigate('/map', { state: { name: e.target.name.value } });

  }

  return (
    <div className="Name">
        <form id="name_form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
  
export default Name