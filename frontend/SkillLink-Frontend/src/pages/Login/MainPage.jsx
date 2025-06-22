import Navbar from "../../components/Main/Navbar";
import Hero from "../../components/Main/Hero";
import CourseList from "../../components/Main/CourseList";
import MentorList from "../../components/Main/MentorList";
import Testimonios from "../../components/Main/Testimonios";
import InfoCards from "../../components/Main/InfoCards";
import CallToAction from "../../components/Main/CallToAction";
import Footer from "../../components/Main/Footer";

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
