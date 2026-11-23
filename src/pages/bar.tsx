
import * as d3 from "d3";

export const Bar = () => {
    const width = 640;
    const height = 400;
    const marginTop = 20;
    const marginRight = 20;
    const marginBottom = 20;
    const marginLeft = 20

    const data = [1, 10, 20, 10, 5, 6, 9, 9]
    const extent = [Math.min(...data), Math.max(...data)]

    const x = d3.scaleLinear([0, data.length - 1], [marginLeft, width - marginRight]);
    const y = d3.scaleLinear(extent, [height - marginBottom, marginTop]);
    const line = d3.line((_, i) => x(i), y);

    return (
        <svg width={width} height={height}>
            <path fill="none" stroke="red" strokeWidth="3" d={line(data) ?? undefined} />
            <g fill="white" stroke="currentColor" strokeWidth="1.5">
                {data.map((d, i) => (<circle key={i} cx={x(i)} cy={y(d)} r="2.5" />))}
            </g>
        </svg>
    )
}
