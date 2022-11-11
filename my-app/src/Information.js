import logo from './cube.gif';
import './Information.css';

function Information( {onC} ) {
  return (
    <div className="Information">
      <header className="Sidebar">
        <div className="fullLogo">
          <img src={logo} className="logo" alt="logo" />
          <div className='aboveText'>Hello World!</div>
        </div>
        <div className='desc'>
          <h1>
            Mark Williams
          </h1>
          <p>
            Computer Science Student @ UCF Wanting to become a graphics programmer
          </p>
        </div>
        <div className='contentSelection'>
          <button onClick={() => onC('projects')}>
            Projects
          </button>
          <button onClick={() => onC('resources')}>
            Extra
          </button>
        </div>
      </header>
    </div>
  );
}

export default Information;
