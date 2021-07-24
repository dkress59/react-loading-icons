import React, { ReactElement, SVGProps } from 'react'

export default function Rings(
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
				height: props.height ?? 45,
				speed: undefined,
				stroke: undefined,
				strokeOpacity: undefined,
				strokeWidth: undefined,
				width: props.width ?? 45,
			}}
			viewBox="0 0 45 45"
		>
			<g
				fill="none"
				fillRule="evenodd"
				transform="translate(1 1)"
				{...{ stroke, strokeWidth, strokeOpacity }}
			>
				<circle cx={22} cy={22} r={6}>
					<animate
						attributeName="r"
						begin="1.5s"
						dur={`${3 / speed}s`}
						values="6;22"
						calcMode="linear"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="stroke-opacity"
						begin="1.5s"
						dur={`${3 / speed}s`}
						values="1;0"
						calcMode="linear"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="stroke-width"
						begin="1.5s"
						dur={`${3 / speed}s`}
						values="2;0"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</circle>
				<circle cx={22} cy={22} r={6}>
					<animate
						attributeName="r"
						begin="3s"
						dur={`${3 / speed}s`}
						values="6;22"
						calcMode="linear"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="stroke-opacity"
						begin="3s"
						dur={`${3 / speed}s`}
						values="1;0"
						calcMode="linear"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="stroke-width"
						begin="3s"
						dur={`${3 / speed}s`}
						values="2;0"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</circle>
				<circle cx={22} cy={22} r={8}>
					<animate
						attributeName="r"
						begin="0s"
						dur={`${1.5 / speed}s`}
						values="6;1;2;3;4;5;6"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</circle>
			</g>
		</svg>
	)
}
