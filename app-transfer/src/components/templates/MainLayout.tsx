import { ReactNode } from "react";
import { Nav } from "../atom/Nav";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="container mx-auto">
      <Nav />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
