import React from 'react'
import swap from "../../assets/icons/swap.svg"
import './SwapButton.css'

function SwapButton() {
    return (
        <>
            <div className="swapButton">
                <button className="button">
                    <img src={swap} alt="swap" />
                </button>
            </div>
        </>
    )
}

export default SwapButton