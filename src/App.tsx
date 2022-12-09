import { AppWrapper } from "./ui/base";
import { Budget } from "./components";
import { Expenses } from "./components/Expenses/Expenses";
import { Form } from "./components/Form/Form";

export const App = () => {
  return (
    <AppWrapper>
      <Budget />
      <Expenses />
      <Form />
    </AppWrapper>
  );
};
