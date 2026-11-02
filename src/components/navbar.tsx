const Navbar = () => {
  return (
    <nav className="flex h-16 items-center justify-between border-b bg-white px-6">
      <h1 className="text-xl font-bold text-blue-600">
        My dashboard
      </h1>

       <nav className="flex gap-3 text-gray-600 list-none font-blue-950 font-bold ">
          <li>Home</li>
          <li>Help</li>
          <li>Settings</li>
          <li>Logout</li>
        </nav>

      <div className="flex items-center gap-4">
        <button className="text-gray-600">
          Notifications
        </button> 

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-950 font-bold text-white">
          A
        </div>

       
      </div>
    </nav>
  );
};

export default Navbar;