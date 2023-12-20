import Carousel from '../Components/Carousel-trending';
import CarouselCategory from '../Components/Carousel-categories';
import CarouselUpcoming from '../Components/Carousel-upcoming';
import Footer from '../Components/Footer';
import Menu from '../Components/Menu';

function Home() {
  return (
    <>
      <Menu />
      <Carousel />
      <CarouselCategory />
      <CarouselUpcoming />
      <Footer />
    </>
  );
}

export default Home;
