const WelcomeCard = () => {
  return (
    <div className="rounded-xl bg-blue-600 p-6 text-white shadow">
      <h1 className="text-2xl font-bold">
        Welcome Back, sir!
      </h1>

      <p className="mt-2 text-blue-100">
        welcome to your dashboard.
      </p>

      <button className="mt-5 rounded-lg bg-white px-5 py-2 text-blue-600">
        login
      </button>
    </div>
  );
};

export default WelcomeCard;