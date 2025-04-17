import logo from '../Assets/Nav/logo-large.svg';
import logoSmall from '../Assets/Nav/logo-small.svg';
import { Link } from 'react-router';
import { RiArrowUpDownFill } from "react-icons/ri";
import { PiChartDonutFill } from "react-icons/pi";
import { PiTipJarDuotone } from "react-icons/pi";
import { PiReceiptFill } from "react-icons/pi";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function Nav() {
    const location = useLocation();
    const [closeNav, setCloseNav] = useState(false);

    const handleCloseNav = () => {
        setCloseNav(!closeNav)
    }

    return (
        <div className={`header ${closeNav ? "headerClosed" : ""}`}>
            <img src={logo} alt="logo finance" className={`logo ${closeNav ? "hide" : ""}`} />
            <img src={logoSmall} alt="logo finance" className="logoSmall" />
            <nav className="nav">
                <ul className='navList'>
                    <li className={`navItem ${location.pathname === "/" ? "active" : ""}`}>
                        <Link to={"/"} className="navLink">
                            <FontAwesomeIcon className='navLinkIcon' icon={faHouse} />
                            <p className='navLinkText text3'>Overview</p>
                        </Link>
                    </li>
                    <li className={`navItem ${location.pathname === "/Transactions" ? "active" : ""}`}>
                        <Link to={"/Transactions"} className="navLink">
                            <RiArrowUpDownFill className='navLinkIcon' />
                            <p className='navLinkText text3'>Transactions</p>
                        </Link>
                    </li>
                    <li className={`navItem ${location.pathname === "/Budgets" ? "active" : ""}`}>
                        <Link to={"/Budgets"} className="navLink">
                            <PiChartDonutFill className='navLinkIcon' />
                            <p className='navLinkText text3'>Budgets</p>
                        </Link>
                    </li>
                    <li className={`navItem ${location.pathname === "/Pots" ? "active" : ""}`}>
                        <Link to={"/Pots"} className="navLink">
                            <PiTipJarDuotone className='navLinkIcon' />
                            <p className='navLinkText text3'>Pots</p>
                        </Link>
                    </li>
                    <li className={`navItem ${location.pathname === "/RecurringBills" ? "active" : ""}`}>
                        <Link to={"/RecurringBills"} className="navLink">
                            <PiReceiptFill className='navLinkIcon' />
                            <p className='navLinkText text3'>Recurring Bills</p>
                        </Link>
                    </li>
                </ul>
            </nav>
            <button className="headerBtn" onClick={handleCloseNav}>
                <TbArrowBigLeftLinesFilled className='headerBtnIcon iconLeft' />
                <TbArrowBigRightLinesFilled className='headerBtnIcon iconRight' />
                <p className='headerBtnText text3'>Minimize Menu</p>
            </button>
        </div>
    )
}

export default Nav