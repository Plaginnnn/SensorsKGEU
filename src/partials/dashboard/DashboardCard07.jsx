import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDataProvider } from '../../utils/DataProvider'
import { useThemeProvider } from '../../utils/ThemeContext'

const DashboardCard07 = () => {
	const [date, setDate] = useState([])
	const [selectedRow, setSelectedRow] = useState(null)

	const { updateData, data, coordinates, updateCoordinates } = useDataProvider()
	const { currentTheme } = useThemeProvider()
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('https://eggs.2d.su/eggs_list.php')
				setDate(response.data)
				updateCoordinates(
					response.data
						.filter(item => item.X_pos && item.Y_pos)
						.map(item => [parseFloat(item.X_pos), parseFloat(item.Y_pos)])
				)
			} catch (error) {
				console.error('Ошибка при загрузке данных:', error)
			}
		}

		fetchData()
	}, [])

	const handleClick = (eggId, index) => {
		setSelectedRow(index)
		updateData(eggId)
	}
	return (
		<div className='mb-10 col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700'>
			<header className='px-5 py-4 border-b border-slate-100 dark:border-slate-700'>
				<h2 className='font-semibold text-slate-800 dark:text-slate-100'>
					Список датчиков
				</h2>
			</header>
			<div className='p-3'>
				{/* Table */}
				<div className='overflow-x-auto '>
					<table className='table-auto w-full dark:text-slate-300'>
						{/* Table header */}
						<thead className='text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm'>
							<tr>
								<th className='p-2'>
									<div className='font-semibold text-left'>ID датчика</div>
								</th>
								<th className='p-2'>
									<div className='font-semibold text-center'>Имя датчика</div>
								</th>
								<th className='p-2'>
									<div className='font-semibold text-center'>Uptime</div>
								</th>
								<th className='p-2'>
									<div className='font-semibold text-center'>
										Последнего отклика с яйца
									</div>
								</th>
								<th className='p-2'>
									<div className='font-semibold text-center'>Статус</div>
								</th>
							</tr>
						</thead>
						{/* Table body */}
						<tbody className='text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700 cursor-pointer'>
							{date.map((item, index) => (
								<tr
									key={item.id}
									onClick={() => handleClick(item.eggId, index)}
									className={`${
										selectedRow === index
											? currentTheme == 'light'
												? ' bg-zinc-600 text-gray-50'
												: 'bg-zinc-950 text-gray-50'
											: ''
									}`}
								>
									<td className='p-2'>
										<div className='flex items-center  dark:text-slate-100'>
											{item.eggId}
										</div>
									</td>
									<td className='p-2'>
										<div className='text-center'>{item.eggName}</div>
									</td>
									<td className='p-2'>
										<div className='text-center'>{item.uptime}</div>
									</td>
									<td className='p-2'>
										<div className='text-center'>
											{item.last_query_egg_date} {item.last_query_egg_time}
										</div>
									</td>
									<td className='p-2'>
										<div className='text-center'>
											{item.sendCommand || 'Нет команды'}
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default DashboardCard07
