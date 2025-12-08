import { c as createComponent, a as createAstro, r as renderHead, b as renderTemplate, d as renderComponent, e as addAttribute, F as Fragment } from '../../chunks/astro/server_EAn7jcZ8.mjs';
import 'piccolore';
/* empty css                                    */
import { $ as $$Navbar } from '../../chunks/Navbar_DVL4U2bY.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let episodeData = null;
  let animeData = null;
  let epsList = [];
  let error = null;
  try {
    const episodeRes = await fetch(`https://www.sankavollerei.com/anime/zoronime/episode/${slug}`);
    episodeData = await episodeRes.json();
    const animeSlug = episodeData?.anime_slug;
    if (!animeSlug) throw new Error("anime_slug tidak ditemukan");
    const animeRes = await fetch(`https://www.sankavollerei.com/anime/zoronime/detail/${animeSlug}`);
    const animeResponse = await animeRes.json();
    animeData = animeResponse?.detail || animeResponse;
    epsList = animeData?.episode_list || [];
  } catch (err) {
    error = err.message;
  }
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${episodeData && renderTemplate`<title>Nonton ${episodeData.episode_title}</title>`}${renderHead()}</head> <body class="dark:bg-gray-950"> ${error && renderTemplate`<div class="p-5"> <h1 class="text-red-500 text-2xl">Error: ${error}</h1> <p class="text-white">Slug Episode: ${slug}</p> <p class="text-white">Anime Slug: ${episodeData?.anime_slug || "Tidak ditemukan"}</p> </div>`} ${!episodeData || !animeData ? renderTemplate`<div class="p-5"> <h1 class="text-2xl text-white">Loading...</h1> ${error && renderTemplate`<p class="text-red-500">Error: ${error}</p>`} </div>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} <div class="flex flex-col lg:flex-row w-full"> <div class="flex flex-col p-4 md:p-6 lg:w-2/3"> <iframe class="w-full h-[260px] sm:h-[390px] md:h-[300px] lg:h-[550px] max-md: object-cover mt-6"${addAttribute(episodeData.streams?.[0]?.url, "src")} frameborder="0" allowfullscreen scrolling="no"></iframe> <div class="flex flex-col mt-4"> <h1 class="text-indigo-500 font-bold text-2xl">${episodeData.episode_title}</h1> <p class="text-gray-400 text-sm">source : ${episodeData.source}</p> <p class="text-gray-300 mt-3 mb-2">${animeData.synopsis}</p> <p class="text-white">Total Episode : ${epsList.length}</p> </div> <a href="https://acefile.co/f/110709519/oploverz-plus-bnhs8-10-1080p003092fd-mkv" class="mt-4 bg-indigo-500 rounded-md text-white p-3 w-fit">
Downloads 1080p
</a> </div> ${epsList.length > 0 ? renderTemplate`<div class="mt-5 mb-20 px-4 md:px-6 w-full lg:w-1/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 gap-3"> ${epsList.map((episode) => renderTemplate`<div${addAttribute(episode.id || episode.slug, "key")} class="border border-gray-800 p-3 rounded-md bg-gray-900 flex items-center justify-center"> <a${addAttribute(`/anime/${episode.slug}`, "href")} class="text-blue-400 text-center">
EPS ${episode.name.substring(7)} </a> </div>`)} </div>` : renderTemplate`<div class="p-5"> <p class="text-gray-400">Tidak ada episode tersedia</p> <p class="text-sm text-gray-500">Anime Slug: ${episodeData.anime_slug}</p> </div>`} </div> ` })}`} </body></html>`;
}, "/home/rzfann/Downloads/Programming/Animek/src/pages/anime/[slug].astro", void 0);

const $$file = "/home/rzfann/Downloads/Programming/Animek/src/pages/anime/[slug].astro";
const $$url = "/anime/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
