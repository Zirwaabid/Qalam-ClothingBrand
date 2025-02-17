const Unstitched = require("../models/Unstitched");

const sampleUnstitched = [
    {
        title: "FLORA - 2 PC (WU25SD2022)",
        price: 2680,
        color: "Pink",
        about: [
            {
                description: "Unstitched 2-Piece Suit",
                Shirt: "Digital Printed Lawn 1.75M",
                Dupatta: "Digital Printed Lawn 2.5M",
                trouser: "Dyed Cambric Trouser 1.8M"
            }
        ],
        image: "https://bonanzasatrangi.com/cdn/shop/files/WU25SD2022_4.jpg?v=1739624121&width=600",
        disclaimer: "Product color may slightly vary due to photographic lighting sources or mobile/computer screen brightness settings.",
    },
    {
        title: "CASHMERE - 3 PC (WU30SD2023)",
        price: 3450,
        color: "OffWhite",
        about: [
            {
                description: "Unstitched 3-Piece Suit",
                Shirt: "Kashmiri Pashmina 2M",
                Dupatta: "Digital Printed Chiffon 2.5M",
                trouser: "Dyed Cambric Trouser 1.8M"
            }
        ],
        image: "https://bonanzasatrangi.com/cdn/shop/files/WUS25P3029_5.jpg?v=1739624027&width=600",
        disclaimer: "Product color may slightly vary due to photographic lighting sources or mobile/computer screen brightness settings.",
    },
    {
        title: "VIBRANT CHIC - 2 PC (WU15SD2022)",
        price: 2200,
        color: "Blue",
        about: [
            {
                description: "Unstitched 2-Piece Suit",
                Shirt: "Digital Printed Cotton 1.75M",
                Dupatta: "Plain Cotton 2.5M",
                trouser: "Dyed Cambric Trouser 1.8M"
            }
        ],
        image: "https://bonanzasatrangi.com/cdn/shop/files/WUS25P3027_1.jpg?v=1739624034&width=600",
        disclaimer: "Product color may slightly vary due to photographic lighting sources or mobile/computer screen brightness settings.",
    },
    {
        title: "GARDENIA - 3 PC (WU45SD2022)",
        price: 3900,
        color: "Green",
        about: [
            {
                description: "Unstitched 3-Piece Suit",
                Shirt: "Embroidered Lawn 2M",
                Dupatta: "Chiffon 2.5M",
                trouser: "Dyed Cambric Trouser 1.8M"
            }
        ],
        image: "https://bonanzasatrangi.com/cdn/shop/files/WUS25P3030_1.jpg?v=1739624029&width=600",
        disclaimer: "Product color may slightly vary due to photographic lighting sources or mobile/computer screen brightness settings.",
    },
    {
        title: "MIDNIGHT GLAM - 2 PC (WU12SD2021)",
        price: 2999,
        color: "White",
        about: [
            {
                description: "Unstitched 2-Piece Suit",
                Shirt: "Embroidered Velvet 1.75M",
                Dupatta: "Chiffon 2.5M",
                trouser: "Dyed Cambric Trouser 1.8M"
            }
        ],
        image: "https://bonanzasatrangi.com/cdn/shop/files/WUS25P302A-BonanzaKhoaYai2_2215.jpg?v=1739624303&width=600",
        disclaimer: "Product color may slightly vary due to photographic lighting sources or mobile/computer screen brightness settings.",
    },
    {
        title: "SUMMER BLOOM - 2 PC (WU30SD2023)",
        price: 2299,
        color: "Peach",
        about: [
            {
                description: "Unstitched 2-Piece Suit",
                Shirt: "Digital Printed Lawn 1.75M",
                Dupatta: "Chiffon 2.5M",
                trouser: "Dyed Cambric Trouser 1.8M"
            }
        ],
        image: "https://bonanzasatrangi.com/cdn/shop/files/FC2S5243P3-052A4243.jpg?v=1738943150&width=600",
        disclaimer: "Product color may slightly vary due to photographic lighting sources or mobile/computer screen brightness settings.",
    },
    {
        title: "MOONLIT BEAUTY - 3 PC (WU40SD2023)",
        price: 3899,
        color: "Light Green",
        about: [
            {
                description: "Unstitched 3-Piece Suit",
                Shirt: "Embroidered Lawn 2M",
                Dupatta: "Chiffon 2.5M",
                trouser: "Dyed Cambric Trouser 1.8M"
            }
        ],
        image: "https://bonanzasatrangi.com/cdn/shop/files/ACIDLIME-WUS25P2008-052A5462.jpg?v=1739624285&width=700",
        disclaimer: "Product color may slightly vary due to photographic lighting sources or mobile/computer screen brightness settings.",
    },
    {
        title: "SILK ESSENCE - 2 PC (WU23SD2022)",
        price: 3100,
        color: "Yellow",
        about: [
            {
                description: "Unstitched 2-Piece Suit",
                Shirt: "Pure Silk 1.75M",
                Dupatta: "Digital Printed Chiffon 2.5M",
                trouser: "Dyed Cambric Trouser 1.8M"
            }
        ],
        image: "https://bonanzasatrangi.com/cdn/shop/files/2S24E3P240-1Z7A5060.jpg?v=1739624283&width=600",
        disclaimer: "Product color may slightly vary due to photographic lighting sources or mobile/computer screen brightness settings.",
    },
    {
        title: "GOLDEN DAWN - 2 PC (WU11SD2022)",
        price: 2699,
        color: "Light blue",
        about: [
            {
                description: "Unstitched 2-Piece Suit",
                Shirt: "Printed Silk 1.75M",
                Dupatta: "Chiffon 2.5M",
                trouser: "Dyed Cambric Trouser 1.8M"
            }
        ],
        image: "https://bonanzasatrangi.com/cdn/shop/files/WU25SD2015-052A5580.jpg?v=1739624304&width=600",
        disclaimer: "Product color may slightly vary due to photographic lighting sources or mobile/computer screen brightness settings.",
    },
    {
        title: "WINTER ROSE - 3 PC (WU50SD2022)",
        price: 4200,
        color: "Rose Pink",
        about: [
            {
                description: "Unstitched 3-Piece Suit",
                Shirt: "Embroidered Velvet 2M",
                Dupatta: "Chiffon 2.5M",
                trouser: "Dyed Cambric Trouser 1.8M"
            }
        ],
        image: "https://bonanzasatrangi.com/cdn/shop/files/WU25ST2001_1.jpg?v=1739550669&width=600",
        disclaimer: "Product color may slightly vary due to photographic lighting sources or mobile/computer screen brightness settings.",
    },
];

module.exports = { Unstitched: sampleUnstitched };