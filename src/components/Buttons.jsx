import React, { useState } from 'react'
import { useDataProvider } from '../utils/DataProvider'
const ButtonComponent = () => {
	const [activeButton, setActiveButton] = useState(null)
	const { updateType } = useDataProvider()
	const handleButtonClick = type => {
		updateType(type)

		setActiveButton(type === activeButton ? type : type)
	}

	return (
		<div
			className='flex justify-start my-8 flex-wrap
		gap-2'
		>
			<button
				className={`mx-2 py-2 px-4 rounded-lg focus:outline-none text-black ${
					activeButton === 'temperature'
						? 'bg-blue-500 text-white'
						: 'bg-gray-200'
				}`}
				onClick={() => handleButtonClick('temperature')}
			>
				Температура
			</button>
			<button
				className={`mx-2 py-2 px-4 rounded-lg focus:outline-none text-black ${
					activeButton === 'humidity' ? 'bg-blue-500 text-white' : 'bg-gray-200'
				}`}
				onClick={() => handleButtonClick('humidity')}
			>
				Влажность
			</button>
			<button
				className={`mx-2 py-2 px-4 rounded-lg focus:outline-none text-black ${
					activeButton === 'angle' ? 'bg-blue-500 text-white' : 'bg-gray-200'
				}`}
				onClick={() => handleButtonClick('angle')}
			>
				Угол
			</button>
		</div>
	)
}

export default ButtonComponent
