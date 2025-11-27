import React, {useEffect, useState} from 'react';
import './Transactions.css'
import { useTransactions } from '../../lib/hooks/api/useTransactions';
import Header from './Header';
import TransactionCard from './TransactionCard';

export const Transactions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState('');
  
  const { data: transactions } = useTransactions();
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const getTransactionDateRange = () => {
    if (!Array.isArray(transactions) || transactions.length === 0) {
      return; 
    }

    const dates = transactions
      .map(t => new Date(t.date))
      .filter(d => !isNaN(d));

      console.log({dates})

    if (dates.length === 0) return;

    const earliest = new Date(Math.min(...dates));
    const latest = new Date(Math.max(...dates));

    setStartDate(earliest.toISOString().split("T")[0]);
    setEndDate(latest.toISOString().split("T")[0]);
  };

  useEffect(() => {
    if (transactions?.length > 0) {
      setFilteredTransactions(transactions);  
      getTransactionDateRange();
    }
  }, [transactions]);

  const Spinner = () => (
    <div className="flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
    </div>
  );

  if (!transactions) {
    return Spinner();
  }

  const getDateRangeFromPeriod = (period) => {
    const today = new Date();
    let start = null, end = null;

    switch (period) {
      case "Today":
        start = new Date(today);
        end = new Date(today);
        break;
      case "Last 7 days":
        start = new Date(today);
        start.setDate(today.getDate() - 6);
        end = new Date(today);
        break;
      case "This month":
        start = new Date(today.getFullYear(), today.getMonth(), 1);
        end = new Date(today);
        break;
      case "Last 3 months":
        start = new Date(today.getFullYear(), today.getMonth() - 2, 1);
        end = new Date(today);
        break;
      case "This year":
        start = new Date(today.getFullYear(), 0, 1);
        end = new Date(today);
        break;
      case "Last year":
        start = new Date(today.getFullYear() - 1, 0, 1);
        end = new Date(today.getFullYear() - 1, 11, 31);
        break;
      case "All time":
      default:
        start = null;
        end = null;
    }

    return { start, end };
  };

  const handleApply = (filters) => {
    const {
      period,
      transactionType = [],
      transactionStatus = [],
      startDate,
      endDate,
    } = filters;

    let filterStart = null;
    let filterEnd = null;

    // Only one should be present due to UI logic
    if (startDate || endDate) {
      filterStart = startDate ? new Date(startDate) : null;
      filterEnd = endDate ? new Date(endDate) : null;
    } else if (period && period !== "All time") {
      const periodRange = getDateRangeFromPeriod(period);
      filterStart = periodRange.start;
      filterEnd = periodRange.end;
    }


    // Apply filters
    const filtered = transactions.filter((item) => {
      const itemDate = new Date(item.date);
      let isValid = true;

      // Date filter
      if (filterStart && itemDate < filterStart) isValid = false;
      if (filterEnd && itemDate > filterEnd) isValid = false;

      // Transaction Type filter
      if (transactionType.length > 0 && !transactionType.includes(item.type)) isValid = false;

      // Transaction Status filter
      if (transactionStatus.length > 0 && !transactionStatus.map(s => s.toLowerCase()).includes(item.status.toLowerCase())) {
        isValid = false;
      }

      return isValid;
    });

    console.log({ filtered });

    setFilteredTransactions(filtered);
  };


  return (
    <div className="p-6 min-h-screen transactions">
      <Header
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        filteredTransactions={filteredTransactions}
        handleApply={handleApply}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
      />

      <hr className="border-gray-300 mb-4" />

      <div className="space-y-3">
        {filteredTransactions.map((transaction) => (
          <TransactionCard 
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </div>
    </div>
  );
}