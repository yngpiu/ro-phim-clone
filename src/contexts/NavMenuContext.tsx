import { type ReactNode, createContext, useState } from 'react';

type NavMenuContextType = {
  isOpenNavMenu: boolean;
  openNavMenu: () => void;
  closeNavMenu: () => void;
};

const NavMenuContext = createContext<NavMenuContextType>({
  isOpenNavMenu: false,
  openNavMenu: () => {},
  closeNavMenu: () => {},
});

const NavMenuProvider = ({ children }: { children: ReactNode }) => {
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);
  const openNavMenu = () => setIsOpenNavMenu(true);
  const closeNavMenu = () => setIsOpenNavMenu(false);
  return (
    <NavMenuContext.Provider
      value={{ isOpenNavMenu, openNavMenu, closeNavMenu }}
    >
      {children}
    </NavMenuContext.Provider>
  );
};

export { NavMenuContext, NavMenuProvider };
