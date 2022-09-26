import React from "react";
import {Link} from "react-router-dom"
import styles from "./NotFoundBlock.module.scss"

const NotFoundBlock:React.FC = () => {
   return (
      <>
      <div className="container">
         <div className={styles.container}>
               <h1>Oops 😕</h1>
               <p>Такого страницы не существует. Советуем вам перейти на <span><Link to="/">главную страницу</Link></span> </p>
         </div>
      </div>

      </>   
   )
}

export default NotFoundBlock;
