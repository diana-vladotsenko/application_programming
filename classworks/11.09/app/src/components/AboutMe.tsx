import "../style/AboutMe.css"
import Form from "../shared/Form.tsx"

export default function AboutMe(){
    return(
        <>
        <div className="about-section">
            <h2>About Me</h2>
            <div className="about-description">
                <p>Diana Vladotsenko</p>
                <p><strong>Hobbies: </strong> Playing Ukulele and Piano, Drawing Digital Stickers, Ceramics, Strength Workout, Investing, Crocheting
                </p>
            </div>
        </div>
        <Form/>
        </>
    );
};