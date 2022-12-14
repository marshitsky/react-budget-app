import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Title } from "../../components";
import { useBudgetContext, useExpensesContext } from "../../context";
import { IExpense } from "../../types";
import { v4 } from "uuid";
import { StyledForm, StyledInputForm, ErrorMessage } from "./styles";

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
          required: "* expense is required",
          minLength: { value: 2, message: "* min 2 characters" },
          maxLength: { value: 15, message: "* max 15 characters" },
        })}
        type="text"
        placeholder="enter name ..."
      />
      {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      <StyledInputForm
        {...register("price", {
          required: "* price is required",
          maxLength: { value: 6, message: "* max 6 characters" },
          valueAsNumber: true,
        })}
        type="number"
        placeholder="enter cost ..."
      />
      {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
      <Button children="Done" />
    </StyledForm>
  );
};
