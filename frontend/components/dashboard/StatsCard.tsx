type StatsCardProps = {
  title: string;
  value: string;
  subtitle?: string;
};

export default function StatsCard({ title, value, subtitle }: StatsCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <p className="text-gray-500">{title}</p>
      <p className="text-3xl font-bold mt-3">{value}</p>
      {subtitle && <p className="text-sm text-gray-400 mt-2">{subtitle}</p>}
    </div>
  );
}