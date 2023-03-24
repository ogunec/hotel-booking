import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
import { HiMenuAlt1 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import useAuth from '../../hooks/useAuth';

export default function Navbar() {
    const { user, logout } = useAuth();
    return (
        <div className={`navbar`}>
            <div className='navbarContainer'>
                <div className='navbarTitle'>
                    <Link to={"/"}>
                        <h1>Gunec Hotel</h1>
                    </Link>
                </div>
                <div className='navbarMenu'>
                    <ul>
                        <li>
                            <Link to={"/"}>Odalar</Link>
                        </li>
                        {user && (
                            <li>
                                <Link to="/myreservations">Rezervasyonlarım</Link>
                            </li>
                        )}
                    </ul>
                </div>
                <div className='navbarButtons'>
                    {user ? 
                        <Link onClick={()=>logout()}>Çıkış Yap</Link>
                    : 
                    <>
                        <Link to="/signin">Giriş Yap</Link>
                        <Link to="/signup">Kayıt Ol</Link>
                    </>
                    }
                </div>
                {/* <div className='mobileMenuIcon'>
                <AiOutlineClose style={{ color: "#fff", fontSize: "2rem" }} />
                <HiMenuAlt1 style={{ color: "#fff", fontSize: "2rem" }} />
                </div> */}
            </div>

            {/* <div className='mobileMenu'>
                <div className='navbarMenu'>
                    <ul>
                        <li>
                            <Link to={process.env.PUBLIC_URL + "/search"}>Bul</Link>
                        </li>
                        <li>
                            <Link to="#">Favoriler</Link>
                        </li>
                        <li>
                            <Link to="#">Biletlerim</Link>
                        </li>
                    </ul>
                </div>
                <div className='navbarButtons'>
                    <Link to="#">Kayıt Ol</Link>
                </div>
            </div> */}
        </div>
    )
}