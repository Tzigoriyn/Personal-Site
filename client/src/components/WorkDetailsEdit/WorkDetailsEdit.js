/* eslint-disable react-hooks/exhaustive-deps */
import { storage } from '../../utils/firebase';
import { useState, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import * as workServices from '../services/workServices'

import style from './WorkDetailsEdit.module.css';

const WorksCreate = ({
    match,
    history
}) => {
    const [file, setFile] = useState('');
    const [percent, setPercent] = useState(0);
    const [url, setUrl] = useState('');
    const [editWork, setEditWork] = useState({})
    const [setWorkValue] = useState('');

    useEffect(() => {
        if (!match.params.workId) {
            return;
        }

        workServices.getAll()
            .then(workRes => {
                let work = Object.values({ works: workServices.filterWorks(workRes, match.params.workId) });

                setEditWork(work[0])
            })
    }, [])

    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    const handleUpload = () => {
        if (!file) {
            alert("Please upload an image first!");
        }

        const storageRef = ref(storage, `/works/${file.name}`);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((url) => {
                        setUrl(url);
                    });
            }
        );
    };

    const onstepChangeSelectHandlelr = (e) => {
        const workValue = e.target.value;

        setWorkValue(workValue)
    };

    const onCreateFormSubmitHandler = (e) => {
        e.preventDefault();

        const work = e.target.work.value;
        const grup = e.target.grup.value;
        const templeteWork = e.target.templeteWork.value;
        const imgWork = e.target.imgWork.value;
        const title = e.target.title.value;
        const description = e.target.description.value;

        workServices.patchOne(work, grup, templeteWork, imgWork, title, description, match.params.workId)

        history.push(`/work/details/${match.params.workId}`);
    }
    return (
        <div className={style.loginBox}>
            <h2>Edit work</h2>
            <form className={style.form} onSubmit={onCreateFormSubmitHandler}>
                <div className={style.userBox}>
                    <input type="text" name="work" required="work" defaultValue={editWork.work} />
                    <label htmlFor="work">Field of work</label>
                </div>
                <div className={style.userBox} id="workDescription" onChange={onstepChangeSelectHandlelr} defaultValue={editWork.work}>
                    <select name="grup" id="grup">
                        <option>webdesign</option>
                        <option>webdev</option>
                        <option>mobileapps</option>
                    </select>
                </div>
                <div className={style.userBox}>
                    <input type="text" name="templeteWork" required="templeteWork" defaultValue={editWork.templeteWork} />
                    <label htmlFor="templeteWork">PSD Template</label>
                </div>
                <div>
                    <input type="file" onChange={handleChange} accept="/image/*" />
                    <button onClick={handleUpload}> Upload picture </button>
                    <p> {percent} "% done" </p>
                </div>
                <div className={style.userBox}>
                    <input type="text" name="imgWork" required="imgWork" defaultValue={editWork.imgWork} />
                    <label htmlFor="imgWork">{url}</label>
                </div>
                <div className={style.userBox}>
                    <input type="text" name="title" required="title" defaultValue={editWork.title} />
                    <label htmlFor="title">Title</label>
                </div>
                <div className={style.userBox}>
                    <input type="text" name="description" required="description" defaultValue={editWork.description} />
                    <label htmlFor="description">Description</label>
                </div>
                <button className={style.submitBtn} type="submit">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Edit work
                </button>
                <div style={{ fontSize: "20px" }}>Please find the right position to submit &#128523;</div>
            </form>
        </div>
    );
}

export default WorksCreate;