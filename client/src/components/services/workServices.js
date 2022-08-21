import { database } from '../../utils/firebase';
import { ref, set } from "firebase/database";

export const getAll = () => {
    let urlWork = `https://personal-site-project-6b514-default-rtdb.firebaseio.com/works.json`;
    // did not work with Firebase !!!
    // urlWork += grup
    //     ? `?works.grup=${grup}`
    //     : '';

    return fetch(urlWork)
        .then(res => res.json())
        .catch(error => alert(error.message))
}

export const filterWorks = (workRes, grup) => {
    if (grup === 'all') {
        return workRes;
    } else if (grup === 'webdesign' || grup === 'mobileapps' || grup === 'webdev') {
        return Object.entries(workRes)
            .filter(x => x[1].grup === grup)
            .reduce((accum, [k, v]) => {
                accum[k] = v;
                return accum;
            }, {});
    } else {
        let selectedWork = Object.entries(workRes)
            .find(x => x[0] === grup);

        return selectedWork[1];
    }
}

export const createWork = (work, grup, templeteWork, imgWork, title, description) => {
    set(ref(database, '/works/' + Math.floor(Math.random() * 100)
    ), {
        work,
        grup,
        templeteWork,
        imgWork,
        title,
        description,
    })
        .catch(error => alert(error.message));
}

export const patchOne = (work, grup, templeteWork, imgWork, title, description, workId) => {
       
        set(ref(database, '/users/' + workId), {
            work,
            grup,
            templeteWork,
            imgWork,
            title,
            description,
        });
    }