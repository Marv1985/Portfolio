import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';

const MobileMenu = ({handleSelect, selectedLinks, projectsData}) => {

    return (
        <div className="mobile_projects_menu">
            <Swiper 
            spaceBetween={15} 
            slidesPerView={'auto'} 
            speed={500}
            >
            {/* This is the link that functions differently */}
            <SwiperSlide>
                <Link 
                onClick={() => handleSelect('portfolio')} 
                to={'/projects'} 
                className={selectedLinks['portfolio'] ? 'selected' : ''}
                >
                My Portfolio
                </Link>
            </SwiperSlide>

            {/* This is the loop for project links */}
            {Object.keys(projectsData).map((key) => (
                <SwiperSlide key={key}>
                <Link 
                    onClick={() => handleSelect(key)} 
                    to={`/projects/${key}`} 
                    className={selectedLinks[key] ? 'selected' : ''}
                >
                    {projectsData[key].title}
                </Link>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    )
}

export default MobileMenu
