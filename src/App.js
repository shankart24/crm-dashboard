import "./App.css";
import Navbar from "./components/Navbar";
import Sales from "./components/Sales";
import Users from "./components/Users";
import Followers from "./components/Followers";
import bannerImage from "./assets/banner.JPG";
import Tasks from "./components/Tasks";

export default function App() {
	return (
		<div className=" h-auto overflow-x-hidden">
			<Navbar />
			<div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto py-4">
				<div className="px-2 xl:px-0 col-span-3 lg:col-span-2 bg-pink-300 h-auto">
					<div className="w-full flex justify-between items-center mb-4">
						<div>
							<h4 className="text-xs sm:text-sm font-medium text-gray-500 tracking-tight">Dashboard</h4>
							<h2 className="text-xl sm:text-3xl mt-2 font-semibold text-gray-700 tracking-tight">Overview</h2>
						</div>
						<button className="p-2 w-24 text-xs font-medium text-gray-700 border border-gray-500 tracking-tight rounded-md">
							Check now
						</button>
					</div>

					<div className="shadow-lg py-1 mx-auto bg-blue-200 h-auto sm:h-80 ">
						<div className="flex flex-col max-w-screen-lg h-full overflow-hidden bg-white border rounded shadow-sm sm:flex-row sm:mx-auto">
							<div className="relative lg:w-1/2">
								<img
									src="https://i.pinimg.com/originals/a5/da/be/a5dabea9202dcfef09cb11340fd86192.gif"
									alt=""
									className="object-cover w-full lg:absolute h-full"
								/>
								<svg
									className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
									viewBox="0 0 20 104"
									fill="currentColor"
								>
									<polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
								</svg>
							</div>
							<div className=" flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
								<h5 className="mb-3 text-2xl  font-bold tracking-tight  leading-12">Congratulations Jason!</h5>
								<p className="mb-5 text-gray-500 text-sm">
									You have completed your profile verification. It's very easy to convert your points to cash
									now.
								</p>
								<button className="p-2 w-24 text-xs font-medium  bg-primary-light text-white tracking-tight rounded-md">
									Redeem Cash
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-3 lg:col-span-1 bg-yellow-200">
					<Sales />
				</div>

				<div className="col-span-3 lg:col-span-1 bg-green-200 h-auto">
					<Tasks />
				</div>
				<div className="col-span-3  lg:col-span-1 bg-red-200">
					<Followers />
				</div>
				<div className="col-span-3 lg:col-span-1 bg-purple-200">
					<Users />
				</div>
			</div>
		</div>
	);
}
