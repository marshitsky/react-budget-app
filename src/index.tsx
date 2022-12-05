import ReactDOM from "react-dom/client";
import { App } from "./App";
import { AppContextProvider } from "./context/AppContext/AppContext";
import { BudgetContextProvider, CurrencyContextProvider, ExpensesContextProvider } from "./context";
import { GlobalStyles } from "./ui/globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <GlobalStyles />
    <AppContextProvider
      components={[BudgetContextProvider, CurrencyContextProvider, ExpensesContextProvider]}
    >
      <App />
    </AppContextProvider>
  </>,
);
