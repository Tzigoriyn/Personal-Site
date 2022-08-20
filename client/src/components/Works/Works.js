import { Component } from "react";
import * as workServices from '../services/workServices';
import WorkNav from "./WorkNav/WorkNav";
import WorkCard from "../WorkCard/WorkCard";

class Work extends Component {
    constructor(props) {
        super(props);

        this.state = {
            works: {},
            curentGrup: 'all'
        };
    }


    componentDidMount() {
        workServices.getAll()
            .then(workRes => this.setState({ works: workRes }))
    }

    componentDidUpdate(prevProps) {
        let grup = this.props.match.params.grup;

        if (prevProps.match.params.grup === grup) {
            return;
        }

        workServices.getAll(grup)
            .then(workRes => {
                this.setState({
                    works: workServices.filterWorks(workRes, grup)
                })
            })
    }

    render() {
        return (
            <section className="site-section section-works" id="works" >
                <div className="container">
                    <h2>RECENT WORKS</h2>
                    <p className="section-subtitle"><span>OUR CLIENTS LOVE US! READ WHAT THEY HAVE TO SAY</span></p>
                    <div className="portfolio">
                        <WorkNav />
                        <div id="grid">
                            {Object.entries(this.state.works)
                                .map(x => < WorkCard
                                    key={x[0]}
                                    imgWork={x[1].imgWork}
                                    grup={x[1].grup}
                                    templeteWork={x[1].templeteWork}
                                    work={x[1].work}
                                />
                                )}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Work;