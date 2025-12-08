import { c as createComponent, m as maybeRenderHead, b as renderTemplate, a as createAstro, d as renderComponent, e as addAttribute, r as renderHead } from '../chunks/astro/server_EAn7jcZ8.mjs';
import 'piccolore';
/* empty css                                 */
import { $ as $$Image } from '../chunks/_astro_assets_leE7qqjf.mjs';
import { $ as $$Navbar } from '../chunks/Navbar_DVL4U2bY.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="max-md:hidden"> <div class="flex justify-between mt-8 max-md:mt-16 max-md:mx-auto mx-5 p-5 border-t-2 border-gray-100 dark:border-gray-800"> <div> <h1 class="text-indigo-500 text-lg font-bold">Animek</h1> </div> <div class="text-indigo-500 flex gap-4 max-md:flex-col max-md:gap-2 max-md:text-sm"> <a href="/">Beranda</a> <a href="/">Anime</a> <a href="/">Jadwal Anime</a> <a href="/">Genre</a> </div> </div> </footer>`;
}, "/home/rzfann/Downloads/Programming/Animek/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const page = Number(Astro2.url.searchParams.get("page")) || 1;
  const res = await fetch(`https://www.sankavollerei.com/anime/zoronime/home?page=${page}`);
  const json = await res.json();
  const dataAnime = json.animes;
  const title = "Welcome To Bakanime";
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="https://cdn.jsdelivr.net/npm/flowbite@4.0.1/dist/flowbite.min.css" rel="stylesheet"><title>', "</title>", '</head> <body class=" bg-gray-900"> ', ' <div class="mx-5"> <!-- <div id="card-simple" class="flex flex-col items-center">\n		<img src="" alt="poster-animek">\n		<h1 id="title"></h1>\n		<p id="episode"></p>\n		<p id="relase"></p>\n		<p id="type"></p>\n	</div> --> <div id="default-carousel" class="relative w-full mt-5" data-carousel="slide"> <div class="relative h-52 md:h-120 overflow-hidden rounded-md"> <div class="hidden duration-700 ease-in-out" data-carousel-item> <img src="https://images4.alphacoders.com/100/thumb-1920-1001038.jpg" class="absolute w-full h-full object-cover" alt=""> <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div> <div class="absolute bottom-4 left-4 md:bottom-10 md:left-10"> <h1 class="text-white text-2xl md:text-7xl font-bold">Naruto Shippuden</h1> <p class="hidden md:block text-white max-w-xl">Naruto kembali setelah berlatih keras bersama Jiraiya...</p> <a href="/anime/naruto-shippuuden" class="mt-3 inline-block bg-indigo-500 text-white py-2 px-5 rounded-md">Tonton</a> </div> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <img src="https://images3.alphacoders.com/132/1329183.jpeg" class="absolute w-full h-full object-cover" alt=""> <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div> <div class="absolute bottom-4 left-4 md:bottom-10 md:left-10"> <h1 class="text-white text-2xl md:text-7xl font-bold">One Piece Live Action</h1> <p class="hidden md:block text-white max-w-xl">Perjalanan Luffy mengumpulkan kru legendaris...</p> <a href="/anime/one-piece-live-action" class="mt-3 inline-block bg-indigo-500 text-white py-2 px-5 rounded-md">Tonton</a> </div> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <img src="https://images7.alphacoders.com/137/1376188.png" class="absolute w-full h-full object-cover" alt=""> <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div> <div class="absolute bottom-4 left-4 md:bottom-10 md:left-10"> <h1 class="text-white text-2xl md:text-7xl font-bold">Dragon Ball Daima</h1> <p class="hidden md:block text-white max-w-xl">Petualangan baru menuju dunia iblis...</p> <a href="/detail/naruto-shippuuden" class="mt-3 inline-block bg-indigo-500 text-white py-2 px-5 rounded-md">Tonton</a> </div> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <img src="https://images3.alphacoders.com/907/907918.jpg" class="absolute w-full h-full object-cover" alt=""> <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div> <div class="absolute bottom-4 left-4 md:bottom-10 md:left-10"> <h1 class="text-white text-2xl md:text-6xl font-bold">Jojo: Stardust Crusaders</h1> <p class="hidden md:block text-white max-w-xl">Petualangan mengejar Dio yang kembali bangkit...</p> <a href="/anime/jojo-no-kimyou-na-bouken-stardust-crusaders" class="mt-3 inline-block bg-indigo-500 text-white py-2 px-5 rounded-md">Tonton</a> </div> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <img src="https://images7.alphacoders.com/849/thumb-1920-849213.png" class="absolute w-full h-full object-cover" alt=""> <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div> <div class="absolute bottom-4 left-4 md:bottom-10 md:left-10"> <h1 class="text-white text-2xl md:text-7xl font-bold">Neon Genesis Evangelion</h1> <p class="hidden md:block text-white max-w-xl">Shinji dan EVA Unit-01 bertarung melawan Angel...</p> <a href="/anime/neon-genesis-evangelion" class="mt-3 inline-block bg-indigo-500 text-white py-2 px-5 rounded-md">Tonton</a> </div> </div> </div> </div> <div class="grid grid-cols-4 max-md:grid-cols-2 gap-4 mt-5"> ', ' </div> <div class="mt-5 gap-8 flex justify-center items-center"> <a', ' class="py-2 px-5 bg-indigo-500 text-white rounded-md">Prev</a> <a', ' class="py-2 px-5 bg-indigo-500 text-white rounded-md">Next</a> </div> ', ' </div> <script src="https://cdn.jsdelivr.net/npm/flowbite@4.0.1/dist/flowbite.min.js"><\/script> </body></html>'])), title, renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), dataAnime.map((anime) => renderTemplate`<div class="flex flex-col rounded-md p-5 hover:scale-97 transition-all"${addAttribute(anime.slug, "key")}> <a${addAttribute(`/detail/${anime.slug}`, "href")}> ${renderComponent($$result, "Image", $$Image, { "src": anime.poster, "width": 350, "height": 350, "class": "rounded-md shadow-lg", "alt": "anime-poster" })} </a> <h1 class="font-bold text-indigo-500 mt-3 max-md:text-sm">${anime.title}</h1> <p class="text-sm text-indigo-400 mt-2">${anime.episode_or_type}</p> <div class="flex justify-between items-center text-center gap-2 flex-1 mt-4"> <p class="text-sm bg-indigo-500 max-md:text-xs rounded-md text-white w-fit py-2 px-2">${anime.score}</p> <!-- Link ke video player sesuai slug-anime --> <a${addAttribute(`/anime/${anime.slug}`, "href")} class=" bg-indigo-500 text-white w-fit px-10 max-md:px-4 py-1 text-center rounded-md">
Tonton!
</a> </div> </div>`), addAttribute(`?page=${page - 1}`, "href"), addAttribute(`?page=${page + 1}`, "href"), renderComponent($$result, "Footer", $$Footer, {}));
}, "/home/rzfann/Downloads/Programming/Animek/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {})}`;
}, "/home/rzfann/Downloads/Programming/Animek/src/pages/index.astro", void 0);

const $$file = "/home/rzfann/Downloads/Programming/Animek/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
