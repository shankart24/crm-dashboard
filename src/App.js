import "./App.css";
import Navbar from "./components/sections/Navbar";
import Sales from "./components/sections/Sales";
import Users from "./components/sections/Users";
import Followers from "./components/sections/Followers";
import Tasks from "./components/sections/Tasks";
import { useEffect, useState } from "react";

export default function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(!isLoading);
		}, 1500);
	}, []);

	return (
		<div className=" h-auto overflow-x-hidden">
			<Navbar />
			{isLoading && (
				<div className="flex  justify-center items-center h-72">
					<svg
						aria-hidden="true"
						className="mr-2 w-6 h-6 text-primary-dark animate-spin  fill-gray-50"
						viewBox="0 0 100 101"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
							fill="currentColor"
						/>
						<path
							d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
							fill="currentFill"
						/>
					</svg>
					<p className="text-primary-dark text-sm font-medium">Loading</p>
				</div>
			)}

			<div className={`${isLoading ? "invisible" : "visible"} grid grid-cols-3 gap-6 max-w-7xl mx-auto py-4`}>
				<div className="px-2 xl:px-0 col-span-3 lg:col-span-2 h-auto">
					<div className="w-full flex justify-between items-center mb-4">
						<div>
							<h4 className="text-xs sm:text-sm font-medium text-gray-500 tracking-tight">Dashboard</h4>
							<h2 className="text-xl sm:text-3xl mt-2 font-semibold text-gray-700 tracking-tight">Overview</h2>
						</div>
						<button className="p-2 w-24 text-xs font-medium text-gray-700 border border-gray-500 tracking-tight rounded-md">
							Check now
						</button>
					</div>

					<div className="shadow-lg border border-gray-100 bg-white rounded-md py-1 mx-auto  h-auto sm:h-80 ">
						<div className="flex flex-col max-w-screen-lg h-full overflow-hidden bg-white sm:flex-row sm:mx-auto">
							<div className="relative lg:w-1/2">
								<img
									src="https://i.pinimg.com/originals/a5/da/be/a5dabea9202dcfef09cb11340fd86192.gif"
									alt=""
									className="object-cover w-full lg:absolute h-full px-1 rounded-xl"
								/>
							</div>
							<div className=" flex flex-col justify-center p-8 bg-primary-light rounded-md lg:p-16 lg:pl-10 lg:w-1/2">
								<h5 className="mb-3 text-2xl  font-bold tracking-tight text-white leading-12">
									Congratulations Jason!
								</h5>
								<p className="mb-5 text-gray-200 text-sm">
									You have completed your profile verification. It's very easy to convert your points to cash
									now.
								</p>
								<button className="p-2 w-24 text-xs font-medium  bg-primary-dark text-white tracking-tight rounded-md">
									Redeem Cash
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-3 lg:col-span-1 ">
					<Sales />
				</div>
				<div className="col-span-3 lg:col-span-1  h-auto">
					<Tasks />
				</div>
				<div className="col-span-3  lg:col-span-1 ">
					<Followers />
				</div>
				<div className="col-span-3 lg:col-span-1 ">
					<Users />
				</div>
			</div>
		</div>
	);
}
