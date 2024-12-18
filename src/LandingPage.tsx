import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react"
import vitaLogo from "./assets/temp_logo.png"
import "./LandingPage.css"

const whyUs = [
    {"title": "Founder Expertise", "description": "Years of technical knowledge."},
    {"title": "Rapid Deployment", "description": "Launch products faster."},
    {"title": "Cost-Efficient Pricing", "description": "Affordable, transparent, and predictable."},
    {"title": "Custom Solutions", "description": "Tailored services for startups."}
]
const services = [
    {"title": "Custom Software Development", "description": "From conecpt to launch, we craft your custom web and mobile apps."},
    {"title": "AI & Machine Learning", "description": "Save time with smart, AI-driven automations and customer service."},
    {"title": "Cloud Infrastructure", "description": "Seamless, secure migrations to cost-effective cloud platforms."},
    {"title": "Predictive Analytics", "description": "Get ahead of the curve with predictive models and visual insights."}
]

function Contact(){
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [inquiry, setInquiry] = useState("")
    return(
    <>
        <div id="contact">
            <h1>Send an inquiry and get a reply within a day!</h1>
            <form>
                <label>Full Name: </label><input id="fullname" name="fullname" onChange ={(e)=>{setFullname(e.target.value)}} value={fullname} type="text"></input>
                <label>email: </label><input id="email" name="email" type="text" onChange ={(e)=>{setEmail(e.target.value)}} value={email}></input>
                <br></br>
                <textarea name="Text1" cols= {50} rows={10} value={inquiry} onChange ={(e)=>{setInquiry(e.target.value)}}></textarea>
                <br></br>
                <input type="submit" value="submit"></input>
            </form>
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
                <CardSection header="Our services" cards={services}></CardSection>
            </div>
            <div className="wite-block">
                <Contact></Contact>
            </div>
        </div>
        </>
    )
}

function LandingPage(){
    return(
        <>
        <div className="nav">
            <a>
                <span>Summary</span>
            </a>
            <a>
            <span>Contact</span>
            </a>
        </div>
        <Dashboard></Dashboard>
        <footer>
        </footer>
        </>
    )
}

export default LandingPage