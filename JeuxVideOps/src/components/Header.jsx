function Header() {
  return (
 <header className="bg-linear-to-r from-fuchsia-950 to-purple-950 text-fuchsia-50 p-4 shadow-lg shadow-fuchsia-500/20 backdrop-blur-sm border-b border-fuchsia-500/30 fixed top-0 w-full z-50">
    <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl xl:text-3xl font-bold">
            JeuxVideOps
        </h1>
        <nav>
            <ul className="flex space-x-6 xl:space-x-8">
                <li>
                    <a 
                        href="/" 
                        className="hover:text-fuchsia-400 transition-colors duration-300 font-medium"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a 
                        href="/spaceinvaders" 
                        className="hover:text-fuchsia-400 transition-colors duration-300 font-medium"
                    >
                        Space Invaders
                    </a>
                </li>
                <li>
                    <a 
                        href="/twoships" 
                        className="hover:text-fuchsia-400 transition-colors duration-300 font-medium"
                    >
                        Two Ships
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</header>
  );
}

export default Header;