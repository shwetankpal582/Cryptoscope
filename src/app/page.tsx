
import HomePage from "./Components/Home"
import Popular from "./Components/Popular";
import NewsPage from "./Components/NewsPage";
import AboutUs from "./Components/AboutUs";
import MarketData from "./Components/MarketStat/MarketStat"
export default function Home() {
  return (
    <div className=" px-4 sm:px-16 md:px-20 overflow-x-hidden">
      <HomePage />
      <Popular />
      <NewsPage />
      <MarketData />
      <AboutUs />
    </div>
  );
}
