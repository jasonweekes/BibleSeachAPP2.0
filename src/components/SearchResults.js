
import VerseText from './VerseText';

function SearchResults({results}) {
   
    return ( 
        <ul>
            <span>Here are the passages that may contain the text you're looking for in addition by clicking on the passages it will reveal the scripture.:</span>
            {results.map((resultObj, index) =>(
                <VerseText resultObj={resultObj} index={index}/>
            ))}
         </ul>
    );
}  
                
export default SearchResults;
