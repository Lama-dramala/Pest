// import Swiper from 'swiper';
// import { Scrollbar } from 'swiper';
import Swiper from 'swiper/bundle';

const initFranchisingSwiper = () => {

    const franchisingSwiper = new Swiper('.story__slider', {    

        slidesPerView: "auto",
        spaceBetween: 20,
        grabCursor: true,
        
        scrollbar: {
            el: '.story__scrollbar',
            draggable: true,
        },
    });

}

const initLicensesSwiper = () => {

    const licensesSwiper = new Swiper('.licenses__slider', {    

        slidesPerView: 1,
        spaceBetween: 30,
        grabCursor: true,
        
        navigation: {
            nextEl: ".licenses-control__next",
            prevEl: ".licenses-control__prev",
        },     
        pagination: {
            el: ".licenses__pagination",
        }, 
          
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1080: {
                slidesPerView: 3,
            },
        }
    });

}

const initMembersSwiper = () => {

    const membersSwiper = new Swiper('.members__slider', {    
        
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        
        navigation: {
            nextEl: ".members-control__btn",
        },       
        pagination: {
            el: ".members__pagination",
        }, 
          
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            900: {
                allowTouchMove: false,
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            1260: {
                slidesPerView: 4,
                slidesPerGroup: 4,
            },
        }       
    });

}

const initTeamSwiper = () => {

    const teamSwiper = new Swiper('.team__slider', {    

        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        grabCursor: true,
        
        navigation: {
            nextEl: ".team-control__next",
            prevEl: ".team-control__prev",
        },       
        pagination: {
            el: ".team__pagination",
        }, 
          
        breakpoints: {
            450: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
            1260: {
                slidesPerView: 4,
            },
        }       
    });

}


export const initSwiper = () => {

    initFranchisingSwiper()

    initLicensesSwiper()

    initMembersSwiper()

    initTeamSwiper()

}