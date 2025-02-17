const Stitched = require("../models/stitched");

const sampleStitched = [
    {
        title: "Lavender Cambric - 2 PC (WU25SD2022)",
        price: 6680,
        size: "8,10,12,14",
        color: "Purple",
        about: [
            {
                description: "Stitched 2-Piece Suit",
                Shirt: "Digital Printed Lawn 1.75M",
                trouser: "Dyed Cambric Trouser 1.8M"
            }
        ],
        image: "https://bonanzasatrangi.com/cdn/shop/files/W25P2004_04.jpg?v=1739624058&width=600",
        disclaimer: "Product color may slightly vary due to photographic lighting sources or mobile/computer screen brightness settings.",
    },
    {
        title: "Royal Blue Embroidered - 3 PC (ST40SD2022)",
        price: 7650,
        size: "6,8,10,12",
        color: "Blue",
        about: [
            {
                description: "Stitched 3-Piece Suit",
                Shirt: "Embroidered Lawn 2M",
                trouser: "Dyed Cambric Trouser 1.8M"
            }
        ],
        image: "https://bonanzasatrangi.com/cdn/shop/files/WS5242P01_1_7977a1ea-856b-45a4-9b94-38ae8aa134da.jpg?v=1739625441&width=600",
        disclaimer: "Product color may slightly vary due to photographic lighting sources or mobile/computer screen brightness settings.",
    },
    {
        title: "Gold Luxury - 2 PC (ST22SD2022)",
        price: 8999,
        size: "8,10,12",
        color: "Gold",
        about: [
            {
                description: "Stitched 2-Piece Suit",
                Shirt: "Embroidered Silk 1.75M",
                trouser: "Dyed Cambric Trouser 1.8M"
            }
        ],
        image: "https://bonanzasatrangi.com/cdn/shop/files/W25P2009_01.jpg?v=1739624023&width=600",
        disclaimer: "Product color may slightly vary due to photographic lighting sources or mobile/computer screen brightness settings.",
    },
    {
        title: "Chic Gardenia - 3 PC (ST50SD2022)",
        price: 7200,
        size: "6,8,10",
        color: "Green",
        about: [
            {
                description: "Stitched 3-Piece Suit",
                Shirt: "Embroidered Lawn 2M",
                trouser: "Dyed Cambric Trouser 1.8M"
            }
        ],
        image: "https://bonanzasatrangi.com/cdn/shop/files/PWS7242P02_1_9ad5e517-4642-4496-807f-46a387dac5bd.jpg?v=1739625478&width=600",
        disclaimer: "Product color may slightly vary due to photographic lighting sources or mobile/computer screen brightness settings.",
    },
    {
        title: "Summer Delight - 2 PC (ST18SD2022)",
        price: 5850,
        size: "8,10,12,14",
        color: "Peach",
        about: [
            {
                description: "Stitched 2-Piece Suit",
                Shirt: "Cotton Print 1.75M",
                trouser: "Dyed Cambric Trouser 1.8M"
            }
        ],
        image: "https://bonanzasatrangi.com/cdn/shop/files/WS7242P04_1_c2257e9b-bba5-4c65-b3b1-42176a8dc93c.jpg?v=1739464068&width=600",
        disclaimer: "Product color may slightly vary due to photographic lighting sources or mobile/computer screen brightness settings.",
    },
    {
        title: "Midnight Black Glam - 2 PC (ST27SD2022)",
        price: 6800,
        size: "6,8,10,12",
        color: "Black",
        about: [
            {
                description: "Stitched 2-Piece Suit",
                Shirt: "Embroidered Velvet 1.75M",
                trouser: "Dyed Cambric Trouser 1.8M"
            }
        ],
        image: "https://bonanzasatrangi.com/cdn/shop/files/WS7242P08_1_0451ddc4-9a2c-4800-8d4a-04fcee248c3c.jpg?v=1739626119&width=600",
        disclaimer: "Product color may slightly vary due to photographic lighting sources or mobile/computer screen brightness settings.",
    },
    {
        title: "Ivory Luxe - 3 PC (ST55SD2022)",
        price: 8500,
        size: "8,10,12,14",
        color: "Ivory",
        about: [
            {
                description: "Stitched 3-Piece Suit",
                Shirt: "Chiffon Embroidered 2M",
                trouser: "Dyed Cambric Trouser 1.8M"
            }
        ],
        image: "https://bonanzasatrangi.com/cdn/shop/files/WS1242P01_1_6ee2e211-bbcd-4b20-8a8f-a7924738e3b8.jpg?v=1739464223&width=600",
        disclaimer: "Product color may slightly vary due to photographic lighting sources or mobile/computer screen brightness settings.",
    },
    {
        title: "Golden Radiance - 2 PC (ST20SD2022)",
        price: 7599,
        size: "8,10,12",
        color: "Peach",
        about: [
            {
                description: "Stitched 2-Piece Suit",
                Shirt: "Printed Silk 1.75M",
                trouser: "Dyed Cambric Trouser 1.8M"
            }
        ],
        image: "https://bonanzasatrangi.com/cdn/shop/files/BS1242P03_1_59e3d4fe-1e25-4cd1-a6b8-e1fc99da5604.jpg?v=1739463570&width=600",
        disclaimer: "Product color may slightly vary due to photographic lighting sources or mobile/computer screen brightness settings.",
    },
    {
        title: "Emerald Green Charm - 3 PC (ST60SD2022)",
        price: 9200,
        size: "6,8,10,12",
        color: "Emerald Green",
        about: [
            {
                description: "Stitched 3-Piece Suit",
                Shirt: "Silk Embroidered 2M",
                trouser: "Dyed Cambric Trouser 1.8M"
            }
        ],
        image: "https://bonanzasatrangi.com/cdn/shop/files/BS2242P07_1_b31b71c4-0d88-46f5-8e86-77df999d1bf3.jpg?v=1739463146&width=600",
        disclaimer: "Product color may slightly vary due to photographic lighting sources or mobile/computer screen brightness settings.",
    }
];

module.exports = { Stitched: sampleStitched };