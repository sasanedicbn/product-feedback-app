import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'; 
import { Provider } from 'react-redux';
import Home from './components/Home/Home';
import store from './components/store/store';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
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