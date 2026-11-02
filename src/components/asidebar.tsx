const Sidebar = () => {
  return (
    <aside className="min-h-screen w-64 bg-gray-900 p-5 text-white">
      <h2 className="mb-8 text-2xl font-bold">
        My dashboard
      </h2>

      <ul className="space-y-3">
        <li className="rounded-lg bg-blue-950 p-3">
          dashboard 
        </li>

        <li className="rounded-lg p-3 hover:bg-gray-700">
          Users
        </li>

        <li className="rounded-lg p-3 hover:bg-gray-700">
          Products
        </li>

        <li className="rounded-lg p-3 hover:bg-gray-700">
          Settings
        </li>

        <li className="rounded-lg p-3 hover:bg-gray-700">
          Logout
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;