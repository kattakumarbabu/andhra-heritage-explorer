    import kanaka from "../assets/images/kanaka-durga.jpg";
    import rk from "../assets/images/rk-beach.jpg";
    import belum from "../assets/images/belum-caves.jpg";
    import araku from "../assets/images/araku.jpg";

    const places = [
        {
            id: 1,
            name: "Kanaka Durga Temple",
            district: "Vijayawada",
            category: "Temple",
            rating: 4.8,
            image: kanaka,

            description:
                "One of the most famous Hindu temples dedicated to Goddess Kanaka Durga, situated on Indrakeeladri Hill overlooking the Krishna River.",

            history:
                "The temple has a history spanning over 1,000 years and is one of the most visited pilgrimage destinations in Andhra Pradesh.",

            timings: "4:00 AM - 10:00 PM",

            entryFee: "Free",

            maps:
                "https://www.google.com/maps/search/?api=1&query=Kanaka+Durga+Temple+Vijayawada",
        },

        {
            id: 2,
            name: "RK Beach",
            district: "Visakhapatnam",
            category: "Beach",
            rating: 4.7,
            image: rk,

            description:
                "RK Beach is one of the most popular beaches in Visakhapatnam, known for its scenic coastline and vibrant atmosphere.",

            history:
                "Named after Ramakrishna Mission, RK Beach has become a major tourist attraction with museums, parks and cultural landmarks nearby.",

            timings: "Open 24 Hours",

            entryFee: "Free",

            maps:
                "https://www.google.com/maps/search/?api=1&query=RK+Beach+Visakhapatnam",
        },

        {
            id: 3,
            name: "Belum Caves",
            district: "Kurnool",
            category: "Cave",
            rating: 4.6,
            image: belum,

            description:
                "Belum Caves are the second longest natural cave system in India and feature beautiful underground rock formations.",

            history:
                "These caves are believed to be over one million years old and were once used by Buddhist and Jain monks.",

            timings: "10:00 AM - 5:00 PM",

            entryFee: "₹70",

            maps:
                "https://www.google.com/maps/search/?api=1&query=Belum+Caves",
        },

        {
            id: 4,
            name: "Araku Valley",
            district: "Visakhapatnam",
            category: "Hill Station",
            rating: 4.9,
            image: araku,

            description:
                "Araku Valley is a picturesque hill station famous for coffee plantations, waterfalls and tribal culture.",

            history:
                "Located in the Eastern Ghats, Araku Valley is one of Andhra Pradesh's top eco-tourism destinations.",

            timings: "Open 24 Hours",

            entryFee: "Free",

            maps:
                "https://www.google.com/maps/search/?api=1&query=Araku+Valley",
        },
    ];

    export default places;