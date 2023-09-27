import Articles from "@/components/Articles";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NewLetter from "@/components/NewLetter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:w-screen ">
      <Navbar />
      <Hero />
      <Articles />
      <NewLetter />
    </main>
  );
}
