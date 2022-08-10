import { ChangeEvent, useState } from "react";

const ComponentToInteractWith = () => {
    const [clicksCount, setClicksCount] = useState(0);
    const [wantToBuildSnowman, setWantToBuildSnowman] = useState<'yes' | 'no' | null>(null);
    const [email, setEmail] = useState<string>()

    const handleRadioButtonClick = (e: ChangeEvent<HTMLInputElement>) => {
        setWantToBuildSnowman(e.target.value as 'yes' | 'no');
    }
    return (
        <div>
            <div>
                <button 
                    onClick={() => setClicksCount(prev => prev + 1)}
                >
                    Click me!
                </button>
                <p>This button was clicked {clicksCount} times</p>
            </div>
            <div>
                <p>Do you wanna build a snowman?</p>
                <input type="radio" value="yes" onChange={handleRadioButtonClick} checked={wantToBuildSnowman === 'yes'}/>
                <label>Yes</label>
                <input type="radio" value="no" onChange={handleRadioButtonClick} checked={wantToBuildSnowman === 'no'}/>
                <label>No</label>

                {wantToBuildSnowman && <p>{wantToBuildSnowman === 'yes'?  `Come on, let's go and play!` : `Okay, bye...`}</p>}
            </div>
            <div>
                <label>Please enter you email address</label>
                <input type="email" placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
                {email && <p>Thanks! we'll send you a mail to the address {email}</p>}
            </div>
        </div>);
}

export default ComponentToInteractWith;