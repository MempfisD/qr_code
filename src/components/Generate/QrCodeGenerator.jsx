import { useState } from 'react'
import s from '../../components/Generate/qrCodeGenerator.module.css'
import { QRCodeSVG } from 'qrcode.react'
import { GENERATE_DATA } from '../../constans'

export const QrCodeGenerator = () => {
	const [value, setValue] = useState('')
	const [result, setResult] = useState('')

	const onClickHandler = () => {
		const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

		localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]))

		setResult(value)
		setValue('')
	}

	const onChangeHandler = event => {
		setValue(event.target.value)
		setResult('')
	}
	return (
		<div className={s.container}>
			<input
				className={s.input}
				type='text'
				value={value}
				placeholder={'Введите'}
				onChange={onChangeHandler}
			/>
			<button
				className={s.button}
				type='button'
				onClick={onClickHandler}
			>
				Сгенерировать
			</button>
			{result !== '' && (
				<div className={s.qrWrapper}>
					<QRCodeSVG
						value={result}
						size={200}
					/>
				</div>
			)}
		</div>
	)
}
