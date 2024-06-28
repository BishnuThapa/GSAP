// Greensock Animation Platform=> animation related to movement
// scrollTriger for triger event while scroll
// swipper js for sliding animation
// Locomotive js for smooth scrolling


gsap.to("#box", {
    x: 800,
    duration: 3, //3 second to reach 800 px on x axis.
    delay: 1, //it will start after 1 second
    rotate: 360,
    backgroundColor: "red", //css property using gsap
    borderRadius: "50%",
    scale: 2, // double size
    // scale:0.5// means smaller than before default value is 1
    repeat: 2,// three times because 1 is default and plays only one direction
    // repeat:-1// infinite loop
    yoyo:true, // revert back the step as like bouncing ball
})

gsap.from("#box2", {
    x: 800,
    y: 250,
    duration: 3,
    delay:1
})

gsap.from("h1", {
    opacity: 0,
    duration: 2,
    delay: 1,
    y: 30,
    // stagger:1, // display one by one element
    stagger:0.3 // you can give minus value to this also
})



// GSAP TIMELINE
// animate something one afther another on a row(synchronous way-> eauta sakesi arko

var tl = gsap.timeline()
tl.to("#test", {
    x: 800,
    rotate: 360,
    duration: 3,
    delay:1
})
tl.to("#test1", {
  x: 800,
  duration: 1.5,
});
tl.to("#test2", {
    x: 800,
    borderRadius: "50%",
    duration:1.5
})
