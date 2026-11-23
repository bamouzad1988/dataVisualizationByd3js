
import * as d3 from "d3";

export const Bar = () => {
    const width = 640;
    const height = 400;
    const marginTop = 20;
    const marginRight = 20;
    const marginBottom = 20;
    const marginLeft = 20

    const data = [50, 10, 70, 100, 5, 6, 9, 9, 250]
    const extent = [Math.min(...data), Math.max(...data)]

    const x = d3.scaleLinear([0, data.length - 1], [marginLeft, width - marginRight]);
    const y = d3.scaleLinear(extent, [height - marginBottom, marginTop]);
    const line = d3.line((_, i) => x(i), y);

    return (
        <svg width={width} height={height}>
            <line x1={0} x2={0} y1={5} y2={400} stroke="black" strokeWidth={5} />
            <line x1={0} x2={640} y1={400} y2={400} stroke="black" strokeWidth={5} />

            <path fill="none" stroke="navy" strokeWidth="3" d={line(data) ?? undefined} />
            <g fill="white" stroke="black" strokeWidth="1.5">
                {data.map((d, i) => (<circle key={i} cx={x(i)} cy={y(d)} r="5" className="cursor-pointer" onClick={() => alert(d)} />))}
            </g>
        </svg>
    )
}
