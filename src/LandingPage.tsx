import { useState } from "react"
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
            <div id="summary">
                <h1>Vita</h1>
                <p> 
                    we specialize in empowering businesses with cutting-edge software development, AI-driven solutions,
                    and cloud technologies.
                </p>
            </div>
            <div className="section-container">
                <div className="section">
                    <h1>Problem</h1>
                    <p>
                        Startups and growing businesses often lack the technical expertise and resources needed to develop robust software solutions,
                        implement AI technologies, and manage scalable cloud infrastructures. 
                        This gap hinders their ability to innovate and compete effectively in today’s fast-paced digital landscape.
                    </p>
                </div>
                <div className="section">
                    <h1>Solution</h1>
                    <p>
                        ViTa Solutions provides expert software development, AI-driven innovation,
                        and cloud solutions tailored to meet the unique needs of startups and businesses without in-house technical teams.
                        We deliver scalable, efficient, and cost-effective technology services to help organizations thrive in the digital age.
                    </p>
                </div>
                <div className="section">
                    <h1>Mission</h1>
                    <p>
                    Our mission is to empower startups and businesses by bridging the technology gap,
                    enabling them to achieve their goals with cutting-edge solutions, 
                    innovation, and exceptional service.
                    </p>
                </div>
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