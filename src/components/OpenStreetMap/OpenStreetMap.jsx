import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import React, { useEffect, useRef } from 'react'

const MapComponent = ({ coordinates }) => {
	const mapRef = useRef(null)

	useEffect(() => {
		const map = L.map(mapRef.current).setView([55.7887, 49.1221], 6)

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '',
			maxZoom: 18,
		}).addTo(map)

		coordinates.forEach(([lat, lng]) => {
			const circle = L.circle([lat, lng], {
				color: 'blue',
				fillColor: '#3388ff',
				fillOpacity: 1,
				radius: 10, // Радиус точки
			}).addTo(map)

			circle.on('click', e => {
				// Изменяем цвет точки при клике
				circle.setStyle({
					fillColor: 'red ',
					color: 'red',
				})
				console.log(`Clicked circle at: ${lat}, ${lng}`)
			})
		})

		return () => {
			map.remove()
		}
	}, [coordinates])

	return <div ref={mapRef} style={{ height: ' 500px', zIndex: 0 }} />
}

export default MapComponent
