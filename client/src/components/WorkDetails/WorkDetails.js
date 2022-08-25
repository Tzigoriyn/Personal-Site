/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as workServices from '../services/workServices'
import { useContext } from 'react';
import OwnerContext from '../contexts/ownerContext';
import AuthContext from '../contexts/authContext';

const WorkDetails = ({
    match,
    history,
}) => {
    const [work, setWork] = useState({});
    const authInfo = useContext(AuthContext)
    const ownerInfo = useContext(OwnerContext);

    useEffect(() => {
        workServices.getAll()
            .then(workRes => {
                let work = workServices.filterWorks(workRes, match.params.workId);
                setWork(work);
            })
    }, []);

    const onDeleteHaandler = () => {
        workServices.deleteOne(match.params.workId, authInfo.uid)

        history.push('/works')
    }

    return (
        <div className="container">
            <div className="row bg-light text-dark">
                <h1>{work.work}</h1>

                <div className="col-md-8">
                    <img className="img-thumbnail" src={work.imgWork} alt={work.imgWork} />
                </div>
                <div className="col-md-4 text-center">
                    <h3 className="my-3 ">{work.title}</h3>
                    <p>{work.description}</p>
                    {ownerInfo.isOwner ?
                        <>
                            <Link className="btn btn-warning" to={`/work/details/${match.params.workId}/edit`}>Edit</Link>
                            <Link className="btn btn-danger" to="/works" onClick={onDeleteHaandler}>Delete</Link>
                        </>
                        : ""}
                </div>
            </div>
        </div >
    );
}

export default WorkDetails;