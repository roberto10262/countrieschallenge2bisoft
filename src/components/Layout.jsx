import CountriesContextProvider from "context/CountriesContext";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <>
      <CountriesContextProvider>
        <Navbar />
        {children}
      </CountriesContextProvider>
    </>
  );
};

export default Layout;
