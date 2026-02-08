import { useDispatch, useSelector } from "react-redux";
import { toggleThame } from "../features/ui/uiSlice";
import "../styles/Header.css"


const Header = () => {
    const dispatch = useDispatch();
    

    return(
        <header className="header">
           <div className="header-inner container"> 
            <div className="logo">Мой сайт на Redux</div>
           
           <nav className="nav ">
            <a href="#">Главная</a>
            <a href="#">О нас</a>
            <a href="#">Контакты</a>
           </nav>

           <botton
            className="theme-btn"            
              onClick={() => dispatch(toggleThame())}>
              Сменить тему  
           </botton>

            </div> 
        </header>
    )
}   

export default Header;