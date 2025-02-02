import Blog from "./Components/Blog";
import HeroSection from "./Components/HeroSection";
import NewArrivals from "./Components/NewArrivals";
import TableSection from "./Components/TableSection";
import TopPicks from "./Components/TopPicks";
import FollowUs from "./Components/FollowUs";


export default function HomePage() {
  return (
    <main>
      <HeroSection/>
      <TableSection/>
      <TopPicks/>
      <NewArrivals/>
      <Blog/>
      <FollowUs/>
    </main>
  );
}
