import React from 'react';
import s from './ModulesCss/Sitebar.module.css';
const Sitebar = () => {
    return (
        <div className={s.appsitebar}>
           <nav>
               <div className={s.item}>
                   Profile
               </div>
               <div className={s.item}>
                   Messages
               </div>
               <div className={s.item}>
                   Main Content
               </div>
           </nav>
        </div>
    );

};





export default Sitebar;
