import './Title.css';

function Title(props) {
  const { name } = props;
  return (
    <div className="Title">
      <header>
        <h1>{`${name}'s visited places`}</h1>
        <div className="Title-Subtitle">Click to add a visitied place too see everywhere you've been!</div>
      </header>
    </div>
  )
}
  
  export default Title