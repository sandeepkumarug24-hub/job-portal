import SearchBar from "../common/SearchBar";
import Container from "../common/Container";

function Hero() {
  const handleSearch = (keyword) => {
    console.log(keyword);
  };
  return (
    <section className="bg-slate-100">
      <Container>
        <div className="py-24 text-center">
          {/* Badge */}
          <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
            No.1 Job Search Platform
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-6xl font-bold leading-tight">
            Find Your
            <span className="text-indigo-600"> Dream Job</span>
            <br />
            Today
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore thousands of jobs from top companies and build the career
            you've always dreamed of.
          </p>

          {/* Search Box */}
          <div className="mt-10 flex justify-center">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
