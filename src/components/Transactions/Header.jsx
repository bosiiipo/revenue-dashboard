import React from 'react'
import { FilterModal } from '../FilterModal/FilterModal'
import filter from '../../assets/filter.svg'
import exportList from '../../assets/export.svg'
import {formatPeriodText} from "../../lib/utils";


const Header = ({isModalOpen, setIsModalOpen, filteredTransactions, handleApply, startDate, endDate, setStartDate, setEndDate, selectedPeriod, setSelectedPeriod }) => {
  return (
    <>
        <div className="flex items-center justify-between mb-4 text-left">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 trx-header">{filteredTransactions.length} Transactions</h1>
                <p className="text-sm text-gray-500 mt-1">{selectedPeriod.length ? `Your transactions for ${formatPeriodText(selectedPeriod)}` : `Your transactions for ${startDate} to ${endDate}` }</p>
            </div>
            <div className="flex gap-3">
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="trx-search px-4 py-2 bg-white border border-gray-200 text-sm font-medium flex items-center gap-2"
                >
                    Filter
                    <img src={filter} />
                </button>
                <button 
                    className="trx-search px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium flex items-center gap-2"
                >
                    Export list
                    <img src={exportList} />
                </button>
            </div>
        </div>
    
    
        <FilterModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onApply={handleApply}
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            selectedPeriod={selectedPeriod}
            setSelectedPeriod={setSelectedPeriod}
        />
    </>
         
  )
}

export default Header