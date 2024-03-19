// Импорт необходимых библиотек и стилей
import { useEffect, useRef, useState } from 'react'
import { useDataProvider } from './../../utils/DataProvider'
import styles from './LineGraph.module.css'

import {
	CategoryScale,
	Chart as ChartJS,
	Filler,
	Legend,
	LineElement,
	LinearScale,
	PointElement,
	Title,
	Tooltip,
} from 'chart.js'
import zoomPlugin from 'chartjs-plugin-zoom'
import { Line } from 'react-chartjs-2'

// Регистрация компонентов Chart.js и плагина зума
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
	zoomPlugin
)

const getAspectRatio = () => {
	// Adjust the width breakpoint as needed
	const breakpoint = 620
	const settings = {
		width: window.innerWidth < breakpoint ? 1 : 2,
		point: window.innerWidth < breakpoint ? 0 : 5,
		display: window.innerWidth < breakpoint ? false : true,
	}
	return settings
}

// Настройки графика
const options = {
	responsive: true,
	pointRadius: getAspectRatio().point,
	aspectRatio: getAspectRatio().width,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: false,
			text: 'Графики температуры, влажности и угла',
		},
		zoom: {
			pan: {
				enabled: true,
				speed: 0.01,
				threshold: 10,
			},
			zoom: {
				wheel: {
					enabled: true,
					speed: 0.1,
					threshold: 0.1,
				},
				pinch: {
					enabled: false, // Включение масштабирования жестом пальцев
				},
				drag: {
					enabled: false, // Включение перетаскивания на мобильных устройствах
				},
				limits: {
					y: { min: 0, max: 30 },
				},
			},
		},
	},
	animation: {
		duration: 0,
		enabled: false,
	},
	scales: {
		x: {
			title: {
				display: true,
				text: 'Серверное время',
			},
		},
		y: {
			title: {
				display: getAspectRatio().display,
				text: 'Значение',
				min: 0, // минимальное значение по оси Y
				max: 30, // максимальное значение по оси Y
			},
		},
	},
}

// Компонент LineGraph
export const LineGraph = () => {
	const { data, type } = useDataProvider()
	const [apiUrl, setApiUrl] = useState()

	useEffect(() => {
		console.log(type)
	}, [type])
	// URL для получения данных с сервера (в дальнейшем будем динамически менять используя option)

	// Состояния для хранения данных графика
	const [labels, setLabels] = useState([])
	const [temperData, setTemperData] = useState([])
	const [humData, setHumData] = useState([])
	const [angleData, setAngleData] = useState([])

	// Запрос данных с сервера при монтировании компонента
	useEffect(() => {
		fetch(
			`https://eggs.2d.su/view.php?egg_id=${data}&start_date=2023-12-21&start_time=13:44:00&end_date=2023-12-21&end_time=22:45:00`
		)
			.then(response => response.json())
			.then(data => {
				// Обновление состояний данными с сервера
				setLabels(data.map(item => item.server_time))
				setTemperData(data.map(item => Number(item.temp)))
				setHumData(data.map(item => Number(item.humidity)))
				setAngleData(data.map(item => Number(item.angle)))
			})
			.catch(error =>
				console.error('Ошибка при выполнении fetch запроса:', error)
			)
	}, [data])

	// Конфигурация данных для графика температуры
	const data1 = {
		labels,
		datasets: [
			{
				fill: true,
				label: 'Температура',
				data: temperData,
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.1)',
			},
		],
	}

	// Конфигурация данных для графика влажности
	const data2 = {
		labels,
		datasets: [
			{
				fill: true,
				label: 'Влажность',
				data: humData,
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.1)',
			},
		],
	}

	// Конфигурация данных для графика угла
	const data3 = {
		labels,
		datasets: [
			{
				fill: true,
				label: 'Угол',
				data: angleData,
				borderColor: 'rgb(75, 192, 192)',
				backgroundColor: 'rgba(75, 192, 192, 0.1)',
			},
		],
	}

	// Ссылка на элемент canvas для графика
	const canvasRef1 = useRef(null)
	const canvasRef2 = useRef(null)
	const canvasRef3 = useRef(null)

	let chartData
	if (type === 'temperature') {
		chartData = data1
	} else if (type === 'humidity') {
		chartData = data2
	} else if (type === 'angle') {
		chartData = data3
	} else {
		// Пустой график по умолчанию
		chartData = data1
	}
	// Рендеринг компонента

	return (
		<div className={`${styles.main} `}>
			<div>
				<Line options={options} data={chartData} />
			</div>
		</div>
	)
}

// Экспорт компонента
export default LineGraph
