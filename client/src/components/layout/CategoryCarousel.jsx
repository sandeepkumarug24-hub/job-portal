import { useState } from "react";

const categories = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Data Scientist",
  "AI Engineer",
  "DevOps Engineer",
];

function CategoryCarousel() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <section className="max-w-7xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center">Popular Categories</h2>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full border transition
              ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white"
                  : "bg-white hover:bg-indigo-50"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <p className="text-center mt-8 text-lg text-gray-700">
          Selected:
          <span className="font-semibold text-indigo-600">
            {" "}
            {selectedCategory}
          </span>
        </p>
      )}
    </section>
  );
}

export default CategoryCarousel;
