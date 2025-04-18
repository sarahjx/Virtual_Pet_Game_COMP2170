// import DialogueBox from "../ui/dialogues/Dialogues"
// import onboardingContent from "../back_end/content/OnboardingContent"
// import Button from "../ui/Button/button"
// import styles from './page.module.css'
// import { useState } from 'react';

'use client'; // needed for Next.js when using useState or other client-side features

import { useState } from 'react';
import DialogueBox from "../ui/dialogues/Dialogues";
import onboardingContent from "../back_end/content/OnboardingContent";
import Button from "../ui/Button/button";
import styles from './page.module.css';


function Onboarding(){
    const [showDialogue, setShowDialogue] = useState(false);

    const handleClick = () => {
      setShowDialogue(true);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Welcome to Pet Sim</h1>
            <Button
            onClick={handleClick}
            value={onboardingContent.LandingPage.prompt}
            imageSrc="/graphics/onboardingGraphics/startbutton.svg"
            alt="Start Button"
          />
        {showDialogue && (
        <DialogueBox
          text={onboardingContent.WelcomeMessage.prompt}
          onClose={() => setShowDialogue(false)} // optional: if your DialogueBox supports closing
        />
      )}
        </div>
        
    )
}
export default Onboarding