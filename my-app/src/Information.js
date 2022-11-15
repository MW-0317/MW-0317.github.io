import logo from './cube.gif';
import { Link } from 'react-router-dom';
import './Information.css';

function Information( {onC} ) {
  return (
    <div className="Information">
      <header className="Sidebar">

        <div className="fullLogo">
          <img src={logo} className="logo" alt="logo" />
          <div className='aboveText'>Hello World!</div>
        </div>

        <div className='name'>
            <h1 style={{color: 'limegreen', display: 'inline-block'}}>Mark</h1>
            <hr className='vr'/>
            <h1 style={{display: 'inline-block'}}>
              Williams
            </h1>
        </div>
        <div className='desc'>
          <p>
            Computer Science Student @ UCF Wanting to become a graphics programmer
          </p>
        </div>

        <div className='contentSelection'>
          <Link to="/" className='contentSelection'>
            <button onClick={() => onC('projects')}>
              Projects
            </button>
          </Link>
          <Link to="/" className='contentSelection'>
            <button onClick={() => onC('resources')}>
              Extra
            </button>  
          </Link>
          <Link to="/" className='contentSelection'>
            <button onClick={() => onC('aboutme')}>
              About Me
            </button>  
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Information;
