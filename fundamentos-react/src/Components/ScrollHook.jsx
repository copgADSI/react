import React, {useEffect,useState} from 'react'

export  function ScrollHook() {
    const [scrollY, setScrollY] = useState(0)
    useEffect(() =>{
        console.log('Fase de Montaje');
        const detectarScroll =() => setScrollY(Window.pageYOffset)
        console.log(scrollY);
        window.addEventListener('scroll', detectarScroll)
    })
    return (
        <>
          <h2>Hook useEffect y ciclo de vida</h2>   
          <p>Scroll Y del Navegador  {scrollY}px </p>
        </>
    )
}
