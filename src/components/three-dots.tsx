import React, { ReactElement, SVGProps } from 'react'

export default function ThreeDots(
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
				height: props.height ?? 30,
				speed: undefined,
				stroke: undefined,
				strokeOpacity: undefined,
				strokeWidth: undefined,
				width: props.width ?? 120,
			}}
			viewBox="0 0 120 30"
		>
			<circle
				cx={15}
				cy={15}
				r={15}
				{...{ fill, stroke, fillOpacity, strokeOpacity }}
			>
				<animate
					attributeName="r"
					from={15}
					to={15}
					begin="0s"
					dur={`${0.8 / speed}s`}
					values="15;9;15"
					calcMode="linear"
					repeatCount="indefinite"
				/>
				<animate
					attributeName="fill-opacity"
					from={1}
					to={1}
					begin="0s"
					dur={`${0.8 / speed}s`}
					values="1;.5;1"
					calcMode="linear"
					repeatCount="indefinite"
				/>
			</circle>
			<circle
				cx={60}
				cy={15}
				r={9}
				fillOpacity={0.3}
				{...{ fill, stroke, fillOpacity, strokeOpacity }}
			>
				<animate
					attributeName="r"
					from={9}
					to={9}
					begin="0s"
					dur={`${0.8 / speed}s`}
					values="9;15;9"
					calcMode="linear"
					repeatCount="indefinite"
				/>
				<animate
					attributeName="fill-opacity"
					from={0.5}
					to={0.5}
					begin="0s"
					dur={`${0.8 / speed}s`}
					values=".5;1;.5"
					calcMode="linear"
					repeatCount="indefinite"
				/>
			</circle>
			<circle
				cx={105}
				cy={15}
				r={15}
				{...{ fill, stroke, fillOpacity, strokeOpacity }}
			>
				<animate
					attributeName="r"
					from={15}
					to={15}
					begin="0s"
					dur={`${0.8 / speed}s`}
					values="15;9;15"
					calcMode="linear"
					repeatCount="indefinite"
				/>
				<animate
					attributeName="fill-opacity"
					from={1}
					to={1}
					begin="0s"
					dur={`${0.8 / speed}s`}
					values="1;.5;1"
					calcMode="linear"
					repeatCount="indefinite"
				/>
			</circle>
		</svg>
	)
}
