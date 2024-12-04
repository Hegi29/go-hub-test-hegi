import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const loopEnabled = images.length > 1;

    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={loopEnabled}
            loopAdditionalSlides={images.length}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className="flex justify-center items-center h-screen">
                        <Image
                            src={image}
                            alt="Powder Canister"
                            width={500}
                            height={500}
                            unoptimized
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
