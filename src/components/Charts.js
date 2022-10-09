import { Chart } from "react-google-charts";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const LineChart = ({ data, options }) => {
	return <Chart chartType="LineChart" width="100%" height="280px" data={data} options={options} />;
};

const StackedChart = ({ data }) => {
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

export { LineChart, StackedChart };
