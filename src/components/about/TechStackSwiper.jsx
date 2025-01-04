import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';

const TechStackSwiper = ({obj, icons}) => {
    return (
        <Swiper 
            ref={icons}
            modules={[Autoplay]}
            spaceBetween={0} 
            slidesPerView={3} 
            grabCursor={true}
            speed={500}
            autoplay={{
                delay: 2500, // Delay between slide transitions in ms
                disableOnInteraction: false, // Prevent autoplay from stopping after interaction (optional)
            }}
            >
            {Object.entries(obj).map(([key, { svg: SvgComponent, text }]) => (
                <SwiperSlide key={key}>
                    <div className="icon_container">
                        <div>
                            <SvgComponent />
                            <p>{text}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
export default TechStackSwiper