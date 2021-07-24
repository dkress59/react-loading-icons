import React, { ReactElement, SVGProps } from 'react'

export default function TailSpin(
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
		>
			<defs>
				<linearGradient
					x1="8.042%"
					y1="0%"
					x2="65.682%"
					y2="23.865%"
					id="prefix__a"
				>
					<stop stopOpacity={0} offset="0%" />
					<stop stopOpacity={0.631} offset="63.146%" />
					<stop offset="100%" />
				</linearGradient>
			</defs>
			<g transform="translate(1 1)" fill="none" fillRule="evenodd">
				<path
					d="M36 18c0-9.94-8.06-18-18-18"
					{...{ stroke, strokeWidth, strokeOpacity }}
				>
					<animateTransform
						attributeName="transform"
						type="rotate"
						from="0 18 18"
						to="360 18 18"
						dur={`${0.9 / speed}s`}
						repeatCount="indefinite"
					/>
				</path>
				<circle cx={36} cy={18} r={1}>
					<animateTransform
						attributeName="transform"
						type="rotate"
						from="0 18 18"
						to="360 18 18"
						dur={`${0.9 / speed}s`}
						repeatCount="indefinite"
					/>
				</circle>
			</g>
		</svg>
	)
}
