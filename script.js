const pages = document.querySelectorAll(".page");
function showPage(id){
  pages.forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* PANDA AUTO */
setTimeout(()=>showPage("lyricsPage"),3500);

/* LYRICS */
const lyricsLines=[
"We are still kids and we're so in love",
"Fightin' against all odds",
"I know we'll be alright this time",
"Darling, just hold my hand",
"Be my girl, I'll be your man",
"I see my future in your eyes"
];
0
