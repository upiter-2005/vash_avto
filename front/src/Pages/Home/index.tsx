import React from "react"
import {Link} from "react-router-dom"
import styles from "./Home.module.scss"

const Home: React.FC = () => {
    return(
        <div className={styles.homeWrapper}>
              <div className={styles.homeWrapperLeft}>
                <h1 className={styles.title}> VashAvto - <span>Перший в Україні</span>  агрегатор об'явлень</h1>
                <div className={styles.content}>
                    Вже <span className="accent">за перші 10 хвилин</span> ти гарантовано <span className="accent">знайдеш свого зручного партнера</span>  у світі авто!
                </div>
                <Link to="/" className="btn">Оголошення</Link>
                <Link to="/" className="btn">Шукають</Link>
                <Link to="/" className="btn">Пропонують</Link>
                <Link to="/" className="btn">Партнери онлайн</Link>
                <Link to="/" className="btn">Спільноти</Link>
              </div>
              <div className={styles.homeWrapperRight}>

              </div>
     
        </div>
            
    );
}

export default Home;