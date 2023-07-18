import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import './Homecss.css'
import { fetchProducts } from '../../redux/actions/products';


const Home = (props) => {
    const { t, i18n } = useTranslation();
    const globalsates = useSelector(state => state)
    console.log("globalsatesglobalsates", globalsates)

    const [products, setProducts] = useState([])

    useEffect(()=>{
      fetchProducts().then((res)=>{
        console.log("res+++++++",res)
      }).catch((error)=>{
        console.log("error raised",error)
      })
    },[])


    const locales = {
        en: { title: 'English' },
        ar: { title: 'Arabic' },
        es: { title: 'Español' },
    };



    return (
        <div>
        <div className='container' >
            <p>{t('main.regards')}</p>
            <ul>
                {Object.keys(locales).map((locale) => (
                    <li key={locale}><button style={{ fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(locale)}>
                        {locales[locale].title}
                    </button></li>
                ))}
            </ul>
        </div>

        <div style={{ backgroundColor: 'rgba(0,0,0,0.1)',padding: '10px',marginTop: '20px' }} >
                    <h3>Data fetch from an Api and save data into reducer and render below list direct from reducer</h3>
                {globalsates?.products && globalsates?.products?.data.map((val,i)=>{
                    return(
                        <div>
                            <p>{val?.title}</p>
                        </div>
                    )
                })} 
            </div>
        </div>
    );
}

export default Home;
