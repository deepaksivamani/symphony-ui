import React, { useState } from "react";

const Connect = () => {
  const [currentTab, setCurrentTab] = useState("basic");
  const [searchResults, setSearchResult] = useState([]);
  const [searchStr, setSearchStr] = useState("");

  const handleChange = (e:any) => {
    setSearchStr(e.target.value);
    console.log("searched for: ", e.target.value);
    if (e.target.value.length) {
      fetch("http://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          setSearchResult(data);
        })
        .catch(console.log);
    } else {
      setSearchResult([]);
    }
  };

  return (
    <div className="mt-5">
      <div className="card-body">
        <div className="card-content">
          <div className="top-wrapper">
            <div className="bg-primary p-3">
              <h4 className="text-center text-white lg:text-white text-2xl al">
                Add an artist
              </h4>
            </div>
            <nav className="bg-white pt-2 border-b border-gray-200 ">
              <div className="mb-px flex px-4 md:justify-between md:px-10 md:overscroll-none whitespace-nowrap">
                <a
                  className="no-underline text-teal-dark px-6 border-b-2 border-transparent tracking-wide text-lg py-3 "
                  href="/add-artist"
                >
                  Basic Info
                </a>
                <a
                  className="no-underline text-grey-200 px-6 border-b-2 border-primary tracking-wide font-bold text-lg py-3 "
                  href="/connect"
                >
                  Connect
                </a>
              </div>
            </nav>

            <div className="middle-wrapper px-4 lg:px-10 overflow-y-auto md:overscroll-y-none mh-calc">
              <h4 className="mt-10 mb-5 text-2xl">Your connections </h4>
              <p>
                To help Symphony build the most effective audiences for your
                marketing, please connect your streaming services and social
                media profiles.
              </p>
              <div className="h-10"></div>
              <form action="">
                <hr className="h-px	bg-gray-200" />
                <div className="add-new">
                  <a href="#">
                    <div className="sy-card">
                      <div className="flex tems-center">
                        <div className="artist-img">
                        <img src={require('../../assets/images/facebook.svg').default}/>
                        </div>
                        <div className="px-3 items-center flex">
                          <h5 className="text-dark">Facebook</h5>
                        </div>
                      </div>
                      <div>
                        <a className="hidden" href="#">
                          Connect
                        </a>
                        <div>
                          <div className="flex items-center ">
                            <p className="px-3 text-fontColor-100">
                              Booba official<span>50k followers</span>
                            </p>
                            <a href="#">
                              <img src={require('../../assets/images/right-arrow.svg').default}/>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div className="sy-card">
                      <div className="flex items-center">
                        <div className="artist-img">
                        <img src={require('../../assets/images/insta.svg').default}/>
                        </div>
                        <div className="px-3">
                          <h5 className="text-dark">Instagram</h5>
                        </div>
                      </div>
                      <div>
                        <a className="text-primary" href="#">
                          Connect
                        </a>
                        <div className="hidden">
                          <div className="flex items-center">
                            <p className="px-3">
                              Booba official
                              <br />
                              50k followers
                            </p>
                            <a href="#">
                              <img src={require('../../assets/images/right-arrow.svg').default}/>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div className="sy-card">
                      <div className="flex items-center">
                        <div className="artist-img">
                          <img src={require('../../assets/images/twitter.svg').default}/>
                        </div>
                        <div className="px-3">
                          <h5 className="text-dark">Twitter</h5>
                        </div>
                      </div>
                      <div>
                        <a className="text-primary" href="#">
                          Connect
                        </a>
                        <div className="hidden">
                          <div className="flex items-center">
                            <p className="px-3">
                              Booba official
                              <br />
                              50k followers
                            </p>
                            <a href="#">
                              <img src={require('../../assets/images/right-arrow.svg').default}/>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="pt-10 pb-5 hr-bline">
                  <p className="text-dark">
                    <strong>Streaming platforms</strong>
                    <br />
                  </p>
                </div>
                <div className="add-new">
                  <a href="#"></a>
                  <a href="#">
                    <div className="sy-card">
                      <div className="flex items-center">
                        <div className="artist-img">
                          <img src={require('../../assets/images/youtube.svg').default}/>
                        </div>
                        <div className="px-3">
                          <h5 className="text-dark">Youtube</h5>
                        </div>
                      </div>
                      <div>
                        <a className="text-primary" href="#">
                          Connect
                        </a>
                        <div className="hidden">
                          <div className="flex items-center">
                            <p className="px-3">
                              Booba official
                              <br />
                              50k followers
                            </p>
                            <a href="#">
                              <img src={require('../../assets/images/right-arrow.svg').default}/>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div className="sy-card">
                      <div className="flex items-center">
                        <div className="artist-img">
                        <img src={require('../../assets/images/spotify.svg').default}/>
                        </div>
                        <div className="px-3">
                          <h5 className="text-dark">Spotify</h5>
                        </div>
                      </div>
                      <div>
                        <a className="text-primary" href="#">
                          Connect
                        </a>
                        <div className="hidden">
                          <div className="flex items-center">
                            <p className="px-3">
                              Booba official
                              <br />
                              50k followers
                            </p>
                            <a href="#">
                              <img src={require('../../assets/images/right-arrow.svg').default}/>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#">
                    <div className="sy-card">
                      <div className="flex items-center">
                        <div className="artist-img">
                        <img src={require('../../assets/images/soundcloud.svg').default}/>
                        </div>
                        <div className="px-3">
                          <h5 className="text-dark">Soundcloud</h5>
                        </div>
                      </div>
                      <div>
                        <a className="text-primary" href="#">
                          Connect
                        </a>
                        <div className="hidden">
                          <div className="flex items-center">
                            <p className="px-3">
                              Booba official
                              <br />
                              50k followers
                            </p>
                            <a href="#">
                              <img src={require('../../assets/images/right-arrow.svg').default}/>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="text-center pb-4 px-4 lg:px-10">
            <button className="btn-primary">Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
