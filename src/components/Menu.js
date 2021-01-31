import React, { Component, useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: '/images/bobs-meat-1.jpg',
        altText: 'slide 1',
        caption: 'Lots of meat options'
    },
    {
        src: '/images/bobs-meat-2.jpg',
        altText: 'slide 2',
        caption: 'Handmade sausages'
    },
    {
        src: '/images/bobs-meat-4.jpg',
        altText: 'slide 2',
        caption: 'All locally sourced'  
    }
]

const Example = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
            <img src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });
    
        return (
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        );
}

class Menu extends Component{
    render(){
        return(
            <div>
                <div className='row'>
                    <div className='col'>
                        <h1 className="bobs-title">Menu</h1>
                        <p>For generations, Bob's Quality Meats has upheld a tradition
                            of providing only the freshest meats from sustainable grassy 
                            pastures. No hormones. No antibiotics. 
                        </p> <br/>
                    </div>
                </div>
                <div className='row'>
                    <Example/>
                </div>
                <div className='mt-5 row'>
                    <h1>Bundle of Meat</h1>
                    <h2>Call us at for Current Prices</h2>
                    <h2>Please give 2-3 days advance notice for special orders</h2>
                    <img src={bundle1} alt="bundle-meat"/>
                    <img src={bundle2} alt="bundle-meat"/>
                    <img src={bundle3} alt="bundle-meat"/>
                </div>
            </div>
        )
    }
}

const bundle1 = './images/bundle-list-1.jpg'
const bundle2 = './images/bundle-list-2.jpg'
const bundle3 = './images/bundle-list-3.jpg'

export default Menu