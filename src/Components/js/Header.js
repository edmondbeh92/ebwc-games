import React, {useState} from 'react';

const Header = () => {
    const [check, setCheck] = useState(false);

    return(
        <div>
            <h1>This is a checkbox!</h1>
            <label>
                <input type='checkbox' checked={check} onChange={e => setCheck(e.target.checked)} />
                <span style={{color: check ? 'black' : 'gray'}}>Click me!</span>
            </label>
        </div>
    )
}

export default Header;