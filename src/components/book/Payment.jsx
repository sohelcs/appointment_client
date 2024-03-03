import React from 'react';

const Payment = ({ percentages, selectedPercentage, handlePercentageSelection }) => {
    return (
        <div>
            <h2>Select Payment Percentage</h2>
            <ul>
                {percentages.map((percentage, index) => (
                    <li key={index} onClick={() => handlePercentageSelection(percentage)}>
                        {percentage}%
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Payment;