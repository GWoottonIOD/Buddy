import './App.css';
import React from 'react';
import Navbar from './NavBar';
import AppRoutes from './routes/AppRoutes';
import { CurrentUserHolder } from './context/CurrentUserContext';
import { PageTypeHolder } from './context/PageTypeContext';
import { DebtContextHolder } from './context/DebtContext';
import { SearchHolder } from './context/SearchContext';
import { UserContextHolder } from './context/UserContext';
import { VariableHolder } from './context/VariableContext';
import { FunctionHolder } from './context/FunctionContext';
import Axios from './components/Axios';
import Footer from './Footer';

function App() {
  const myObject = { 'userID': 10, 'amount': 20, 'duedate': 'Wed Aug 30 2023 00:00:00 GMT+1200 (New Zealand Standard Time)' ,'total': 0, 'paid': false };
  const [test, setTest] = React.useState([])

  return (
      <CurrentUserHolder>
        <PageTypeHolder>
          <DebtContextHolder>
            <SearchHolder>
              <UserContextHolder>
                <VariableHolder>
                  <FunctionHolder>
                    <Navbar />
                    <AppRoutes />
                    <Footer/>
                    {/* <Axios object={myObject} setTest={setTest} call={'post'} type={'debts'} id={'10'}/> */}
                  </FunctionHolder>
                </VariableHolder>
              </UserContextHolder>
            </SearchHolder>
          </DebtContextHolder>
        </PageTypeHolder>
      </CurrentUserHolder>
  );
}

export default App;
