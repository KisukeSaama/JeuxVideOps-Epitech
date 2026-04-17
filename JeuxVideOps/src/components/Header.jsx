function Header() {
  return (
  <header class="bg-gray-800 text-white p-4 flex justify-between items-center absolute top-0 w-full">
    <h1 class="text-2xl font-bold">JeuxVideOps</h1>
    <nav>
      <ul class="flex space-x-4">
        <li>
          <a href="/" class="hover:text-gray-300">Home</a>
        </li>
        <li>
            <a href="/spaceinvaders" class="hover:text-gray-300">Space Invaders</a>
        </li>
        <li>
            <a href="/twoships" class="hover:text-gray-300">Two Ships</a>
        </li>
      </ul>
    </nav>
  </header>
  );
}

export default Header;