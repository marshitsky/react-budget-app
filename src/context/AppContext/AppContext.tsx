import { ComponentType, PropsWithChildren, ReactNode } from "react";

interface IAppContextProvider {
  components: Array<ComponentType<PropsWithChildren<any>>>;
  children: ReactNode;
}

export const AppContextProvider = (props: IAppContextProvider) => {
  const { components = [], children } = props;

  return (
    <>
      {components.reduceRight((acc, Component) => {
        return <Component>{acc}</Component>;
      }, children)}
    </>
  );
};
