import React from 'react'

const SpinnerComponent = () => {
	return (
		<div className="w-full h-full bg-black bg-opacity-50 absolute top-0 left-0 flex justify-center items-center">
			<div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-custom-green" />
		</div>
	)
}

export default SpinnerComponent
