import { createContext, useContext, useState } from "react";
import { Currency } from "../../config";
import { ICurrencyContext, ICurrencyContextProviderProps } from "../../types/types";

export const CurrencyContext = createContext<ICurrencyContext>({} as ICurrencyContext);

export const useCurrencyContext = () => useContext<ICurrencyContext>(CurrencyContext);

const useCurrencyContextValue = () => {
  const [currencyContext, setCurrencyContext] = useState<ICurrencyContext>(() => ({
    currentCurrency: {
      label: "EUR",
      value: Currency.EUR,
    },
    currencies: [
      {
        label: "USD",
        value: Currency.USD,
      },
      {
        label: "EUR",
        value: Currency.EUR,
      },
      {
        label: "GBP",
        value: Currency.GBP,
      },
    ],
    setNewCurrency: (currentCurrency) => {
      setCurrencyContext((context) => ({ ...context, currentCurrency }));
    },
  }));

  return currencyContext;
};

export const CurrencyContextProvider = ({ children }: ICurrencyContextProviderProps) => {
  return (
    <CurrencyContext.Provider value={useCurrencyContextValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};
