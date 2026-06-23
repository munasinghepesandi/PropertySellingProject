import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function AreaGuideKandy() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#EAEAEA] text-[#4A4A4A]">

        {/* HERO */}
        <header className="bg-gradient-to-r from-[#203F52] via-[#2D4F63] to-[#2A6FA3] text-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-3xl font-bold md:text-4xl">
              Kandy — Area Guide
            </h1>

            <p className="mt-3 max-w-2xl text-[#EAEAEA]">
              Discover neighbourhoods, transport links, schools and local amenities in Kandy.
            </p>
          </div>
        </header>

        {/* CONTENT */}
        <section className="mx-auto max-w-6xl px-6 py-10">

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

            {/* MAIN */}
            <div className="rounded-lg border border-[#B8B8B8] bg-[#FFFFFF] p-6 shadow-sm lg:col-span-2">

              {/* BREADCRUMB */}
              <div className="mb-3 text-sm text-[#B8B8B8]">
                <Link
                  to="/more/area-guides"
                  className="text-[#2A6FA3] hover:underline"
                >
                  Area Guides
                </Link>

                <span className="mx-2">/</span>
                <span className="text-[#4A4A4A]">Kandy</span>
              </div>

              <p className="mb-6 text-[#4A4A4A]">
                Kandy is a major city in central Sri Lanka, known for the Temple of the Tooth and surrounding hill country. This guide covers neighbourhoods, transport, schools, and amenities.
              </p>

              {/* SECTIONS */}
              <div className="space-y-6">

                {/* NEIGHBOURHOODS */}
                <section>
                  <h2 className="text-lg font-semibold text-[#203F52]">
                    Neighbourhoods
                  </h2>

                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">

                    <div className="rounded-lg border border-[#B8B8B8] bg-[#EAEAEA] p-3">
                      <h4 className="font-medium text-[#203F52]">
                        Peradeniya
                      </h4>
                      <p className="text-sm text-[#4A4A4A]">
                        University area, quieter residential zones and botanical gardens nearby.
                      </p>
                    </div>

                    <div className="rounded-lg border border-[#B8B8B8] bg-[#EAEAEA] p-3">
                      <h4 className="font-medium text-[#203F52]">
                        Gampola
                      </h4>
                      <p className="text-sm text-[#4A4A4A]">
                        Growing suburban area with new housing developments.
                      </p>
                    </div>

                    <div className="rounded-lg border border-[#B8B8B8] bg-[#EAEAEA] p-3">
                      <h4 className="font-medium text-[#203F52]">
                        Kandy City Centre
                      </h4>
                      <p className="text-sm text-[#4A4A4A]">
                        Commercial hub near Temple of the Tooth and main retail zone.
                      </p>
                    </div>

                  </div>
                </section>

                {/* TRANSPORT */}
                <section>
                  <h2 className="text-lg font-semibold text-[#203F52]">
                    Transport
                  </h2>

                  <p className="mt-2 text-[#4A4A4A]">
                    Accessible by road and rail. Buses and taxis serve local travel; Colombo–Kandy train is a popular scenic route.
                  </p>
                </section>

                {/* SCHOOLS */}
                <section>
                  <h2 className="text-lg font-semibold text-[#203F52]">
                    Schools & Healthcare
                  </h2>

                  <p className="mt-2 text-[#4A4A4A]">
                    Several well-regarded schools and hospitals exist in Kandy, with limited international education options.
                  </p>
                </section>

              </div>

              {/* LINK */}
              <div className="mt-6">
                <Link
                  to="/more/area-guides/points-of-interest"
                  className="text-sm font-medium text-[#2A6FA3] hover:text-[#203F52]"
                >
                  See Points of Interest in Kandy →
                </Link>
              </div>

            </div>

            {/* SIDEBAR */}
            <aside className="rounded-lg border border-[#B8B8B8] bg-[#FFFFFF] p-6 shadow-sm">

              <h3 className="mb-3 font-semibold text-[#203F52]">
                Quick facts
              </h3>

              <ul className="space-y-2 text-sm text-[#4A4A4A]">

                <li>
                  <strong>Population:</strong> ~125,000 (city)
                </li>

                <li>
                  <strong>Best for:</strong> Culture, schools, hill country access
                </li>

                <li>
                  <strong>Nearest airport:</strong> Bandaranaike Intl (~3 hrs)
                </li>

              </ul>

            </aside>

          </div>

        </section>
      </main>
    </>
  );
}