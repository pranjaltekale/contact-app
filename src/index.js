
import ReactDOM from 'react-dom/client';

import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App()
{

  const path =window.location.pathname;

  if (path ==="/")
  {
    return<Home/>
  }
  else if(path === "/About")
  {
    return<About/>
  }
  else if(path ==="/Contact")
  {
    return<Contact/>
  }
  else{
    return<h1>404</h1>
  }
}
 
root.render(
  <>
  <App/>
  </>
);

