import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react"
import vitaLogo from "./assets/temp_logo.png"
import "./LandingPage.css"

const whyUs = [
    {"title": "Founder Expertise", "description": "Years of technical knowledge."},
    {"title": "Rapid Deployment", "description": "Launch products faster."},
    {"title": "Cost-Efficient Pricing", "description": "Affordable, transparent, and predictable."},
    {"title": "Custom Solutions", "description": "Tailored services for startups."}
]
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
function Services(){
    return(
        <>

            <div className="services">
                <h1>Our services</h1>
                <div className="service">
                    <h2>

                    </h2>
                </div>
            </div>

        </>
    )
}

function IntroText(){
    return(<>

        <div id="explanatory-text">
        <h1>Vita - Software Solutions Reimagined</h1>
            <p> 
                we specialize in empowering businesses with cutting-edge software development,<br></br> AI-driven solutions,
                and cloud technologies.
            </p>
        </div>

    </>)
}

//created a reusable component
function CardSection(props: { header: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; cards: any[] }){
    return(
        <>
        <div>
            <h1>{props.header}</h1>
            <div className="sections-container">
                {props.cards.map((card, idx)=>(
                    <div className="section" key={idx}>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}


function Dashboard(){
    return(
        <>
        <div id="dashboard">
            <div className="white-block">
                <IntroText></IntroText>
                <CardSection header="Why Choose Vita?" cards={whyUs}></CardSection>
            </div>
            <div className="black-block">
                <Services></Services>
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