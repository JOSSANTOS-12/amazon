import React from "react"
import { SlLocationPin } from "react-icons/sl";
import './Header.css';
const Header = () => {
    return (
        <div>
            <section>
                <section className="upper-header">
                    <div>
                        <a href="#">
                            <img src="https://m.media-amazon.com/images/I/31epF-8N9LL.png" style={{width:"80px", height:"50px"}} alt="amazon logo"/>
                        </a>
                    </div><span><SlLocationPin /></span>
                    <div><p>Deliver to</p>
                    <span>Ethiopia</span></div>
                    <div>
                    </div>
                    <div></div>
                </section>
            </section>
        </div>
    )
}

export default Header

