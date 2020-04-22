import { LinePath } from '@vx/shape';

export default ({data, label, yText, yScale, xScale, x, y}) => {
    return (

        <g>
            <LinePath 
                data = {data}
                yScale = {yScale}
                xScale = {xScale}
                x={x}
                y={y}
                strokeDasharray = "4.4"
                strokeDashOpacity = "0.4"
                />
                <text fill="white" dy = "-0.35en" dx = "1en"  y={yText} fontSize = "12">
                    {label}
                </text>
        </g>

    );
}