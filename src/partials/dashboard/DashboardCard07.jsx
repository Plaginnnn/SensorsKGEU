import React from 'react'

function DashboardCard07() {
	return (
		<div className='col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700'>
			<header className='px-5 py-4 border-b border-slate-100 dark:border-slate-700'>
				<h2 className='font-semibold text-slate-800 dark:text-slate-100'>
					Список датчиков
				</h2>
			</header>
			<div className='p-3'>
				{/* Table */}
				<div className='overflow-x-auto'>
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
						<tbody className='text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700'>
							<tr>
								<td className='p-2'>
									<div className='flex items-center'>
										<svg
											className='shrink-0 mr-2 sm:mr-3'
											width='36'
											height='36'
											viewBox='0 0 36 36'
										>
											<circle fill='#0E2439' cx='18' cy='18' r='18' />
											<path
												d='M14.232 12.818V23H11.77V12.818h2.46zM15.772 23V12.818h2.462v4.087h4.012v-4.087h2.456V23h-2.456v-4.092h-4.012V23h-2.461z'
												fill='#E6ECF4'
											/>
										</svg>
										<div className='text-slate-800 dark:text-slate-100'>
											Indiehackers.com
										</div>
									</div>
								</td>
								<td className='p-2'>
									<div className='text-center'>1.7K</div>
								</td>
								<td className='p-2'>
									<div className='text-center text-emerald-500'>$2,034</div>
								</td>
								<td className='p-2'>
									<div className='text-center'>204</div>
								</td>
								<td className='p-2'>
									<div className='text-center text-sky-500'>3.9%</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default DashboardCard07
