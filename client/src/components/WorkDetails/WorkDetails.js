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
                setWork({
                    works: workServices.filterWorks(workRes, match.params.workId)
                })
            })
    }, [])

    return (
        <div className="container">
            <div className="row bg-light text-dark">
                <h1>Details</h1>

                <div className="col-md-8">
                    <img className="img-thumbnail" src="{ctx.imageUrl}" alt="imageUrl" />
                </div>
                <div className="col-md-4 text-center">
                    <h3 className="my-3 ">Movie Description</h3>
                    <p>Deskription</p>
                    <Link className="btn btn-warning" to="#">Create</Link>
                    <Link className="btn btn-warning" to="#">Edit</Link>
                    <Link className="btn btn-danger" to="#">Delete</Link>
                </div>
            </div>
        </div >
    );
}

export default WorkDetails;