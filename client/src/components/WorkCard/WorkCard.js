import { Link } from "react-router-dom";

const WorkCard = ({
    id,
    work,
    grup,
    templeteWork,
    imgWork
}) => {
    return (
        <div className="col-md-3 col-sm-4 col-xs-6" data-groups={`["${grup}"]`} >
            <div className="portfolio-item">
                <div className="portfolio-item-thumb">
                    <img src={imgWork} alt="" className="img-res" />
                    <Link to="/work/details/:workId" className="rectangle" data-toggle="modal" data-target="#portfolioItem1">
                        <i className="fa fa-plus"></i>
                    </Link>
                </div>
                <div className="portfolio-info">
                    <h3>{templeteWork}</h3>
                    <p>{work}</p>
                </div>
            </div>
        </div >
    );
}

export default WorkCard;