interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: "blue" | "red" | "yellow" | "green";
}

const colorMap = {
  blue: "bg-blue-50 text-blue-600 border-blue-100",
  red: "bg-red-50 text-red-600 border-red-100",
  yellow: "bg-amber-50 text-amber-600 border-amber-100",
  green: "bg-emerald-50 text-emerald-600 border-emerald-100",
};

const iconColorMap = {
  blue: "bg-blue-100 text-blue-600",
  red: "bg-red-100 text-red-600",
  yellow: "bg-amber-100 text-amber-600",
  green: "bg-emerald-100 text-emerald-600",
};

export default function StatCard({ icon, value, label, color }: StatCardProps) {
  return (
    <div className={`rounded-2xl border p-5 ${colorMap[color]} transition-all hover:shadow-md`}>
      <div className={`w-10 h-10 rounded-xl ${iconColorMap[color]} flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-sm opacity-80">{label}</div>
    </div>
  );
}
