import React from "react"

function Cell({id, cell, index, go, setGo, cells, setCells, winningMessage}) {

    
    function handleChange(event) {
        const taken = event.target.firstChild.classList.contains("circle") 
        || event.target.firstChild.classList.contains("cross") //gives false first time

        if(!taken) {
            if(go === "circle") {
                event.target.firstChild.classList.add("circle")
                handleCellChange("circle")
                setGo("cross")
            }else {
                event.target.firstChild.classList.add("cross")
                handleCellChange("cross")
                setGo("circle")
            }
        }
    }

    function handleCellChange(className) {
        const nextCells = cells.map((cell, index) => {
             if(index === id) {
                return className
             }else {
                return cell 
             }
        })
        setCells(nextCells)
    }

    return (
        <div className="square" id={id} onClick={!winningMessage && handleChange}>
            <div className={cell}></div>
        </div>
    )
}

export default Cell