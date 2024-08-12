import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import  styles  from "./styles.module.scss"

export const DropdownMenu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const timerRef = useRef(null);

    const handleMouseEnter = () => {
        clearTimeout(timerRef.current);
        setIsOpen(true);
    }

    const handleMouseLeave = (event) => {
        timerRef.current = setTimeout(() => {
            setIsOpen(false)
        }, 100);
    }

    useEffect(() => {
        return () => {
            clearTimeout(timerRef.current);
        };
    }, []);

    return (
        <div className={styles.dropdown_container} onMouseLeave={handleMouseLeave}>
            <div className={styles.work_container} onMouseEnter={handleMouseEnter}>
                <button>
                    Menu
                </button>
        
                {isOpen && (
                <ul className={styles.dropdown_menu}>
                    <li><Link to="/">Work</Link></li>
                    <li><Link to='/Other'>Other</Link></li>
                </ul>
            )}
            </div>
        </div>
    )
}