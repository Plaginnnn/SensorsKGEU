import React, { useEffect, useState } from 'react'
import RealtimeChart from '../../charts/RealtimeChart'
import { hexToRGB, tailwindConfig } from '../../utils/Utils'

function DashboardCard05() {
	const [data, setData] = useState([])
	const [labels, setLabels] = useState([])
	const maxDataPoints = 10 // Максимальное количество точек данных

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					'https://eggs.2d.su/egg_last_info.php?egg_id=000D6F0004CD6CE0'
				)
				const apiData = await response.json()

				// Обновляем данные
				setData(prevData => {
					const updatedData = [
						apiData.temp,
						...prevData.slice(0, maxDataPoints - 1),
					]
					return updatedData
				})

				// Обновляем метки
				setLabels(prevLabels => {
					const now = new Date()
					const randomTime = now.toLocaleTimeString('en-US', {
						hour12: true,
						hour: '2-digit',
						minute: '2-digit',
						second: '2-digit',
						fractionalSecondDigits: 3,
					})
					const updatedLabels = [
						randomTime,
						...prevLabels.slice(0, maxDataPoints - 1),
					]
					return updatedLabels
				})
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		const interval = setInterval(fetchData, 14000)
		return () => clearInterval(interval)
	}, [])

	const chartData = {
		labels,
		datasets: [
			{
				data,
				fill: true,
				backgroundColor: `rgba(${hexToRGB(
					tailwindConfig().theme.colors.blue[500]
				)}, 0.08)`,
				borderColor: tailwindConfig().theme.colors.indigo[500],
				borderWidth: 2,
				tension: 0,
				pointRadius: 0,
				pointHoverRadius: 3,
				pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
				pointHoverBackgroundColor: tailwindConfig().theme.colors.indigo[500],
				pointBorderWidth: 0,
				pointHoverBorderWidth: 0,
				clip: 20,
			},
		],
	}

	return (
		<div className='flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700'>
			<header className='px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center'>
				<h2 className='font-semibold text-slate-800 dark:text-slate-100'>
					График реального времени
				</h2>
			</header>
			<RealtimeChart data={chartData} width={595} height={248} />
		</div>
	)
}

export default DashboardCard05
