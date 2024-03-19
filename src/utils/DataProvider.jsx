import { createContext, useContext, useState } from 'react'

const DataContext = createContext({
	data: '',
	setData: () => {},
	coordinates: [],
	setCoordinates: () => {},
	type: '',
	setType: () => {},
})

export default function DataProvider({ children }) {
	const [data, setData] = useState('')
	const [coordinates, setCoordinates] = useState([])
	const [type, setType] = useState('')

	const updateData = newData => {
		setData(newData)
	}
	const updateCoordinates = newData => {
		setCoordinates(newData)
	}
	const updateType = newData => {
		setType(newData)
	}

	return (
		<DataContext.Provider
			value={{
				data,
				updateData,
				coordinates,
				updateCoordinates,
				type,
				updateType,
			}}
		>
			{children}
		</DataContext.Provider>
	)
}

export const useDataProvider = () => useContext(DataContext)
