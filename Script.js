gsap.from("#main h1",{
    opacity:0,
    x:-700,
    scale:0.4,
    stagger:.3,
    delay:1,
    duration:2,
    scrub:4
});
gsap.from("#main #project",{
    scrollTrigger:{
        trigger:"#main h2",
        scroller:"body",
        // markers:true,
        scrub:3,
        stagger:.2,
        start:"top 50%",
        end:"bottom 55%"
    },
    opacity:0,
    marginLeft:-4
});
gsap.from("#page5",{
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        // markers:true,
        start:"top 35%",
        scrub:5,
    },
    scale:0,
    duration:3
})
;gsap.to("#page4 h1",{
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        scrub:5,
        end:"bottom 95%"
    },
    marginLeft:0,
    duration:2,
    opacity:1
});

gsap.to("#blank",{
    scrollTrigger:{
        trigger:"#page6 #blank",
        scroller:"body",
        // markers:true,
        scrub:2,
        start:"top 95%",
        end:"bottom 85%"

    },
    rotate:178,
    duration:1,
});
gsap.to("#pic",{
    scrollTrigger:{
        trigger:"#page6 #pic",
        scroller:"body",
        // markers:true,
        scrub:2,
        start:"top 95%",
        end:"bottom 85%"
    },
    rotate:6,
    duration:1
});

