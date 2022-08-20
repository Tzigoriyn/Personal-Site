export const getAll = (grup) => {
    let urlWork = `https://personal-site-project-6b514-default-rtdb.firebaseio.com/works.json`;
    // did not work with Firebase !!!
    urlWork += (grup && grup !== 'all')
        ? `?works.grup=${grup}`
        : '';

    return fetch(urlWork)
        .then(res => res.json())
        .catch(error => alert(error.message))
}