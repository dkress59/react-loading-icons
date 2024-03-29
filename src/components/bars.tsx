import React, { ReactElement, SVGProps } from 'react'

export default function Bars(
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
				height: props.height ?? 140,
				speed: undefined,
				stroke: undefined,
				strokeOpacity: undefined,
				strokeWidth: undefined,
				width: props.width ?? 135,
			}}
			viewBox="0 0 135 140"
		>
			<rect
				y={10}
				width={15}
				height={120}
				rx={6}
				{...{ fill, stroke, fillOpacity, strokeOpacity }}
			>
				<animate
					attributeName="height"
					begin="0.5s"
					dur={`${1 / speed}s`}
					values="120;110;100;90;80;70;60;50;40;140;120"
					calcMode="linear"
					repeatCount="indefinite"
				/>
				<animate
					attributeName="y"
					begin="0.5s"
					dur={`${1 / speed}s`}
					values="10;15;20;25;30;35;40;45;50;0;10"
					calcMode="linear"
					repeatCount="indefinite"
				/>
			</rect>
			<rect
				x={30}
				y={10}
				width={15}
				height={120}
				rx={6}
				{...{ fill, stroke, fillOpacity, strokeOpacity }}
			>
				<animate
					attributeName="height"
					begin="0.25s"
					dur={`${1 / speed}s`}
					values="120;110;100;90;80;70;60;50;40;140;120"
					calcMode="linear"
					repeatCount="indefinite"
				/>
				<animate
					attributeName="y"
					begin="0.25s"
					dur={`${1 / speed}s`}
					values="10;15;20;25;30;35;40;45;50;0;10"
					calcMode="linear"
					repeatCount="indefinite"
				/>
			</rect>
			<rect
				x={60}
				width={15}
				height={140}
				rx={6}
				{...{ fill, stroke, fillOpacity, strokeOpacity }}
			>
				<animate
					attributeName="height"
					begin="0s"
					dur={`${1 / speed}s`}
					values="120;110;100;90;80;70;60;50;40;140;120"
					calcMode="linear"
					repeatCount="indefinite"
				/>
				<animate
					attributeName="y"
					begin="0s"
					dur={`${1 / speed}s`}
					values="10;15;20;25;30;35;40;45;50;0;10"
					calcMode="linear"
					repeatCount="indefinite"
				/>
			</rect>
			<rect
				x={90}
				y={10}
				width={15}
				height={120}
				rx={6}
				{...{ fill, stroke, fillOpacity, strokeOpacity }}
			>
				<animate
					attributeName="height"
					begin="0.25s"
					dur={`${1 / speed}s`}
					values="120;110;100;90;80;70;60;50;40;140;120"
					calcMode="linear"
					repeatCount="indefinite"
				/>
				<animate
					attributeName="y"
					begin="0.25s"
					dur={`${1 / speed}s`}
					values="10;15;20;25;30;35;40;45;50;0;10"
					calcMode="linear"
					repeatCount="indefinite"
				/>
			</rect>
			<rect
				x={120}
				y={10}
				width={15}
				height={120}
				rx={6}
				{...{ fill, stroke, fillOpacity, strokeOpacity }}
			>
				<animate
					attributeName="height"
					begin="0.5s"
					dur={`${1 / speed}s`}
					values="120;110;100;90;80;70;60;50;40;140;120"
					calcMode="linear"
					repeatCount="indefinite"
				/>
				<animate
					attributeName="y"
					begin="0.5s"
					dur={`${1 / speed}s`}
					values="10;15;20;25;30;35;40;45;50;0;10"
					calcMode="linear"
					repeatCount="indefinite"
				/>
			</rect>
		</svg>
	)
}
