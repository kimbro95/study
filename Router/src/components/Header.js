import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    {/* 
                    a 태그를 사용하면 spa에 의미가 사라짐
                    spa가 되도록 Link를 사용
                    */}
                    <li>
                        <a href="/products">products</a>
                    </li>

                    <li>
                        <Link to="/welcome">welcome</Link>
                    </li>
                    <li>
                        <Link to="/products">products</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;