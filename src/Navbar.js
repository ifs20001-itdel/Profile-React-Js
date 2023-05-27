import './App.css';

function Navbar() {
  return (
<header class="text-green-600 body-font tulisan">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="./logo.png" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  viewBox="0 0 24 24" class="w-30 h-20 text-white p-2 rounded-full"></img>

    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900" href="#konten">About</a>
      <a class="mr-5 hover:text-gray-900" href="#experience">Experience</a>
      <a class="mr-5 hover:text-gray-900" href="#project">Project</a>
      <a class="mr-5 hover:text-gray-900" href="#contact">Contact</a>
    </nav>
  </div>
</header>
  );
}

export default Navbar;
