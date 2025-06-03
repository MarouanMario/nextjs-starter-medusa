import Header from "@/components/Header";
import ParallaxSection from "@/components/ParallaxSection";
import BestSeller from "@/components/BestSeller";
import NewArrivals from "@/components/NewArrivals";
import Commitment from "@/components/Commitment";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative">
      <Header />

      {/* 1. Hero */}
      <ParallaxSection imageSrc="/images/hero.jpg" height="100vh">
        <h1 className="text-6xl font-bold">MAR & B</h1>
        <p className="text-xl mt-4">Timeless Style for the Modern Gentleman</p>
      </ParallaxSection>

      {/* 2. Best Seller */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-8">Best Seller</h2>
        <BestSeller />
      </section>

      {/* 3. New Arrivals (Slideshow) */}
      <section className="py-24 px-6 text-center bg-gray-100 dark:bg-gray-900">
        <h2 className="text-4xl font-semibold mb-8">New Arrivals</h2>
        <NewArrivals />
      </section>

      {/* 4. Our Commitment */}
      <section className="py-24 px-6">
        <h2 className="text-4xl font-semibold mb-6 text-center">Our Commitment</h2>
        <Commitment />
      </section>

      {/* 5. About Us */}
      <section className="py-24 px-6 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-4xl font-semibold mb-6 text-center">Who We Are</h2>
        <AboutUs />
      </section>

      {/* 6. Footer (social links only) */}
      <Footer />
    </div>
  );
}
