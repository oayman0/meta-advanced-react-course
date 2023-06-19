import { useState, Children, cloneElement } from "react";

const RadioGroup = ({ onChange, selected, children }) => {
    // Use React.Children.map and React.cloneElement to clone the children
    // and pass the correct props to each RadioOption
    const mapped = Children.map(children, (child) =>
        cloneElement(child, { checked: selected, onChange })
    )
    // const RadioOptions = null;
    return <div className="RadioGroup">{mapped}</div>;
}; 

const RadioOption = ({ value, checked, onChange, children }) => {
    // Hook up the onChange handler to call the onChange prop passed to RadioGroup
    // Also, make sure to pass the correct checked prop to the input element
    const handleChange = () => {
        onChange(()=>value);
    }
    const status = checked === value ? true : false;
    return (
        <div className="RadioOption">
            <input id={value} type="radio" name={value} checked={status} onChange={handleChange} />
            <label htmlFor={value}>{children}</label>
        </div>
    );
};

function App() {
    const [selected, setSelected] = useState("");
    return (
        <div className="App">
            <h2>How did you hear about Little Lemon?</h2>
            <RadioGroup onChange={setSelected} selected={selected}>
                <RadioOption value="social_media">Social Media</RadioOption>
                <RadioOption value="friends">Friends</RadioOption>
                <RadioOption value="advertising">Advertising</RadioOption>
                <RadioOption value="other">Other</RadioOption>
            </RadioGroup>
            <button disabled={!selected}>Submit</button>

            <div>
               {selected && <h1> Now The selection is :{selected} </h1>}
            </div>
        </div>
    );
}
export default App;
