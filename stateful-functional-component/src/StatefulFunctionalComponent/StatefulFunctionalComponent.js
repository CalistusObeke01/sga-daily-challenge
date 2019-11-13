import React, { useState, useEffect } from 'react';
import './StatefulFunctionComponent.css';

function StatefulFunctionalComponent () {
    const [timer, setTimer] = useState(null)
    const [visible, setVisible] = useState(false)
    
    useEffect(() => {
        setTimeout(() => {
          setVisible(false)
        }, 4000);
        setTimer(null)
        setVisible(true)
    }, []);
    
    const styles = { 
        display: visible ? 'block' : 'none'  
    }

    return (  
    <div style={styles} className="style-content">I will hide in 4 seconds.</div>
    )
}

export default StatefulFunctionalComponent