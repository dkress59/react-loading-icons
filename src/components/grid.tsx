import React, { ReactElement, SVGProps } from 'react'

export default function Grid(
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
				height: props.height ?? 105,
				speed: undefined,
				stroke: undefined,
				strokeOpacity: undefined,
				strokeWidth: undefined,
				width: props.width ?? 105,
			}}
			viewBox="0 0 105 105"
		>
			<circle
				cx={12.5}
				cy={12.5}
				r={12.5}
				{...{ fill, stroke, fillOpacity, strokeOpacity }}
			>
				<animate
					attributeName="fill-opacity"
					begin="0s"
					dur={`${1 / speed}s`}
					values="1;.2;1"
					calcMode="linear"
					repeatCount="indefinite"
				/>
			</circle>
			<circle
				cx={12.5}
				cy={52.5}
				r={12.5}
				fillOpacity={0.5}
				{...{ fill, stroke, fillOpacity, strokeOpacity }}
			>
				<animate
					attributeName="fill-opacity"
					begin="100ms"
					dur={`${1 / speed}s`}
					values="1;.2;1"
					calcMode="linear"
					repeatCount="indefinite"
				/>
			</circle>
			<circle
				cx={52.5}
				cy={12.5}
				r={12.5}
				{...{ fill, stroke, fillOpacity, strokeOpacity }}
			>
				<animate
					attributeName="fill-opacity"
					begin="300ms"
					dur={`${1 / speed}s`}
					values="1;.2;1"
					calcMode="linear"
					repeatCount="indefinite"
				/>
			</circle>
			<circle
				cx={52.5}
				cy={52.5}
				r={12.5}
				{...{ fill, stroke, fillOpacity, strokeOpacity }}
			>
				<animate
					attributeName="fill-opacity"
					begin="600ms"
					dur={`${1 / speed}s`}
					values="1;.2;1"
					calcMode="linear"
					repeatCount="indefinite"
				/>
			</circle>
			<circle
				cx={92.5}
				cy={12.5}
				r={12.5}
				{...{ fill, stroke, fillOpacity, strokeOpacity }}
			>
				<animate
					attributeName="fill-opacity"
					begin="800ms"
					dur={`${1 / speed}s`}
					values="1;.2;1"
					calcMode="linear"
					repeatCount="indefinite"
				/>
			</circle>
			<circle
				cx={92.5}
				cy={52.5}
				r={12.5}
				{...{ fill, stroke, fillOpacity, strokeOpacity }}
			>
				<animate
					attributeName="fill-opacity"
					begin="400ms"
					dur={`${1 / speed}s`}
					values="1;.2;1"
					calcMode="linear"
					repeatCount="indefinite"
				/>
			</circle>
			<circle
				cx={12.5}
				cy={92.5}
				r={12.5}
				{...{ fill, stroke, fillOpacity, strokeOpacity }}
			>
				<animate
					attributeName="fill-opacity"
					begin="700ms"
					dur={`${1 / speed}s`}
					values="1;.2;1"
					calcMode="linear"
					repeatCount="indefinite"
				/>
			</circle>
			<circle
				cx={52.5}
				cy={92.5}
				r={12.5}
				{...{ fill, stroke, fillOpacity, strokeOpacity }}
			>
				<animate
					attributeName="fill-opacity"
					begin="500ms"
					dur={`${1 / speed}s`}
					values="1;.2;1"
					calcMode="linear"
					repeatCount="indefinite"
				/>
			</circle>
			<circle
				cx={92.5}
				cy={92.5}
				r={12.5}
				{...{ fill, stroke, fillOpacity, strokeOpacity }}
			>
				<animate
					attributeName="fill-opacity"
					begin="200ms"
					dur={`${1 / speed}s`}
					values="1;.2;1"
					calcMode="linear"
					repeatCount="indefinite"
				/>
			</circle>
		</svg>
	)
}
