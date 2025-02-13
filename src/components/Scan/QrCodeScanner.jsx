import { Scanner } from '@yudiel/react-qr-scanner'
import { useState } from 'react'
import s from '../../components/Scan/qrCodeScanner.module.css'
import { SCAN_DATA } from '../../constans'

export const QrCodeScanner = () => {
	const [scanned, setScanned] = useState('')

	const scanHandler = result => {
		setScanned(result[0].rawValue)

		const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

		localStorage.setItem(
			SCAN_DATA,
			JSON.stringify([...prevData, result[0].rawValue])
		)
	}

	const settings = {
		audio: false,
		finder: false,
	}

	return (
		<div className={s.container}>
			<Scanner
				styles={{
					container: {
						width: 200,
					},
				}}
				components={settings}
				onScan={scanHandler}
			/>
			<p className={s.result}>{scanned}</p>
		</div>
	)
}
