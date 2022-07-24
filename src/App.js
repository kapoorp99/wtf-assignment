import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGymPlaces } from './redux/reducers/gymsPlaces';
import { fetchGymCoords } from './redux/reducers/gyms'
import HeroSection from './components/HeroSection';
import SearchSection from './components/SearchSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import {
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';

function App() {
  const dispatch = useDispatch()
  let c = {
    lat: 28.596923663299105,
    long: 77.32872149880232
  }
  useEffect(() => {
    dispatch(fetchGymPlaces())
    dispatch(fetchGymCoords(c))
  }, [])
  const theme = extendTheme({
    colors: {
      thistle: {
        100: "#E5DCE3",
        200: "#DCD0DA"
      },
      french: {
        100: "#C92C4E",
        200: "#B82848"
      },
      primarytext: {
        100: "white"
      },
      primaryBg: "black"
    },
  })
  return (
    <ChakraProvider theme={theme}>
      <HeroSection />
      <SearchSection />
      <ServicesSection />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
