import React from 'react'
import infoIcon from '../../assets/info.svg';
import '../Balance/Balance.css'
import { useBalance } from "../../lib/hooks/api/useBalance";
import { LABELS, formatUSD, ORDER } from '../../lib/utils'

const Balance = () => {

  const { data } = useBalance();

  if (!data) return null;

  return (
    <div>
      {ORDER.map((key) => {
        const value = data[key];

        if (value == null) return null;

        return (
          <div key={key} className="balance">
            <div className="mb-3">
              <div className="flex flex-row justify-between pt-3">
                <span className="balance-title">{LABELS[key] || key}</span>
                <img src={infoIcon} />
              </div>
              <h3 className="info-icon pt-4">USD {formatUSD(value)}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Balance