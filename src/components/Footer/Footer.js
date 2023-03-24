import React from 'react'
import { useData } from '../../contex/data.context'
import "./footer.css"

export default function Footer() {
    const { rooms } = useData();
    return (
        <footer>
            <div className='footerWrapper'>
                <div className='footerLinkBlock'>
                    <span className='blockTitle'>Kurumsal</span>
                    <ul>
                        <li>
                            <a href="/about">Hakkımızda</a>
                        </li>
                        <li>
                            <a href="/contact">İletişim</a>
                        </li>
                    </ul>
                </div>
                <div className='footerLinkBlock'>
                    <span className='blockTitle'>Odalar</span>
                    <ul>
                        {
                            rooms && rooms.map(room => (
                                <li key={room.id}>
                                    <a href="#">{room.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className='copyright'>Gunec Hotel &copy; 2023</div>
        </footer>
    )
}