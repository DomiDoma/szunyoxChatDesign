import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

import useScrollPosition from "@hooks/useScrollPosition";

import Layout from "@components/Layout";

const ProfileViewer: NextPage = () => {
  const { push } = useRouter();
  const scrollPosition = useScrollPosition();

  const pfpRef = useRef<HTMLImageElement>(null);
  const header = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLDivElement>(null);
  const snapper = useRef<HTMLDivElement>(null);

  //@TODO: tidy up, check performance
  useEffect(() => {
    const titleC = title.current;
    const headerC = header.current;
    const pfpC = pfpRef.current;

    const isRefsNotNull = titleC && headerC && pfpC;

    if (isRefsNotNull && scrollPosition === 0) {
      pfpC.removeAttribute("style");
      headerC.removeAttribute("style");
      titleC.removeAttribute("style");
    }

    const amount = Math.pow(0.6, scrollPosition / 50) * 100;
    const bRadius = scrollPosition * 0.2;
    const padd = scrollPosition < 150 ? scrollPosition * 0.1 : 10;

    if (isRefsNotNull) {
      titleC.style.opacity = `${1 - scrollPosition / 200}`;
      headerC.style.height = `${amount > 98 ? "unset" : amount + "%"}`;
      headerC.style.padding = `${padd}px`;
      pfpC.style.borderRadius = `${bRadius}%`;
    }

    const snapperC = snapper.current;
    if (snapperC) {
      if (amount > 25) {
        snapperC.style.scrollMargin = "33rem";
        snapperC.style.scrollSnapAlign = "none";
      } else {
        snapperC.style.scrollMargin = "10rem";
        snapperC.style.scrollSnapAlign = "start";
      }
    }
  }, [scrollPosition]);
  return (
    <Layout>
      <div ref={snapper} className="snapper">
        <header>
          <button title="Back" className="header-btn" onClick={() => push("/")}>
            <img
              alt=""
              src="https://img.icons8.com/ios-filled/90/000000/back.png"
            />
          </button>
          Big Floppa
          <button title="Back" className="header-btn">
            <img
              alt=""
              src="https://img.icons8.com/ios-filled/90/000000/more.png"
            />
          </button>
        </header>
        <section ref={header} className="profileHeader">
          <img
            ref={pfpRef}
            id="profile-img"
            src="https://media.karousell.com/media/photos/products/2022/2/8/big_floppa_1644303126_391dfcc8_progressive.jpg"
            alt=""
          />
          <div ref={title} className="row">
            <h2 id="name">Big Floppa</h2>
            <h2 id="age">23</h2>
          </div>
        </section>
        <main className="xlmargin">
          <section className="profileData">
            <div className="tags">
              <a href="" className="tag">
                Cement
              </a>
              <a href="" className="tag">
                Friday
              </a>
              <a href="" className="tag">
                Funny Ears
              </a>
            </div>
            <div className="bio">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              dolor atque voluptas possimus! Ex ipsam, possimus impedit, facilis
              veritatis dolore sint unde quas, assumenda reiciendis beatae
              pariatur enim expedita deserunt adipisci. Beatae voluptatem est ea
              dolorem laboriosam repellendus voluptate ad. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Id, ut facere. Reiciendis
              libero in tenetur nisi aliquid quo odio a consectetur optio,
              assumenda repudiandae et id eaque animi neque dolorem?
            </div>
            <div className="tags social">
              <a
                href="https://www.instagram.com/prozhony/"
                target="_blank"
                className="tag"
                rel="noopener noreferrer"
              >
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe7%2FInstagram_logo_2016.svg%2F1200px-Instagram_logo_2016.svg.png&f=1&nofb=1"
                  alt=""
                />
                @prozhony
              </a>
              <a href="" className="tag">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogo-logos.com%2Fwp-content%2Fuploads%2F2016%2F11%2FTelegram_logo.png&f=1&nofb=1"
                  alt=""
                />
                @flopper
              </a>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default ProfileViewer;
