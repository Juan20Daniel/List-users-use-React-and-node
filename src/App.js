import { useState, useEffect } from 'react';
import ListUsers from "./components/listUsers/ListUsers";
import './app.css';
import { users } from './api/users';
function App() {
  const [ userActives, setUsersActive ] = useState([]);
  const [ userInavtive, setUserInactive ] = useState([]);
  const [ typeList, setTypeList ] = useState(true);
  const lookUsers = () => {
    setTypeList(!typeList);
  }
  useEffect(() => {
    const urlActives = "http://localhost:3001/api/users/active"
    users(urlActives).then(response => {
      setUsersActive(response.rows);
    })
    const urlInctives = "http://localhost:3001/api/users/inactive"
    users(urlInctives).then(response => {
      setUserInactive(response.rows);
    })
  },[]);
  return (
    <div className="container">
      <header>
        <div className='selectUser'>
          <button onClick={lookUsers} type="button">
            {typeList && <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANdJREFUSEvtlEEOgjAQRX9ND+ARWLAX4gX0RB5BuIE3ggsYdd8FR/AAk2BKqMGmZVorGwMbNsN7mT/DCCz8iIX5WAVswmtEQ0TZLdtKyJMqVW1nlhzRAO9lA6BAj1rtVTWVJAk+4MCDBB26snv+RBAC16KvOgiFzwrya17Rhi52yzFwr0DDIXAGcCdBRyOJhXsFI6gFsDMSXfzeFs9AXb+1dwa2ZPy4QAScHbIl0fXOVZw7SOwWTSRw7Tl37ViBOQX6bW8UB2cjCgFwNUEdcJCkGaTA/yOiF23ddBkv0U/MAAAAAElFTkSuQmCC" alt="icon check" />}
          </button>
          <p>Check Users</p>
        </div>
      </header>
      <main>
        { typeList ? <ListUsers nameList="Users actives" users={userActives} buttonActive={false} /> : <ListUsers nameList="Users inactives" users={userInavtive} buttonActive={true} /> }
      </main>
    </div>
  );
}



export default App;
