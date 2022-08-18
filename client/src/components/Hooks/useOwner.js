import { useState, useEffect } from 'react';

const useOwner = (email) => {

    const [state, setState] = useState();

    useEffect(() => {

        fetch('https://personal-site-project-6b514-default-rtdb.firebaseio.com/users.json')
            .then(res => res.json())
            .then(results => {
                const currentUser = Object.values(results).find(result => result.email === email);

                setState(currentUser)
            });
        // })
        // .catch(error => alert(error.message))
    }, [email]);

    return [
        state,
    ];
}

export default useOwner;