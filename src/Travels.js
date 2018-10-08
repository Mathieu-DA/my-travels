import React from "react";
import Travel from "./Travel"

const travels = [
    {
        destination: "Bangui",
        country: "République centrafricaine",
        image: "https://www.un.org/africarenewal/sites/www.un.org.africarenewal/files/car12.jpg",
        distance: "6613 km",
    },
    {
        destination: "Columbus, Ohio",
        country: "United States of America",
        image: "https://signaramafranchise.com/wp-content/uploads/2016/03/Columbus-Ohio.jpg",
        distance: "6817 km"
    },
    {
        destination: "Oslo",
        country: "Norway",
        image: "https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/024/054/medium/d022e6c2781e54783d7fe84fcea191e3/norway-oslo-aker-brygge-060718-rs.jpg",
        distance: "1992 km",
    },
    {
        destination: "Vyborg",
        country: "Russia",
        image: "http://www.saint-petersburg.com/images/vyborg/autumn-view-of-vyborg-castle.jpg",
        distance: "2971 km",
    },
    {
        destination: "Madrid",
        country: "Spain",
        image: "https://congresosalcala.fgua.es/descargas/files/madrid1.jpg",
        distance: "1340 km",
    }
];

const Travels = () => (
    <div>
        {travels.map(voyage => (
            <Travel destination={voyage.destination} country={voyage.country} image={voyage.image} distance={voyage.distance} />
        ))}
    </div>
);

export default Travels;