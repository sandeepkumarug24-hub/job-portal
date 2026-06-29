import { Search } from "lucide-react";

function Hero() {
  return (
    <section className="bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
            🚀 No.1 Job Search Platform
          </span>

          <h1 className="mt-8 text-6xl font-bold leading-tight">
            Find Your
            <span className="text-indigo-600"> Dream Job</span>
            <br />
            Today
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore thousands of jobs from top companies and build the career
            you've always dreamed of.
          </p>

          {/* Search Box */}

          <div className="mt-10 flex justify-center">
            <div className="bg-white flex items-center rounded-full shadow-lg w-full max-w-xl overflow-hidden">
              <input
                type="text"
                placeholder="Search your dream jobs..."
                className="flex-1 px-6 py-4 outline-none"
              />

              <button className="bg-indigo-600 text-white p-4 hover:bg-indigo-700 transition">
                <Search />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
