import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function handleClick(scaleValue,careType) {
        alert(`Cette plante requiert ${scaleValue === 1 ?"peu" : scaleValue === 2 ?"modérement" :"beaucoup"} ${ careType==='light' ? "de lumière" :"d'arrosage"}`)

}
function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()} onClick={() => handleClick(scaleValue,careType)}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
