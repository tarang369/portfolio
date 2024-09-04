import '@splidejs/react-splide/css';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import { RECENT_WORK } from "../constants";

const Slider = () => {

    const ImageSlide = ({item, index}) => {
        return (
            <SplideSlide
                className="rounded-xl max-h-[600px] bg-gradient-to-b from-zinc-900 to-zinc-950"
            >
                <img src={item} alt={"demo" + index} className="w-full h-full object-contain" />
            </SplideSlide>
        )
    }
    return (
        <div className="w-3/4 mx-auto my-16">

            <Splide options={{
                type: 'loop',
                perPage: 1,
                perMove: 1,
                pagination: true,
                drag: true,
                loop: true,
                autoHeight: true,
                autoplay: true,
                pauseOnHover: false,
                resetProgress: false,
            }}>
                {RECENT_WORK.map((item, index) => <ImageSlide key={index} item={item} index={index} />)}
            </Splide>
        </div>
    );
};

export default Slider;