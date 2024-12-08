const { animate } = require("motion");

import {animate} from "motion";

const box = document.getElementById("box")

animate(box, { opacity: 0 }, { duration: 0.5 })

// Selectors
animate("div", { x: [0, 100] }, { ease: "easeIn" })