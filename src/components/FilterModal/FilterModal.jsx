import React, { useEffect, useState } from 'react';
import './FilterModal.css';
import { X } from 'lucide-react';
import { MultiSelectDropdown } from '../TrxDropdown/TrxDropdown';
import { transactionStatusOptions, transactionTypeOptions } from '../../lib/utils';
import DateInput from '../DateInput/DateInput';

export const FilterModal = ({ isOpen, onClose, onApply, startDate, endDate, setStartDate, setEndDate, selectedPeriod, setSelectedPeriod }) => {
    const [transactionType, setTransactionType] = useState([]);
    const [transactionStatus, setTransactionStatus] = useState([]);
    const [show, setShow] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
      if (isOpen) {
        setShow(true);
        setTimeout(() => setIsAnimating(true), 10);
      } else {
        setIsAnimating(false);
        const timer = setTimeout(() => setShow(false), 300);
        return () => clearTimeout(timer);
      }
    }, [isOpen]);

    if (!show) return null;

  const handlePeriodChange = (newPeriod) => {
    setSelectedPeriod(newPeriod);

    if (newPeriod && newPeriod !== "All time") {
      setStartDate('');
      setEndDate('');
    }
  };

  const handleClear = () => {
    setSelectedPeriod('');
    setStartDate("");
    setEndDate("");
    setTransactionType([]);
    setTransactionStatus([]);
  };

  const canApply = transactionType.length > 0 || transactionStatus.length > 0  || selectedPeriod !== '' || startDate !== "" || endDate !== "";

  const handleApply = () => {
    onApply({
      period: selectedPeriod,
      startDate,
      endDate,
      transactionType,
      transactionStatus
    });
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-end z-[999]
                  transition-all duration-300 ease-in-out
                  ${isAnimating ? "bg-opacity-50" : "bg-opacity-0 pointer-events-none"}`}
      onClick={onClose}
    >
      <div 
        className={`bg-white rounded-l-3xl w-full max-w-md h-full p-6 relative overflow-y-auto
                    transition-transform duration-300 ease-in-out
                    ${isAnimating ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Filter</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="mb-6 overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 min-w-max">
                {['Today', 'Last 7 days', 'This month', 'Last 3 months', 'This year', 'Last year', 'All time'].map((period) => (
                <button
                    key={period}
                    onClick={() => handlePeriodChange(period)}
                    className={`period-btn rounded-[100px] whitespace-nowrap ${
                    selectedPeriod === period
                        ? 'bg-[#EFF1F6] selected-period'
                        : ''
                    }`}
                >
                    {period}
                </button>
                ))}
            </div>
        </div>

        <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-3">
                Date Range
            </label>

            <div className="flex gap-3">
                <DateInput
                    type="start"
                    value={startDate}
                    startDate={startDate}
                    endDate={endDate}
                    setStartDate={setStartDate}
                    setEndDate={setEndDate}
                    setSelectedPeriod={setSelectedPeriod}
                />

                <DateInput
                    type="end"
                    value={endDate}
                    startDate={startDate}
                    endDate={endDate}
                    setStartDate={setStartDate}
                    setEndDate={setEndDate}
                    setSelectedPeriod={setSelectedPeriod}
                />
            </div>
        </div>

        <MultiSelectDropdown
            label="Transaction Type"
            placeholder="Select Transaction Type"
            options={transactionTypeOptions}
            selected={transactionType}
            setSelected={setTransactionType}
        />

        <MultiSelectDropdown
            label="Transaction Status"
            placeholder="Select Status"
            options={transactionStatusOptions}
            selected={transactionStatus}
            setSelected={setTransactionStatus}
        />
        
        <div className="flex gap-3 relative top-[150px]">
            <button
                onClick={handleClear}
                className="flex-1 px-6 py-3 bg-white border border-gray-300 rounded-[100px] text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
            >
                Clear
            </button>

            <button
                onClick={handleApply}
                className={`
                    flex-1 px-6 py-3 rounded-[100px] text-sm font-semibold transition-colors
                    ${canApply ? "bg-black text-white" : "bg-gray-300 text-gray-500"}
                `}
            >
                Apply
            </button>
        </div>
      </div>
    </div>
  );
}