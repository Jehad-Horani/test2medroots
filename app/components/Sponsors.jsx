"use client";

import Image from "next/image";

const sponsorsData = {
    successPartner: {
        name: "Royal Medical Group",
        logo: "/speakers/Q (2).png"
    },
    platinum: [
        { name: "Platinum Sponsor", logo: "/speakers/Q (2).png" }
    ],
    diamond: [
        { name: "Diamond Sponsor 1", logo: "/speakers/Q (2).png" },
        { name: "Diamond Sponsor 2", logo: "/speakers/Q (2).png" }
    ],
    gold: [
        { name: "Gold Sponsor 1", logo: "/speakers/Q (2).png" },
        { name: "Gold Sponsor 2", logo: "/speakers/Q (2).png" },
        { name: "Gold Sponsor 3", logo: "/speakers/Q (2).png" },
        { name: "Gold Sponsor 4", logo: "/speakers/Q (2).png" }
    ],
    silver: [
        { name: "Silver Sponsor 1", logo: "/speakers/Q (2).png" },
        { name: "Silver Sponsor 2", logo: "/speakers/Q (2).png" },
        { name: "Silver Sponsor 3", logo: "/speakers/Q (2).png" },
        { name: "Silver Sponsor 4", logo: "/speakers/Q (2).png" },
        { name: "Silver Sponsor 5", logo: "/speakers/Q (2).png" },
        { name: "Silver Sponsor 6", logo: "/speakers/Q (2).png" },
        { name: "Silver Sponsor 7", logo: "/speakers/Q (2).png" },
        { name: "Silver Sponsor 8", logo: "/speakers/Q (2).png" }
    ],
    bronze: [
        { name: "Bronze Sponsor 1", logo: "/speakers/Q (2).png" },
        { name: "Bronze Sponsor 2", logo: "/speakers/Q (2).png" },
        { name: "Bronze Sponsor 3", logo: "/speakers/Q (2).png" },
        { name: "Bronze Sponsor 4", logo: "/speakers/Q (2).png" },
        { name: "Bronze Sponsor 5", logo: "/speakers/Q (2).png" },
        { name: "Bronze Sponsor 6", logo: "/speakers/Q (2).png" },
        { name: "Bronze Sponsor 7", logo: "/speakers/Q (2).png" },
        { name: "Bronze Sponsor 8", logo: "/speakers/Q (2).png" },
        { name: "Bronze Sponsor 9", logo: "/speakers/Q (2).png" },
        { name: "Bronze Sponsor 10", logo: "/speakers/Q (2).png" }
    ]
};

export default function SponsorsSection() {
    return (
        <section
            id="sponsors"
            className="w-full px-6 py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white relative text-center overflow-hidden"
            style={{ fontFamily: "'sans', sans-serif" }}
        >
            <h2 className="text-6xl max-md:text-5xl font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-[#e76f51] via-white to-[#00bcd4] drop-shadow-lg">
                Partners & Sponsors
            </h2>
            <p className="mt-4 mb-16 text-gray-400 text-lg max-w-2xl mx-auto">
                We are grateful to our amazing partners for sponsoring this event.
            </p>

            {/* Strategic + Platinum Side by Side */}
            <div className="flex flex-col lg:flex-row justify-center items-start gap-12 mb-20">
                {/* Strategic Partner */}
                <div className="flex-1 text-center">
                    <h3 className="text-5xl max-md:text-3xl font-bold text-white mb-6">Strategic Partner</h3>
                    <div className="flex justify-center">
                        <Image
                            src={sponsorsData.successPartner.logo}
                            alt={sponsorsData.successPartner.name}
                            width={300}
                            height={150}
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Platinum Sponsor */}
                <div className="flex-1 text-center">
                    <h3 className="text-5xl max-md:text-2xl font-semibold text-gray-100 mb-6">Platinum Sponsor</h3>
                    <div className="flex justify-center items-center gap-3">
                        {sponsorsData.platinum.map((sponsor, idx) => (
                            <Image
                                key={idx}
                                src={sponsor.logo}
                                alt={sponsor.name}
                                width={300}
                                height={300 / 2}
                                className="object-contain grayscale hover:grayscale-0 transition duration-300"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Other Tiers */}
            {renderSponsorTier("Diamond Sponsors", sponsorsData.diamond, "w-48")}
            {renderSponsorTier("Gold Sponsors", sponsorsData.gold, "w-40")}
            {renderSponsorTier("Silver Sponsors", sponsorsData.silver, "w-32")}
            {renderSponsorTier("Bronze Sponsors", sponsorsData.bronze, "w-28")}
        </section>
    );
}

function renderSponsorTier(title, sponsors, logoSize) {
    return (
        <div className="mb-16">
            <h3 className="text-3xl max-md:text-2xl font-semibold text-gray-100 mb-6">{title}</h3>
            <div className="flex flex-wrap justify-around items-center gap-3">
                {sponsors.map((sponsor, idx) => (
                    <Image
                        key={idx}
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={logoSizeToPixels(logoSize)}
                        height={logoSizeToPixels(logoSize) / 2}
                        className="object-contain grayscale hover:grayscale-0 transition duration-300"
                    />
                ))}
            </div>
        </div>
    );
}

function logoSizeToPixels(sizeClass) {
    switch (sizeClass) {
        case "w-60":
            return 240;
        case "w-48":
            return 192;
        case "w-40":
            return 160;
        case "w-32":
            return 128;
        case "w-28":
            return 112;
        default:
            return 100;
    }
}
