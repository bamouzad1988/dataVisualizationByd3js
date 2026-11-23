
export const SvgTest = () => {
    const width = 800;
    const height = 500;

    const data = [2, 50, 6, 33, 43, 3, 50]

    const diff = (width) / data.length //128

    const x = data.map((_, i) => (diff * (i)))
    const y = data.map((d,) => (height - d))

    let drawLine = `M${0} ${y[0]} L${x[1]} ${y[1]}`
    data.forEach((_, i) => {
        if (i > 0) {
            drawLine += `L${diff * (i + 1)} ${y[i + 1]}`
        }
    });

    console.log('drawLine==>', drawLine)
    return (
        <div>
            <p >
                svg test
            </p>
            <svg width="300" height="120" viewBox="0 0 300 120">
                <circle cx="40" cy="60" r="20" fill="tomato">
                    <animate
                        attributeName="cx"
                        from="40"
                        to="260"
                        dur="2s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="cy"
                        from="60"
                        to="120"
                        dur="2s"
                        repeatCount="indefinite"
                    />
                </circle>
            </svg>
            <svg width="300" height="120" viewBox="0 0 300 120">
                <a href="https://developer.mozilla.org/">
                    <rect x="20" y="30" width="260" height="60" fill="lightblue" rx="10" />
                    <text x="150" y="68" text-anchor="middle" font-size="20">
                        Visit MDN
                    </text>
                </a>
            </svg>
            <svg width="300" height="120" viewBox="0 0 300 120">
                <foreignObject x="20" y="20" width="260" height="80">
                    <div  >
                        This is HTML inside SVG.
                    </div>
                </foreignObject>
            </svg>
            <svg width="300" height="180" viewBox="0 0 300 180">
                <defs>
                    <clipPath id="circleClip">
                        <circle cx="75" cy="90" r="60" />
                    </clipPath>

                    <filter id="blur">
                        <feGaussianBlur stdDeviation="4" />
                    </filter>
                </defs>

                <rect
                    x="15"
                    y="30"
                    width="120"
                    height="120"
                    fill="royalblue"
                    clip-path="url(#circleClip)"
                />

                <rect
                    x="170"
                    y="30"
                    width="120"
                    height="120"
                    fill="royalblue"
                    filter="url(#blur)"
                />
            </svg>
            <svg width="300" height="180" viewBox="0 0 300 180">
                <defs>
                    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="deepskyblue" />
                        <stop offset="100%" stop-color="white" />
                    </linearGradient>

                    <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="4" fill="tomato" />
                    </pattern>
                </defs>

                <rect x="10" y="10" width="130" height="150" fill="url(#sky)" />
                <rect x="160" y="10" width="130" height="150" fill="url(#dots)" />
            </svg>
            <svg width="260" height="120" viewBox="0 0 260 120">
                <defs>
                    <symbol id="star" viewBox="0 0 24 24">
                        <path
                            d="M12 2 L15 9 L22 9 L16 14 L18 21 L12 17 L6 21 L8 14 L2 9 L9 9 Z"
                            fill="gold"
                        />
                    </symbol>
                </defs>

                <use href="#star" x="20" y="20" width="40" height="40" />
                <use href="#star" x="80" y="20" width="80" height="80" />
                <use href="#star" x="180" y="20" width="40" height="40" />
            </svg>
            <svg viewBox="-16 16 800 500" width={width} height={height} >
                <path fill="none" stroke="blue" strokeWidth={3} d={drawLine} />
                {/* {data.map((_, i) => i < data.length - 1 ? <line key={i} x1={x[i]} y1={y[i]} x2={x[i + 1]} y2={y[i + 1]} stroke="green" strokeWidth={5} /> : null)
                } */}

                <g fill="lightBlue" stroke="currentColor" strokeWidth="1.5" className="cursor-pointer">
                    {data.map((d, i) => (<circle key={i} cx={x[i]} cy={y[i]} r={5} onClick={() => alert(d)} />))}
                </g>

                <rect x={50} y={50} width={100} height={50} fill="tomato" strokeWidth={5} stroke="blue" strokeOpacity={"50%"} />
                <ellipse cx={500} cy={300} rx={30} ry={70} fill="brown" />
                <line x1={200} x2={150} y1={600} y2={250} stroke="green" strokeWidth={5} />
                <polyline
                    points="120,200 140,230 160,205 180,235 300,100"
                    fill="none"
                    stroke="purple"
                    stroke-width="4"
                />
                <polygon
                    points="430,90 470,90 450,130"
                    fill="seagreen"
                />
                <text x="400" y="40" font-size="24" fill="navy">
                    Hello SVG
                </text>
                <path fill="none" stroke="yellow" strokeWidth={3} d="M350 250 L320 280 L220 150 Z" />
                <path fill="none" stroke="orange" strokeWidth={3} d="M600 250 Q700 250 280 0" />

                <defs>
                    <circle id="dot" r="10" fill="black" />
                </defs>

                <use href="#dot" x="220" y="40" onClick={() => alert(1)} />
                <use href="#dot" x="250" y="70" />
                <use href="#dot" x="220" y="100" />
            </svg>
        </div>
    )
}
