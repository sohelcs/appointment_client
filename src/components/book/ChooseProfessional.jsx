import React from 'react';

const ChooseProfessional = ({ professionals, selectedProfessional, handleProfessionalSelection }) => {
    return (
        <div>
            <h2>Select a Professional</h2>
            <ul>
                {professionals.map((professional, index) => (
                    <li key={index} onClick={() => handleProfessionalSelection(professional)}>
                        {professional.name}
                    </li>
                ))}
            </ul>
            <button onClick={() => handleProfessionalSelection(null)}>Skip</button>
        </div>
    );
};

export default ChooseProfessional;