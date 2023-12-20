import React, { useState } from 'react';

function DynamicCheckBox(props) {
    // const uniqueId = props.uniqueId || 'default'; 

    const items = props.arrayData;
    const [isOpen, setIsOpen] = useState(true);
    const [checkedState, setCheckedState] = useState(new Array(items.length).fill(false));

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        // Log the state to see if it's being updated correctly
        console.log('Updated State:', updatedCheckedState);

        setCheckedState(updatedCheckedState);
    };

    function handleToggleChange() {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <div className='checkbox-title' onClick={handleToggleChange}>
                {props.checkBoxTitle}
                <span className="toggle-icon">{isOpen ? '-' : '+'}</span>
            </div>

            {isOpen && items.map((item, index) => (
                <div key={item} className="checkbox-item">
                    <input
                        type="checkbox"
                        id={item}
                        name={item}
                        value={item}
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index)}
                    />
                    <label htmlFor={item}>{item}</label>
                </div>
            ))}
        </div>
    );
}

export default DynamicCheckBox;
