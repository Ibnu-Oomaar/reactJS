import Navbar from "./components/navbar";
import Sidebar from "./components/asidebar";
// import WelcomeCard from "./components/welcome";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex">
        <Sidebar />

        {/* <main className="flex-1 p-6">
          <WelcomeCard />
        </main> */}
      </div>
    </div>
  );
}

export default App;