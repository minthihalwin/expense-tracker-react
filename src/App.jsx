import "./App.css";
import {
  AddTransaction,
  Balance,
  Header,
  IncomeExpenses,
  TransactionList,
} from "./components";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
