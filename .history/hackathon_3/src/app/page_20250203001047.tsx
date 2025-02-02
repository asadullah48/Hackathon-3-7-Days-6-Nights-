import Blog from "./Components/Blog";
import HeroSection from "./Components/HeroSection";
import NewArrivals from "./Components/NewArrivals";
import TableSection from "./Components/TableSection";
import TopPicks from "./Components/TopPicks";
import FollowUs from "./Components/FollowUs";

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 lg:space-y-24">
      <section aria-label="Hero Section">
        <HeroSection />
      </section>
      <section aria-label="Table Section">
        <TableSection />
      </section>
      <section aria-label="Top Picks">
        <TopPicks />
      </section>
      <section aria-label="New Arrivals">
        <NewArrivals />
      </section>
      <section aria-label="Blog">
        <Blog />
      </section>
      <section aria-label="Follow Us">
        <FollowUs />
      </section>
    </main>
  );
}