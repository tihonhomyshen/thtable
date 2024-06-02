import React from "react";
import "./Footer.css"
import profile from "../../assets/icons/profile.svg"
import tg from "../../assets/icons/tg.svg"
import docs from "../../assets/icons/docs.svg"

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="info">
                        <p className="company">©THTable</p>
                        <p className="email">business@mail.ru</p>
                        <p className="phone">+8950999999</p>
                    </div>
                    <div className="links">
                        <a target="_blank" href="https://github.com/tihonhomyshen"><img src={profile} alt="" /></a>
                        <a target="_blank"
                            href="https://t.me/tishkinn"><img src={tg} alt="" /></a>
                        <a href="#"><img src={docs} alt="" /></a>
                    </div>
                </div>
            </footer>
        </>
    )

}

export default Footer