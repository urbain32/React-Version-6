import {useNavigate,Route, Routes} from "react-router-dom"

// nested routes
import Offers from './Offers';

export default function About() {
  // in react v6 we dont use useHistory insted we use
  // useNavigate to navigate the user to another page
  const navigate = useNavigate()
  return (
    <div className='content'>
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tempora
        nisi eligendi quod ut illo cumque quibusdam reprehenderit veniam. Cum
        eaque, nostrum fugit ut inventore assumenda perspiciatis sed maiores
        numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Obcaecati nam repellat hic dolore officia sequi quis quod commodi iusto
        doloremque. Corporis in et placeat unde sapiente perspiciatis minus!
        Recusandae, ad!
      </p>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tempora
        nisi eligendi quod ut illo cumque quibusdam reprehenderit veniam. Cum
        eaque, nostrum fugit ut inventore assumenda perspiciatis sed maiores
        numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Obcaecati nam repellat hic dolore officia sequi quis quod commodi iusto
        doloremque. Corporis in et placeat unde sapiente perspiciatis minus!
        Recusandae, ad!
      </p>
      {/* as you can see we dont use also  */}
      <button onClick={() => navigate('/products')}>See our products</button>

      {/* how to deal with nested route in react v6 */}
      <Routes>
        <Route path='offers' element={<Offers />} />
      </Routes>
    </div>
  );
}
