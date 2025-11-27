import React from 'react'
import './BalanceChart.css';
import { useBalance } from "../../lib/hooks/api/useBalance";
import { LABELS, formatUSD, ORDER } from '../../lib/utils'
import { Chart } from '../Chart/Chart';

const BalanceChart = () => {
  const { data } = useBalance();

  if (!data) return null;

  return (
    <>
      <div className='chart flex'>
        <div className='w-[50%] text-left'>
          <p className='title'>
            Available Balance
          </p>
          <p className='value'>
            USD {formatUSD(data.balance)}
          </p>
        </div>
        <div className='w-[50%]'>
          <button className='chart-btn'>
            Withdraw
          </button>
        </div>
      </div>
      <div>
        <Chart />
      </div>
    </>
  )
}

export default BalanceChart