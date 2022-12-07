import AddBalance from "./componets/AddBalance";
import Balance from "./componets/Amount";
import Collection from "./componets/Collection";
import Expenses from "./componets/Expenses";
import Header from "./componets/Header";
import { GlobalProvider } from "./contextAPI/Global";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="container my-3">
        <GlobalProvider>
          <Header />
          <Balance />
          <Expenses />
          <AddBalance />
          <Collection />
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
