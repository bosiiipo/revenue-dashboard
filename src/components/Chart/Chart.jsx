import { LineChart, Line, XAxis } from 'recharts';
import { useTransactions } from '../../lib/hooks/api/useTransactions';

export const Chart = () => {
  const { data } = useTransactions();

  if (!data) return null;

  const chartData = data
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((tx) => ({
      name: new Date(tx.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      amount: tx.amount,
      type: tx.type,
      status: tx.status,
    }));

  const customTick = (props) => {
    const { x, y, payload } = props;
    const currentIndex = chartData.findIndex(item => item.name === payload.value);
    const isFirstOrLast = currentIndex === 0 || currentIndex === chartData.length - 1;
    
    if (!isFirstOrLast) return null;
    
    return (
      <g>
        <circle 
          cx={x} 
          cy={y - 8} 
          r={4} 
          fill="#E5E5E5"
        />
        <text 
          x={x} 
          y={y + 20} 
          textAnchor={currentIndex === 0 ? "start" : "end"} 
          fill="#666"
          fontSize={14}
        >
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <LineChart
      width={700}
      height={300}
      data={chartData}
      margin={{ top: 20, right: 20, left: 30, bottom: 20 }}
    >
      <XAxis 
        dataKey="name"
        axisLine={{ stroke: '#E5E5E5' }}
        tickLine={false}
        tick={customTick}
        interval={0}
      />
      <Line 
        type="natural" 
        dataKey="amount" 
        stroke="#FF5403" 
        strokeWidth={2}
        dot={false}
        activeDot={{ r: 0, fill: '#FF5403' }}
      />
    </LineChart>
  );
};