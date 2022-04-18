import MyContext from "./MyContext";

export default function ShoppingCartProvider(props){
  //const {countries,defaultCountry} = Apisource;  
  const defaultCountry = Apisource.defaultCountry;
  const [currentCountry, setCurrentCountry] = useState(defaultCountry);
  const [countries, setCountries]= useState([]);

  useEffect(() => { 
    const fetchData = async () => {
        const response = await (
        fetch(Apisource.API_LOCAL_COUNTRIES));
        const data = await response.json();

        setCountries(data);
        };
        fetchData().catch((e) => setError(e.message));
    }, []);

    return(
        <MyContext.Provider
            value={{
                countries : countries
            }
        }>
            {props.children}
        </MyContext.Provider>

    )
}