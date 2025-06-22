import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CourseList from "../components/CourseList";
import MentorList from "../components/MentorList";
import Testimonios from "../components/Testimonios";
import InfoCards from "../components/InfoCards";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function MainPage() {
  return (
    <div className="bg-[#b8cfdf] text-[#1a1a1a] font-sans">
      <Navbar />
      <Hero />
      <CourseList />
      <MentorList />
      <Testimonios />
      <InfoCards />
      <CallToAction />
      <Footer />
    </div>
  );
}
