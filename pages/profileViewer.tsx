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
  const pfpRef = useRef<HTMLDivElement>(null);

  //@TODO: play around with values and fix css
  useEffect(() => {
    if (scrollPosition === 0) {
      //@ts-ignore
      pfpRef.current?.style.width = `$100%`;
    } else if (scrollPosition >= 380) {
      //@ts-ignore
      pfpRef.current?.style.width = `45%`;
    } else {
      const amount = Math.pow(0.9, scrollPosition / 50) * 100;
      console.log(amount);
      //@ts-ignore
      pfpRef.current?.style.width = `${amount}%`;
    }
  }, [scrollPosition]);
  return (
    <Layout>
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
      <section ref={pfpRef} className="profileHeader">
        <img
          id="profile-img"
          src="https://media.karousell.com/media/photos/products/2022/2/8/big_floppa_1644303126_391dfcc8_progressive.jpg"
          alt=""
        />
        <div className="row">
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
            amet consectetur adipisicing elit. Id, ut facere. Reiciendis libero
            in tenetur nisi aliquid quo odio a consectetur optio, assumenda
            repudiandae et id eaque animi neque dolorem?
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
    </Layout>
  );
};

export default ProfileViewer;
