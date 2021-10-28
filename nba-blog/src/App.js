// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import styled, { ThemeProvider } from 'styled-components';
// import { OuterLayout } from './Layout/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Gallery from './Pages/Gallery';
import Auth from './Pages/Auth';
import Teams from './Pages/Teams';
import Players from './Pages/Players';
import Blog from './Pages/Blog';
import PostDetail from './Pages/PostDetail';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  adapt: '399px',
  se: '330px',
  teams: '350px',
  foot: '375px',
  max: '400px',
  blogNav: '610px',
  min: '520px',
  make: '548px',
  mobile: '500px',
  desktop: '768px',
  player: '751px',
  dont: '1020px',
  balls: '930px',
  post: '940px',
  kobe: '1200px',
  mind: '1100px',
  mins: '1300px',
  minsx: '1280px',
  minss: '1500px',
  team: '1700px',
  img: '1201px',
};
const MainStyled = styled.main``;
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <ThemeProvider theme={theme}>
            <Route path="/" exact component={Home} />
            <Route path="/gallery" exact component={Gallery} />
            <Route path="/teams" exact component={Teams} />
            <Route path="/players" exact component={Players} />
            <Route path="/auth" exact component={Auth} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/blog/:id" exact component={PostDetail} />
          </ThemeProvider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
