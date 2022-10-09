import { Chart } from "react-google-charts";

export default function Sales() {
	return (
		<div className="p-2 ">
			<div className="flex justify-between items-center">
				<div className="flex items-center">
					<div className="text-xs font-medium text-gray-700">
						<span className="px-1.5 w-2 h-2 rounded-full bg-orange-500  text-orange-500 mr-2">.</span>Offline
					</div>
					<div className="text-xs ml-4 font-medium text-gray-700">
						<span className="px-1.5 w-2 h-2 rounded-full bg-primary-light  text-primary-light mr-2">.</span>Online
					</div>
				</div>

				<button className="p-2 w-24 text-xs font-medium text-gray-700 border border-gray-500 tracking-tight rounded-md">
					View Details
				</button>
			</div>
			<div className="shadow-lg border border-gray-100 rounded-md mt-6 bg-white">
				<h2 className="border-b border-gray-300 text-sm font-medium text-gray-700 px-2 py-4">Total Sales</h2>

				<ChartSection />
			</div>
		</div>
	);
}

const ChartSection = () => {
	const data = [
		["Year", "Sales", "Expenses"],
		["2019", 800, 500],
		["2020", 1170, 460],
		["2021", 660, 1440],
		["2022", 1030, 540],
	];

	const options = {
		colors: ["#1A6BD9", "#d10070"],
		title: "Comparision",
		curveType: "function",
		legend: { position: "bottom" },
	};
	return <Chart chartType="LineChart" width="100%" height="280px" data={data} options={options} />;
};
