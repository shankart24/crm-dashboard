import { useState } from "react";
import { StackedChart } from "../Charts";
import { Select } from "../elements";

export default function Followers() {
	const [month, setMonth] = useState("aug");

	return (
		<div className="p-2">
			<h4 className="text-sm font-medium text-gray-500 tracking-tight">Followers Stats</h4>
			<div className="shadow-lg border border-gray-100 rounded-md mt-6 bg-white">
				<div className="flex items-center justify-between py-2 px-2 border-b border-gray-300">
					<h2 className=" text-sm font-medium text-gray-700 px-2 py-3">Followers</h2>
					<Select
						changeHandler={(e) => {
							setMonth(e.target.value);
						}}
						options={[
							{ name: "Aug 2022", value: "aug" },
							{ name: "Sep 2022", value: "sep" },
						]}
					/>
				</div>

				<div className="p-1 h-72 text-xs">
					<StackedChart data={data[month]} />
				</div>
			</div>
		</div>
	);
}

const data = {
	aug: [
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
	],
	sep: [
		{
			name: "2015",
			retained: 2200,
			followers: 3400,
			amt: 2400,
		},
		{
			name: "2016",
			retained: 400,
			followers: 2400,
			amt: 2400,
		},
		{
			name: "2017",
			retained: 900,
			followers: 4398,
			amt: 2210,
		},
		{
			name: "2018",
			retained: 300,
			followers: 6400,
			amt: 2290,
		},
		{
			name: "2019",
			retained: 1780,
			followers: 3308,
			amt: 2000,
		},
		{
			name: "2020",
			retained: 2300,
			followers: 4398,
			amt: 2210,
		},
		{
			name: "2021",
			retained: 1200,
			followers: 1800,
			amt: 2290,
		},
		{
			name: "2022",
			retained: 7180,
			followers: 4908,
			amt: 100,
		},
	],
};
