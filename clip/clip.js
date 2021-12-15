import {AudioPlayback,HTMLClip,CSSEffect,loadPlugin} from "@donkeyclip/motorcortex";
import SVGPluginDefinition from "@donkeyclip/motorcortex-svgdraw";
const SVGPlugin = loadPlugin(SVGPluginDefinition);

function saparateLetters(word){
  let letterDivs="";
  for(let i=0;i<word.length;i++){
    letterDivs +=`<div class="letter"> ${word[i]}</div>`
  }
  return letterDivs; 
}

export const clip = new HTMLClip({
  html: `
  <div class="container">
  <svg class="sleigh" xmlns="http://www.w3.org/2000/svg" version="1.0" width="306px" height="230px" viewBox="0 0 612.000000 459.000000" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,459.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
    <path d="M5600 3370 c0 -5 -7 -6 -17 -3 -11 4 -14 3 -9 -5 4 -7 2 -12 -6 -12 -8 -1 -6 -6 6 -15 11 -8 16 -15 12 -15 -5 0 -3 -6 3 -14 9 -11 9 -15 -1 -19 -7 -3 0 -6 15 -6 16 -1 26 -5 22 -11 -3 -6 2 -13 12 -17 10 -4 36 -20 58 -36 36 -27 37 -29 13 -23 -31 7 -38 -9 -12 -28 16 -12 22 -76 10 -113 -15 -46 -116 -80 -261 -88 -55 -3 -101 -8 -104 -11 -3 -3 2 -11 12 -18 9 -7 17 -17 17 -23 0 -9 -241 -103 -304 -119 -30 -7 -46 6 -46 39 0 11 8 17 23 17 29 1 57 23 57 44 0 14 -6 16 -29 11 -43 -9 -46 9 -6 36 34 23 53 49 36 49 -5 0 -14 -7 -21 -15 -7 -8 -16 -12 -21 -9 -5 3 -22 -5 -38 -17 -28 -21 -30 -21 -66 -4 -31 16 -36 21 -30 43 5 21 4 23 -8 14 -21 -18 -42 6 -23 27 12 14 12 18 0 29 -12 11 -14 9 -14 -8 0 -44 -39 -11 -41 35 -1 16 -3 22 -6 13 -2 -9 -10 -15 -17 -12 -8 3 -16 -2 -19 -10 -4 -10 2 -17 15 -22 14 -4 17 -8 8 -14 -21 -13 -16 -23 20 -36 19 -7 28 -13 20 -13 -8 -1 10 -17 40 -36 52 -33 53 -35 26 -35 l-29 0 21 -23 c31 -33 31 -109 -1 -141 -32 -32 -145 -63 -250 -69 -49 -3 -91 -8 -94 -11 -4 -3 2 -13 13 -20 23 -17 40 -10 -167 -74 l-156 -49 -10 44 c-10 43 -10 45 16 55 46 18 56 25 59 42 3 12 -4 16 -27 16 -41 0 -47 15 -11 30 33 13 56 37 47 47 -4 3 -13 0 -21 -6 -8 -7 -19 -10 -24 -7 -5 3 -17 -3 -27 -14 -22 -24 -28 -24 -72 -4 -29 15 -34 21 -28 42 5 22 4 24 -9 13 -12 -10 -17 -9 -25 7 -9 16 -6 23 12 36 12 9 16 14 10 11 -8 -4 -13 1 -14 12 0 15 -2 14 -11 -5 -16 -32 -32 -22 -39 24 -3 21 -7 33 -8 25 0 -7 -7 -11 -16 -7 -9 3 -15 0 -15 -10 0 -9 -5 -13 -12 -9 -7 4 -2 -3 12 -15 14 -12 19 -19 13 -15 -7 3 -13 2 -13 -4 0 -5 6 -12 13 -14 7 -3 3 -6 -8 -7 -14 -2 -11 -4 10 -9 17 -4 29 -12 28 -19 -2 -6 7 -17 20 -23 12 -7 36 -23 52 -37 l30 -25 -27 5 c-30 6 -40 -15 -13 -26 18 -7 20 -73 4 -110 -7 -15 -32 -34 -63 -48 -45 -20 -68 -22 -183 -23 -73 0 -133 -1 -133 -3 0 -2 9 -16 21 -31 11 -16 19 -39 17 -52 -3 -20 -20 -28 -163 -71 -88 -26 -165 -48 -170 -48 -6 0 -15 25 -21 55 l-10 54 41 13 c29 10 40 18 40 33 0 16 -6 19 -27 17 -37 -5 -44 15 -10 32 16 8 34 22 41 30 11 13 11 16 -2 16 -9 0 -19 -5 -22 -10 -4 -6 -11 -8 -16 -4 -6 3 -19 -3 -30 -15 -24 -26 -35 -26 -76 -2 -25 16 -30 24 -25 43 5 20 4 21 -11 9 -14 -11 -18 -11 -24 4 -4 11 0 22 9 29 13 9 13 13 2 23 -10 10 -14 9 -19 -8 -10 -30 -35 -5 -35 35 0 21 -3 27 -9 17 -5 -7 -13 -11 -17 -8 -5 3 -15 -1 -21 -8 -10 -11 -9 -15 9 -20 14 -5 17 -9 8 -15 -9 -6 -9 -9 0 -15 9 -6 9 -10 -1 -16 -10 -6 -6 -9 14 -9 15 0 26 -4 25 -9 -2 -6 22 -26 52 -45 l54 -36 -34 0 -33 0 21 -23 c43 -46 24 -125 -37 -156 -56 -29 -112 -40 -223 -42 -54 -1 -98 -4 -98 -7 0 -2 9 -15 20 -29 11 -14 20 -35 20 -47 0 -19 -20 -27 -182 -73 -100 -29 -183 -51 -184 -50 -2 2 -6 22 -10 45 -6 39 -5 42 15 42 33 0 61 18 61 40 0 16 -5 19 -29 14 -39 -8 -48 12 -13 30 16 8 34 22 41 30 11 13 11 16 -2 16 -9 0 -19 -5 -22 -10 -4 -6 -10 -8 -15 -5 -5 3 -19 -4 -30 -15 -22 -22 -45 -21 -87 6 -14 9 -20 20 -16 34 4 15 2 19 -10 14 -21 -8 -33 17 -15 30 13 9 13 13 2 23 -10 10 -14 9 -19 -8 -10 -30 -35 -5 -35 35 0 21 -3 27 -9 17 -5 -7 -13 -11 -17 -8 -5 3 -14 -1 -21 -8 -9 -10 -7 -14 10 -19 17 -5 19 -8 9 -15 -11 -6 -10 -11 3 -25 9 -9 24 -16 33 -16 14 0 15 -2 2 -10 -12 -7 -10 -11 10 -20 14 -6 40 -22 59 -35 l34 -25 -34 0 -34 -1 22 -18 c26 -22 31 -80 10 -121 -22 -45 -114 -73 -246 -76 -62 -2 -116 -6 -119 -9 -3 -2 2 -13 11 -23 27 -30 21 -38 -45 -58 -51 -15 -93 -19 -218 -18 -165 1 -273 11 -545 51 -195 28 -243 26 -328 -17 -52 -26 -142 -50 -188 -50 -11 0 -20 14 -28 46 -8 29 -23 56 -41 73 -17 14 -30 31 -30 38 0 7 -4 13 -10 13 -5 0 -10 9 -10 20 0 21 -45 50 -78 50 -19 0 -82 -61 -82 -80 0 -15 17 -12 24 5 3 8 13 15 21 15 9 0 14 -4 10 -9 -3 -5 -1 -12 4 -16 5 -3 9 -14 8 -24 -1 -17 -4 -18 -27 -6 -45 23 -161 55 -201 55 -22 0 -55 -7 -74 -15 -33 -13 -36 -13 -56 8 l-20 22 -20 -24 c-24 -29 -20 -44 12 -51 20 -5 23 -11 21 -40 -2 -18 -10 -39 -18 -47 -16 -16 -17 -15 50 -123 36 -59 45 -81 40 -102 -9 -43 23 -122 83 -212 54 -78 55 -82 50 -134 -3 -30 -8 -56 -10 -59 -3 -2 -35 -9 -71 -15 -90 -15 -140 0 -163 48 -24 49 -9 88 35 92 36 4 41 16 12 32 -24 13 -63 4 -83 -18 -39 -45 -24 -135 30 -182 27 -24 43 -30 82 -30 68 0 1300 168 1334 181 15 7 39 25 52 41 21 24 25 40 25 89 0 50 -4 64 -25 84 -26 27 -82 34 -103 13 -20 -20 -13 -30 16 -23 46 10 81 -49 62 -101 -18 -48 -64 -63 -262 -89 l-48 -6 -24 56 -25 56 34 45 c38 50 75 155 75 215 0 37 -26 79 -49 79 -21 0 -41 -13 -41 -26 0 -12 4 -12 20 -2 17 11 22 10 30 -2 22 -34 -18 -96 -81 -128 -32 -16 -79 -26 -158 -34 -103 -11 -114 -10 -123 5 -5 9 -20 17 -33 17 -19 0 -26 8 -37 42 -15 45 -32 55 -96 57 -30 1 -33 3 -26 24 9 29 4 26 71 42 79 19 77 20 97 -21 16 -34 16 -38 0 -55 -9 -11 -13 -19 -7 -19 5 0 15 11 22 24 11 20 11 29 -5 55 -13 21 -15 34 -8 39 6 4 13 15 17 25 8 22 77 53 137 62 30 4 102 -2 210 -19 366 -57 626 -69 751 -36 91 24 89 24 89 1 0 -29 -39 -70 -90 -95 -41 -20 -45 -25 -57 -81 -8 -32 -23 -70 -35 -82 -20 -21 -21 -25 -6 -39 23 -23 34 -12 59 56 24 68 38 83 94 100 22 7 69 28 105 47 62 33 68 34 141 27 82 -7 122 5 198 61 37 27 71 33 71 12 0 -17 -48 -87 -60 -87 -6 0 -10 -9 -10 -19 0 -41 21 -30 60 31 66 102 65 132 -4 126 -34 -2 -41 0 -40 15 4 81 -14 68 185 126 99 29 183 51 185 48 10 -10 -39 -56 -70 -67 -46 -15 -61 -35 -75 -101 -6 -31 -21 -65 -31 -74 -15 -14 -17 -21 -9 -32 21 -25 38 -13 59 45 26 68 52 99 94 108 17 4 66 25 109 47 76 40 78 41 132 30 35 -8 65 -9 87 -2 30 8 47 18 127 71 14 10 36 18 49 18 l22 0 -20 -39 c-11 -22 -29 -46 -41 -54 -15 -11 -19 -21 -14 -37 6 -20 8 -21 25 -5 11 10 33 45 51 79 41 79 36 101 -21 93 -41 -5 -52 4 -40 37 5 14 46 31 169 68 90 27 166 47 169 43 10 -10 -40 -54 -68 -60 -38 -8 -56 -31 -71 -88 -6 -27 -23 -62 -36 -77 l-24 -29 21 -11 c27 -14 28 -13 59 62 25 58 30 64 76 81 28 10 77 32 110 47 82 40 98 43 146 30 60 -16 117 -5 180 36 54 35 95 51 105 41 9 -9 -24 -64 -51 -85 -26 -20 -33 -46 -15 -57 11 -7 65 64 91 120 23 52 11 69 -44 61 l-38 -6 3 37 3 38 175 57 c96 32 175 56 176 55 1 -1 5 -13 8 -27 9 -35 -24 -85 -72 -109 -51 -26 -58 -37 -66 -96 -3 -27 -16 -63 -27 -78 -20 -28 -20 -29 -2 -42 23 -17 27 -13 48 55 21 66 46 95 94 111 20 7 65 30 101 51 63 38 67 39 132 33 75 -7 114 5 175 54 45 35 90 54 98 41 8 -12 -17 -60 -44 -84 -22 -20 -28 -51 -12 -60 15 -10 91 122 91 158 0 29 -13 35 -57 28 l-33 -5 0 57 c0 36 4 58 13 61 6 2 79 29 162 60 179 66 195 65 159 -10 -10 -22 -30 -40 -58 -53 -54 -26 -62 -37 -70 -97 -3 -27 -16 -63 -27 -79 -19 -25 -20 -30 -6 -43 22 -22 34 -10 52 55 19 65 45 98 85 107 16 3 53 21 83 39 78 47 105 55 179 49 71 -6 96 3 175 63 53 41 88 46 77 12 -10 -34 -34 -67 -56 -79 -15 -8 -16 -14 -7 -30 15 -29 32 -11 75 72 42 85 38 104 -21 95 l-43 -5 -5 72 c-3 40 -8 82 -12 93 -5 18 -2 23 22 29 36 9 53 23 53 45 0 13 -6 17 -20 13 -11 -3 -27 -2 -37 1 -14 6 -12 10 13 25 16 10 35 25 43 34 11 15 11 17 -2 17 -9 0 -19 -5 -22 -10 -4 -6 -11 -8 -16 -4 -6 3 -17 -3 -25 -15 -18 -25 -44 -27 -85 -5 -24 12 -29 19 -23 37 6 19 5 20 -8 10 -8 -7 -18 -10 -21 -6 -11 10 -8 43 4 43 5 0 7 5 4 10 -10 16 -25 12 -25 -6 0 -14 -3 -14 -15 -4 -8 7 -15 25 -15 41 0 16 -4 29 -10 29 -5 0 -10 -4 -10 -10z m-4243 -1921 c16 -36 19 -51 10 -54 -21 -7 -268 -37 -271 -34 -2 2 -6 28 -10 57 -5 39 -3 52 6 53 7 0 49 6 93 14 143 23 147 22 172 -36z m-293 -10 c3 -17 6 -44 6 -58 0 -27 -1 -27 -122 -44 -67 -9 -123 -15 -124 -14 -2 1 -4 27 -6 57 l-3 54 115 17 c63 9 118 17 121 18 4 0 9 -13 13 -30z m-269 -60 c4 -27 4 -53 1 -57 -6 -6 -258 -43 -263 -39 -1 2 1 28 4 59 l6 57 56 7 c31 4 76 10 101 14 89 15 87 15 95 -41z"/>
    </g>
  </svg>
  
  <div class="slide1"><div class="text t1">Χρόνια</div><div class="text t2">Πολλά!</div></div>
  <div class="slide2"><div class="text t1">${saparateLetters("Καλά")}</div><div class="text t2">${saparateLetters("Χριστούγεννα!")}</div></div>
  <div class="slide3"><div class="text t1">Ευτυχισμένο</div><div class="text t2">το νέο έτος με</div><div class="text t3">υγεία, αγάπη και</div><div class="text t4">δημιουργηκότητα.</div></div>
  
  <svg class="tree" xmlns="http://www.w3.org/2000/svg" version="1.0" width="400px" height="500px" viewBox="0 0 999.000000 1002.000000" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,1002.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
    <path class="star" d="M4867 9940 c-4 -8 -38 -168 -77 -355 -39 -187 -74 -348 -78 -357 -6 -15 -44 0 -292 113 -157 72 -310 142 -340 155 -53 24 -45 15 210 -240 145 -146 262 -267 260 -269 -3 -2 -175 -32 -383 -67 -207 -35 -374 -67 -370 -70 5 -4 166 -28 358 -54 193 -26 358 -51 369 -55 15 -6 -30 -53 -258 -270 -152 -145 -276 -264 -276 -266 0 -2 165 75 367 171 201 96 368 173 370 171 2 -2 31 -146 65 -321 34 -174 65 -316 68 -316 3 0 32 136 64 303 31 166 59 308 62 315 5 15 -9 23 394 -211 151 -88 280 -162 285 -165 10 -6 -71 82 -358 391 -87 94 -154 173 -150 177 4 4 172 29 373 55 201 26 367 49 369 51 2 2 1 4 -2 4 -10 0 -728 129 -757 136 -23 6 -1 29 255 280 l280 274 -65 -28 c-36 -16 -182 -84 -325 -150 -143 -66 -266 -122 -274 -124 -12 -2 -27 73 -76 367 -34 204 -65 363 -68 355z"/>
    <path d="M4805 7559 c-38 -124 -80 -156 -333 -253 -125 -49 -213 -103 -265 -165 -36 -43 -34 -51 11 -39 76 21 256 -6 406 -63 30 -11 85 -42 121 -68 l66 -48 -143 -84 c-176 -102 -456 -275 -522 -323 -54 -38 -226 -204 -226 -218 0 -12 2 -11 87 23 67 27 94 33 190 37 217 9 498 -33 649 -98 158 -68 160 -66 -54 -73 -444 -16 -671 -55 -1078 -188 -317 -103 -548 -209 -528 -241 8 -13 147 -6 379 17 186 20 466 15 633 -9 208 -31 492 -107 629 -168 l48 -22 -160 -23 c-249 -37 -570 -112 -810 -190 -229 -74 -597 -229 -875 -368 -302 -151 -430 -235 -430 -281 0 -17 103 7 288 67 415 135 574 164 887 163 351 0 694 -58 1170 -197 l180 -52 -235 -6 c-642 -18 -1281 -167 -2081 -487 -628 -251 -1183 -555 -1167 -638 9 -46 93 -38 488 50 564 125 776 155 1145 163 271 6 507 -5 800 -38 223 -25 552 -80 705 -118 l115 -29 -95 -1 c-653 -9 -1353 -121 -2030 -326 -746 -227 -1709 -621 -1862 -763 -34 -32 -37 -61 -5 -63 63 -4 245 24 523 81 128 27 443 76 599 94 459 54 984 54 1615 0 424 -36 1347 -159 1373 -183 4 -4 -97 -11 -225 -14 -571 -16 -1263 -94 -1768 -198 -887 -185 -2645 -750 -2838 -914 -31 -26 -32 -29 -17 -44 25 -25 310 -19 790 18 670 51 694 52 1110 58 442 6 581 0 998 -47 799 -91 1369 -223 2797 -650 500 -149 597 -176 790 -214 144 -28 980 -157 1180 -181 205 -25 586 -31 737 -11 426 56 735 216 1100 569 152 147 233 245 233 279 0 18 -5 20 -37 15 -51 -9 -232 -99 -403 -203 -179 -108 -243 -138 -345 -163 -243 -61 -650 -60 -1110 0 -563 74 -914 162 -1700 424 -667 223 -820 265 -1421 394 -884 189 -1429 281 -1776 300 -228 13 -552 -2 -947 -45 -79 -8 -145 -13 -148 -11 -7 8 322 85 477 111 607 106 1247 125 2475 75 506 -20 681 -36 1070 -95 670 -102 827 -121 1098 -134 564 -26 1041 73 1707 357 385 164 567 283 432 283 -59 0 -259 -34 -647 -109 -553 -106 -551 -106 -790 -106 l-210 1 -155 43 c-157 43 -303 90 -620 200 -235 82 -485 152 -921 260 -1141 282 -1472 344 -2179 406 -177 15 -579 45 -614 45 -11 0 -17 2 -14 5 6 6 369 40 603 57 245 17 1026 17 1215 0 80 -7 251 -26 380 -42 491 -60 932 -84 1409 -77 308 4 332 6 436 31 340 81 762 241 860 327 37 33 45 63 19 73 -31 12 -161 6 -398 -20 -196 -21 -274 -25 -421 -22 -269 7 -416 44 -935 240 -649 245 -911 315 -1895 507 l-200 39 805 0 c1278 1 1450 22 1873 233 349 175 585 359 460 359 -15 0 -127 -34 -250 -75 -123 -41 -256 -83 -296 -92 -99 -25 -331 -24 -442 1 -271 60 -620 180 -1055 363 -124 52 -254 106 -290 121 l-65 27 275 7 c299 7 353 14 487 68 172 69 438 233 510 314 53 60 110 166 89 166 -8 0 -54 -10 -103 -21 -74 -18 -106 -20 -203 -15 -103 5 -313 42 -455 79 l-49 13 179 119 c202 135 274 197 304 258 32 65 28 77 -19 77 -150 0 -387 92 -636 247 -95 59 -161 92 -357 176 -27 12 -20 17 267 192 162 99 292 183 288 186 -4 4 -64 16 -134 28 -175 29 -398 108 -477 169 l-23 19 27 81 c28 80 28 81 11 133 -17 50 -72 139 -86 139 -4 0 -15 -28 -25 -61z"/>
    </g>
</svg>
  </div>`,
  css: `
  .container {
    position: relative;
    width: 800px;
    height: 600px;
    background:black;
   }
   .sleigh path{
     fill:white;
   }
  .sleigh{
    position:absolute;
    top:300px;
    left:-300px;
  }
  .slide1{
    width: 800px;
    height: 600px;
    background:url("images/chr2.jpeg");
    background-size: 900px;
    background-position: center;
    position:absolute;
    top:0px;
    left:0px;
    opacity:0;
  }
  .text{
    position:absolute;
    color:white;
    font-size:110px;
  }
  .slide1 .text{
    width:0px;
    overflow:hidden;
  }
  .slide1 .t1{
    top:26%;
    left:0%;
  }
  .slide1 .t2{
    top:48%;
    left:95%;
  }
  .slide2{
    width: 800px;
    height: 600px;
    background:url("images/chr1.jpeg");
    background-size: 2400px;
    background-position: center;
    position:absolute;
    top:0px;
    left:0px;
    opacity:0;
  }
  .letter{
    display:inline-block;
    opacity:0;
   }
   .slide2 .text{
     position:absolute;
     left:50%;
     transform:translateX(-50%);
     width:100%;
     text-align:center;
   }
   .slide2 .t1{
     top:17%;
   }
   .slide2 .t2{
     top:37%;
   }
   .slide3{
    width: 800px;
    height: 600px;
    background:url("images/chr4.jpeg");
    background-size: 900px;
    background-position: center;
    position:absolute;
    top:0px;
    left:800px;
    opacity:0;
  }
  .slide3 .text{
    font-size:65px;
    left:-500px;
    opacity:0;
  }
  .slide3 .t1{
    top:5%;
  }
  .slide3 .t2{
    top:25%;
  }
  .slide3 .t3{
    top:45%;
  }
  .slide3 .t4{
    top:65%;
  }
  .tree{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
  }
  .tree path{
    fill:none;
    stroke:#323313;
    stroke-width:100px;
  }
  .tree .star{
    fill:none;
    stroke:#8F8045;
    stroke-width:50px;
  }
  `,
  host: document.getElementById("clip"),
  containerParams: {
    width: "800px",
    height: "600px",
  },
  audioSources: [
    {
      src: "audio/christmas.mp3",
      id: "christmas-audio",
      base64: false,
    },
  ],
});

const audioPlayback = new AudioPlayback(
  {},
  {
    selector: "~#christmas-audio",
    startFrom: 0,
    duration: 19301,
  }
);

clip.addIncident(audioPlayback, 0);

const sleighMove = new CSSEffect(
  {
    animatedAttrs: {
      top: "10px",
      left: "800px"
    }
  },
  {
    duration: 3000,
    selector: ".sleigh",
    easing:"easeInOutCubic"
  }
);
const slide1appear = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0.6
    }
  },
  {
    duration: 2000,
    selector: ".slide1"
  }
);
const slide1text = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
      left:"50%",
      transform:{translateX:"-50%"},
      width:"45%"
    }
  },
  {
    duration: 2300,
    selector: ".slide1 .t1,.slide1 .t2",
    easing:"easeOutCirc"
  }
);
const zoomSlide1bg = new CSSEffect(
  {
    animatedAttrs: {
      backgroundSize: "2000px"
    }
  },
  {
    duration: 1500,
    selector: ".slide1",
    easing:"easeInQuint"
  }
);
const zoomSlide1text = new CSSEffect(
  {
    animatedAttrs: {
      overflow:"visible",
      width:"80%",
      fontSize:"220px"
    }
  },
  {
    duration: 1500,
    selector: ".slide1 .text",
    easing:"easeInQuint"
  }
);
const slide1text1 = new CSSEffect(
  {
    animatedAttrs: {
      top:"0%",
      opacity:0
    }
  },
  {
    duration: 1500,
    selector: ".slide1 .t1",
    easing:"easeInQuint"
  }
);
const slide1text2 = new CSSEffect(
  {
    animatedAttrs: {
      top:"43%",
      opacity:0
    }
  },
  {
    duration: 1500,
    selector: ".slide1 .t2",
    easing:"easeInQuint"
  }
);
const removeSlide1 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0
    }
  },
  {
    duration: 1,
    selector: ".slide1",
  }
);
const slide2appear = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0.6
    }
  },
  {
    duration: 1,
    selector: ".slide2",
  }
);
const slide2bg = new CSSEffect(
  {
    animatedAttrs: {
      backgroundSize:"900px"
    }
  },
  {
    duration: 1000,
    selector: ".slide2",
    easing:"easeOutQuint"
  }
);
const slide2text = new CSSEffect(
  {
    animatedAttrs: {
     opacity:1,
     top:"15%"
    }
  },
  {
    duration: 300,
    delay:"@stagger(0,2000)",
    selector: ".slide2 .letter"
  }
);
const slide2unfocus = new CSSEffect(
  {
    animatedAttrs: {
      backgroundSize:"600px"
    }
  },
  {
    duration: 1000,
    selector: ".slide2"
  }
);
const slide2textSize = new CSSEffect(
  {
    animatedAttrs: {
      fontSize:"60px"
    }
  },
  {
    duration: 1000,
    selector: ".slide2 .text"
  }
);
const slide2text1 = new CSSEffect(
  {
    animatedAttrs: {
      top:"30%"
    }
  },
  {
    duration: 1000,
    selector: ".slide2 .t1"
  }
);
const slide2text2 = new CSSEffect(
  {
    animatedAttrs: {
      top:"45%"
    }
  },
  {
    duration: 1000,
    selector: ".slide2 .t2"
  }
);
const removeSlide2 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0
    }
  },
  {
    duration: 1000,
    selector: ".slide2"
  }
);
const slide3appear = new CSSEffect(
  {
    animatedAttrs: {
     left:"0px",
     opacity:0.6
    }
  },
  {
    duration: 1000,
    selector: ".slide3"
  }
);
const slide3text = new CSSEffect(
  {
    animatedAttrs: {
     left:"5px",
     opacity:1
    }
  },
  {
    duration: 700,
    delay:"@stagger(0,700)",
    selector: ".slide3 .text",
    easing:"easeOutQuint"
  }
);

const removeSlide3 = new CSSEffect(
  {
    animatedAttrs: {
     opacity:0
    }
  },
  {
    duration: 1000,
    selector: ".slide3"
  }
);
const drawTree = new SVGPlugin.Draw(
  {
    animatedAttrs: {
      cover: 1
    }
  },
  {
    selector: ".tree path",
    duration: 1000
  }
);
const star = new CSSEffect(
  {
    animatedAttrs: {
     strokeWidth:"200px"
    }
  },
  {
    selector: ".tree .star",
    duration: 200
  }
);
const star2 = new CSSEffect(
  {
    animatedAttrs: {
     strokeWidth:"50px"
    }
  },
  {
    selector: ".tree .star",
    duration: 1
  }
);
clip.addIncident(sleighMove, 0);
clip.addIncident(slide1appear, 3000);
clip.addIncident(slide1text, 4000);
clip.addIncident(zoomSlide1bg, 6600);
clip.addIncident(zoomSlide1text, 6600);
clip.addIncident(slide1text1, 6600);
clip.addIncident(slide1text2, 6600);
clip.addIncident(removeSlide1, 8100);
clip.addIncident(slide2appear, 8101);
clip.addIncident(slide2bg, 8100);
clip.addIncident(slide2text, 9100);
clip.addIncident(slide2unfocus, 11000);
clip.addIncident(slide2textSize, 11000);
clip.addIncident(slide2text1, 11000);
clip.addIncident(slide2text2, 11000);
clip.addIncident(removeSlide2, 12300);
clip.addIncident(slide3appear, 13300);
clip.addIncident(slide3text, 14300);
clip.addIncident(removeSlide3, 16700);
clip.addIncident(drawTree, 17700);
clip.addIncident(star, 19100);
clip.addIncident(star2, 19300);