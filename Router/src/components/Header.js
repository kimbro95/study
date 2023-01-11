import { NavLink } from "react-router-dom";

import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    {/* 
                    @5 버전
                    NavLink는 활성 앵커 항목에 css 클래스를 설정한다.
                    activeClassName에 prop을 추가하면된다.
                    ex)활성 클래스가 있는 앵커 태그를 선택하는 
                    .header a.active 선택자를 추가한다.
                    
                    @6 버전
                    isActive
                    */}
                    <li>
                        <NavLink activeClassName={classes.active} to="/welcome">welcome</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to="/products">products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;