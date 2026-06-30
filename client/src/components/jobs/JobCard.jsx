import Button from "../ui/Button";
import { MapPin, BriefcaseBusiness, IndianRupee, Clock3 } from "lucide-react";

function JobCard() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Company */}
      <h3 className="text-lg font-semibold text-slate-800">Google</h3>

      {/* Job Title */}
      <h2 className="mt-2 text-2xl font-bold">Senior Backend Engineer</h2>

      {/* Details */}
      <div className="mt-5 flex flex-wrap gap-4 text-slate-600">
        <div className="flex items-center gap-2">
          <MapPin size={18} />
          <span>Bengaluru</span>
        </div>

        <div className="flex items-center gap-2">
          <BriefcaseBusiness size={18} />
          <span>Full Time</span>
        </div>

        <div className="flex items-center gap-2">
          <IndianRupee size={18} />
          <span>18 LPA</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Clock3 size={16} />
          <span>Posted 2 days ago</span>
        </div>

        <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
          View Details
        </Button>
      </div>
    </div>
  );
}

export default JobCard;
