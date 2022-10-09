import { useState } from "react";
import { Select } from "../elements";

export default function Users() {
	const [month, setMonth] = useState("aug");

	return (
		<div className="p-2">
			<h4 className="text-sm font-medium text-gray-500 tracking-tight">User Visits</h4>
			<div className="shadow-lg border border-gray-50 rounded-md mt-6 bg-white">
				<div className="flex items-center justify-between py-2 px-2 border-b border-gray-300">
					<h2 className=" text-sm font-medium text-gray-700 px-2 py-3">View Goals</h2>
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
				<div>
					<div className="grid grid-cols-3 gap-4 py-4">
						<div className="flex justify-center items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-8 h-8 text-gray-500 cursor-pointer hover:text-primary-light hover:border-primary-light  border border-gray-200 rounded-full p-2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
								/>
							</svg>
						</div>
						<div class=" rounded-md flex flex-col justify-center items-center w-auto px-2  m-4 bg-white ">
							<p class="text-sm font-medium tracking-tight text-center">Total views</p>

							<div class="flex flex-col justify-start">
								<p class="text-primary-light text-4xl tracking-tight text-center  font-bold my-4">
									{data[month].totalViews}
								</p>
								<div class="relative w-28 h-2 bg-blue-200 rounded">
									<div class="absolute top-0 h-2  left-0 rounded bg-primary-light w-2/3"></div>
								</div>
								<p className="text-xs text-center text-primary-light mt-2 font-medium">
									{" "}
									{data[month].increase}% increase
								</p>
							</div>
						</div>
						<div className="flex justify-center items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-8 h-8 text-gray-500 hover:text-primary-light hover:border-primary-light cursor-pointer border border-gray-200 rounded-full p-2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
								/>
							</svg>
						</div>
					</div>

					<div className="grid grid-cols-3 mt-1">
						{data[month].subInfo?.map((item) => {
							return (
								<div
									key={item.name}
									className="px-2 py-6 tracking-tight text-center border rounded-b-md border-gray-100"
								>
									<p className="text-gray-700 font-medium mb-2 text-sm">{item.value}</p>
									<p className="text-gray-500 text-xs">{item.name}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

const data = {
	aug: {
		totalViews: 2400,
		increase: 5.5,
		subInfo: [
			{
				name: "Goal status",
				value: "4800 views",
			},
			{
				name: "Avg. visiting time",
				value: "2.5 sec",
			},
			{
				name: "Social Share",
				value: "3404",
			},
		],
	},
	sep: {
		totalViews: 5200,
		increase: 25.6,
		subInfo: [
			{
				name: "Goal status",
				value: "6400 views",
			},
			{
				name: "Avg. visiting time",
				value: "14.5 sec",
			},
			{
				name: "Social Share",
				value: "5900",
			},
		],
	},
};
