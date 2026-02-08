import { useSelector } from "react-redux";
import {useEffect} from "react";

import "../styles/Home.css"


const Home = () => {
    const theme =useSelector((state) => state.ui.theme) 
    
    useEffect(() => {
        document.body.className = theme;
        document.body.className = theme;
    }, [theme])

    console.log("Текущая тема:", theme);

    return (
        <main className="home container"> 
        <h2>Главная страница</h2>
        <p>Добро пожаловать на главную страницу моего React Redux приложения!</p>
        </main>
    ) 
};
export default Home;