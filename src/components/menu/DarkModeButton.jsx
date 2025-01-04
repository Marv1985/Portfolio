import Light from '../../assets/light.svg?component'
import Dark from '../../assets/dark.svg?component'
import { useState } from 'react'

const DarkModeButton = () => {

    const [checked, setChecked] = useState(true);

    // Toggle the "dark" class on the <html> element
    const toggleTheme = () => {
        setChecked(!checked);
        document.documentElement.classList.toggle('dark'); 
    };

    return (
        <label className="switch">
            <input type="checkbox" checked={!checked} onChange={toggleTheme} onKeyDown={(e) => { if (e.key === 'Enter') { toggleTheme(); } }}/>
            <span className="slider round">
                <Dark/>
                <Light/>
            </span>
        </label>
    )
}

export default DarkModeButton