import HeroLight from "./images/hero-light.webp";
import HeroDark from "./images/hero-dark.webp";

import ImmigratoInAmericaArt from "./images/cop_iia.webp";
import NavLogoDark from "./images/Logo Longer White.png";
import NavLogoLight from "./images/Logo Longer.png";
import Art28 from "./images/cop_sdubu.webp";  
import CopertinaNuovaVammazzo from "./images/cop_ammazzo.webp";
import CopCriminaleJohnCopia from "./images/cop_mc.webp";
import LaCometaArt from "./images/cop_halley.webp";
import LaCometaAcousticArt from "./images/cop_halley_acustico.webp";

import ImmigratoInAmericaAudio from "./audio/immigrato-in-america.mp3";
import StoriaDiUnBravuomoAudio from "./audio/storia-di-un-bravuomo.mp3";
import VammazzoAudio from "./audio/vammazzo.mp3";
import MenteCriminaleAudio from "./audio/mente-criminale.mp3";
import LaCometaAudio from "./audio/John Freedom - La cometa di Halley.mp3";
import LaCometaAcousticAudio from "./audio/Halley acustico.mp3";  

export const navLogoDark = NavLogoDark;
export const navLogoLight = NavLogoLight;

export const enable_novità = false;

export { HeroLight as Light };
export { HeroDark as Dark };

export const bio = "John è un giovane immigrato italiano di 26 anni, emigrato in America a cavallo degli anni ruggenti. D'un tratto si è risvegliato nella società contemporanea e da quel momento si è dato un solo obiettivo: riportare in vita le ballroom dei suoi tempi.\n\n Nato nel mezzogiorno, si avvicina alla musica fin da piccolo studiando pianoforte all'età di 7 anni e scoprendo la batteria e le percussioni qualche anno dopo. È durante l'adolescenza che inizia a produrre le sue prime strumentali e a scrivere le sue prime canzoni. Da quel momento non ha più smesso di creare musica, collaborando come produttore e songwriter per amici e artisti. Adesso vive a Torino dove coltiva il suo progetto personale.\n\n Debutta a Dicembre 2024 con \"Immigrato in America\" per poi pubblicare altri 4 singoli nel corso del 2025. L’anno successivo apre il concerto dei Patagarri all’Hiroshima Mon Amour di Torino e apre le danze della serata di TonyPitony al TantaRobba Festival. A settembre dello stesso anno realizza il suo primo piccolo tour in cui porta lo swing in giro nella Sicilia orientale. Tutto il suo trascorso si riversa nella sua musica che unisce il vecchio e il nuovo, fondendo lo swing di un fumoso locale anni '20 con un'elettronica incalzante. Figlio di un'altra epoca, nei suoi testi denuncia il nuovo mondo che gli sta attorno, filtrandolo attraverso la lente del passato.\n\n La musica per John è terapia: nasce come una manifestazione della sua identità musicale, che parte dalle big band di Benny Goodman e Glenn Miller per arrivare persino al fuoco dei The Doors, ma è anche un tentativo di evasione da una società che non lo rappresenta del tutto.";

export const musicData = [
  {
    id: 6,
    name: "La cometa di Halley (Acoustic Version)",
    artwork: LaCometaAcousticArt,
    previewUrl: LaCometaAcousticAudio,
    links: {
      spotify: "https://open.spotify.com/track/5IMTJQ6bdtbqJASOeAllFn?si=20bc8f1096f24ad7",
      appleMusic: "https://music.apple.com/it/album/la-cometa-di-halley-acoustic-version-single/1877657090",
      amazonMusic: "https://music.amazon.it/albums/B0GN54R46X?marketplaceId=APJ6JRA9NG5V4&musicTerritory=IT&ref=dm_sh_fdvYhYWscjRI1L565oBxQdGaX",
      soundcloud: "https://soundcloud.com/john-freedom-832358450/john-freedom-cometa-di-halley?si=c2b8fa8ed9c44232a28d0efd5b2eea8c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
  },
  {
    id: 5,
    name: "La cometa di Halley",
    artwork: LaCometaArt,
    previewUrl: LaCometaAudio,
    links: {
      spotify: "https://open.spotify.com/track/4C72XCifgqbhcEwiVjsLUq?si=1b6b9199067449bf",
      appleMusic: "https://music.apple.com/us/album/la-cometa-di-halley/1839675475?i=1839675476",
      amazonMusic: "https://music.amazon.com/albums/B0FQVLHN3B?trackAsin=B0FQW7G11R",
      soundcloud: "https://soundcloud.com/john-freedom-832358450/la-cometa-di-halley?utm_medium=api&utm_campaign=social_sharing&utm_source=id_314547",
    },
  },
  {
    id: 2,
    name: "Storia di un brav'uomo",
    artwork: Art28,
    previewUrl: StoriaDiUnBravuomoAudio,
    links: {
      spotify: "https://open.spotify.com/album/2nYSiCOQdQbVoVd6s136ky?si=MnMWaEa3SWe9WD9DcMkt8w",
      appleMusic: "https://music.apple.com/us/album/storia-di-un-bravuomo-single/1812226232",
      amazonMusic: "https://music.amazon.it/albums/B0F7CP46Q5?marketplaceId=APJ6JRA9NG5V4&musicTerritory=IT&ref=dm_sh_LT3rBTHkRNTMEt3MMGbX2xrjV",
      soundcloud: "https://soundcloud.com/john-freedom-832358450/storia-di-un-bravuomo",
    },
  },
  {
    id: 4,
    name: "Mente Criminale",
    artwork: CopCriminaleJohnCopia,
    previewUrl: MenteCriminaleAudio,
    links: {
      spotify: "https://open.spotify.com/track/5DNnQxLinbzS4tTqlPeDA5?si=8a6704702eed47cd",
      appleMusic: "https://music.apple.com/us/album/mente-criminale-single/1826246899",
      amazonMusic: "https://music.amazon.it/albums/B0FHBBSPMT?marketplaceId=APJ6JRA9NG5V4&musicTerritory=IT&ref=dm_sh_NABwc81EJWWEI5Dropw5bVeNI",
      soundcloud: "https://soundcloud.com/john-freedom-832358450/mente-criminale-4_master_1",
    },
  },
  {
    id: 3,
    name: "V'ammazzo",
    artwork: CopertinaNuovaVammazzo,
    previewUrl: VammazzoAudio,
    links: {
      spotify: "https://open.spotify.com/album/6MOPDcHWH88BoD8Npg359T?si=hiJXwe6MTDGp4mLUKzqghA",
      appleMusic: "https://music.apple.com/us/album/vammazzo-single/1796632035",
      amazonMusic: "https://music.amazon.it/albums/B0DWLYJMJ6?marketplaceId=APJ6JRA9NG5V4&musicTerritory=IT&ref=dm_sh_2pQmWCY9ZdQPHDUmkGhsUVkH9",
      soundcloud: "https://soundcloud.com/john-freedom-832358450/master-vammazzo-2",
    },
  },
  {
    id: 1,
    name: "Immigrato in America",
    artwork: ImmigratoInAmericaArt,
    previewUrl: ImmigratoInAmericaAudio,
    links: {
      spotify: "https://open.spotify.com/track/1X8EdHqO1GPqAjKjfol6Hb?si=vUkx9psZQvmDpUkSKSkCnw&context=spotify%3Aalbum%3A7aOq7l2AMRvh6fv44qpbM1",
      appleMusic: "https://music.apple.com/us/album/immigrato-in-america-single/1784125290",
      amazonMusic: "https://music.amazon.it/albums/B0DPPKPKKV?marketplaceId=APJ6JRA9NG5V4&musicTerritory=IT&ref=dm_sh_HCqhhEvIqiC2h5i6Oz3iuwAZ3",
      soundcloud: "https://soundcloud.com/john-freedom-832358450/john-freedom-immigrato-in?si=2eb5dc9ee05a4cfe8e8c1640ec669e6e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
  },
];

export const formspreeUrl = "https://formspree.io/f/xnnzkbqp";

export const socialLinks = {
  instagram: "https://www.instagram.com/_johnfreedom/",
  tiktok: "https://www.tiktok.com/@john.freedom60",
  youtube: null,
  spotify: "https://open.spotify.com/artist/1Rf0wOiVqQNTdkODZj6JNX?si=5uugTnmDRBugpd_oXuuFkw",
  soundcloud: "https://soundcloud.com/john-freedom-832358450",
};

export const footerTheme = "dark";
