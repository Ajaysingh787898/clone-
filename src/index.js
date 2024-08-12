import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './store/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProductPage from './pages/AddProductPage/AddProductPage';
// import AddProductOrignal from './Backup/AddProductOrignal';
// import AddProduct from './pages/AddProductPage/AddProduct';
// import AddProductTwo from './pages/AddProductPage/AddProductTwo';
// import Productt from './Backup/Productt';
// import Datee from './Backup/Datee';


// import Multis from './pages/MultiStepForm/Multis';
// import MultiStepForm from './pages/MultiStepForm/MultiStepForm';
// import MultiStep from './pages/MultiStepForm/MultiStep';
//  import Store from './pages/Store/Store';
// import StoreTiming from './components/StoreTiming/StoreTiming';
// import Store from './pages/Store/Store';
// import DaysTime from './components/StoreTiming/DaysTime';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
   {/* <AddProduct/> */}
   {/* <AddProductTwo/> */}
      {/* <MultiStep/> */}
     {/* <App />  */}
      {/* <MultiStepForm/> */}
      {/* <Multis/> */}
      {/* <Store/> */}
      {/* <DaysTime/> */}
      {/* <StoreTiming/> */}
      {/* <Datee/> */}
      {/* <Productt/> */}
      {/* <AddProductOrignal/> */}
      <AddProductPage/>

      <ToastContainer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
