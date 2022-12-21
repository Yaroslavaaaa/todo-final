import './index.css' 
import sun from '../../images/icon-sun.svg'
import moon from '../../images/icon-moon.svg'

export const Header = ({dark, setDark}) => {
    
    return(
        <div className='header'>
            <div className='todo'>TODO</div>
            <div><img src={dark?sun:moon} alt={dark?"moon":"sun"} onClick={()=>(setDark((prevDark)=>!prevDark))} /></div>
        </div>
    )
}