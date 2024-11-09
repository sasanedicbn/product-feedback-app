import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'; 
import { Provider } from 'react-redux';
import Home from './components/Home/Home';
import store from './components/store/store';
import FeedBack from './components/FeedBack/FeedBack';
import Details from './components/Details/Details';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/add',
      element: <FeedBack />,
    },
    {
      path:'/details/:id',
      element: <Details/>
    }
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer 
        position="top-center"  
        autoClose={4000}     
        hideProgressBar={false} 
        newestOnTop={false}  
        closeOnClick          
        pauseOnHover          
        draggable             
        theme="light"         
      />
    </Provider>
  );
}

export default App;