import logo from './cube.gif';
import { Link } from 'react-router-dom';
import './Information.css';
import './Home.css';

function Home( {onC} ) {
  return (
    <div className="homeInfo">
      <header className="homepage">

        <div className="fullhomeLogo">
          <img src={logo} className="logohome" alt="logo" />
          <div className='aboveText'>Hello World!</div>
        </div>

        <div className='name'>
            <h1 className='firstname' >Mark</h1>
            <hr className='vr'/>
            <h1 className='lastname'>
              Williams
            </h1>
        </div>
        <div className='descHome'>
          <p>
            Computer Science Student @ UCF Wanting to become a graphics programmer
          </p>
        </div>

        <div className='contentSelectionHome'>
          <Link to="/" className='contentSelectionHome'>
            <button onClick={() => onC('projects')}>
              Projects
            </button>
          </Link>
          <Link to="/" className='contentSelectionHome'>
            <button onClick={() => onC('notes')}>
              Notes
            </button>
          </Link>
          <Link to="/" className='contentSelectionHome'>
            <button onClick={() => onC('aboutme')}>
              About Me
            </button>  
          </Link>
          <Link to="/" className='contentSelectionHome'>
            <button onClick={() => onC('resources')}>
              Extra
            </button>  
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Home;
