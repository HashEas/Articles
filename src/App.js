import './App.css';
import ArticleCards from './ArticleCards/ArticleCards';
import MasterContainer from './Components/Container';
import Registration from './Registration/Registration';

function App() {
  return (
    <div className="App">
      <MasterContainer>
        {/* <Registration />   */}
        <ArticleCards />
      </MasterContainer>
    </div>
  );
}

export default App;
