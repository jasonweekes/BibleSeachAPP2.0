import useAxios from '../hooks/useAxios'
import React, { useState } from 'react';

function VerseText({ resultObj, index }) {
    const [showingText, setShowingText] = useState(false);
    const [setUrl, data, loading, setLoading, error, setAuth] = useAxios();

    function generateVerse(title) {
        console.log(title);

        // Check if title contains a number
        const hasNumber = /\d/.test(title);

        // If title doesn't have a number, assign "1:1"
        const verseTitle = hasNumber ? title : "1:1";

        setUrl(`https://bible-api.com/${verseTitle}`);
        setLoading(true);

        if (showingText) {
            setShowingText(false);
        } else {
            setUrl(`https://bible-api.com/${verseTitle}`);
            setLoading(true);
            setShowingText(true);
        }
    }

    return (
        <li key={index}>
            <span onClick={() => generateVerse(resultObj.title)}>
                {resultObj.title}
            </span>
            {!loading && data && showingText && <p>{data.text}</p>}
        </li>
    );
}

export default VerseText;

// Code works but does not add 1:1 if Cahpeters does not have any numbers attached to them
// function VerseText({resultObj, index}) {
//     const [showingText, setShowingText] = useState(false)
// const [setUrl, data, loading, setLoading, error, setAuth] = useAxios()
// function generateVerse(title){
//     console.log(title)
    
//     setUrl(`https://bible-api.com/${title}`)
//     setLoading(true)
//     if(showingText){
//         setShowingText(false)
//     } else {
//         setUrl(`https://bible-api.com/${title}`)
//         setLoading(true)
//         setShowingText(true)
//     }
// }
// return ( 
//         <li key={index}> 
//             <span onClick={() => generateVerse(resultObj.title)}>
//                 {resultObj.title}
//             </span>
//             <>

//             {!loading && data && showingText && <p>{data.text}</p>}
//             </>
//         </li>
    
// );



// }

// export default VerseText;

