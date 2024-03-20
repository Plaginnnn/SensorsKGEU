import React from 'react'
import BarChart from '../../charts/BarChart01'

function DashboardCard04() {
	const chartData = {
		labels: [
			'01-01-2021',
			'02-01-2021',
			'03-01-2021',
			'04-01-2021',
			'05-01-2021',
			'06-01-2021',
			'07-01-2021',
			'08-01-2021',
			'09-01-2021',
			'10-01-2021',
			'11-01-2021',
			'12-01-2021',
		],
		datasets: [
			// Light blue bars
			{
				label: 'Максимальная',
				data: [49, 26, 53, 48, 52, 48, 100, 120, 48, 100, 120, 48],
				backgroundColor: '#90CDF4', // Assuming you provide the color directly here
				hoverBackgroundColor: '#63B3ED', // Assuming you provide the color directly here
				barPercentage: 0.66,
				categoryPercentage: 0.66,
			},
			// Blue bars
			{
				label: 'Минималальная',
				data: [49, 26, 53, 48, 52, 48, 100, 120, 48, 100, 120, 48],
				backgroundColor: '#4F46E5', // Assuming you provide the color directly here
				hoverBackgroundColor: '#4338CA', // Assuming you provide the color directly here
				barPercentage: 0.66,
				categoryPercentage: 0.66,
			},
		],
	}

	return (
		<div className='flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700'>
			<header className='px-5 py-4 border-b border-slate-100 dark:border-slate-700'>
				<h2 className='font-semibold text-slate-800 dark:text-slate-100'>
					Значения
				</h2>
			</header>
			{/* Chart built with Chart.js 3 */}
			{/* Change the height attribute to adjust the chart height */}
			<BarChart data={chartData} width={595} height={248} />
		</div>
	)
}

export default DashboardCard04
