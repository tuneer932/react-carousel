import React, { useEffect, useRef, useState } from 'react';
import { loggedInData, loggedOutData } from '../utils/imagesJson';
import Button from './styledComponents/Button';
import ImageCard from './styledComponents/imageCard';
import ImagesDiv from './styledComponents/imagesDiv';
import { useCookies } from 'react-cookie';

const CustomCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeIndexRef = useRef(0);
    const timeoutIntervalRef = useRef(null);
    const [cookies] = useCookies(['agilis-user']);

    useEffect(() => {
        activeIndexRef.current = activeIndex;
    }, [activeIndex])

    const previousIndex = () => {
        if (activeIndexRef.current === 0) {
            setActiveIndex(loggedOutData.length - 1)
        } else {
            setActiveIndex(activeIndexRef.current - 1)
        }
        setAutoAnimation()
    }

    const nextIndex = () => {
        if (activeIndexRef.current === loggedOutData.length - 1) {
            setActiveIndex(0)
        } else {
            setActiveIndex(activeIndexRef.current + 1)
        }
        setAutoAnimation()
    }

    useEffect(() => {
        setAutoAnimation();
    }, [])

    const setAutoAnimation = () => {
        if (timeoutIntervalRef.current) {
            clearInterval(timeoutIntervalRef.current);
        }
        timeoutIntervalRef.current = setInterval(() => {
            nextIndex();
        }, 5000);
    }

    return (
        <div className="container row col-12">
            <div className="col-2">
                <Button className="col-2" onClick={() => previousIndex()}>
                    {'<'}
                </Button>
            </div>
            <ImagesDiv className="row col-8" activeIndex={activeIndex}>
                {!cookies['agilis-user'] ? loggedOutData.map((item, index) =>
                    <ImageCard key={index} src={item.imageUrl} style={{
                        marginLeft: index === 0 ? -220 * activeIndex : 0,
                        transition: '2s'
                    }} />
                ) : loggedInData.map((item, index) =>
                    <ImageCard key={index} src={item.imageUrl} style={{
                        marginLeft: index === 0 ? -220 * activeIndex : 0,
                        transition: '2s'
                    }} />
                )}
            </ImagesDiv>
            <div className="col-2">
                <Button onClick={() => nextIndex()}>
                    {'>'}
                </Button>
            </div>
        </div>
    );
}

export default CustomCarousel;