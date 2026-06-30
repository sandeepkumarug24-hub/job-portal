import JobCard from "./JobCard";
import Container from "../common/Container";

const jobs = [
  {
    id: 1,
    company: "Google",
    title: "Senior Backend Engineer",
    location: "Bengaluru",
    salary: 18,
    jobType: "Full Time",
  },
  {
    id: 2,
    company: "Microsoft",
    title: "React Developer",
    location: "Hyderabad",
    salary: 20,
    jobType: "Hybrid",
  },
  {
    id: 3,
    company: "Amazon",
    title: "Frontend Engineer",
    location: "Pune",
    salary: 16,
    jobType: "Remote",
  },
];

function LatestJobs() {
  return (
    <section className="py-20 bg-slate-50">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Latest Opportunities
          </h2>

          <p className="mt-3 text-slate-600">
            Discover opportunities from leading companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default LatestJobs;
