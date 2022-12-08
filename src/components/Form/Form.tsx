import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Title } from "../../components";
import { useBudgetContext, useExpensesContext } from "../../context";
import { IExpense } from "../../types";
import { v4 } from "uuid";
import { StyledForm, StyledInputForm } from "./styles";

export const Form = () => {
  const { setNewExpense } = useExpensesContext();

  const { budget } = useBudgetContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IExpense>();

  const onSubmit: SubmitHandler<IExpense> = ({ name, price }) => {
    if (budget) {
      setNewExpense({ name, price, id: v4() });
      reset();
    } else {
      alert("Enter budget");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title text="Add expense" />
      <StyledInputForm
        {...register("name", {
          required: "Expense is required",
          minLength: { value: 2, message: "Min 2 characters" },
          maxLength: { value: 15, message: "Max 15 characters" },
        })}
        type="text"
        placeholder="enter name ..."
      />
      {errors.name && <p>{errors.name.message}</p>}
      <StyledInputForm
        {...register("price", {
          required: "Price is required",
          maxLength: { value: 6, message: "Max 6 characters" },
          valueAsNumber: true,
        })}
        type="number"
        placeholder="enter cost ..."
      />
      {errors.price && <p>{errors.price.message}</p>}
      <Button children="Done" />
    </StyledForm>
  );
};
