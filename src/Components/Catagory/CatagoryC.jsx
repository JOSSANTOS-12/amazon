import React from 'react'
import { CatagoryInfo } from './CatagoryInfo';
import CatagoryCard from './CatagoryCard';
const CatagoryC = () => {
    return (
    <div>
            <section>
                <CatagoryInfo></CatagoryInfo>.map((item) => {
                    <CatagoryCard data={item} />
                })
            </section>
    </div>
    )
}

export default CatagoryC;
