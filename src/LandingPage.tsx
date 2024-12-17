import { useState } from "react"
import vitaLogo from "./assets/temp_logo.png"
import "./LandingPage.css"


function Contact(){
    return(
    <>
        <div id="contact">
            <h1>Contact</h1>
            <p>Whatsapp: <a href="tel:+971505756010">+971 50 575 6010</a></p>
            <p>Email: <a href="mailto:tariq.alotaibi@live.com">tariq.alotaibi@live.com</a></p>
        </div>
    </>
    )
}

function Dashboard(){
    return(
        <>
        <div id="dashboard">
            <div id="starter-section">
                <div className="explanatory-text">
                <h1>Vita - Software Solutions Reimagined</h1>
                    <p> 
                        we specialize in empowering businesses with cutting-edge software development, AI-driven solutions,
                        and cloud technologies.
                    </p>
                </div>
                <img src={vitaLogo}></img>
            </div>
        </div>
        </>
    )
}

function LandingPage(){
    const [page, setPage] = useState(0)
    return(
        <>
        <div className="nav">
            <a onClick={()=>{setPage(0)}}>
                <span>Summary</span>
            </a>
            <a onClick={()=>{setPage(1)}}>
            <span>Contact</span>
            </a>
        </div>

        { page==0 &&
        <Dashboard></Dashboard>
        }
        { page==1 &&
        <Contact></Contact>
        }

        <footer>
        </footer>
        </>
    )
}

export default LandingPage