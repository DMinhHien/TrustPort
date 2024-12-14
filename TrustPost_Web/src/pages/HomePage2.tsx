import { Box } from "@mui/material"; 
import Header from "../components/HomePage/Header";
import Footer from "../components/HomePage/Footer";
import News from "../components/HomePage/New";
import About from "../components/HomePage/About";
import Information from "../components/HomePage/Information";
import Service from "../components/HomePage/Service";
import ServiceCardGrid from "../components/HomePage/ServiceCard";
import Banner from "../components/HomePage/Banner";
function HomePage2() {
    return (
      <Box sx={{
        width: '100vw', 
        height: '100px', 
      }}>
       <Header/>
       <Banner/>
       <Service/>
       <ServiceCardGrid/>
       <News/>
       <Information/>
       <About/>
       <Footer/>
      </Box>
    );
  }
  
  export default HomePage2;