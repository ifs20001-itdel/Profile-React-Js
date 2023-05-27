import logo from './logo.svg';
import './App.css';

function About() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img class="object-cover object-center rounded shadow-2xl bg-fixed opacity-50 transition duration-300 ease-in-out hover:opacity-100" alt="hero" src="./ketua.png" />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Do you know me??
            <br class="hidden lg:inline-block" />Samuel Tobing
          </h1>
          <p class="mb-8 leading-relaxed">
            I was born in Tarutung on February 20, 2002, and am now studying at the Del
            Institute of Technology in the Bachelor of Informatics study program. I am
            interested in websites and enjoy implementing the knowledge I have by
            teaching it to others through group and personal learning. and I am a person
            who is easy to adapt to the surrounding environment and easy to learn. and I
            follow several organizations and become administrators in them.</p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              <a class="hover:text-gray-900" href="#experience">Experience</a>
            </button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              <a class="hover:text-gray-900" href="#project">Project</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
