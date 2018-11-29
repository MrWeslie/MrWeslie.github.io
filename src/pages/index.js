import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/project1.png'
import thumb02 from '../assets/images/project2.png'
import thumb03 from '../assets/images/project3.png'

import full01 from '../assets/images/project1-1.png'
import full02 from '../assets/images/project2-1.png'
import full03 from '../assets/images/project3-1.png'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Animal Farm Concentration Game', description: 'A memory card game that tests your memory.'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Online Claim Submission Form', description: 'A claim submission form that can perform authentication check to see if a client has claimed more than he/ she is eligible for.'},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'StackBananaflow', description: 'An online forum for posting and answering of queries.'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Gatsby Starter - Strata"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <h2>About Me</h2>
                        <p>An inspiring Web Developer looking for opportunities to learn and grow in this field. At my own leisure time, I do enjoy playing various kinds of board and card games.</p>
                        <div className="row">
                            <p> Get in touch with me and my projects on Github by clicking on the icons and links below. </p>
                                                                                                                                                                
                        </div>                  
                    </section>

                    <section id="two">
                        <h2>Portfolios</h2>
                        
                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description                       
                        }))} />

                        <p> <i> Link to Github: </i> 
                         <a href="https://github.com/MrWeslie" className="icon fa-github"><span className="label">Github</span></a> 
                        </p>

                        <p> <i> Link to various projects: </i> </p>
                        <ol>
                        <li><a href="https://mrweslie.github.io/Concentration-Game/" ><span className="label">Project- Animal Farm Concentration Game </span></a></li>
                        <li><a href="https://frozen-escarpment-76921.herokuapp.com/" ><span className="label">Project- Online Claim Submission Form </span></a></li>
                        <li><a href="https://stackbananaflow.herokuapp.com/" ><span className="label">Project- StackBananaflow </span></a></li>
                        </ol>

                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex

