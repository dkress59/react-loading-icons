import React, { ReactElement, SVGProps } from 'react'

export default function Oval(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
): ReactElement {
	const speed = Number(String(props.speed ?? 1))
	const stroke = props.stroke ?? '#fff'
	const strokeWidth = props.strokeWidth ?? 2
	const strokeOpacity = props.strokeOpacity
	return (
		<svg
			{...{
				...props,
				className: props.className
					? `icon-loading ${props.className}`
					: 'icon-loading',
				fill: undefined,
				fillOpacity: undefined,
				height: props.height ?? 38,
				speed: undefined,
				stroke: undefined,
				strokeOpacity: undefined,
				strokeWidth: undefined,
				width: props.width ?? 38,
			}}
			viewBox="0 0 38 38"
			overflow="visible"
		>
			<g
				transform="translate(1 1)"
				fill="none"
				fillRule="evenodd"
				{...{ stroke, strokeWidth, strokeOpacity }}
			>
				<circle strokeOpacity={0.5} cx={18} cy={18} r={18} />
				<path d="M36 18c0-9.94-8.06-18-18-18">
					<animateTransform
						attributeName="transform"
						type="rotate"
						from="0 18 18"
						to="360 18 18"
						dur={`${1 / speed}s`}
						repeatCount="indefinite"
					/>
				</path>
			</g>
		</svg>
	)
}
