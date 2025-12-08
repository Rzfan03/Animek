import { c as createComponent, a as createAstro, r as renderHead, d as renderComponent, e as addAttribute, b as renderTemplate } from '../../chunks/astro/server_EAn7jcZ8.mjs';
import 'piccolore';
/* empty css                                     */
/* empty css                                    */
import { $ as $$Navbar } from '../../chunks/Navbar_DVL4U2bY.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const res = await fetch(`https://www.sankavollerei.com/anime/zoronime/detail/${slug}`);
  const data = await res.json();
  const anime = data.detail;
  const resSearch = await fetch(`https://www.sankavollerei.com/anime/zoronime/search/${slug}`);
  const dataSearch = await resSearch.json();
  const search = dataSearch.animes;
  const episode = anime?.episode_list || [];
  const poster = search[0]?.poster;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${anime.title}</title>${renderHead()}</head> <body class="dark:bg-gray-900"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <!-- BACKGROUND POSTER --> <div class="absolute inset-0 -z-50 overflow-hidden"> <img${addAttribute(poster, "src")} class="w-full h-full object-cover opacity-40 saturate-0 contrast-200" alt=""> <div class="absolute inset-0 bg-black/50"></div> </div> <!-- CONTENT --> <div class="px-4 md:px-20 py-10 flex flex-col md:flex-row gap-8 items-center md:items-start justify-center"> <!-- Poster --> <div class="w-full max-w-xs md:max-w-sm"> <img${addAttribute(poster, "src")} class="w-full rounded-lg shadow-lg" alt=""> </div> <!-- Detail --> <div class="text-white max-w-2xl mb-12"> <h1 class="text-3xl font-bold text-indigo-400 mb-4"> ${anime.title} </h1> <p class="text-gray-200 mb-6 leading-relaxed"> ${anime.synopsis} </p> <p class="text-indigo-300 mb-2">
Total Episode: ${episode.length} </p> <p class="text-indigo-300 mb-6">
Genre: ${anime.genres?.map((g) => g.name).join(", ")} </p> <a${addAttribute(`/anime/${anime.slug}`, "href")} class="inline-flex items-center bg-indigo-500 hover:bg-indigo-600
                  px-6 py-3 rounded-full text-white font-semibold"> <i class="ri-play-large-fill mr-2"></i>
Tonton
</a> </div> </div> </body></html>`;
}, "/home/rzfann/Downloads/Programming/Animek/src/pages/detail/[slug].astro", void 0);

const $$file = "/home/rzfann/Downloads/Programming/Animek/src/pages/detail/[slug].astro";
const $$url = "/detail/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
