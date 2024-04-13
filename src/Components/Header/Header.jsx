import React from "react"
import { SlLocationPin } from "react-icons/sl";
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
                    <span><SlLocationPin /></span>
                    <div><p>Deliver to</p>
                        <span>Ethiopia</span>
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

