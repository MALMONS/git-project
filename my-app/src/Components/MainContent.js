import React from 'react';
import c from './ModulesCss/Content.module.css';

const Header = () => {
    return (
        <div className={c.appcontent}>
            <header>
                <img src="https://avatars.mds.yandex.net/get-pdb/1245924/3f504d50-049b-40ca-9bf7-9b9d1c3b2346/s1200" alt{}/>
            </header>
            <div className={c.avatar}>
                <img src="https://cs8.pikabu.ru/post_img/2017/08/01/7/1501586649182953144.jpg" alt=""/>
            </div>
            <div className={c.item}>
                My post
            </div>
            <div>
                New post
            </div>
            <div>
                post1
            </div>
            <div>
                post 2
            </div>
        </div>
    );
};


export default Header;
