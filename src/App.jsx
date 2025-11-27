import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar'
import BalanceChart from './components/BalanceChart/BalanceChart'
import Balance from './components/Balance/Balance'
import { Transactions } from './components/Transactions/Transactions'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useUser } from './lib/hooks/api/useUser';

const queryClient = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <div className='app-intro'>
        <Navbar />
        
        <div className="flex w-full mt-20">
          <Sidebar className="w-[10%]" />

          <main className="flex-1 px-4">

            <section className="flex gap-4 mb-6">
              <div className="flex-[3]">
                <BalanceChart />
              </div>
              <div className="flex-[2]">
                <Balance />
              </div>
            </section>
            
            <section>
              <Transactions />
            </section>
          </main>
          
          <aside className="w-[10%]" />
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default App