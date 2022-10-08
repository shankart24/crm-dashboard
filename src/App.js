import "./App.css";
import Navbar from "./components/Navbar";
import Sales from "./components/Sales";
import bannerImage from "./assets/banner.JPG";
import Followers from "./components/Followers";

export default function App() {
	return (
		<div className=" h-screen ">
			<Navbar />
			<div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto py-4">
				<div className="col-span-3 md:col-span-2 bg-pink-300 h-80">
					<div className="w-full flex justify-between items-center mb-4">
						<div>
							<h4 className="text-sm font-medium text-gray-500 tracking-tight">Dashboard</h4>
							<h2 className="text-3xl mt-2 font-semibold text-gray-700 tracking-tight">Overview</h2>
						</div>
						<button className="p-3 w-32 text-sm font-medium text-gray-700 border border-gray-500 tracking-tight rounded-md">
							Check now
						</button>
					</div>
					<img src={bannerImage} className="" />
				</div>
				<div className="col-span-3 md:col-span-1 bg-yellow-200">
					<Sales />
				</div>

				<div className="col-span-3 sm:col-span-2 md:col-span-1 bg-green-200 h-80">3</div>
				<div className="col-span-3 sm:col-span-1 md:col-span-1 bg-red-200">
					<Followers />
				</div>
				<div className="col-span-3 md:col-span-1 bg-purple-200">5</div>
			</div>
		</div>
	);
}
