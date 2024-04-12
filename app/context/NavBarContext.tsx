import { createContext, FC, ReactNode, useContext, useState } from "react";

const Context = createContext<any>({});
export const useNavbarContext = () => useContext(Context);
export const NavbarProvider: FC<{ children?: ReactNode | undefined }> = (
  props,
) => {
  const [addressNavbar, setAddressNavbar] = useState(false);

  return (
    <Context.Provider value={{ setAddressNavbar, addressNavbar }}>
      {props.children}
    </Context.Provider>
  );
};
