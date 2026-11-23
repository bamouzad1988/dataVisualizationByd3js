
import { scaleLinear, line } from "d3";

export const Line = () => {
    const width = 640;
    const height = 400;
    const marginTop = 20;
    const marginRight = 20;
    const marginBottom = 20;
    const marginLeft = 20

    const data = [1, 10, 20, 10, 5, 6, 9, 9]
    const extent = [Math.min(...data), Math.max(...data)]

    const x = scaleLinear([0, data.length - 1], [marginLeft, width - marginRight]);
    const y = scaleLinear(extent, [height - marginBottom, marginTop]);

    const lineDraw = line((_, i) => x(i), y);

    console.log('line==>', lineDraw(data))
    console.log('x==>', x)
    console.log('y==>', y)

    return (

        <svg width={width} height={height}>
            <path fill="none" stroke="blue" strokeWidth="3" d={lineDraw(data) ?? undefined} />
            <g className="cursor-pointer" fill="white" stroke="currentColor" strokeWidth="1.5" onClick={() => alert("22")}>
                {data.map((d, i) => (<circle key={i} cx={x(i)} cy={y(d)} r="5" />))}
            </g>
        </svg>
    )
}
