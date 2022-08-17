import { useState, useEffect } from 'react';
import { auth } from '../../utils/firebase';

console.log(auth);

const useOwner = (url) => {

    const [state, setState] = useState();

    useEffect(() => {


        fetch(url)
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                
                const currentUser = result.find(result => result.email);

                setState(currentUser);
            })
            .catch(error => alert(error.message))
    }, [url]);

    return [
        state,
    ];
}

export default useOwner;