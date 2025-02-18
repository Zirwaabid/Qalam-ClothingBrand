const Fragnance = require("../models/fragnances");
const sampleFragnance = [{
    title: "RITUAL",
    price: 2988,
    size: "100 ML",
    about: [
        {
            top: "Apple, Citruses, Rose",
            heart: "Saffron, Cinnamon, Labdanum",
            base: "Agarwood, Sandalwood, Cypriol, Amber",
        }
    ],
    image: "https://bonanzasatrangi.com/cdn/shop/files/RITUA100ML-MULTI_e2f5268f-2601-411f-b34d-a1744961a591.jpg?v=1738845097&width=600",
    disclaimer: "Product color may slightly vary due to photographic lighting sources or mobile/computer screen brightness settings.",
},
{
    title: "ENCHANT",
    price: 3450,
    size: "100 ML",
    about: [
        {
            top: "Bergamot, Lemon, Green Notes",
            heart: "Jasmine, Lily, Rose",
            base: "Vanilla, Musk, Cedarwood",
        }
    ],
    image: "https://bonanzasatrangi.com/cdn/shop/files/0002_CROWN100ML-MULTI_51fed249-e9ee-4fc0-96b0-0d67e029cff2.jpg?v=1738845080&width=600",
    disclaimer: "Product color may slightly vary due to photographic lighting sources or mobile/computer screen brightness settings.",
},
{
    title: "MYSTIQUE",
    price: 3100,
    size: "50 ML",
    about: [
        {
            top: "Mandarin, Blackcurrant, Pear",
            heart: "Peony, Jasmine, Freesia",
            base: "Patchouli, Sandalwood, Musk",
        }
    ],
    image: "https://bonanzasatrangi.com/cdn/shop/files/0006_SPICA100ML-MULTId_a37ebb61-eb7e-46b2-b0cd-68f31937fa86.jpg?v=1738683037&width=600",
    disclaimer: "Product color may slightly vary due to photographic lighting sources or mobile/computer screen brightness settings.",
},
{
    title: "AURA",
    price: 2750,
    size: "75 ML",
    about: [
        {
            top: "Grapefruit, Orange, Green Apple",
            heart: "Lavender, Rosemary, Nutmeg",
            base: "Tonka Bean, Vetiver, Oakmoss",
        }
    ],
    image: "https://bonanzasatrangi.com/cdn/shop/files/0014_SIGNA030ML-MULTI_db710064-be7b-4abf-9f5c-59cfe34110ac.jpg?v=1738683036&width=600",
    disclaimer: "Product color may slightly vary due to photographic lighting sources or mobile/computer screen brightness settings.",
},
{
    title: "SERENITY",
    price: 2999,
    size: "100 ML",
    about: [
        {
            top: "Pineapple, Lemon, Bergamot",
            heart: "Rose, Lily of the Valley, Orris",
            base: "Musk, Cedarwood, Amber",
        }
    ],
    image: "https://bonanzasatrangi.com/cdn/shop/files/SPETR100ML-MULTI_0ba7319c-1c3c-4e7c-a1bd-8d0b6e623045.jpg?v=1738683064&width=600",
    disclaimer: "Product color may slightly vary due to photographic lighting sources or mobile/computer screen brightness settings.",
},
{
    title: "TWILIGHT",
    price: 2899,
    size: "80 ML",
    about: [
        {
            top: "Red Berries, Lemon, Green Notes",
            heart: "Tuberose, Orange Blossom, Violet",
            base: "White Musk, Sandalwood, Vanilla",
        }
    ],
    image: "https://bonanzasatrangi.com/cdn/shop/files/BEYON100ML-MULTId_84e173de-a81c-47b2-b0da-88a505428852.jpg?v=1739804134&width=600",
    disclaimer: "Product color may slightly vary due to photographic lighting sources or mobile/computer screen brightness settings.",
}
]
module.exports = { Fragnance: sampleFragnance };