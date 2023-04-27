import './styles.css';

export const WelcomeView = () => {
  return (
    <div className="welcome-view">
      <input placeholder="text" onChange={(e) => console.log(e)} />
      <button onClick={(e) => console.log(e)}>test</button>
    </div>
  );
};
