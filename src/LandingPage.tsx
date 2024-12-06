import { useState } from "react"
import "./LandingPage.css"
import vitaLogo from "./assets/temp_logo.png"

function Contact(){
    return(
    <>
    <div className="section">
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
        <div className="section">
            <h1>Summary</h1>
            <img src={vitaLogo}></img>
            <h2>Problem</h2>
            <p>
                Startups and growing businesses often lack the technical expertise and resources needed to develop robust software solutions,
                implement AI technologies, and manage scalable cloud infrastructures. 
                This gap hinders their ability to innovate and compete effectively in today’s fast-paced digital landscape.
            </p>
            <h2>Solution</h2>
            <p>
                ViTa Solutions provides expert software development, AI-driven innovation,
                and cloud solutions tailored to meet the unique needs of startups and businesses without in-house technical teams.
                We deliver scalable, efficient, and cost-effective technology services to help organizations thrive in the digital age.
            </p>
            <h2>Mission</h2>
            <p>
            Our mission is to empower startups and businesses by bridging the technology gap,
            enabling them to achieve their goals with cutting-edge solutions, 
            innovation, and exceptional service.
            </p>
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


        </>
    )
}

export default LandingPage