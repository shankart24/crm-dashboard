import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function Followers() {
	return (
		<div className="p-2">
			<h4 className="text-sm font-medium text-gray-500 tracking-tight">Followers Stats</h4>
			<div className="shadow-lg border border-gray-100 rounded-md mt-6 bg-white">
				<div className="flex items-center justify-between py-2 px-2 border-b border-gray-300">
					<h2 className=" text-sm font-medium text-gray-700 px-2 py-3">Followers</h2>
					<select
						class="block w-32 text-xs text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none "
						name="animals"
					>
						<option value="August 2022">August 2022</option>
						<option value="September 2022">September 2022</option>
						<option value="October 2022">October 2022</option>
					</select>
				</div>

				<div className="p-1 h-72 text-xs">
					<ChartSection />
				</div>
			</div>
		</div>
	);
}

const ChartSection = () => {
	const data = [
		{
			name: "2015",
			retained: 5200,
			followers: 2400,
			amt: 2400,
		},
		{
			name: "2016",
			retained: 400,
			followers: 5400,
			amt: 2400,
		},
		{
			name: "2017",
			retained: 800,
			followers: 1398,
			amt: 2210,
		},
		{
			name: "2018",
			retained: 600,
			followers: 9800,
			amt: 2290,
		},
		{
			name: "2019",
			retained: 1780,
			followers: 3908,
			amt: 2000,
		},
		{
			name: "2020",
			retained: 1300,
			followers: 1398,
			amt: 2210,
		},
		{
			name: "2021",
			retained: 1900,
			followers: 9800,
			amt: 2290,
		},
		{
			name: "2022",
			retained: 780,
			followers: 3908,
			amt: 100,
		},
	];

	return (
		<ResponsiveContainer width="100%" height="100%">
			<BarChart
				data={data}
				margin={{
					top: 20,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				{/* <CartesianGrid strokeDasharray="3 3" /> */}
				<XAxis dataKey="name" />
				{/* <YAxis /> */}
				<Tooltip />
				<Legend />
				<Bar dataKey="followers" stackId="a" fill="#1A6BD9" />
				<Bar dataKey="retained" stackId="a" fill="#0144a0" />
			</BarChart>
		</ResponsiveContainer>
	);
};
