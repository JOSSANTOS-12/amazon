import React from "react"
import { GrLocation } from "react-icons/gr";
import classes from'./header.module.css';
const Header= () => {
        return (
        <>
            <section className={classes.LHeader}>
            <section className={classes.upper}>
                <div>
                <a href="/">
                    <img
                    src="https://m.media-amazon.com/images/I/31epF-8N9LL.png"
                    style={{ width: "80px", height: "50px" }}
                    alt="amazon logo"
                    />
                </a>
                </div>
                <div className={classes.location}>
                    <span style={{paddingTop:"18px",fontWeight:"bold" }}><GrLocation /></span>
                    <div><p>Deliver to</p>
                        <span style={{fontWeight:"bold"}}>Ethiopia</span>
                    </div>
                    
                </div>
                <div></div>
                <div></div>
            </section>
            </section>
        </>
    );
}

export default Header

