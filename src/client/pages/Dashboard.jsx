import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getEntries from '@wasp/queries/getEntries';
import createEntry from '@wasp/actions/createEntry';

export function Dashboard() {
  const { data: entries, isLoading, error } = useQuery(getEntries);
  const createEntryFn = useAction(createEntry);

  const [itemNumber, setItemNumber] = useState('');
  const [itemName, setItemName] = useState('');
  const [account, setAccount] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [caseStack, setCaseStack] = useState(false);
  const [caseDrop, setCaseDrop] = useState(false);
  const [btg, setBtg] = useState(false);
  const [usagePerMonth, setUsagePerMonth] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [salesRepName, setSalesRepName] = useState('');
  const [area, setArea] = useState('');

  const handleSubmit = () => {
    createEntryFn({
      itemNumber,
      itemName,
      account,
      accountNumber,
      caseStack,
      caseDrop,
      btg,
      usagePerMonth,
      startDate,
      endDate,
      salesRepName,
      area
    });

    setItemNumber('');
    setItemName('');
    setAccount('');
    setAccountNumber('');
    setCaseStack(false);
    setCaseDrop(false);
    setBtg(false);
    setUsagePerMonth(0);
    setStartDate('');
    setEndDate('');
    setSalesRepName('');
    setArea('');
  };

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className='p-4'>
      <div className='grid grid-cols-2 gap-4'>
        <input
          type='text'
          placeholder='Item #'
          className='px-1 py-2 border rounded'
          value={itemNumber}
          onChange={(e) => setItemNumber(e.target.value)}
        />
        <input
          type='text'
          placeholder='Item'
          className='px-1 py-2 border rounded'
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Account'
          className='px-1 py-2 border rounded'
          value={account}
          onChange={(e) => setAccount(e.target.value)}
        />
        <input
          type='text'
          placeholder='Account #'
          className='px-1 py-2 border rounded'
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
        <div className='flex items-center'>
          <input
            type='checkbox'
            checked={caseStack}
            onChange={() => setCaseStack(!caseStack)}
            className='mr-2'
          />
          <p>Case Stack</p>
        </div>
        <div className='flex items-center'>
          <input
            type='checkbox'
            checked={caseDrop}
            onChange={() => setCaseDrop(!caseDrop)}
            className='mr-2'
          />
          <p>Case Drop</p>
        </div>
        <div className='flex items-center'>
          <input
            type='checkbox'
            checked={btg}
            onChange={() => setBtg(!btg)}
            className='mr-2'
          />
          <p>BTG</p>
        </div>
        <input
          type='number'
          placeholder='Usage per month'
          className='px-1 py-2 border rounded'
          value={usagePerMonth}
          onChange={(e) => setUsagePerMonth(parseInt(e.target.value))}
        />
        <input
          type='date'
          placeholder='Start Date'
          className='px-1 py-2 border rounded'
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type='date'
          placeholder='End Date'
          className='px-1 py-2 border rounded'
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <input
          type='text'
          placeholder='Sales Rep Name'
          className='px-1 py-2 border rounded'
          value={salesRepName}
          onChange={(e) => setSalesRepName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Area'
          className='px-1 py-2 border rounded'
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
      </div>
      <button
        onClick={handleSubmit}
        className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Submit
      </button>
    </div>
  );
}