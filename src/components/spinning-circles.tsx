import React, { ReactElement, SVGProps } from 'react'

export default function SpinningCircles(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
): ReactElement {
	const speed = Number(String(props.speed ?? 1))
	const fill = props.fill ?? '#fff'
	const stroke = props.stroke
	const fillOpacity = props.fillOpacity
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
				height: props.height ?? 58,
				speed: undefined,
				stroke: undefined,
				strokeOpacity: undefined,
				strokeWidth: undefined,
				width: props.width ?? 58,
			}}
			viewBox="0 0 58 58"
		>
			<g
				transform="translate(2 1)"
				fillRule="evenodd"
				{...{ fill, stroke, fillOpacity, strokeOpacity }}
			>
				<circle cx={42.601} cy={11.462} r={5}>
					<animate
						attributeName="fill-opacity"
						begin="0s"
						dur={`${1.3 / speed}s`}
						values="1;0;0;0;0;0;0;0"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</circle>
				<circle cx={49.063} cy={27.063} r={5} fillOpacity={0}>
					<animate
						attributeName="fill-opacity"
						begin="0s"
						dur={`${1.3 / speed}s`}
						values="0;1;0;0;0;0;0;0"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</circle>
				<circle cx={42.601} cy={42.663} r={5} fillOpacity={0}>
					<animate
						attributeName="fill-opacity"
						begin="0s"
						dur={`${1.3 / speed}s`}
						values="0;0;1;0;0;0;0;0"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</circle>
				<circle cx={27} cy={49.125} r={5} fillOpacity={0}>
					<animate
						attributeName="fill-opacity"
						begin="0s"
						dur={`${1.3 / speed}s`}
						values="0;0;0;1;0;0;0;0"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</circle>
				<circle cx={11.399} cy={42.663} r={5} fillOpacity={0}>
					<animate
						attributeName="fill-opacity"
						begin="0s"
						dur={`${1.3 / speed}s`}
						values="0;0;0;0;1;0;0;0"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</circle>
				<circle cx={4.938} cy={27.063} r={5} fillOpacity={0}>
					<animate
						attributeName="fill-opacity"
						begin="0s"
						dur={`${1.3 / speed}s`}
						values="0;0;0;0;0;1;0;0"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</circle>
				<circle cx={11.399} cy={11.462} r={5} fillOpacity={0}>
					<animate
						attributeName="fill-opacity"
						begin="0s"
						dur={`${1.3 / speed}s`}
						values="0;0;0;0;0;0;1;0"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</circle>
				<circle cx={27} cy={5} r={5} fillOpacity={0}>
					<animate
						attributeName="fill-opacity"
						begin="0s"
						dur={`${1.3 / speed}s`}
						values="0;0;0;0;0;0;0;1"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</circle>
			</g>
		</svg>
	)
}
