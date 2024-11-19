import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/layout/Layout';
import Main from '../pages/main/Main';
import Todocontainer from '../pages/todo/Todocontainer';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [
      {
        index : true,
        element : <Main />
      },
      {
        path : "/todo",
        element : <Todocontainer/>
      }
    ]
  }
])

export default router;