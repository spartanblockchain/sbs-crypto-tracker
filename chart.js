import { withParentSize } from '../bitcoindata/node_modules/@vx/responsive';
import { scaleTime, scaleLinear } from '@vx/scale';
import { LinePath, AreaClosed } from '@vx/shape';
import {LinearGradient } from '../bitcoindata/node_modules/@vx/gradient';
import { AxisBottom } from '@vx/axis';

import MaxPrice from './maxprice';
import formatPrice from '../utils/formatPrice';
import MinPrice from './minprice';

function Chart({data, parentWidth, parentHeight}){
    const margin = {
        top: 15,
        bottom: 40, 
        left: 0, 
        right: 0,
    };
    const width = parentWidth - margin.left - margin.right;
    const height = parentHeight - margin.top - margin.bottom;

    const x = d => new Date(d.time);
    const y = d => d.price;

    const firstPoint = data[0];
    const currentPoint = data[data.length - 1];
    const minPrice = Math.min(...data.map(y));
    const maxPrice = Math.max(...data.map(y));
    const MaxPriceData = [
        {time: x(firstPoint),price: MaxPrice},
        {time: x(currentPoint), price: MaxPrice}
   ];
   const minPriceData = [
    {time: x(firstPoint),price: minPrice},
    {time: x(currentPoint),price: minPrice}
];
    const xScale = scaleTime({
        range: [0, width],
        domain: [x(firstPoint, x(currentPoint))]
    });

    const yScale = scaleLinear({
        range: [height, 0],
        domain: [minPrice, maxPrice + 100]
      });
  
    return(
        <div>
            <svg width ={width} height = {parentHeight}>
                <AxisBottom 
                    top = {yScale(minPrice)}
                    data ={data}
                    scale = {xScale}
                    x={x}
                    numTicks = {4}
                    hideAxisLine
                    hideTicks
                    tickLabelComponent = {<text fill = "white" fontSize={11}> </text>}
                />
                <LinearGradient 
                id = 'area-fill' 
                from ="#4682b4" 
                to = "#4682b4" 
                fromOpacity={0.3} 
                toOpacity={0} 
                />
                <MaxPrice 
                 data ={MaxPriceData}
                 yScale = {yScale}
                 xScale = {xScale}
                 x={x}
                 y={y}
                 yText = {yScale(MaxPrice)}
                 label = {formatPrice(MaxPrice)}
                />
                <MinPrice 
                 data ={minPriceData}
                 yScale = {yScale}
                 xScale = {xScale}
                 x={x}
                 y={y}
                 yText = {yScale(minPrice)}
                 label = {formatPrice(minPrice)}
                />
                <AreaClosed
                 data = {data} 
                 yScale = {yScale} 
                 xScale = {xScale} 
                 x = {x} 
                 y = {y} 
                 fill = "url(#area-fill)"
                 />
                <LinePath data = {data} yScale = {yScale} xScale = {xScale} x = {x} y = {y}/>
            </svg>
        </div>
    );
}


export default withParentSize(Chart);
