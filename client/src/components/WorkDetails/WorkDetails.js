/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as workServices from '../services/workServices'

const WorkDetails = ({
    match,
    history,
}) => {
    const [work, setWork] = useState({});


    useEffect(() => {
        workServices.getAll()
            .then(workRes => {
                let work = workServices.filterWorks(workRes, match.params.workId)
                setWork(work)
            })
    }, [])

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

                    <Link className="btn btn-warning" to={`/work/details/${match.params.workId}/edit`}>Edit</Link>
                    <Link className="btn btn-danger" to="/work/delete">Delete</Link>
                </div>
            </div>
        </div >
    );
}

export default WorkDetails;