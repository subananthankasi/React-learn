import './App.css'
import'@fortawesome/fontawesome-free/css/fontawesome.css'
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.min.css'
import 'primeicons/primeicons.css';
//.....Mock api........
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Create from './Create';
// import Update from './Update';
// import Read from './Read';
//..............


import Formik from './formik/Formik';


// import Navbar from './reduxcomponents/Navbar';
// import Addtask from './reduxcomponents/Addtask';
// import { Col, Row } from 'react-bootstrap';
// import Tasklist from './reduxcomponents/Tasklist';
// import Usereducer1 from './Usereducer1';
// import Counter from './Counter';

// import Crud from './Crud';
// import Usereducer from './Usereducer';
// import Usememo from './Usememo';
// import Usememo1 from './Usememo1';
// import Usecallback from './Usecallback';
// import Task4crudopject from './Task4crudopject';
// import Context from './Context';
// import Usecontext from './Usecontext';

// import Suba from './Suba';
// import Usereducer1 from './Usereducer1';
// import Subananthan from './Subananthan';
// import Task1 from './Task1';
// import Task2 from './Task2';





function App() {
 

  
  return (
<>

{/* <Router>
    
        <ul>
          <li><Link to="/update">Update</Link></li>
          <li><Link to="/read">Read</Link></li>
          <li><Link to="/create">Create</Link></li>
        </ul>
        <Routes>
          <Route path="/update" element={<Update />} />
          <Route path="/read" element={<Read />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      
    </Router> */}

{/* <Suba  /> */}
{/* <Subananthan /> */}
{/* <Task1/> */}
{/* <Usereducer/> */}
{/* <Task2/> */}
{/* <Usecontext/> */}
{/* <Task4crudopject/> */}
{/* <Context/> */}
{/* <Counter/> */}
{/* <Context/> */}
{/* <Usereducer1/> */}
 {/* <Crud/> */}


{/* <Navbar/>
<Row className="justify-content-md-center">
        <Col  lg="6">
          <Addtask />
          <Tasklist/>
        </Col>
      </Row> */}

<Formik/>


</>
  );
}

export default App;
