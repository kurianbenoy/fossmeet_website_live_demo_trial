import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';

const workshops = [
  {
    name: 'LLM 101 workshop',
    image: 'https://cdn.sanity.io/images/0bdf6tyo/production/1e506735ae75d7a20b387040568a9a99f8862126-992x960.jpg?fit=max&auto=format',
    description: 'Dive into the world of Large Language Models and their applications.',
  },
  {
    name: 'FastAPI workshop',
    image: 'https://cdn.sanity.io/images/0bdf6tyo/production/d858b7c89d2f9501cb03412ed7790ce8197b9710-992x960.jpg?fit=max&auto=format',
    description: 'Learn to build high-performance APIs with FastAPI.',
  },
  {
    name: 'Rust workshop',
    image: 'https://cdn.sanity.io/images/0bdf6tyo/production/c414489c5fff9139fea16656e89f0ede09271f4e-992x960.jpg?fit=max&auto=format',
    description: 'Explore the Rust programming language and its ecosystem.',
  },
  {
    name: 'Godot workshop',
    image: 'https://cdn.sanity.io/images/0bdf6tyo/production/ea2b7e7456cb5b75fbea7d81158cd718b8f31c8c-992x960.jpg?fit=max&auto=format',
    description: 'Get started with game development in Godot Engine.',
  },
];

export default function Home() {
  const [currentWorkshop, setCurrentWorkshop] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentWorkshop((currentWorkshop + 2) % workshops.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentWorkshop]);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow flex justify-between items-center">
        <div className="text-orange-600 text-xl font-bold px-6 py-3">FOSSMeet'24</div>
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex justify-center gap-6">
            <li><Link href="/workshops">Workshops</Link></li>
            <li><Link href="/schedule">Schedule</Link></li>
            <li><Link href="/sponsors">Sponsors</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 text-orange-600">Welcome to FOSSMeet 2024</h1>
            <p className="text-xl mb-8">Join us for an exciting event celebrating open source software!</p>
            <Link href="/register" className="bg-orange-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-orange-700 transition duration-300">Register Now</Link>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://www.fossmeet.net/hero.svg"
              alt="FOSSMeet Hero Image"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-6">Workshops 📝</h2>
          <div className="container mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-bold">{workshops[currentWorkshop].name}</h3>
              <img src={workshops[currentWorkshop].image} alt={workshops[currentWorkshop].name} className="mx-auto" />
              <p>{workshops[currentWorkshop].description}</p>
              <h3 className="text-xl font-bold">{workshops[(currentWorkshop + 1) % workshops.length].name}</h3>
              <img src={workshops[(currentWorkshop + 1) % workshops.length].image} alt={workshops[(currentWorkshop + 1) % workshops.length].name} className="mx-auto" />
              <p>{workshops[(currentWorkshop + 1) % workshops.length].description}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-6 mt-auto">
      <div className="text-orange-600 font-bold">FOSSMeet'24</div>
        <div className="container mx-auto px-6">
          <p className="text-center">
          👋Contact us at <a href="mailto:info@fossmeet.net">info@fossmeet.net</a> or call us at <a href="tel:+919400430812">+91 94004 30812</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
