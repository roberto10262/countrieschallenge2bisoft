import CountriesContextProvider from "context/CountriesContext";
import Banner from "./home/Banner";
import MobileControls from "./MobileControls";
import Navbar from "./Navbar";
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
