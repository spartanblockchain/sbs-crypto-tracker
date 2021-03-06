import { withScreenSize } from '@vx/responsive';
import { LinearGradient } from '@vx/gradient';
import Chart from '../components/chart';
import formatPrice from '../utils/formatPrice';
import { format } from 'd3-format';
function Background({width, height}){
    return (
        <svg width={width} height={height}>
            <LinearGradient id="fill" vertical = {false}>
                <stop stopColor = "#a943e4" offset = "0%"/>
                <stop stopColor = "#f55989" offset = "50%"/>
                <stop stopColor = "#ffaf84" offset = "100%"/>
            </LinearGradient>
            <rect width = {width} height = {height} fill = "url(#fill)"/>
        </svg>
    )
}



class App extends React.Compenent {
    constructor(props){
        super(props);
        this.state = {
            data: {}
        };
    }
    CompenentDidMount(){
        fetch("https://api.coindesk.com") // Loaded from API 
            .then(res => res.json())
            .then(json => {
                this.setState({
                    data: json
                });
            });
    }
    render(){
        
        const {screenWidth, screenHeight} = this.props;
        const {data} = this.state;
        if(!data.bpi)return <div>loading...</div>;
        const prices = Object.keys(data.bpi).map (k => {
            return{
            time: k,
            price: data.bpi[k],
        };
    });
    const currentPrice = prices[data.length -1].price;
    const firstPrice = prices[0].price;
    const diffPrice = currentPrice - firstPrice;
    const hasIncreased = diffPrice > 0;
        return (
        <div className = "app">
            <Background width = {screenWidth} height = {screenHeight}/>
            <div className = "center">
                <div className = "chart">
                    <div className = "titlebar"></div>
                        <div className = "title">Bitcoin Price </div>
                    <div>
                        <small>Last 30 days</small>
                    </div>
                    </div> 
                    <div className = "spacer" />
                    <div className = "prices">
                        <div>
                            {formatPrice(currentPrice)}
                        </div>
                        <div className = {hasIncreased ? 'increased' : 'decreased'}>
                            <small>
                               {hasIncreased ? '+' : '-'}
                               {formatPrice(diffPrice)}</small>
                        </div>

                    <div className = "container">
                        <Chart data = {data}/>
                    </div>
                </div>
                <p className = "Disclaimer">
                    {data.disclaimer}
                </p>
            </div>
            <style jsx>{`
          .app,
          .center {
            display: flex;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            flex: 1;
            justify-content: center;
            align-items: center; 
            font-family: arial;
            flex-direction: column;
          }
          .disclaimer {
            margin-top: 35px;
            font-size: 11px;
            color: white;
            opacity: 0.4;
          }
          .center {
            align-items: center;
            justify-content: center;
          }
          .container {
              flex 1;   
              display: flex;
          }
          .title{
              
          }
          .prices{
              align-items: flex-end;
              display: flex;
              flex-direction = column;
          }
          .increased{
              color: 00f1a1;
          }
          .spacer{
              flex: 1;
          }
          .titlebar{
              display: flex;
              flex-direction: row;
              align-items: center;
              padding: 15px; 
          }
          .chart{
              width : 600px; 
              height : 400px; 
              background-color: #27273f; 
              border-radius: 8px;
              color: white; 
              display: flex;
              flex-direction: column;

          }
        `}</style>
            </div>
        );
        
    }
}

export default withScreenSize(App);
