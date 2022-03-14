import './Title.css';

function Title({ name }) {
  return (
    <div className="Title">
      <header>
        <h1 className="TitleHead">{`${name}'s Visited Places`}</h1>
        <div className="Title-Subtitle">Click to add a visitied place to see everywhere you've been!</div>
      </header>
    </div>
  )
}
  
  export default Title