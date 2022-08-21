import { storage } from '../../utils/firebase';
import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import * as workServices from '../services/workServices'

import style from './WorkCreate.module.css';

const WorksCreate = ({
    history
}) => {
    const [file, setFile] = useState('');
    const [percent, setPercent] = useState(0);
    const [url, setUrl] = useState('');
    const [setWorkValue] = useState('');


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

        workServices.createWork(work, grup, templeteWork, imgWork, title, description);

        history.push('/works/all');
    }
    return (
        <div className={style.loginBox}>
            <h2>Create work</h2>
            <form className={style.form} onSubmit={onCreateFormSubmitHandler}>
                <div className={style.userBox}>
                    <input type="text" name="work" required="work" />
                    <label htmlFor="work">Field of work</label>
                </div>
                <div className={style.userBox} id="workDescription" onChange={onstepChangeSelectHandlelr}>
                    {/* <input type="text" name="grup" required="grup" value={workValue}/> */}
                    <select name="grup" id="grup">
                        <option>webdesign</option>
                        <option>webdev</option>
                        <option>mobileapps</option>
                    </select>
                </div>
                <div className={style.userBox}>
                    <input type="text" name="templeteWork" required="templeteWork" />
                    <label htmlFor="templeteWork">PSD Template</label>
                </div>
                <div>
                    <input type="file" onChange={handleChange} accept="/image/*" />
                    <button onClick={handleUpload}> Upload picture </button>
                    <p> {percent} "% done" </p>
                </div>
                <div className={style.userBox}>
                    <input type="text" name="imgWork" required="imgWork" defaultValue={url} />
                    <label htmlFor="imgWork">Img work</label>
                </div>
                <div className={style.userBox}>
                    <input type="text" name="title" required="title" />
                    <label htmlFor="title">Title</label>
                </div>
                <div className={style.userBox}>
                    <input type="text" name="description" required="description" />
                    <label htmlFor="description">Description</label>
                </div>
                <button className={style.submitBtn} type="submit">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Create work
                </button>
                <div style={{ fontSize: "20px" }}>Please find the right position to submit &#128523;</div>
            </form>
        </div>
    );
}

export default WorksCreate;