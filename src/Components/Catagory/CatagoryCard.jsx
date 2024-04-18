import React from 'react'

const CatagoryCard = (data) => {
    return (
        <div>
            <a href="/">
                <span>{data.title}</span>
                <img src={data.link}/>
                <p>Electronics</p>
            </a>

    </div>
)
}

export default CatagoryCard

