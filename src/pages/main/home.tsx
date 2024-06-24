const home = () => {
  return (
    <main className="container mx-auto py-8 px-4 bg-black">
      <h1 className="text-3xl font-bold mb-8 ">Shows</h1>
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg">
          <img src="" alt="" />
          <div className="p-4">
            <h2 className="text-xl text-black font-bold">Show do Radiohead</h2>
            <p className="text-gray-700 mt-2">Sab, 15/07/2024</p>
            <p className="text-gray-700 mt-2">Tem 10 lugares disponíveis</p>
            <p className="text-gray-700 mt-2">€ 120</p>
            <p>
              <button className="rounded-lg bg-gray-800 px-4 py-1 mt-3 hover:bg-gray-700">
                Reservar lugar
              </button>
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg">
          <img src="" alt="" />
          <div className="p-4">
            <h2 className="text-xl text-black font-bold">Show do Radiohead</h2>
            <p className="text-gray-700 mt-2">Sab, 15/07/2024</p>
            <p className="text-gray-700 mt-2">Tem 10 lugares disponíveis</p>
            <p className="text-gray-700 mt-2">€ 120</p>
            <p>
              <button className="rounded-lg bg-gray-800 px-4 py-1 mt-3 hover:bg-gray-700">
                Reservar lugar
              </button>
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg">
          <img src="" alt="" />
          <div className="p-4">
            <h2 className="text-xl text-black font-bold">Show do Radiohead</h2>
            <p className="text-gray-700 mt-2">Sab, 15/07/2024</p>
            <p className="text-gray-700 mt-2">Tem 10 lugares disponíveis</p>
            <p className="text-gray-700 mt-2">€ 120</p>
            <p>
              <button className="rounded-lg bg-gray-800 px-4 py-1 mt-3 hover:bg-gray-700">
                Reservar lugar
              </button>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default home;
