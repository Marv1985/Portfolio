import './Footer.css'
import { useState } from 'react';
import GitHubIcon from '../../assets/github.svg?component'
import MailIcon from '../../assets/mail.svg?component'

function getDate() {
    const today = new Date()
    const year = today.getFullYear()
    return `${year}`;
  }

const Footer = () => {

    const [currentDate, setCurrentDate] = useState(getDate())

    return (
        <div className="footerContainer">
            <div className="max_width">
                <p>&copy; Marv Shannon {currentDate}</p>
                <div className="right">
                    <a title='GitHub' href='https://github.com/Marv1985' target='_blank'>
                        <GitHubIcon/>
                    </a>
                    <a title='Email' href="mailto:marvinshannon@hotmail.co.uk">
                        <MailIcon/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer