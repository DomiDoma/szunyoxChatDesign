import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

//@TODO: head fix, design / page layout fix
const Login: NextPage = () => {
  const { push } = useRouter();
  return (
    <div>
      <header>
        <button
          title="Back"
          className="header-btn"
          onClick={() => push("/login")}
        >
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/90/000000/back.png"
          />
        </button>
        Setup
        <button title="Back" className="header-btn">
          <img
            alt=""
            src="https://img.icons8.com/ios-filled/90/000000/more.png"
          />
        </button>
      </header>
      <main className="inflow">
        <section className="user-data card">
          <div className=" card-header row">
            <img
              id="profile-img"
              src="https://media.karousell.com/media/photos/products/2022/2/8/big_floppa_1644303126_391dfcc8_progressive.jpg"
              alt=""
            />
            <h3 id="name">Big Floppa</h3>
            <h3 className="age">21</h3>
          </div>
          <p id="email">funny.ears@gmail.com</p>
          <p id="mobile">+36 30 400 4000</p>
        </section>
        <form className="character">
          <section className="card">
            <div className="card-header">
              <h4>Hobbies and interests</h4>
            </div>

            <div className="tags">
              <div className="btn checkbox">
                <input hidden id="hobby1" type="checkbox" name="hobby" />
                <label htmlFor="hobby1">Art</label>
              </div>
              <div className="btn checkbox">
                <input hidden id="hobby2" type="checkbox" name="hobby" />
                <label htmlFor="hobby2">gaming</label>
              </div>
              <div className="btn checkbox">
                <input hidden id="hobby3" type="checkbox" name="hobby" />
                <label htmlFor="hobby3">dev</label>
              </div>
              <div className="btn checkbox">
                <input hidden id="hobby4" type="checkbox" name="hobby" />
                <label htmlFor="hobby4">floppa</label>
              </div>
              <div className="btn checkbox">
                <input hidden id="hobby5" type="checkbox" name="hobby" />
                <label htmlFor="hobby5">sleeping</label>
              </div>
              <div className="btn checkbox">
                <input hidden id="hobby6" type="checkbox" name="hobby" />
                <label htmlFor="hobby6">travel</label>
              </div>
            </div>

            <div className="card-footer">
              <p className="desc">
                We use these to find matching people for you
              </p>
            </div>
          </section>
          <section className="card">
            <div className="card-header">
              <h4>Add pictures</h4>
            </div>
            <div className="file-input-wrapper">
              <label className="file-input" htmlFor="file">
                +
              </label>
            </div>
            <input
              hidden
              id="file"
              title="images"
              type="file"
              accept="image/png, image/jpeg"
              multiple
            />
            <div className="card-footer">
              <p className="desc">
                Pictures will be shown only with people you matched after
                chatting.
              </p>
              <p className="highlight">
                This is also true for the profile picture
              </p>
            </div>
          </section>
          <section className="card">
            <div className="card-header">
              <h4>Bio</h4>
            </div>
            <textarea
              placeholder=" "
              title="bio"
              name="bio"
              id="bio"
              maxLength={240}
            ></textarea>
            <div className="card-footer">
              <p className="desc">
                Write something about yourself to help others start conversation
                with you
              </p>
            </div>
          </section>
          <section className="card">
            <div className="card-header">
              <h4>Add social media</h4>
            </div>
            <input id="telegram" placeholder="Telegram" type="url" />
            <input id="discord" placeholder="Discord" type="url" />
            <input id="instagram" placeholder="Instagram" type="url" />
            <input id="facebook" placeholder="Facebook" type="url" />
            <div className="card-footer">
              <p className="desc">
                Links will be shown only with people you matched after chatting
              </p>
            </div>
          </section>
          <button className="main-btn">Save</button>
        </form>
      </main>
      <div className="bubble"></div>
      <div className="bubble mid"></div>
      <div className="bubble big"></div>
    </div>
  );
};

export default Login;
