import { RiArrowRightLine } from "@remixicon/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

type InstaPost = {
  id: string;
  timestamp: Date;
  permalink: string;
  caption: string;
  media_url: string;
};

type Props = {
  posts: Array<InstaPost>;
};

const InstagramSection: React.FC<Props> = ({ posts }) => {
  const lastPost = posts.slice(0, 3);

  return (
    <section className="w-full h-full max-h-[100vh] min-h-0 min-w-0 bg-primary-100">
      <div className="container px-4 pt-8 lg:pt-12 mx-auto mb-8 lg:mb-20">
        <Swiper
          className="mb-4"
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {lastPost.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-start">
                <a
                  className="sm:w-full"
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={post.media_url} alt="banner img" />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex gap-2 justify-center lg:hidden">
          <a
            href="https://www.instagram.com/ads.atelier/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-500 font-title lg:text-base"
          >
            Ir a Instagram
          </a>
          <RiArrowRightLine className="text-secondary-500" />
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
