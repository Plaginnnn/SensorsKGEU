import React, { useState } from 'react'

import { useDataProvider } from '../utils/DataProvider.jsx'

import Datepicker from '../components/Datepicker'
import Header from '../partials/Header'
import Sidebar from '../partials/Sidebar'

import ButtonComponent from '../components/Buttons.jsx'
import DashboardInterval from '../components/LineGraph/index.jsx'
import MapComponent from '../components/OpenStreetMap/OpenStreetMap.jsx'
import DashboardCard04 from '../partials/dashboard/DashboardCard04'
import DashboardCard05 from '../partials/dashboard/DashboardCard05'
import DashboardCard07 from '../partials/dashboard/DashboardCard07'
function Dashboard() {
	const { coordinates, updatCoordinates } = useDataProvider()

	const [sidebarOpen, setSidebarOpen] = useState(false)
	const coordinatesTEST = [
		[55.7887, 49.1221], // Казань
		[55.7887, 49.1], // Казань
		[55.2, 49.1221], /// Казань
		// Добавьте здесь свои координаты
	]

	return (
		<div className='flex h-screen overflow-hidden'>
			{/* Sidebar */}
			<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

			{/* Content area */}
			<div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
				{/*  Site header */}
				<Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

				<main>
					<div className='px-4 sm:px-6 lg:px-8 py-0 w-full max-w-9xl mx-auto'>
						{/* Welcome banner */}

						{/* Dashboard actions */}
						<div className='sm:flex sm:justify-between sm:items-center mb-8'>
							{/* Left: Avatars */}

							{/* Right: Actions */}
							<div className='grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2'>
								{/* Filter button */}
							</div>
						</div>
						<DashboardCard07 />
						<MapComponent coordinates={coordinates} className='my-6' />
						<ButtonComponent />

						{/* Cards */}
						<div className='grid grid-cols-12 gap-6 mb-10'>
							{/* Table (Top Channels) */}

							{/* Line chart (Acme Plus) */}
							{/* <DashboardCard01 /> */}
							{/* Line chart (Acme Advanced) */}
							{/* <DashboardCard02 /> */}
							{/* Line chart (Acme Professional) */}
							{/* <DashboardCard03 /> */}
							{/* Line chart (Real Time Value) */}
							<DashboardCard05 />
							{/* Bar chart (Direct vs Indirect) */}
							<DashboardCard04 />

							{/* Doughnut chart (Top Countries) */}
							{/* <DashboardCard06 /> */}

							{/* Line chart (Sales Over Time) */}
							{/* <DashboardCard08 /> */}
							{/* Stacked bar chart (Sales VS Refunds) */}
							{/* <DashboardCard09 /> */}
							{/* Card (Customers) */}
							{/* <DashboardCard10 /> */}
							{/* Card (Reasons for Refunds) */}
							{/* <DashboardCard11 /> */}
							{/* Card (Recent Activity) */}
							{/* <DashboardCard12 /> */}
							{/* Card (Income/Expenses) */}
							{/* <DashboardCard13 /> */}
						</div>
						{/* <FilterButton /> */}
						{/* Datepicker built with flatpickr */}
						<Datepicker />
						{/* Add view button */}
						<DashboardInterval />
					</div>
				</main>
			</div>
		</div>
	)
}

export default Dashboard
