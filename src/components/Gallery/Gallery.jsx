// import React from "react";
// import { useState, useEffect, useRef } from "react";
// import "./Gallery.css";

// // Import all images individually
// import T1 from "../../assets/T1.jpg";
// import T2 from "../../assets/T2.jpg";
// import T3 from "../../assets/T3.jpg";
// import T4 from "../../assets/T4.jpg";
// import T5 from "../../assets/T5.jpg";
// import MMT1 from "../../assets/MMT/IMG-20250503-WA0012.jpg";
// import MMT2 from "../../assets/MMT/IMG-20250702-WA0025.jpg";
// import MMT3 from "../../assets/MMT/IMG-20250702-WA0030.jpg";
// import MMT4 from "../../assets/MMT/IMG-20250702-WA0032.jpg";
// import MMT5 from "../../assets/MMT/IMG-20250702-WA0033.jpg";

// // Import all celebration photos (95 images)
// import G1 from "../../assets/gallery/g1 (1).jpg";
// import G2 from "../../assets/gallery/g1 (2).jpg";
// import G3 from "../../assets/gallery/g1 (3).jpg";
// import G4 from "../../assets/gallery/g1 (4).jpg";
// import G5 from "../../assets/gallery/g1 (5).jpg";
// import G6 from "../../assets/gallery/g1 (6).jpg";
// import G7 from "../../assets/gallery/g1 (7).jpg";
// import G8 from "../../assets/gallery/g1 (8).jpg";
// import G9 from "../../assets/gallery/g1 (9).jpg";
// import G10 from "../../assets/gallery/g1 (10).jpg";
// import G11 from "../../assets/gallery/g1 (11).jpg";
// import G12 from "../../assets/gallery/g1 (12).jpg";
// import G13 from "../../assets/gallery/g1 (13).jpg";
// import G14 from "../../assets/gallery/g1 (14).jpg";
// import G15 from "../../assets/gallery/g1 (15).jpg";
// import G16 from "../../assets/gallery/g1 (16).jpg";
// import G17 from "../../assets/gallery/g1 (17).jpg";
// import G18 from "../../assets/gallery/g1 (18).jpg";
// import G19 from "../../assets/gallery/g1 (19).jpg";
// import G20 from "../../assets/gallery/g1 (20).jpg";
// import G21 from "../../assets/gallery/g1 (21).jpg";
// import G22 from "../../assets/gallery/g1 (22).jpg";
// import G23 from "../../assets/gallery/g1 (23).jpg";
// import G24 from "../../assets/gallery/g1 (24).jpg";
// import G25 from "../../assets/gallery/g1 (25).jpg";
// import G26 from "../../assets/gallery/g1 (26).jpg";
// import G27 from "../../assets/gallery/g1 (27).jpg";
// import G28 from "../../assets/gallery/g1 (28).jpg";
// import G29 from "../../assets/gallery/g1 (29).jpg";
// import G30 from "../../assets/gallery/g1 (30).jpg";
// import G31 from "../../assets/gallery/g1 (31).jpg";
// import G32 from "../../assets/gallery/g1 (32).jpg";
// import G33 from "../../assets/gallery/g1 (33).jpg";
// import G34 from "../../assets/gallery/g1 (34).jpg";
// import G35 from "../../assets/gallery/g1 (35).jpg";
// import G36 from "../../assets/gallery/g1 (36).jpg";
// import G37 from "../../assets/gallery/g1 (37).jpg";
// import G38 from "../../assets/gallery/g1 (38).jpg";
// import G39 from "../../assets/gallery/g1 (39).jpg";
// import G40 from "../../assets/gallery/g1 (40).jpg";
// import G41 from "../../assets/gallery/g1 (41).jpg";
// import G42 from "../../assets/gallery/g1 (42).jpg";
// import G43 from "../../assets/gallery/g1 (43).jpg";
// import G44 from "../../assets/gallery/g1 (44).jpg";
// import G45 from "../../assets/gallery/g1 (45).jpg";
// import G46 from "../../assets/gallery/g1 (46).jpg";
// import G47 from "../../assets/gallery/g1 (47).jpg";
// import G48 from "../../assets/gallery/g1 (48).jpg";
// import G49 from "../../assets/gallery/g1 (49).jpg";
// import G50 from "../../assets/gallery/g1 (50).jpg";
// import G51 from "../../assets/gallery/g1 (51).jpg";
// import G52 from "../../assets/gallery/g1 (52).jpg";
// import G53 from "../../assets/gallery/g1 (53).jpg";
// import G54 from "../../assets/gallery/g1 (54).jpg";
// import G55 from "../../assets/gallery/g1 (55).jpg";
// import G56 from "../../assets/gallery/g1 (56).jpg";
// import G57 from "../../assets/gallery/g1 (57).jpg";
// import G58 from "../../assets/gallery/g1 (58).jpg";
// import G59 from "../../assets/gallery/g1 (59).jpg";
// import G60 from "../../assets/gallery/g1 (60).jpg";
// import G61 from "../../assets/gallery/g1 (61).jpg";
// import G62 from "../../assets/gallery/g1 (62).jpg";
// import G63 from "../../assets/gallery/g1 (63).jpg";
// import G64 from "../../assets/gallery/g1 (64).jpg";
// import G65 from "../../assets/gallery/g1 (65).jpg";
// import G66 from "../../assets/gallery/g1 (66).jpg";
// import G67 from "../../assets/gallery/g1 (67).jpg";
// import G68 from "../../assets/gallery/g1 (68).jpg";
// import G69 from "../../assets/gallery/g1 (69).jpg";
// import G70 from "../../assets/gallery/g1 (70).jpg";
// import G71 from "../../assets/gallery/g1 (71).jpg";
// import G72 from "../../assets/gallery/g1 (72).jpg";
// import G73 from "../../assets/gallery/g1 (73).jpg";
// import G74 from "../../assets/gallery/g1 (74).jpg";
// import G75 from "../../assets/gallery/g1 (75).jpg";
// import G76 from "../../assets/gallery/g1 (76).jpg";
// import G77 from "../../assets/gallery/g1 (77).jpg";
// import G78 from "../../assets/gallery/g1 (78).jpg";
// import G79 from "../../assets/gallery/g1 (79).jpg";
// import G80 from "../../assets/gallery/g1 (80).jpg";
// import G81 from "../../assets/gallery/g1 (81).jpg";
// import G82 from "../../assets/gallery/g1 (82).jpg";
// import G83 from "../../assets/gallery/g1 (83).jpg";
// import G84 from "../../assets/gallery/g1 (84).jpg";
// import G85 from "../../assets/gallery/g1 (85).jpg";
// import G86 from "../../assets/gallery/g1 (86).jpg";
// import G87 from "../../assets/gallery/g1 (87).jpg";
// import G88 from "../../assets/gallery/g1 (88).jpg";
// import G89 from "../../assets/gallery/g1 (89).jpg";
// import G90 from "../../assets/gallery/g1 (90).jpg";
// import G91 from "../../assets/gallery/g1 (91).jpg";
// import G92 from "../../assets/gallery/g1 (92).jpg";
// import G93 from "../../assets/gallery/g1 (93).jpg";
// import G94 from "../../assets/gallery/g1 (94).jpg";
// import G95 from "../../assets/gallery/g1 (95).jpg";

// const RomanticGallery = () => {
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [isHovering, setIsHovering] = useState(false);
//   const [showHearts, setShowHearts] = useState(false);
//   const sliderRef = useRef(null);

//   // Featured memories
//   const featuredMemories = [
//     {
//       id: 1,
//       image: T1,
//       title: "Our First Kiss",
//       description: "That magical moment when our lips first met under the stars",
//       date: "May 12, 2020",
//       category: "milestones",
//       location: "Central Park, NY",
//       quote: "A kiss is a lovely trick designed by nature to stop speech when words become superfluous."
//     },
//     {
//       id: 2,
//       image: T2,
//       title: "Paris Getaway",
//       description: "Exploring the city of love hand in hand",
//       date: "July 5, 2021",
//       category: "adventures",
//       location: "Paris, France",
//       quote: "Paris is always a good idea, especially with you by my side."
//     },
//     {
//       id: 3,
//       image: T3,
//       title: "Anniversary Dinner",
//       description: "Celebrating another year of love and laughter",
//       date: "March 18, 2022",
//       category: "celebrations",
//       location: "The Rooftop, NYC",
//       quote: "The best thing to hold onto in life is each other."
//     },
//     {
//       id: 4,
//       image: T4,
//       title: "The Proposal",
//       description: "When I asked you to be mine forever",
//       date: "December 24, 2022",
//       category: "milestones",
//       location: "Home Sweet Home",
//       quote: "I wanted it to be you. I wanted it to be you so badly."
//     },
//     {
//       id: 5,
//       image: T5,
//       title: "Beach Sunset",
//       description: "Watching the sun set on another perfect day together",
//       date: "August 7, 2023",
//       category: "adventures",
//       location: "Maldives",
//       quote: "Side by side or miles apart, we're connected by the heart."
//     },
//   ];

//   // Unforgettable moments
//   const unforgettableMoments = [
//     {
//       id: 1,
//       image: MMT1,
//       title: "Unforgettable Moment 1",
//       description: "A special memory we'll cherish forever",
//       date: "May 3, 2025",
//       category: "milestones",
//       location: "Special Place",
//       quote: "This moment will stay in our hearts forever."
//     },
//     {
//       id: 2,
//       image: MMT2,
//       title: "Unforgettable Moment 2",
//       description: "Another beautiful memory together",
//       date: "July 2, 2025",
//       category: "adventures",
//       location: "Special Place",
//       quote: "Time stands still when I'm with you."
//     },
//     {
//       id: 3,
//       image: MMT3,
//       title: "Unforgettable Moment 3",
//       description: "A day filled with love and happiness",
//       date: "July 2, 2025",
//       category: "celebrations",
//       location: "Special Place",
//       quote: "Happiness is being with you."
//     },
//     {
//       id: 4,
//       image: MMT4,
//       title: "Unforgettable Moment 4",
//       description: "A magical experience we shared",
//       date: "July 2, 2025",
//       category: "milestones",
//       location: "Special Place",
//       quote: "Magic happens when you're around."
//     },
//     {
//       id: 5,
//       image: MMT5,
//       title: "Unforgettable Moment 5",
//       description: "A perfect ending to a perfect day",
//       date: "July 2, 2025",
//       category: "adventures",
//       location: "Special Place",
//       quote: "Every moment with you is special."
//     },
//   ];

//   // Celebration photos (95 images)
//   const celebrationPhotos = [
//     { id: 1001, image: G1, title: "Oct27 Celebration 1", date: "October 27, 2023", category: "celebrations" },
//     { id: 1002, image: G2, title: "Oct27 Celebration 2", date: "October 27, 2023", category: "celebrations" },
//     { id: 1003, image: G3, title: "Oct27 Celebration 3", date: "October 27, 2023", category: "celebrations" },
//     { id: 1004, image: G4, title: "Oct27 Celebration 4", date: "October 27, 2023", category: "celebrations" },
//     { id: 1005, image: G5, title: "Oct27 Celebration 5", date: "October 27, 2023", category: "celebrations" },
//     { id: 1006, image: G6, title: "Oct27 Celebration 6", date: "October 27, 2023", category: "celebrations" },
//     { id: 1007, image: G7, title: "Oct27 Celebration 7", date: "October 27, 2023", category: "celebrations" },
//     { id: 1008, image: G8, title: "Oct27 Celebration 8", date: "October 27, 2023", category: "celebrations" },
//     { id: 1009, image: G9, title: "Oct27 Celebration 9", date: "October 27, 2023", category: "celebrations" },
//     { id: 1010, image: G10, title: "Oct27 Celebration 10", date: "October 27, 2023", category: "celebrations" },
//     { id: 1011, image: G11, title: "Oct27 Celebration 11", date: "October 27, 2023", category: "celebrations" },
//     { id: 1012, image: G12, title: "Oct27 Celebration 12", date: "October 27, 2023", category: "celebrations" },
//     { id: 1013, image: G13, title: "Oct27 Celebration 13", date: "October 27, 2023", category: "celebrations" },
//     { id: 1014, image: G14, title: "Oct27 Celebration 14", date: "October 27, 2023", category: "celebrations" },
//     { id: 1015, image: G15, title: "Oct27 Celebration 15", date: "October 27, 2023", category: "celebrations" },
//     { id: 1016, image: G16, title: "Oct27 Celebration 16", date: "October 27, 2023", category: "celebrations" },
//     { id: 1017, image: G17, title: "Oct27 Celebration 17", date: "October 27, 2023", category: "celebrations" },
//     { id: 1018, image: G18, title: "Oct27 Celebration 18", date: "October 27, 2023", category: "celebrations" },
//     { id: 1019, image: G19, title: "Oct27 Celebration 19", date: "October 27, 2023", category: "celebrations" },
//     { id: 1020, image: G20, title: "Oct27 Celebration 20", date: "October 27, 2023", category: "celebrations" },
//     { id: 1021, image: G21, title: "Oct27 Celebration 21", date: "October 27, 2023", category: "celebrations" },
//     { id: 1022, image: G22, title: "Oct27 Celebration 22", date: "October 27, 2023", category: "celebrations" },
//     { id: 1023, image: G23, title: "Oct27 Celebration 23", date: "October 27, 2023", category: "celebrations" },
//     { id: 1024, image: G24, title: "Oct27 Celebration 24", date: "October 27, 2023", category: "celebrations" },
//     { id: 1025, image: G25, title: "Oct27 Celebration 25", date: "October 27, 2023", category: "celebrations" },
//     { id: 1026, image: G26, title: "Oct27 Celebration 26", date: "October 27, 2023", category: "celebrations" },
//     { id: 1027, image: G27, title: "Oct27 Celebration 27", date: "October 27, 2023", category: "celebrations" },
//     { id: 1028, image: G28, title: "Oct27 Celebration 28", date: "October 27, 2023", category: "celebrations" },
//     { id: 1029, image: G29, title: "Oct27 Celebration 29", date: "October 27, 2023", category: "celebrations" },
//     { id: 1030, image: G30, title: "Oct27 Celebration 30", date: "October 27, 2023", category: "celebrations" },
//     { id: 1031, image: G31, title: "Oct27 Celebration 31", date: "October 27, 2023", category: "celebrations" },
//     { id: 1032, image: G32, title: "Oct27 Celebration 32", date: "October 27, 2023", category: "celebrations" },
//     { id: 1033, image: G33, title: "Oct27 Celebration 33", date: "October 27, 2023", category: "celebrations" },
//     { id: 1034, image: G34, title: "Oct27 Celebration 34", date: "October 27, 2023", category: "celebrations" },
//     { id: 1035, image: G35, title: "Oct27 Celebration 35", date: "October 27, 2023", category: "celebrations" },
//     { id: 1036, image: G36, title: "Oct27 Celebration 36", date: "October 27, 2023", category: "celebrations" },
//     { id: 1037, image: G37, title: "Oct27 Celebration 37", date: "October 27, 2023", category: "celebrations" },
//     { id: 1038, image: G38, title: "Oct27 Celebration 38", date: "October 27, 2023", category: "celebrations" },
//     { id: 1039, image: G39, title: "Oct27 Celebration 39", date: "October 27, 2023", category: "celebrations" },
//     { id: 1040, image: G40, title: "Oct27 Celebration 40", date: "October 27, 2023", category: "celebrations" },
//     { id: 1041, image: G41, title: "Oct27 Celebration 41", date: "October 27, 2023", category: "celebrations" },
//     { id: 1042, image: G42, title: "Oct27 Celebration 42", date: "October 27, 2023", category: "celebrations" },
//     { id: 1043, image: G43, title: "Oct27 Celebration 43", date: "October 27, 2023", category: "celebrations" },
//     { id: 1044, image: G44, title: "Oct27 Celebration 44", date: "October 27, 2023", category: "celebrations" },
//     { id: 1045, image: G45, title: "Oct27 Celebration 45", date: "October 27, 2023", category: "celebrations" },
//     { id: 1046, image: G46, title: "Oct27 Celebration 46", date: "October 27, 2023", category: "celebrations" },
//     { id: 1047, image: G47, title: "Oct27 Celebration 47", date: "October 27, 2023", category: "celebrations" },
//     { id: 1048, image: G48, title: "Oct27 Celebration 48", date: "October 27, 2023", category: "celebrations" },
//     { id: 1049, image: G49, title: "Oct27 Celebration 49", date: "October 27, 2023", category: "celebrations" },
//     { id: 1050, image: G50, title: "Oct27 Celebration 50", date: "October 27, 2023", category: "celebrations" },
//     { id: 1051, image: G51, title: "Oct27 Celebration 51", date: "October 27, 2023", category: "celebrations" },
//     { id: 1052, image: G52, title: "Oct27 Celebration 52", date: "October 27, 2023", category: "celebrations" },
//     { id: 1053, image: G53, title: "Oct27 Celebration 53", date: "October 27, 2023", category: "celebrations" },
//     { id: 1054, image: G54, title: "Oct27 Celebration 54", date: "October 27, 2023", category: "celebrations" },
//     { id: 1055, image: G55, title: "Oct27 Celebration 55", date: "October 27, 2023", category: "celebrations" },
//     { id: 1056, image: G56, title: "Oct27 Celebration 56", date: "October 27, 2023", category: "celebrations" },
//     { id: 1057, image: G57, title: "Oct27 Celebration 57", date: "October 27, 2023", category: "celebrations" },
//     { id: 1058, image: G58, title: "Oct27 Celebration 58", date: "October 27, 2023", category: "celebrations" },
//     { id: 1059, image: G59, title: "Oct27 Celebration 59", date: "October 27, 2023", category: "celebrations" },
//     { id: 1060, image: G60, title: "Oct27 Celebration 60", date: "October 27, 2023", category: "celebrations" },
//     { id: 1061, image: G61, title: "Oct27 Celebration 61", date: "October 27, 2023", category: "celebrations" },
//     { id: 1062, image: G62, title: "Oct27 Celebration 62", date: "October 27, 2023", category: "celebrations" },
//     { id: 1063, image: G63, title: "Oct27 Celebration 63", date: "October 27, 2023", category: "celebrations" },
//     { id: 1064, image: G64, title: "Oct27 Celebration 64", date: "October 27, 2023", category: "celebrations" },
//     { id: 1065, image: G65, title: "Oct27 Celebration 65", date: "October 27, 2023", category: "celebrations" },
//     { id: 1066, image: G66, title: "Oct27 Celebration 66", date: "October 27, 2023", category: "celebrations" },
//     { id: 1067, image: G67, title: "Oct27 Celebration 67", date: "October 27, 2023", category: "celebrations" },
//     { id: 1068, image: G68, title: "Oct27 Celebration 68", date: "October 27, 2023", category: "celebrations" },
//     { id: 1069, image: G69, title: "Oct27 Celebration 69", date: "October 27, 2023", category: "celebrations" },
//     { id: 1070, image: G70, title: "Oct27 Celebration 70", date: "October 27, 2023", category: "celebrations" },
//     { id: 1071, image: G71, title: "Oct27 Celebration 71", date: "October 27, 2023", category: "celebrations" },
//     { id: 1072, image: G72, title: "Oct27 Celebration 72", date: "October 27, 2023", category: "celebrations" },
//     { id: 1073, image: G73, title: "Oct27 Celebration 73", date: "October 27, 2023", category: "celebrations" },
//     { id: 1074, image: G74, title: "Oct27 Celebration 74", date: "October 27, 2023", category: "celebrations" },
//     { id: 1075, image: G75, title: "Oct27 Celebration 75", date: "October 27, 2023", category: "celebrations" },
//     { id: 1076, image: G76, title: "Oct27 Celebration 76", date: "October 27, 2023", category: "celebrations" },
//     { id: 1077, image: G77, title: "Oct27 Celebration 77", date: "October 27, 2023", category: "celebrations" },
//     { id: 1078, image: G78, title: "Oct27 Celebration 78", date: "October 27, 2023", category: "celebrations" },
//     { id: 1079, image: G79, title: "Oct27 Celebration 79", date: "October 27, 2023", category: "celebrations" },
//     { id: 1080, image: G80, title: "Oct27 Celebration 80", date: "October 27, 2023", category: "celebrations" },
//     { id: 1081, image: G81, title: "Oct27 Celebration 81", date: "October 27, 2023", category: "celebrations" },
//     { id: 1082, image: G82, title: "Oct27 Celebration 82", date: "October 27, 2023", category: "celebrations" },
//     { id: 1083, image: G83, title: "Oct27 Celebration 83", date: "October 27, 2023", category: "celebrations" },
//     { id: 1084, image: G84, title: "Oct27 Celebration 84", date: "October 27, 2023", category: "celebrations" },
//     { id: 1085, image: G85, title: "Oct27 Celebration 85", date: "October 27, 2023", category: "celebrations" },
//     { id: 1086, image: G86, title: "Oct27 Celebration 86", date: "October 27, 2023", category: "celebrations" },
//     { id: 1087, image: G87, title: "Oct27 Celebration 87", date: "October 27, 2023", category: "celebrations" },
//     { id: 1088, image: G88, title: "Oct27 Celebration 88", date: "October 27, 2023", category: "celebrations" },
//     { id: 1089, image: G89, title: "Oct27 Celebration 89", date: "October 27, 2023", category: "celebrations" },
//     { id: 1090, image: G90, title: "Oct27 Celebration 90", date: "October 27, 2023", category: "celebrations" },
//     { id: 1091, image: G91, title: "Oct27 Celebration 91", date: "October 27, 2023", category: "celebrations" },
//     { id: 1092, image: G92, title: "Oct27 Celebration 92", date: "October 27, 2023", category: "celebrations" },
//     { id: 1093, image: G93, title: "Oct27 Celebration 93", date: "October 27, 2023", category: "celebrations" },
//     { id: 1094, image: G94, title: "Oct27 Celebration 94", date: "October 27, 2023", category: "celebrations" },
//     { id: 1095, image: G95, title: "Oct27 Celebration 95", date: "October 27, 2023", category: "celebrations" }
//   ];

//   // Combine all memories
//   const memoryCollection = [
//     ...featuredMemories,
//     ...unforgettableMoments,
//     ...celebrationPhotos
//   ];

//   const filteredMemories = activeCategory === "all"
//     ? memoryCollection
//     : memoryCollection.filter(memory => memory.category === activeCategory);

//   useEffect(() => {
//     let interval;
//     if (isAutoPlaying && !isHovering) {
//       interval = setInterval(() => {
//         setCurrentSlide(prev => (prev + 1) % featuredMemories.length);
//       }, 5000);
//     }
//     return () => clearInterval(interval);
//   }, [isAutoPlaying, isHovering, featuredMemories.length]);

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//     setIsAutoPlaying(false);
//     setTimeout(() => setIsAutoPlaying(true), 10000);
//   };

//   const nextSlide = () => {
//     setCurrentSlide(prev => (prev + 1) % featuredMemories.length);
//     setIsAutoPlaying(false);
//     setTimeout(() => setIsAutoPlaying(true), 10000);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(prev => (prev - 1 + featuredMemories.length) % featuredMemories.length);
//     setIsAutoPlaying(false);
//     setTimeout(() => setIsAutoPlaying(true), 10000);
//   };

//   const createHearts = (e) => {
//     if (!showHearts) return;

//     const heart = document.createElement('div');
//     heart.classList.add('love-heart-float');
//     heart.innerHTML = '❤';
//     heart.style.left = `${e.clientX}px`;
//     heart.style.top = `${e.clientY}px`;
//     heart.style.fontSize = `${Math.random() * 20 + 10}px`;
//     heart.style.animationDuration = `${Math.random() * 3 + 2}s`;

//     document.body.appendChild(heart);

//     setTimeout(() => {
//       heart.remove();
//     }, 5000);
//   };

//   return (
//     <div
//       className="love-gallery"
//       onMouseMove={createHearts}
//       onMouseEnter={() => setShowHearts(true)}
//       onMouseLeave={() => setShowHearts(false)}
//     >
//       {/* Hero Slider Section */}
//       <section className="love-hero">
//         <div
//           className="love-slider"
//           ref={sliderRef}
//           onMouseEnter={() => setIsHovering(true)}
//           onMouseLeave={() => setIsHovering(false)}
//         >
//           {featuredMemories.map((memory, index) => (
//             <div
//               key={memory.id}
//               className={`love-slide ${index === currentSlide ? 'active' : ''}`}
//             >
//               <div className="love-image-container">
//                 <img
//                   src={memory.image}
//                   alt={memory.title}
//                   className="love-slide-image"
//                   style={{ objectPosition: "center 70%" }}
//                 />
//               </div>
//               <div className="love-slide-overlay"></div>
//               <div className="love-slide-content">
//                 <span className="love-slide-category">{memory.category}</span>
//                 <h2 className="love-slide-title">{memory.title}</h2>
//                 <p className="love-slide-description">{memory.description}</p>
//                 <div className="love-slide-quote">"{memory.quote}"</div>
//                 <div className="love-slide-meta">
//                   <span className="love-slide-date">{memory.date}</span>
//                   <span className="love-slide-location">{memory.location}</span>
//                 </div>
//               </div>
//             </div>
//           ))}

//           <button className="love-slider-nav love-prev" onClick={prevSlide}>
//             <svg viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
//           </button>
//           <button className="love-slider-nav love-next" onClick={nextSlide}>
//             <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
//           </button>
//         </div>

//         <div className="love-slider-dots">
//           {featuredMemories.map((_, index) => (
//             <button
//               key={index}
//               className={`love-dot ${index === currentSlide ? 'active' : ''}`}
//               onClick={() => goToSlide(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             >
//               <span className="love-dot-tooltip">{featuredMemories[index].title}</span>
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* Memories Grid Section */}
//       <section className="love-memories">
//         <div className="love-section-header">
//           <h2 className="love-section-title">
//             <span className="love-title-heart">❤</span> Our Love Story
//           </h2>
//           <div className="love-categories">
//             <button
//               className={`love-category-btn ${activeCategory === 'all' ? 'active' : ''}`}
//               onClick={() => setActiveCategory('all')}
//             >
//               All Memories
//             </button>
//             <button
//               className={`love-category-btn ${activeCategory === 'milestones' ? 'active' : ''}`}
//               onClick={() => setActiveCategory('milestones')}
//             >
//               Milestones
//             </button>
//             <button
//               className={`love-category-btn ${activeCategory === 'adventures' ? 'active' : ''}`}
//               onClick={() => setActiveCategory('adventures')}
//             >
//               Adventures
//             </button>
//             <button
//               className={`love-category-btn ${activeCategory === 'celebrations' ? 'active' : ''}`}
//               onClick={() => setActiveCategory('celebrations')}
//             >
//               Celebrations
//             </button>
//             <button
//               className={`love-category-btn ${activeCategory === 'everyday' ? 'active' : ''}`}
//               onClick={() => setActiveCategory('everyday')}
//             >
//               Everyday Magic
//             </button>
//           </div>
//         </div>

//         <div className="love-memory-grid">
//           {filteredMemories.map(memory => (
//             <div key={memory.id} className="love-memory-card">
//               <div className="love-card-image">
//                 <img
//                   src={memory.image}
//                   alt={memory.title}
//                   loading="lazy"
//                   style={{ objectPosition: "center 70%" }}
//                 />
//                 <div className="love-card-overlay">
//                   <span className="love-card-date">{memory.date}</span>
//                   <h3 className="love-card-title">{memory.title}</h3>
//                   <p className="love-card-category">{memory.category}</p>
//                 </div>
//               </div>
//               <div className="love-card-badge">{memory.category}</div>
//               <div className="love-card-heart">❤</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Timeline Section */}
//       <section className="love-timeline">
//         <div className="love-section-header">
//           <h2 className="love-section-title">
//             <span className="love-title-heart">❤</span> மறக்கமுடியாத தருணங்கள்
//           </h2>
//         </div>

//         <div className="love-timeline-container">
//           {unforgettableMoments.map((memory, index) => (
//             <div key={memory.id} className="love-timeline-item">
//               <div className="love-timeline-content">
//                 <div className="love-timeline-image">
//                   <img
//                     src={memory.image}
//                     alt={memory.title}
//                     style={{ objectPosition: "center 70%" }}
//                   />
//                   <div className="love-timeline-heart">❤</div>
//                 </div>
//                 <div className="love-timeline-text">
//                   <div className="love-timeline-header">
//                     <h3>{memory.title}</h3>
//                     <span className="love-timeline-date">{memory.date}</span>
//                   </div>
//                   <p>{memory.description}</p>
//                   <div className="love-timeline-quote">"{memory.quote}"</div>
//                   <span className="love-timeline-location">{memory.location}</span>
//                 </div>
//               </div>
//               <div className="love-timeline-marker"></div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Quote Section */}
//       <section className="love-quote">
//         <div className="love-quote-container">
//           <div className="love-quote-content">
//             <svg className="love-quote-icon" viewBox="0 0 24 24">
//               <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
//             </svg>
//             <p className="love-quote-text">
//               Love is not about how many days, weeks or months you've been together,
//               it's all about how much you love each other every day.
//             </p>
//             <span className="love-quote-author">- Our Promise</span>
//           </div>
//         </div>
//       </section>

//       {/* Floating Hearts */}
//       <div className="love-floating-hearts">
//         {[...Array(15)].map((_, i) => (
//           <div
//             key={i}
//             className="love-floating-heart"
//             style={{
//               left: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               fontSize: `${Math.random() * 20 + 10}px`,
//               opacity: Math.random() * 0.5 + 0.3
//             }}
//           >
//             ❤
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RomanticGallery;

// import { useState, useEffect, useRef } from 'react';
// import './Gallery.css';

// // Import all images
// import T1 from '../../assets/T1.jpg';
// import T2 from '../../assets/T2.jpg';
// import T3 from '../../assets/T3.jpg';
// import T4 from '../../assets/T4.jpg';
// import T5 from '../../assets/T5.jpg';
// import MMT1 from '../../assets/MMT/IMG-20250503-WA0012.jpg';
// import MMT2 from '../../assets/MMT/IMG-20250702-WA0025.jpg';
// import MMT3 from '../../assets/MMT/IMG-20250702-WA0030.jpg';
// import MMT4 from '../../assets/MMT/IMG-20250702-WA0032.jpg';
// import MMT5 from '../../assets/MMT/IMG-20250702-WA0033.jpg';
// import UFM1 from '../../assets/MMT/IMG-20250610-WA0018.jpg';
// import UFM2 from '../../assets/MMT/IMG-20250703-WA0004.jpg';
// import UFM3 from '../../assets/MMT/IMG-20250713-WA0074.jpg';
// import UFM4 from '../../assets/MMT/IMG-20250713-WA0075.jpg';
// import UFM5 from '../../assets/MMT/1.jpg';
// import UFMV from '../../assets/MMT/VID-20250713-WA0003.mp4';

// // Celebration photos
// import G1 from '../../assets/gallery/g1 (1).jpg';
// import G2 from '../../assets/gallery/g1 (2).jpg';
// import G3 from '../../assets/gallery/g1 (3).jpg';
// import G4 from '../../assets/gallery/g1 (4).jpg';
// import G5 from '../../assets/gallery/g1 (5).jpg';
// import G6 from '../../assets/gallery/g1 (6).jpg';
// import G7 from '../../assets/gallery/g1 (7).jpg';
// import G8 from '../../assets/gallery/g1 (8).jpg';
// import G9 from '../../assets/gallery/g1 (9).jpg';
// import G10 from '../../assets/gallery/g1 (10).jpg';

// const RomanticGallery = () => {
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [isHovering, setIsHovering] = useState(false);
//   const [showHearts, setShowHearts] = useState(false);
//   const [selectedCelebration, setSelectedCelebration] = useState(null);
//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
//   const [viewerStyle, setViewerStyle] = useState('slide');
//   const sliderRef = useRef(null);
//   const viewerRef = useRef(null);

//   // Featured memories
//   const featuredMemories = [
//     {
//       id: 1,
//       image: T1,
//       title: 'Our First Kiss',
//       description:
//         'That magical moment when our lips first met under the stars',
//       date: 'May 12, 2020',
//       category: 'milestones',
//       location: 'Central Park, NY',
//       quote:
//         'A kiss is a lovely trick designed by nature to stop speech when words become superfluous.',
//     },
//     {
//       id: 2,
//       image: T2,
//       title: 'Paris Getaway',
//       description: 'Exploring the city of love hand in hand',
//       date: 'July 5, 2021',
//       category: 'adventures',
//       location: 'Paris, France',
//       quote: 'Paris is always a good idea, especially with you by my side.',
//     },
//     {
//       id: 3,
//       image: T3,
//       title: 'Anniversary Dinner',
//       description: 'Celebrating another year of love and laughter',
//       date: 'March 18, 2022',
//       category: 'celebrations',
//       subCategory: 'oct-27',
//       location: 'The Rooftop, NYC',
//       quote: 'The best thing to hold onto in life is each other.',
//     },
//     {
//       id: 4,
//       image: T4,
//       title: 'The Proposal',
//       description: 'When I asked you to be mine forever',
//       date: 'December 24, 2022',
//       category: 'milestones',
//       location: 'Home Sweet Home',
//       quote: 'I wanted it to be you. I wanted it to be you so badly.',
//     },
//     {
//       id: 5,
//       image: T5,
//       title: 'Beach Sunset',
//       description: 'Watching the sun set on another perfect day together',
//       date: 'August 7, 2023',
//       category: 'adventures',
//       location: 'Maldives',
//       quote: "Side by side or miles apart, we're connected by the heart.",
//     },
//   ];

//   // Unforgettable moments
//   const unforgettableMoments = [
//     {
//       id: 6,
//       image: T5,
//       title: 'Unforgettable Moment 1',
//       description: "En life la first time oru ponoda duo outing uu 😂",
//       date: 'July 30, 2024',
//       category: 'milestones',
//       location: 'Special Place',
//       quote: 'This moment will stay in our hearts forever.',
//     },
//     {
//       id: 7,
//       image: UFM2,
//       title: 'Unforgettable Moment 2',
//       description: 'Another beautiful memory together',
//       date: 'Aug 31, 2024',
//       category: 'milestones',
//       location: 'Special Place',
//       quote: "Symposium Photo.",
//     },
//     {
//       id: 8,
//       image: T1,
//       title: 'Unforgettable Moment 3',
//       description: 'Na oru tubelight nu nirupicha naal 😂',
//       date: 'Aug 1, 2024',
//       category: 'celebrations',
//       subCategory: 'mall',
//       location: 'Special Place',
//       quote: 'En aal hint kuduthum kandu pidikaatha me',
//     },
//     {
//       id: 9,
//       image: UFM5,
//       title: 'Unforgettable Moment 4',
//       description: 'Mithun Akka Marriage',
//       date: '1st and 2nd Feb',
//       category: 'milestones',
//       location: 'Special Place',
//       quote: "First Ethnic Photo",
//     },
//     {
//       id: 10,
//       image: UFM3,
//       title: 'Unforgettable Moment 5',
//       description: 'Birthday surprise!!!!',
//       date: 'Oct 27, 2024',
//       category: 'Love',
//       location: 'A2Z Celebrations Private Theatre',
//       quote: 'Bestest day ',
//     }
//   ];

//   // Celebration groups
//   const celebrationGroups = [
//     {
//       id: 'mithun-akka-kalyanam',
//       name: 'Mithun Akka Kalyanam',
//       coverImage: G1,
//       date: 'June 15-16, 2023',
//       photos: [
//         { id: 101, image: G1, title: 'Wedding Ceremony' },
//         { id: 102, image: G2, title: 'Reception' },
//         { id: 103, image: G3, title: 'Family Photo' },
//         { id: 104, image: G4, title: 'Traditional Rituals' },
//       ],
//     },
//     {
//       id: 'oct-27',
//       name: 'Oct-27 Anniversary',
//       coverImage: G5,
//       date: 'October 27, 2023',
//       photos: [
//         { id: 201, image: G5, title: 'Anniversary Dinner' },
//         { id: 202, image: G6, title: 'Gift Exchange' },
//         { id: 203, image: G7, title: 'Celebration Cake' },
//       ],
//     },
//     {
//       id: 'mall',
//       name: 'Mall Visits',
//       coverImage: G8,
//       date: 'Various Dates',
//       photos: [
//         { id: 301, image: G8, title: 'Shopping Spree' },
//         { id: 302, image: G9, title: 'Food Court Fun' },
//         { id: 303, image: G10, title: 'Movie Date' },
//       ],
//     },
//   ];

//   const individualMemories = [...featuredMemories, ...unforgettableMoments];

//   const filteredMemories =
//     activeCategory === 'all'
//       ? individualMemories
//       : individualMemories.filter(
//         (memory) => memory.category === activeCategory
//       );

//   useEffect(() => {
//     let interval;
//     if (isAutoPlaying && !isHovering) {
//       interval = setInterval(() => {
//         setCurrentSlide((prev) => (prev + 1) % featuredMemories.length);
//       }, 5000);
//     }
//     return () => clearInterval(interval);
//   }, [isAutoPlaying, isHovering, featuredMemories.length]);

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//     setIsAutoPlaying(false);
//     setTimeout(() => setIsAutoPlaying(true), 10000);
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % featuredMemories.length);
//     setIsAutoPlaying(false);
//     setTimeout(() => setIsAutoPlaying(true), 10000);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(
//       (prev) => (prev - 1 + featuredMemories.length) % featuredMemories.length
//     );
//     setIsAutoPlaying(false);
//     setTimeout(() => setIsAutoPlaying(true), 10000);
//   };

//   const createHearts = (e) => {
//     if (!showHearts) return;
//     const heart = document.createElement('div');
//     heart.classList.add('love-heart-float');
//     heart.innerHTML = '❤';
//     heart.style.left = `${e.clientX}px`;
//     heart.style.top = `${e.clientY}px`;
//     heart.style.fontSize = `${Math.random() * 20 + 10}px`;
//     heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
//     document.body.appendChild(heart);
//     setTimeout(() => {
//       heart.remove();
//     }, 5000);
//   };

//   const handleCategoryChange = (category) => {
//     setActiveCategory(category);
//     setSelectedCelebration(null);
//   };

//   const openCelebration = (celebration) => {
//     setSelectedCelebration(celebration);
//     setCurrentPhotoIndex(0);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeCelebration = () => {
//     setSelectedCelebration(null);
//     document.body.style.overflow = 'auto';
//   };

//   const nextPhoto = () => {
//     setCurrentPhotoIndex(
//       (prev) => (prev + 1) % selectedCelebration.photos.length
//     );
//   };

//   const prevPhoto = () => {
//     setCurrentPhotoIndex(
//       (prev) =>
//         (prev - 1 + selectedCelebration.photos.length) %
//         selectedCelebration.photos.length
//     );
//   };

//   const changeViewerStyle = (style) => {
//     setViewerStyle(style);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (viewerRef.current && !viewerRef.current.contains(event.target)) {
//         closeCelebration();
//       }
//     };
//     if (selectedCelebration) {
//       document.addEventListener('mousedown', handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [selectedCelebration]);

//   return (
//     <div
//       className="love-gallery"
//       onMouseMove={createHearts}
//       onMouseEnter={() => setShowHearts(true)}
//       onMouseLeave={() => setShowHearts(false)}
//     >
//       <section className="love-hero">
//         <div
//           className="love-slider"
//           ref={sliderRef}
//           onMouseEnter={() => setIsHovering(true)}
//           onMouseLeave={() => setIsHovering(false)}
//         >
//           {featuredMemories.map((memory, index) => (
//             <div
//               key={memory.id}
//               className={`love-slide ${index === currentSlide ? 'active' : ''}`}
//             >
//               <div className="love-image-container">
//                 <img
//                   src={memory.image}
//                   alt={memory.title}
//                   className="love-slide-image"
//                 />
//               </div>
//             </div>
//           ))}

//           <button className="love-slider-nav love-prev" onClick={prevSlide}>
//             <svg viewBox="0 0 24 24">
//               <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
//             </svg>
//           </button>
//           <button className="love-slider-nav love-next" onClick={nextSlide}>
//             <svg viewBox="0 0 24 24">
//               <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
//             </svg>
//           </button>
//         </div>

//         <div className="love-slider-dots">
//           {featuredMemories.map((_, index) => (
//             <button
//               key={index}
//               className={`love-dot ${index === currentSlide ? 'active' : ''}`}
//               onClick={() => goToSlide(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             ></button>
//           ))}
//         </div>
//       </section>

//       <section className="love-memories">
//         <div className="love-section-header">
//           <h2 className="love-section-title">
//             <span className="love-title-heart">❤</span> Our Love Story
//           </h2>
//           <div className="love-categories">
//             <button
//               className={`love-category-btn ${activeCategory === 'all' ? 'active' : ''}`}
//               onClick={() => handleCategoryChange('all')}
//             >
//               All Memories
//             </button>
//             <button
//               className={`love-category-btn ${activeCategory === 'milestones' ? 'active' : ''}`}
//               onClick={() => handleCategoryChange('milestones')}
//             >
//               Milestones
//             </button>
//             <button
//               className={`love-category-btn ${activeCategory === 'adventures' ? 'active' : ''}`}
//               onClick={() => handleCategoryChange('adventures')}
//             >
//               Adventures
//             </button>
//             <button
//               className={`love-category-btn ${activeCategory === 'celebrations' ? 'active' : ''}`}
//               onClick={() => handleCategoryChange('celebrations')}
//             >
//               Celebrations
//             </button>
//           </div>
//         </div>

//         <div className="love-memory-grid">
//           {activeCategory !== 'celebrations' &&
//             filteredMemories.map((memory) => (
//               <div key={memory.id} className="love-memory-card">
//                 <div className="love-card-image">
//                   <img
//                     src={memory.image}
//                     alt={memory.title}
//                     loading="lazy"
//                     style={{ objectPosition: 'center 70%' }}
//                   />
//                   <div className="love-card-overlay">
//                     <span className="love-card-date">{memory.date}</span>
//                     <h3 className="love-card-title">{memory.title}</h3>
//                     <p className="love-card-category">{memory.category}</p>
//                   </div>
//                 </div>
//                 <div className="love-card-badge">{memory.category}</div>
//                 <div className="love-card-heart">❤</div>
//               </div>
//             ))}

//           {activeCategory === 'celebrations' && (
//             <div className="love-celebration-cards-container">
//               <div className="love-celebration-cards">
//                 {celebrationGroups.map((group) => (
//                   <div
//                     key={group.id}
//                     className="love-celebration-card"
//                     onClick={() => openCelebration(group)}
//                   >
//                     <div className="love-celebration-image">
//                       <img
//                         src={group.coverImage}
//                         alt={group.name}
//                         loading="lazy"
//                       />
//                     </div>
//                     <div className="love-celebration-info">
//                       <h3>{group.name}</h3>
//                       <div className="love-celebration-meta">
//                         <span className="love-celebration-date">
//                           {group.date}
//                         </span>
//                         <span className="love-celebration-count">
//                           {group.photos.length} Photos
//                         </span>
//                       </div>
//                     </div>
//                     <div className="love-celebration-heart">❤</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeCategory !== 'celebrations' &&
//             filteredMemories.length === 0 && (
//               <div className="love-no-memories">
//                 <p>No memories found in this category</p>
//               </div>
//             )}
//         </div>
//       </section>

//       {selectedCelebration && (
//         <div className="love-celebration-viewer">
//           <div className="love-viewer-overlay" onClick={closeCelebration}></div>
//           <div className={`love-viewer-content ${viewerStyle}`} ref={viewerRef}>
//             <button className="love-viewer-close" onClick={closeCelebration}>
//               &times;
//             </button>

//             <div className="love-viewer-header">
//               <h2>{selectedCelebration.name}</h2>
//               <div className="love-viewer-styles">
//                 <button
//                   className={`${viewerStyle === 'slide' ? 'active' : ''}`}
//                   onClick={() => changeViewerStyle('slide')}
//                 >
//                   Slide
//                 </button>
//                 <button
//                   className={`${viewerStyle === 'grid' ? 'active' : ''}`}
//                   onClick={() => changeViewerStyle('grid')}
//                 >
//                   Grid
//                 </button>
//                 <button
//                   className={`${viewerStyle === 'masonry' ? 'active' : ''}`}
//                   onClick={() => changeViewerStyle('masonry')}
//                 >
//                   Masonry
//                 </button>
//               </div>
//             </div>

//             {viewerStyle === 'slide' && (
//               <div className="love-viewer-slide">
//                 <div className="love-viewer-main-image">
//                   <img
//                     src={selectedCelebration.photos[currentPhotoIndex].image}
//                     alt={selectedCelebration.photos[currentPhotoIndex].title}
//                   />
//                   <div className="love-viewer-caption">
//                     {selectedCelebration.photos[currentPhotoIndex].title}
//                   </div>
//                 </div>
//                 <button
//                   className="love-viewer-nav love-viewer-prev"
//                   onClick={prevPhoto}
//                 >
//                   <svg viewBox="0 0 24 24">
//                     <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
//                   </svg>
//                 </button>
//                 <button
//                   className="love-viewer-nav love-viewer-next"
//                   onClick={nextPhoto}
//                 >
//                   <svg viewBox="0 0 24 24">
//                     <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
//                   </svg>
//                 </button>
//                 <div className="love-viewer-counter">
//                   {currentPhotoIndex + 1} / {selectedCelebration.photos.length}
//                 </div>
//               </div>
//             )}

//             {viewerStyle === 'grid' && (
//               <div className="love-viewer-grid">
//                 {selectedCelebration.photos.map((photo, index) => (
//                   <div
//                     key={photo.id}
//                     className={`love-viewer-grid-item ${index === currentPhotoIndex ? 'active' : ''}`}
//                     onClick={() => setCurrentPhotoIndex(index)}
//                   >
//                     <img src={photo.image} alt={photo.title} />
//                   </div>
//                 ))}
//               </div>
//             )}

//             {viewerStyle === 'masonry' && (
//               <div className="love-viewer-masonry">
//                 {selectedCelebration.photos.map((photo, index) => (
//                   <div
//                     key={photo.id}
//                     className={`love-viewer-masonry-item ${index === currentPhotoIndex ? 'active' : ''}`}
//                     onClick={() => setCurrentPhotoIndex(index)}
//                     style={{
//                       gridRowEnd: `span ${Math.floor(Math.random() * 3) + 2}`,
//                       aspectRatio: Math.random() > 0.5 ? '3/4' : '4/3',
//                     }}
//                   >
//                     <img src={photo.image} alt={photo.title} />
//                     {index === currentPhotoIndex && (
//                       <div className="love-viewer-masonry-caption">
//                         {photo.title}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}

//             <div className="love-viewer-thumbnails">
//               {selectedCelebration.photos.map((photo, index) => (
//                 <div
//                   key={photo.id}
//                   className={`love-viewer-thumbnail ${index === currentPhotoIndex ? 'active' : ''}`}
//                   onClick={() => setCurrentPhotoIndex(index)}
//                 >
//                   <img src={photo.image} alt={photo.title} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       <section className="love-timeline">
//         <div className="love-section-header">
//           <h2 className="love-section-title">
//             <span className="love-title-heart">❤</span> மறக்கமுடியாத தருணங்கள்
//           </h2>
//         </div>
//         <div className="love-timeline-container">
//           {unforgettableMoments.map((memory) => (
//             <div key={memory.id} className="love-timeline-item">
//               <div className="love-timeline-content">
//                 <div className="love-timeline-image">
//                   <img
//                     src={memory.image}
//                     alt={memory.title}
//                     style={{ objectPosition: 'center 70%' }}
//                   />
//                   <div className="love-timeline-heart">❤</div>
//                 </div>
//                 <div className="love-timeline-text">
//                   <div className="love-timeline-header">
//                     <h3>{memory.title}</h3>
//                     <span className="love-timeline-date">{memory.date}</span>
//                   </div>
//                   <p>{memory.description}</p>
//                   <div className="love-timeline-quote">"{memory.quote}"</div>
//                   <span className="love-timeline-location">
//                     {memory.location}
//                   </span>
//                 </div>
//               </div>
//               <div className="love-timeline-marker"></div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="love-quote">
//         <div className="love-quote-container">
//           <div className="love-quote-content">
//             <svg className="love-quote-icon" viewBox="0 0 24 24">
//               <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
//             </svg>
//             <p className="love-quote-text">
//                தினம் தினம் உனை நினைக்கிறேன்… துரும்பென உடல் இளைக்கிறேன்… உயிர்
//               கொண்டு வரும் பதுமையே… உனைவிட இல்லை புதுமையே…
//             </p>
//             <span className="love-quote-author">Average Thought</span>
//           </div>
//         </div>
//       </section>

//       <div className="love-floating-hearts">
//         {[...Array(15)].map((_, i) => (
//           <div
//             key={i}
//             className="love-floating-heart"
//             style={{
//               left: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               fontSize: `${Math.random() * 20 + 10}px`,
//               opacity: Math.random() * 0.5 + 0.3,
//             }}
//           >
//             ❤
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RomanticGallery;

import { useState, useEffect, useRef } from 'react';
import './Gallery.css';

import T1 from '../../assets/T1.jpg';
import T2 from '../../assets/T2.jpg';
import T3 from '../../assets/T3.jpg';
import T4 from '../../assets/T4.jpg';
import T5 from '../../assets/T5.jpg';
import MMT1 from '../../assets/MMT/IMG-20250503-WA0012.jpg';
import MMT2 from '../../assets/MMT/IMG-20250702-WA0025.jpg';
import MMT3 from '../../assets/MMT/IMG-20250702-WA0030.jpg';
import MMT4 from '../../assets/MMT/IMG-20250702-WA0032.jpg';
import MMT5 from '../../assets/MMT/IMG-20250702-WA0033.jpg';
import UFM1 from '../../assets/MMT/IMG-20250610-WA0018.jpg';
import UFM2 from '../../assets/MMT/IMG-20250703-WA0004.jpg';
import UFM3 from '../../assets/MMT/IMG-20250713-WA0074.jpg';
import UFM4 from '../../assets/MMT/IMG-20250713-WA0075.jpg';
import UFM5 from '../../assets/MMT/1.jpg';
import UFMV from '../../assets/MMT/VID-20250713-WA0003.mp4';

import G1 from '../../assets/gallery/g1 (1).jpg';
import G2 from '../../assets/gallery/g1 (2).jpg';
import G3 from '../../assets/gallery/g1 (3).jpg';
import G4 from '../../assets/gallery/g1 (4).jpg';
import G5 from '../../assets/gallery/g1 (5).jpg';
import G6 from '../../assets/gallery/g1 (6).jpg';
import G7 from '../../assets/gallery/g1 (7).jpg';
import G8 from '../../assets/gallery/g1 (8).jpg';
import G9 from '../../assets/gallery/g1 (9).jpg';
import G10 from '../../assets/gallery/g1 (10).jpg';
import G11 from '../../assets/gallery/g1 (11).jpg';
import G12 from '../../assets/gallery/g1 (12).jpg';
import G13 from '../../assets/gallery/g1 (13).jpg';
import G14 from '../../assets/gallery/g1 (14).jpg';
import G15 from '../../assets/gallery/g1 (15).jpg';
import G16 from '../../assets/gallery/g1 (16).jpg';
import G17 from '../../assets/gallery/g1 (17).jpg';
import G18 from '../../assets/gallery/g1 (18).jpg';
import G19 from '../../assets/gallery/g1 (19).jpg';
import G20 from '../../assets/gallery/g1 (20).jpg';
import G21 from '../../assets/gallery/g1 (21).jpg';
import G22 from '../../assets/gallery/g1 (22).jpg';
import G23 from '../../assets/gallery/g1 (23).jpg';
import G24 from '../../assets/gallery/g1 (24).jpg';
import G25 from '../../assets/gallery/g1 (25).jpg';
import G26 from '../../assets/gallery/g1 (26).jpg';
import G27 from '../../assets/gallery/g1 (27).jpg';
import G28 from '../../assets/gallery/g1 (28).jpg';
import G29 from '../../assets/gallery/g1 (29).jpg';
import G30 from '../../assets/gallery/g1 (30).jpg';
import G31 from '../../assets/gallery/g1 (31).jpg';
import G32 from '../../assets/gallery/g1 (32).jpg';
import G33 from '../../assets/gallery/g1 (33).jpg';
import G34 from '../../assets/gallery/g1 (34).jpg';
import G35 from '../../assets/gallery/g1 (35).jpg';
import G36 from '../../assets/gallery/g1 (36).jpg';
import G37 from '../../assets/gallery/g1 (37).jpg';
import G38 from '../../assets/gallery/g1 (38).jpg';
import G39 from '../../assets/gallery/g1 (39).jpg';
import G40 from '../../assets/gallery/g1 (40).jpg';
import G41 from '../../assets/gallery/g1 (41).jpg';
import G42 from '../../assets/gallery/g1 (42).jpg';
import G43 from '../../assets/gallery/g1 (43).jpg';
import G44 from '../../assets/gallery/g1 (44).jpg';
import G45 from '../../assets/gallery/g1 (45).jpg';
import G46 from '../../assets/gallery/g1 (46).jpg';
import G47 from '../../assets/gallery/g1 (47).jpg';
import G48 from '../../assets/gallery/g1 (48).jpg';
import G49 from '../../assets/gallery/g1 (49).jpg';
import G50 from '../../assets/gallery/g1 (50).jpg';
import G51 from '../../assets/gallery/g1 (51).jpg';
import G52 from '../../assets/gallery/g1 (52).jpg';
import G53 from '../../assets/gallery/g1 (53).jpg';
import G54 from '../../assets/gallery/g1 (54).jpg';
import G55 from '../../assets/gallery/g1 (55).jpg';
import G56 from '../../assets/gallery/g1 (56).jpg';
import G57 from '../../assets/gallery/g1 (57).jpg';
import G58 from '../../assets/gallery/g1 (58).jpg';
import G59 from '../../assets/gallery/g1 (59).jpg';
import G60 from '../../assets/gallery/g1 (60).jpg';
import G61 from '../../assets/gallery/g1 (61).jpg';
import G62 from '../../assets/gallery/g1 (62).jpg';
import G63 from '../../assets/gallery/g1 (63).jpg';
import G64 from '../../assets/gallery/g1 (64).jpg';
import G65 from '../../assets/gallery/g1 (65).jpg';
import G66 from '../../assets/gallery/g1 (66).jpg';
import G67 from '../../assets/gallery/g1 (67).jpg';
import G68 from '../../assets/gallery/g1 (68).jpg';
import G69 from '../../assets/gallery/g1 (69).jpg';
import G70 from '../../assets/gallery/g1 (70).jpg';
import G71 from '../../assets/gallery/g1 (71).jpg';
import G72 from '../../assets/gallery/g1 (72).jpg';
import G73 from '../../assets/gallery/g1 (73).jpg';
import G74 from '../../assets/gallery/g1 (74).jpg';
import G75 from '../../assets/gallery/g1 (75).jpg';
import G76 from '../../assets/gallery/g1 (76).jpg';
import G77 from '../../assets/gallery/g1 (77).jpg';
import G78 from '../../assets/gallery/g1 (78).jpg';
import G79 from '../../assets/gallery/g1 (79).jpg';
import G80 from '../../assets/gallery/g1 (80).jpg';
import G81 from '../../assets/gallery/g1 (81).jpg';
import G82 from '../../assets/gallery/g1 (82).jpg';
import G83 from '../../assets/gallery/g1 (83).jpg';
import G84 from '../../assets/gallery/g1 (84).jpg';
import G85 from '../../assets/gallery/g1 (85).jpg';
import G86 from '../../assets/gallery/g1 (86).jpg';
import G87 from '../../assets/gallery/g1 (87).jpg';
import G88 from '../../assets/gallery/g1 (88).jpg';
import G89 from '../../assets/gallery/g1 (89).jpg';
import G90 from '../../assets/gallery/g1 (90).jpg';
import G91 from '../../assets/gallery/g1 (91).jpg';
import G92 from '../../assets/gallery/g1 (92).jpg';
import G93 from '../../assets/gallery/g1 (93).jpg';
import G94 from '../../assets/gallery/g1 (94).jpg';
import G95 from '../../assets/gallery/g1 (95).jpg';
import G96 from '../../assets/gallery/g1 (96).jpg';
import G97 from '../../assets/gallery/g1 (97).jpg';
import G98 from '../../assets/gallery/g1 (98).jpg';
import G99 from '../../assets/gallery/g1 (99).jpg';
import G100 from '../../assets/gallery/g1 (100).jpg';
import G101 from '../../assets/gallery/g1 (101).jpg';
import G102 from '../../assets/gallery/g1 (102).jpg';
import G103 from '../../assets/gallery/g1 (103).jpg';
import G104 from '../../assets/gallery/g1 (104).jpg';
import G105 from '../../assets/gallery/g1 (105).jpg';
import G106 from '../../assets/gallery/g1 (106).jpg';
import G107 from '../../assets/gallery/g1 (107).jpg';
import G108 from '../../assets/gallery/g1 (108).jpg';
import G109 from '../../assets/gallery/g1 (109).jpg';
import G110 from '../../assets/gallery/g1 (110).jpg';
import G111 from '../../assets/gallery/g1 (111).jpg';
import G112 from '../../assets/gallery/g1 (112).jpg';
import G113 from '../../assets/gallery/g1 (113).jpg';
import G114 from '../../assets/gallery/g1 (114).jpg';
import G115 from '../../assets/gallery/g1 (115).jpg';
import G116 from '../../assets/gallery/g1 (116).jpg';
import G117 from '../../assets/gallery/g1 (117).jpg';
import G118 from '../../assets/gallery/g1 (118).jpg';
import G119 from '../../assets/gallery/g1 (119).jpg';
import G120 from '../../assets/gallery/g1 (120).jpg';
import G121 from '../../assets/gallery/g1 (121).jpg';
import G122 from '../../assets/gallery/g1 (122).jpg';
import G123 from '../../assets/gallery/g1 (123).jpg';
import G124 from '../../assets/gallery/g1 (124).jpg';
import G125 from '../../assets/gallery/g1 (125).jpg';
import G126 from '../../assets/gallery/g1 (126).jpg';
import G127 from '../../assets/gallery/g1 (127).jpg';
import G128 from '../../assets/gallery/g1 (128).jpg';
import G129 from '../../assets/gallery/g1 (129).jpg';
import G130 from '../../assets/gallery/g1 (130).jpg';
import G131 from '../../assets/gallery/g1 (131).jpg';
import G132 from '../../assets/gallery/g1 (132).jpg';
import G133 from '../../assets/gallery/g1 (133).jpg';
import G134 from '../../assets/gallery/g1 (134).jpg';
import G135 from '../../assets/gallery/g1 (135).jpg';
import G136 from '../../assets/gallery/g1 (136).jpg';
import G137 from '../../assets/gallery/g1 (137).jpg';
import G138 from '../../assets/gallery/g1 (138).jpg';
import G139 from '../../assets/gallery/g1 (139).jpg';
import G140 from '../../assets/gallery/g1 (140).jpg';
import G141 from '../../assets/gallery/g1 (141).jpg';
import G142 from '../../assets/gallery/g1 (142).jpg';
import G143 from '../../assets/gallery/g1 (143).jpg';

const RomanticGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [selectedCelebration, setSelectedCelebration] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [viewerStyle, setViewerStyle] = useState('slide');
  const sliderRef = useRef(null);
  const viewerRef = useRef(null);

  const featuredMemories = [
    {
      id: 1,
      image: T1,
      title: 'Our First Kiss',
      description:
        'That magical moment when our lips first met under the stars',
      date: 'May 12, 2020',
      category: 'milestones',
      location: 'Central Park, NY',
      quote:
        'A kiss is a lovely trick designed by nature to stop speech when words become superfluous.',
    },
    {
      id: 2,
      image: T2,
      title: 'Paris Getaway',
      description: 'Exploring the city of love hand in hand',
      date: 'July 5, 2021',
      category: 'memories',
      location: 'Paris, France',
      quote: 'Paris is always a good idea, especially with you by my side.',
    },
    {
      id: 3,
      image: T3,
      title: 'Anniversary Dinner',
      description: 'Celebrating another year of love and laughter',
      date: 'March 18, 2022',
      category: 'celebrations',
      location: 'The Rooftop, NYC',
      quote: 'The best thing to hold onto in life is each other.',
    },
    {
      id: 4,
      image: T4,
      title: 'The Proposal',
      description: 'When I asked you to be mine forever',
      date: 'December 24, 2022',
      category: 'milestones',
      location: 'Home Sweet Home',
      quote: 'I wanted it to be you. I wanted it to be you so badly.',
    },
    {
      id: 5,
      image: T5,
      title: 'Beach Sunset',
      description: 'Watching the sun set on another perfect day together',
      date: 'August 7, 2023',
      category: 'memories',
      location: 'Maldives',
      quote: "Side by side or miles apart, we're connected by the heart.",
    },
  ];

  const unforgettableMoments = [
    {
      id: 6,
      image: T5,
      title: 'Unforgettable Moment 1',
      description: 'En life la first time oru ponoda duo outing uu 😂',
      date: 'July 30, 2024',
      category: 'milestones',
      location: 'Special Place',
      quote: 'This moment will stay in our hearts forever.',
    },
    {
      id: 7,
      image: UFM2,
      title: 'Unforgettable Moment 2',
      description: 'Another beautiful memory together',
      date: 'Aug 31, 2024',
      category: 'milestones',
      location: 'Special Place',
      quote: 'Symposium Photo.',
    },
    {
      id: 8,
      image: T1,
      title: 'Unforgettable Moment 3',
      description: 'Na oru tubelight nu nirupicha naal 😂',
      date: 'Aug 1, 2024',
      category: 'celebrations',
      location: 'Special Place',
      quote: 'En aal hint kuduthum kandu pidikaatha me',
    },
    {
      id: 9,
      image: UFM5,
      title: 'Unforgettable Moment 4',
      description: 'Mithun Akka Marriage',
      date: '1st and 2nd Feb',
      category: 'milestones',
      location: 'Special Place',
      quote: 'First Ethnic Photo',
    },
    {
      id: 10,
      image: UFM3,
      title: 'Unforgettable Moment 5',
      description: 'Birthday surprise!!!!',
      date: 'Oct 27, 2024',
      category: 'Love',
      location: 'A2Z Celebrations Private Theatre',
      quote: 'Bestest day ',
    },
  ];

  const allCelebrationImages = [
    G1,
    G2,
    G3,
    G4,
    G5,
    G6,
    G7,
    G8,
    G9,
    G10,
    G11,
    G12,
    G13,
    G14,
    G15,
    G16,
    G17,
    G18,
    G19,
    G20,
    G21,
    G22,
    G23,
    G24,
    G25,
    G26,
    G27,
    G28,
    G29,
    G30,
    G31,
    G32,
    G33,
    G34,
    G35,
    G36,
    G37,
    G38,
    G39,
    G40,
    G41,
    G42,
    G43,
    G44,
    G45,
    G46,
    G47,
    G48,
    G49,
    G50,
    G51,
    G52,
    G53,
    G54,
    G55,
    G56,
    G57,
    G58,
    G59,
    G60,
    G61,
    G62,
    G63,
    G64,
    G65,
    G66,
    G67,
    G68,
    G69,
    G70,
    G71,
    G72,
    G73,
    G74,
    G75,
    G76,
    G77,
    G78,
    G79,
    G80,
    G81,
    G82,
    G83,
    G84,
    G85,
    G86,
    G87,
    G88,
    G89,
    G90,
    G91,
    G92,
    G93,
    G94,
    G95,
    G96,
    G97,
    G98,
    G99,
    G100,
    G101,
    G102,
    G103,
    G104,
    G105,
    G106,
    G107,
    G108,
    G109,
    G110,
    G111,
    G112,
    G113,
    G114,
    G115,
    G116,
    G117,
    G118,
    G119,
    G120,
    G121,
    G122,
    G123,
    G124,
    G125,
    G126,
    G127,
    G128,
    G129,
    G130,
    G131,
    G132,
    G133,
    G134,
    G135,
    G136,
    G137,
    G138,
    G139,
    G140,
    G141,
    G142,
    G143,
  ];
  const celebrationPhotos = allCelebrationImages.map((img, index) => ({
    id: 1001 + index,
    image: img,
    title: `Celebration Photo ${index + 1}`,
  }));

  const celebrationGroups = [
    {
      id: 'all-celebrations',
      name: 'Our Celebrations',
      coverImage: G1,
      date: 'Various Dates',
      photos: celebrationPhotos,
    },
  ];

  const individualMemories = [...featuredMemories, ...unforgettableMoments];

  const filteredMemories =
    activeCategory === 'all'
      ? individualMemories
      : individualMemories.filter(
          (memory) => memory.category === activeCategory
        );

  useEffect(() => {
    let interval;
    if (isAutoPlaying && !isHovering) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredMemories.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovering, featuredMemories.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredMemories.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredMemories.length) % featuredMemories.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const createHearts = (e) => {
    if (!showHearts) return;
    const heart = document.createElement('div');
    heart.classList.add('love-heart-float');
    heart.innerHTML = '❤';
    heart.style.left = `${e.clientX}px`;
    heart.style.top = `${e.clientY}px`;
    heart.style.fontSize = `${Math.random() * 20 + 10}px`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 5000);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSelectedCelebration(null);
  };

  const openCelebration = (celebration) => {
    setSelectedCelebration(celebration);
    setCurrentPhotoIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeCelebration = () => {
    setSelectedCelebration(null);
    document.body.style.overflow = 'auto';
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex(
      (prev) => (prev + 1) % selectedCelebration.photos.length
    );
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex(
      (prev) =>
        (prev - 1 + selectedCelebration.photos.length) %
        selectedCelebration.photos.length
    );
  };

  const changeViewerStyle = (style) => {
    setViewerStyle(style);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (viewerRef.current && !viewerRef.current.contains(event.target)) {
        closeCelebration();
      }
    };
    if (selectedCelebration) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedCelebration]);

  return (
    <div
      className="love-gallery"
      onMouseMove={createHearts}
      onMouseEnter={() => setShowHearts(true)}
      onMouseLeave={() => setShowHearts(false)}
    >
      <section className="love-hero">
        <div
          className="love-slider"
          ref={sliderRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {featuredMemories.map((memory, index) => (
            <div
              key={memory.id}
              className={`love-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="love-image-container">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="love-slide-image"
                />
              </div>
            </div>
          ))}
          <button className="love-slider-nav love-prev" onClick={prevSlide}>
            <svg viewBox="0 0 24 24">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
            </svg>
          </button>
          <button className="love-slider-nav love-next" onClick={nextSlide}>
            <svg viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </button>
        </div>
        <div className="love-slider-dots">
          {featuredMemories.map((_, index) => (
            <button
              key={index}
              className={`love-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>

      <section className="love-memories">
        <div className="love-section-header">
          <h2 className="love-section-title">
            <span className="love-title-heart">❤</span> Our Love Story
          </h2>
          <div className="love-categories">
            <button
              className={`love-category-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('all')}
            >
              All Memories
            </button>
            <button
              className={`love-category-btn ${activeCategory === 'milestones' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('milestones')}
            >
              Milestones
            </button>
            <button
              className={`love-category-btn ${activeCategory === 'memories' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('memories')}
            >
              Memories
            </button>
            <button
              className={`love-category-btn ${activeCategory === 'celebrations' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('celebrations')}
            >
              Celebrations
            </button>
          </div>
        </div>
        <div className="love-memory-grid">
          {activeCategory !== 'celebrations' &&
            filteredMemories.map((memory) => (
              <div key={memory.id} className="love-memory-card">
                <div className="love-card-image">
                  <img
                    src={memory.image}
                    alt={memory.title}
                    loading="lazy"
                    style={{ objectPosition: 'center 70%' }}
                  />
                  <div className="love-card-overlay">
                    <span className="love-card-date">{memory.date}</span>
                    <h3 className="love-card-title">{memory.title}</h3>
                    <p className="love-card-category">{memory.category}</p>
                  </div>
                </div>
                <div className="love-card-badge">{memory.category}</div>
                <div className="love-card-heart">❤</div>
              </div>
            ))}
          {activeCategory === 'celebrations' && (
            <div className="love-celebration-cards-container">
              <div className="love-celebration-cards">
                {celebrationGroups.map((group) => (
                  <div
                    key={group.id}
                    className="love-celebration-card"
                    onClick={() => openCelebration(group)}
                  >
                    <div className="love-celebration-image">
                      <img
                        src={group.coverImage}
                        alt={group.name}
                        loading="lazy"
                      />
                    </div>
                    <div className="love-celebration-info">
                      <h3>{group.name}</h3>
                      <div className="love-celebration-meta">
                        <span className="love-celebration-date">
                          {group.date}
                        </span>
                        <span className="love-celebration-count">
                          {group.photos.length} Photos
                        </span>
                      </div>
                    </div>
                    <div className="love-celebration-heart">❤</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeCategory !== 'celebrations' &&
            filteredMemories.length === 0 && (
              <div className="love-no-memories">
                <p>No memories found in this category</p>
              </div>
            )}
        </div>
      </section>

      {selectedCelebration && (
        <div className="love-celebration-viewer">
          <div className="love-viewer-overlay" onClick={closeCelebration}></div>
          <div className={`love-viewer-content ${viewerStyle}`} ref={viewerRef}>
            <button className="love-viewer-close" onClick={closeCelebration}>
              &times;
            </button>
            <div className="love-viewer-header">
              <h2>{selectedCelebration.name}</h2>
              <div className="love-viewer-styles">
                <button
                  className={`${viewerStyle === 'slide' ? 'active' : ''}`}
                  onClick={() => changeViewerStyle('slide')}
                >
                  Slide
                </button>
                <button
                  className={`${viewerStyle === 'grid' ? 'active' : ''}`}
                  onClick={() => changeViewerStyle('grid')}
                >
                  Grid
                </button>
                <button
                  className={`${viewerStyle === 'masonry' ? 'active' : ''}`}
                  onClick={() => changeViewerStyle('masonry')}
                >
                  Masonry
                </button>
              </div>
            </div>
            {viewerStyle === 'slide' && (
              <div className="love-viewer-slide">
                <div className="love-viewer-main-image">
                  <img
                    src={selectedCelebration.photos[currentPhotoIndex].image}
                    alt={selectedCelebration.photos[currentPhotoIndex].title}
                  />
                  <div className="love-viewer-caption">
                    {selectedCelebration.photos[currentPhotoIndex].title}
                  </div>
                </div>
                <button
                  className="love-viewer-nav love-viewer-prev"
                  onClick={prevPhoto}
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                  </svg>
                </button>
                <button
                  className="love-viewer-nav love-viewer-next"
                  onClick={nextPhoto}
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                </button>
                <div className="love-viewer-counter">
                  {currentPhotoIndex + 1} / {selectedCelebration.photos.length}
                </div>
              </div>
            )}
            {viewerStyle === 'grid' && (
              <div className="love-viewer-grid">
                {selectedCelebration.photos.map((photo, index) => (
                  <div
                    key={photo.id}
                    className={`love-viewer-grid-item ${index === currentPhotoIndex ? 'active' : ''}`}
                    onClick={() => setCurrentPhotoIndex(index)}
                  >
                    <img src={photo.image} alt={photo.title} />
                  </div>
                ))}
              </div>
            )}
            {viewerStyle === 'masonry' && (
              <div className="love-viewer-masonry">
                {selectedCelebration.photos.map((photo, index) => (
                  <div
                    key={photo.id}
                    className={`love-viewer-masonry-item ${index === currentPhotoIndex ? 'active' : ''}`}
                    onClick={() => setCurrentPhotoIndex(index)}
                    style={{
                      gridRowEnd: `span ${Math.floor(Math.random() * 3) + 2}`,
                      aspectRatio: Math.random() > 0.5 ? '3/4' : '4/3',
                    }}
                  >
                    <img src={photo.image} alt={photo.title} />
                    {index === currentPhotoIndex && (
                      <div className="love-viewer-masonry-caption">
                        {photo.title}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            <div className="love-viewer-thumbnails">
              {selectedCelebration.photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className={`love-viewer-thumbnail ${index === currentPhotoIndex ? 'active' : ''}`}
                  onClick={() => setCurrentPhotoIndex(index)}
                >
                  <img src={photo.image} alt={photo.title} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <section className="love-timeline">
        <div className="love-section-header">
          <h2 className="love-section-title">
            <span className="love-title-heart">❤</span> மறக்கமுடியாத தருணங்கள்
          </h2>
        </div>
        <div className="love-timeline-container">
          {unforgettableMoments.map((memory) => (
            <div key={memory.id} className="love-timeline-item">
              <div className="love-timeline-content">
                <div className="love-timeline-image">
                  <img
                    src={memory.image}
                    alt={memory.title}
                    style={{ objectPosition: 'center 70%' }}
                  />
                  <div className="love-timeline-heart">❤</div>
                </div>
                <div className="love-timeline-text">
                  <div className="love-timeline-header">
                    <h3>{memory.title}</h3>
                    <span className="love-timeline-date">{memory.date}</span>
                  </div>
                  <p>{memory.description}</p>
                  <div className="love-timeline-quote">"{memory.quote}"</div>
                  <span className="love-timeline-location">
                    {memory.location}
                  </span>
                </div>
              </div>
              <div className="love-timeline-marker"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="love-quote">
        <div className="love-quote-container">
          <div className="love-quote-content">
            <svg className="love-quote-icon" viewBox="0 0 24 24">
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>
            <p className="love-quote-text">
              தினம் தினம் உனை நினைக்கிறேன்… துரும்பென உடல் இளைக்கிறேன்… உயிர்
              கொண்டு வரும் பதுமையே… உனைவிட இல்லை புதுமையே…
            </p>
            <span className="love-quote-author">- Our Promise</span>
          </div>
        </div>
      </section>

      <div className="love-floating-hearts">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="love-floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 20 + 10}px`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          >
            ❤
          </div>
        ))}
      </div>
    </div>
  );
};

export default RomanticGallery;
