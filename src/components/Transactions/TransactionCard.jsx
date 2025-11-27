import React from 'react'
import { formatUSD } from '../../lib/utils'
import incoming from '../../assets/call_received.svg'
import outgoing from '../../assets/outgoing.svg'
import './Transactions.css'

const showTransactionDetails = (transaction) => {
    return transaction.payment_reference ? 
                <div>
                    <h3 className="text-base font-semibold text-gray-900 tx-title">{transaction?.metadata?.product_name || transaction?.metadata?.type}</h3>
                    <p className={`text-sm mt-0.5 ${
                    transaction.status === 'pending' 
                        ? 'text-red-600' 
                        : 'text-green-600'
                    }`}>
                    {transaction?.metadata?.name}
                    </p>
                </div>
            :
                <div>
                    <h3 className="text-base font-semibold text-gray-900 tx-title">Cash {transaction.type}</h3>
                    <p className={`text-sm mt-0.5 ${
                    transaction.status === 'pending' 
                        ? 'text-yellow-600' 
                        : 'text-green-600'
                    }`}>
                    {transaction?.status}
                    </p>
                </div>
            
}

const iconDisplay = (transaction) => {
    return (
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            transaction.type === 'deposit' 
                ? 'purchase' 
                : 'withdrawal'
            }`}
        >
            {transaction.type === 'deposit' ? (
                <img src={incoming} className="w-5 h-5 text-green-600" strokeWidth={2.5} />
            ) : (
                <img src={outgoing} className="w-5 h-5 text-red-600" strokeWidth={2.5} />
            )}
        </div>
    );
}

const TransactionCard = ({ transaction }) => {

    const transactionDate = (trxDate) => (
        new Date(trxDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        })
    );

  return (
    <div
        // key={transaction.id}
        className="flex items-center justify-between bg-white rounded-xl p-4 transition-shadow text-left"
    >
        <div className="flex items-center gap-4">
            {iconDisplay(transaction)}
            {showTransactionDetails(transaction)}
        </div>

        <div className="text-right">
            <p className="text-base font-bold text-gray-900">
                USD {formatUSD(transaction.amount)}
            </p>
            <p className="text-sm text-gray-500 mt-0.5">{transactionDate(transaction.date)}</p>
        </div>
    </div>
  )
}

export default TransactionCard