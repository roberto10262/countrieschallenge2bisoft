import { useState, useEffect, useContext, createContext } from "react";

const CountriesContext = createContext({});
export const useCountries = () => useContext(CountriesContext);

const CountriesContextProvider = ({ children }) => {
  const [rawCountries, setRawCountries] = useState([]);
  const [filterDependecies, setFilterDependencies] = useState({});
  const [countries, setCountries] = useState(rawCountries);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const resetCountries= ()=> setCountries(rawCountries)
  useEffect(() => {
    fetch("api/countries")
      .then((res) => res.json())
      .then(({ countries, regions, subRegions }) => {
        setRawCountries(countries);
        setCountries(countries);
        setFilterDependencies({ regions: ["tudo", ...regions], subRegions });
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  return (
    <CountriesContext.Provider
      value={{ countries, setCountries, isLoading, isError, filterDependecies, resetCountries, rawCountries }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
export default CountriesContextProvider;
