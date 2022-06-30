import React from 'react';

export const ModalRow = ({
	isGrey = false,
	txt = '',
	data = null,
	btn = null,
	animation = null,
}) => {
	const rowClass = isGrey
		? ' bg-theme text-yellow px-4 py-5 grid grid-cols-4 gap-4 px-4  sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6'
		: ' bg-white px-4 py-5 grid grid-cols-4 gap-4 px-4 border-b-4 border-gray_border  sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6';

	return (
		<div className={rowClass}>
			{txt && (
				<dt className="text-sm font-bold text-gray-500 col-span-4 sm:col-span-2">
					{txt}
				</dt>
			)}

			{data && (
				<dd className="mt-1 text-sm text-gray-900 col-span-2 sm:mt-0 sm:col-span-3">
					{data}
				</dd>
			)}
			{animation && (
				<dd className="mt-1 col-start-2 col-end-4 sm:col-start-3 sm:col-end-4 sm:mt-0  ">
					{animation}
				</dd>
			)}
			{btn && (
				<dd className="mt-1 text-sm  sm:mt-0 col-span-5 sm:col-span-6">
					{btn}
				</dd>
			)}
		</div>
	);
};
