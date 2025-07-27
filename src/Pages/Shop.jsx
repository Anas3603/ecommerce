import Hero from "../components/hero/Hero";
import Popular from "../components/popular/Popular";
import Offers from "../components/offers/Offers";
import NewCollections from "../components/newCollections/NewCollections";
import Newsletter from "../components/newsLetter/Newsletter";
import Footer from "../components/footer/Footer";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <Newsletter />
    </div>
  );
};

export default Shop;
