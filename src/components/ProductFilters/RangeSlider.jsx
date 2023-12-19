import React, { useState, useEffect } from "react";

function RangeSlider(props) {

    console.log("Testing");
    const minValue = props.min;
    const maxValue = props.max;
    
    const [minPrice, setMinPrice] = useState(minValue);
    const [maxPrice, setMaxPrice] = useState(maxValue);
    const [prevValues, setPrevValues] = useState({ min: minValue, max: maxValue });

    // Calculate the width of the blue background
    const leftPercentage = ((minPrice - minValue) / (maxValue - minValue)) * 100;
    const rightPercentage = ((maxPrice - minValue) / (maxValue - minValue)) * 100;

    const [isOpen, setIsOpen] = useState(true);

    
    useEffect(() => {
        if (minPrice > maxPrice) {
            setMinPrice(prevValues.min);
            setMaxPrice(prevValues.max);
        } else if (maxPrice < minPrice) {
            setMinPrice(prevValues.min);
            setMaxPrice(prevValues.max);
        } else {
            
            setPrevValues({ min: minPrice, max: maxPrice });
        }
    }, [minPrice, maxPrice]);

    function handleToggleChange() {
        setIsOpen(!isOpen);
    }

    function handleMinPriceChange(e) {
        setMinPrice(Number(e.target.value));
    }

    function handleMaxPriceChange(e) {
        setMaxPrice(Number(e.target.value));
    }

    return (
        <div>
            <div className='checkbox-title' onClick={handleToggleChange}>
                {props.Title}
                <span className="toggle-icon">{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen &&
                <div className="slider-container">
                    <div className="slider-track" />
                    <div className="slider-range"
                        style={{
                            left: `${leftPercentage}%`,
                            width: `${rightPercentage - leftPercentage}%`,
                        }}
                    />
                    <input
                        type="range"
                        min={minValue}
                        max={maxValue}
                        value={minPrice}
                        className="slider"
                        id="min-price"
                        onChange={handleMinPriceChange}
                    />
                    <input
                        type="range"
                        min={minValue}
                        max={maxValue}
                        value={maxPrice}
                        className="slider"
                        id="max-price"
                        onChange={handleMaxPriceChange}
                    />
                    <div className="slider-values">
                        <span>Min: {minPrice}</span>
                        <span>Max: {maxPrice}</span>
                    </div>
                </div>
            }
        </div>
    );
}

export default RangeSlider;
