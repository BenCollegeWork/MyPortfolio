{/* This is the about page where users can learn more about me */}
export default function About() {

    {/*  No states are needed for this page since it is a static page that does not require any user interaction or dynamic content. */}
    return (
        <div>
            <h1>About Me</h1>
            
            <div className="aboutMe">
                {/* My profile picture is a clickable link that opens my resume in a new tab */}
                <div className="portrait">
                    <a href="/Resume_BenjaminOliveria.pdf" target="_blank" rel="noopener noreferrer">
                        <img src="/PFP.jpg" alt="Profile Picture" width="192" height="255"/>
                    </a>
                </div>
                
                {/* This paragraph contains a brief introduction about me, my background, and my interests */}
                <p>
                    Hello! My name is <b>Benjamin Oliveria</b>, and I am a 2nd year Software Engineering Co-op student at Centennial College. 
                    I also hold a degree in Computer Science from Western University in London, Ontario. With over 4 years of
                    academic programming experience, I have developed a strong foundation in various programming languages, concepts 
                    such as data strcutures and algorithms, software development methodologies, and problem-solving skills. I am passionate 
                    about creating innovative and efficient software solutions that can make a positive impact on people's lives. I also like 
                    to be creative and explore new technologies which is why I have a keen interest in game development. I am excited to continue
                    learning and growing as a software engineer and I look forward to contributing my skills and knowledge to the field. &nbsp;
                    <a href="../src/assets/Resume_BenjaminOliveria.pdf" target="_blank" rel="noopener noreferrer"> Click here or my profile picture to view my resume.</a>
                </p>
            </div>
        </div>
    );
}