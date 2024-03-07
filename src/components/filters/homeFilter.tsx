/* eslint-disable prefer-const */
'use client'
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import toast from 'react-hot-toast';
import { CiSearch } from "react-icons/ci";
import { FaCity } from 'react-icons/fa';
import { IoMdPeople } from 'react-icons/io';
import { MdDateRange } from 'react-icons/md';
import { Button } from '@mui/material';
import moment from 'moment';
import { useRouter } from 'next/navigation'
import queryString from 'query-string';

import cities from '@/constants/all-cities.json'

import GuestInput from './GuestInput';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

// interface City {
//   id: string;
//   name: string;
//   state: string;
// }

interface Guests {
  adults: number;
  children: number;
  rooms: number;
}


export default function HomeFilter() {
  const [showDateRange, setShowDateRange] = useState(false);
  const [showCitySelector, setShowCitySelector] = useState(false);
  const [showGuestInput, setShowGuestInput] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useRouter();

  const [showSuggestions, setShowSuggestions] = useState(false);



  const defaultStartDate = new Date();
  const defaultEndDate = new Date(defaultStartDate);
  defaultEndDate.setDate(defaultEndDate.getDate() + 1);
  const [state, setState] = useState([
    {
      startDate: defaultStartDate,
      endDate: defaultEndDate,
      guests: { adults: 1, children: 0, rooms: 1 },
      key: 'selection'
    }
  ]);


  const handleGuestChange = (guests: Guests) => {
    setState([{ ...state[0], guests }]);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDateChange = (ranges: any) => {
    const { selection } = ranges;

    let { startDate, endDate } = selection;

    if (moment(startDate).isBefore(moment(), 'day')) {
      startDate = new Date();
    }

    setState([{
      ...selection,
      startDate,
      endDate,
      guests: state[0].guests,
      key: 'selection'
    }]);
  };


  const formatDateDisplay = (startDate: Date, endDate: Date) => {
    const formatSingleDate = (date: Date) => {
      if (!date) return '';
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const dayName = days[date.getDay()];
      const month = months[date.getMonth()];
      const day = date.getDate();
      return `${dayName}, ${day} ${month}`;
    };

    if (!endDate) {
      const nextDay = new Date(startDate);
      nextDay.setDate(nextDay.getDate() + 1);
      return `${formatSingleDate(startDate)} - ${formatSingleDate(nextDay)}`;
    } else {
      return `${formatSingleDate(startDate)} - ${formatSingleDate(endDate)}`;
    }
  };

  const handleCityClick = (city: string) => {
    setSelectedCity(city);
    setShowSuggestions(false);
    setSearchQuery(city);
  };

  const toggleDateRange = () => {
    setShowDateRange(!showDateRange);
    setShowCitySelector(false);
    setShowGuestInput(false);
  };

  const toggleCitySelector = () => {
    setShowCitySelector(!showCitySelector);
    setShowDateRange(false);
    setShowGuestInput(false);
  };

  const toggleGuestInput = () => {
    setShowGuestInput(!showGuestInput);
    setShowDateRange(false);
    setShowCitySelector(false);
  };

  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!selectedCity || !state[0].startDate || !state[0].endDate) {
      toast.error('Please select city and date');
      return;
    }
    const queryParams = {
      city: selectedCity,
      startDate: moment(state[0].startDate).format('YYYY-MM-DD'),
      endDate: moment(state[0].endDate).format('YYYY-MM-DD'),
      guests: JSON.stringify(state[0].guests)
    };
    const queryStringified = queryString.stringify(queryParams);
    setShowDateRange(false);
    setShowCitySelector(false);
    navigate.push(`/all-hotels?${queryStringified}`)

  };

  const { startDate, endDate } = state[0];


  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <div className="relative rounded-xl py-3 md:py-2 px-2 bg-white">
        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          <div className="flex items-center">
            <FaCity className="text-lg ml-2 text-gray-500" />
            <button onClick={toggleCitySelector} className="flex-grow">
              <div className="z-40 flex flex-col relative">
                <div>
                  <input
                    type="text"
                    id="name"
                    placeholder="Input name of the city here..."
                    className="block w-full rounded-md px-2 py-2 outline-none text-center justify-center"
                    onClick={() => setShowSuggestions(true)}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                {showSuggestions && (
                  <div className="absolute left-0 mt-12 w-full bg-white rounded-md shadow-md border border-gray-200">
                    {filteredCities.slice(0, 7).map(city => (
                      <div
                        key={city.id}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleCityClick(city.name)}
                      >
                        {city.name}
                      </div>
                    ))}

                  </div>
                )}
              </div>
            </button>
          </div>
          <div className="flex items-center">
            <MdDateRange className="text-lg ml-2 text-gray-500" />
            <button className="flex-grow" onClick={toggleDateRange}>
              <div className='bg-white w-full rounded-md outline-none flex flex-row'>
                <p className='py-2 text-gray-700 flex-grow'>
                  {formatDateDisplay(startDate, endDate)}
                </p>
              </div>
            </button>
          </div>
          <div className="flex items-center">
            <IoMdPeople className="text-lg ml-2 text-gray-500" />
            <button onClick={toggleGuestInput} className="flex-grow">
              <GuestInput onChange={handleGuestChange} defaultValue={{ adults: 1, children: 0, rooms: 1 }} />
            </button>
          </div>
          <div className=' flex items-center justify-center'>
            <Button startIcon={<CiSearch />} variant='contained' color='primary' fullWidth onClick={handleSearch}>
              Search
            </Button>
          </div>
        </div>
        {showDateRange &&
          <div className='absolute z-50 left-0 md:left-64 mt-2 shadow-lg'>
            <DateRange
              editableDateInputs={true}
              onChange={handleDateChange}
              moveRangeOnFirstSelection={false}
              ranges={state}
              minDate={new Date()}
            />
          </div>
        }
      </div>


    </>
  );
}

