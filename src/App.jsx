import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <div className="bg-dark w-full row">
        <div className="d-none d-md-block col-md-2 bg-secondary vh-100"></div>
        <div className="col-12 col-md-8 vh-100 d-flex justify-content-center align-items-center">
          <div>
            <p className="text-light">Create a new branch and add your name to the list</p>
            <ul className="list-unstyled">
              <li className="text-light">Hello My name is <span style={{color:'yellow'}}>Ajit</span></li>
              <li className="text-light">Hello My name is <span style={{color:'yellow'}}>Amal</span></li>
            </ul>
          </div>
        </div>
        <div className="d-none d-md-block col-md-2 bg-secondary vh-100"></div>
      </div>
    </>
  );
}

export default App;
