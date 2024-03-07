'use client'
import React, { useState } from 'react';

interface GuestInputProps {
    onChange: (guests: Guests) => void;
    defaultValue: Guests;
}

interface Guests {
    adults: number;
    children: number;
    rooms: number;
}

const GuestInput: React.FC<GuestInputProps> = ({ onChange, defaultValue }) => {
    const [guests, setGuests] = useState<Guests>(defaultValue);
    const [showGuestOptions, setShowGuestOptions] = useState(false);

    const handleDecrease = (type: keyof Guests) => {
        if (type === 'rooms' && guests.rooms === 1) {
            return;
        }
        if (type === 'adults' && guests.adults === 1) {
            return;
        }
        if (guests[type] > 0) {
            setGuests(prevState => ({
                ...prevState,
                [type]: prevState[type] - 1
            }));
        }
    };

    const handleIncrease = (type: keyof Guests) => {
        setGuests(prevState => ({
            ...prevState,
            [type]: prevState[type] + 1
        }));
    };

    const handleSubmit = () => {
        onChange(guests);
        setShowGuestOptions(false);
    };

    return (
        <div className="relative">
            <input
                id="status"
                type="text"
                className="block w-full rounded-md px-2 py-2 outline-none"
                placeholder='2 Guest, 1 children, 1 Room'
                value={`${guests.adults} Adult${guests.adults !== 1 ? 's' : ''}, ${guests.children} Children, ${guests.rooms} Room${guests.rooms !== 1 ? 's' : ''}`}
                onFocus={() => setShowGuestOptions(true)}
            />
            {showGuestOptions && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-md shadow-md border border-gray-200 z-40">
                    <div className="flex justify-between px-4 py-2 border-b border-gray-200">
                        <div>Adults</div>
                        <div className="flex items-center">
                            <button onClick={() => handleDecrease('adults')} className="text-gray-400 focus:outline-none">
                                -
                            </button>
                            <span className="mx-2">{guests.adults}</span>
                            <button onClick={() => handleIncrease('adults')} className="text-gray-400 focus:outline-none">
                                +
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between px-4 py-2 border-b border-gray-200 ">
                        <div>Children</div>
                        <div className="flex items-center">
                            <button onClick={() => handleDecrease('children')} className="text-gray-400 focus:outline-none">
                                -
                            </button>
                            <span className="mx-2">{guests.children}</span>
                            <button onClick={() => handleIncrease('children')} className="text-gray-400 focus:outline-none">
                                +
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between px-4 py-2">
                        <div>Rooms</div>
                        <div className="flex items-center">
                            <button onClick={() => handleDecrease('rooms')} className="text-gray-400 focus:outline-none">
                                -
                            </button>
                            <span className="mx-2">{guests.rooms}</span>
                            <button onClick={() => handleIncrease('rooms')} className="text-gray-400 focus:outline-none">
                                +
                            </button>
                        </div>
                    </div>
                    <button onClick={handleSubmit} className="block w-full bg-primaryColor text-white py-2 rounded-b-md">Submit</button>
                </div>
            )}
        </div>
    );
};

export default GuestInput;
