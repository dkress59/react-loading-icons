import React, { ReactElement, SVGProps } from 'react'

export default function Puff(
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
				height: props.height ?? 44,
				speed: undefined,
				stroke: undefined,
				strokeOpacity: undefined,
				strokeWidth: undefined,
				width: props.width ?? 44,
			}}
			viewBox="0 0 44 44"
		>
			<g
				fill="none"
				fillRule="evenodd"
				{...{ stroke, strokeWidth, strokeOpacity }}
			>
				<circle cx={22} cy={22} r={1}>
					<animate
						attributeName="r"
						begin="0s"
						dur={`${1.8 / speed}s`}
						values="1; 20"
						calcMode="spline"
						keyTimes="0; 1"
						keySplines="0.165, 0.84, 0.44, 1"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="stroke-opacity"
						begin="0s"
						dur={`${1.8 / speed}s`}
						values="1; 0"
						calcMode="spline"
						keyTimes="0; 1"
						keySplines="0.3, 0.61, 0.355, 1"
						repeatCount="indefinite"
					/>
				</circle>
				<circle cx={22} cy={22} r={1}>
					<animate
						attributeName="r"
						begin="-0.9s"
						dur={`${1.8 / speed}s`}
						values="1; 20"
						calcMode="spline"
						keyTimes="0; 1"
						keySplines="0.165, 0.84, 0.44, 1"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="stroke-opacity"
						begin="-0.9s"
						dur={`${1.8 / speed}s`}
						values="1; 0"
						calcMode="spline"
						keyTimes="0; 1"
						keySplines="0.3, 0.61, 0.355, 1"
						repeatCount="indefinite"
					/>
				</circle>
			</g>
		</svg>
	)
}
