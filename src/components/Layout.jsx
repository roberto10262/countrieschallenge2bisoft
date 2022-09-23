import CountriesContextProvider from "context/CountriesContext";
import Banner from "./home/Banner";
const Layout = ({ children }) => {
  return (
    <>
      <CountriesContextProvider>
        <Banner />
        {children}
      </CountriesContextProvider>
    </>
  );
};

export default Layout;
