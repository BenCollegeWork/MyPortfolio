{/* This is the project page where users can view my projects */}
export default function Project() {
    return (
        <div>
            <h1>My Projects</h1>

            {/* Every project here contains a title, an image or PDF, and a list of bullet points describing the project and my role in it. */}
            <div className="project">
                <h2>Project #1 - Video Game Review Website</h2>
                <img src="/ProjectImage.png" alt="Project 1 Image" width="600" height="300"/>
                <ul>
                    <li> 
                        Led an academic project through the full software development lifecycle using Agile Scrum practices, 
                        emphasizing iterative verification and quality controls
                    </li>
                    <li> 
                        Managed task tracking and sprint planning in JIRA to monitor project progress, assigned backlog items, and
                        meet critical deliverable deadlines
                    </li>
                    <li>
                        Authored user stories and detailed acceptance criteria to establish clear testing guidelines and ensure
                        software deliverables met functional specifications
                    </li>
                    <li>
                        Conducted sprint reviews and functional software demos to validate feature implementations against initial
                        requirements and maintain product alignment 
                    </li>
                </ul>
            </div>
                
            <div className="project">
                <h2>Project #2 - MatchMyHome Software Requirements Specification (SRS) Document</h2>
                <object data="/COMP225_Group2_SRS_FINAL.pdf" type="application/pdf" width="600" height="400">
                </object>
                <ul>
                    <li>
                        Collaborated in a team to author a comprehensive SRS document for MatchMyHome, a mobile and web
                        platform connecting student tenants with seniors renting out extra space
                    </li>
                    <li>
                        Designed technical UML diagrams to clearly document software workflows and system behavior 
                    </li>
                </ul>
            </div>

            <div className="project">
                <h2>Project #3 - Car Rental Management System</h2>
                <object data="/Car_Rental_Management.pdf" type="application/pdf" width="600" height="400">
                </object>
                <ul>
                    <li>
                        Co-developed a database system and authored comprehensive technical documentation – including
                        stakeholder registry, ER diagrams, and SQL schemas – ensuring precise data validation, structured table
                        population, and strict adherence to system specification
                    </li>
                </ul>
            </div>
        </div>
    );
}