import React, { useState } from "react";

const Connect = () => {
  const [currentTab, setCurrentTab] = useState("basic");
  const [searchResults, setSearchResult] = useState([]);
  const [searchStr, setSearchStr] = useState("");

  const handleChange = (e) => {
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

            <div class="middle-wrapper px-4 lg:px-10 overflow-y-auto md:overscroll-y-none mh-calc">
              <h4 class="mt-10 mb-5 text-2xl">Your connections </h4>
              <p>
                To help Symphony build the most effective audiences for your
                marketing, please connect your streaming services and social
                media profiles.
              </p>
              <div class="h-10"></div>
              <form action="">
                <hr class="h-px	bg-gray-200" />
                <div class="add-new">
                  <a href="#">
                    <div class="sy-card">
                      <div class="flex tems-center">
                        <div class="artist-img">
                        <img src={require('../../assets/images/facebook.svg').default}/>
                        </div>
                        <div class="px-3 items-center flex">
                          <h5 class="text-dark">Facebook</h5>
                        </div>
                      </div>
                      <div>
                        <a class="hidden" href="#">
                          Connect
                        </a>
                        <div>
                          <div class="flex items-center ">
                            <p class="px-3 text-fontColor-100">
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
                    <div class="sy-card">
                      <div class="flex items-center">
                        <div class="artist-img">
                        <img src={require('../../assets/images/insta.svg').default}/>
                        </div>
                        <div class="px-3">
                          <h5 class="text-dark">Instagram</h5>
                        </div>
                      </div>
                      <div>
                        <a class="text-primary" href="#">
                          Connect
                        </a>
                        <div class="hidden">
                          <div class="flex items-center">
                            <p class="px-3">
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
                    <div class="sy-card">
                      <div class="flex items-center">
                        <div class="artist-img">
                          <img src={require('../../assets/images/twitter.svg').default}/>
                        </div>
                        <div class="px-3">
                          <h5 class="text-dark">Twitter</h5>
                        </div>
                      </div>
                      <div>
                        <a class="text-primary" href="#">
                          Connect
                        </a>
                        <div class="hidden">
                          <div class="flex items-center">
                            <p class="px-3">
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

                <div class="pt-10 pb-5 hr-bline">
                  <p class="text-dark">
                    <strong>Streaming platforms</strong>
                    <br />
                  </p>
                </div>
                <div class="add-new">
                  <a href="#"></a>
                  <a href="#">
                    <div class="sy-card">
                      <div class="flex items-center">
                        <div class="artist-img">
                          <img src={require('../../assets/images/youtube.svg').default}/>
                        </div>
                        <div class="px-3">
                          <h5 class="text-dark">Youtube</h5>
                        </div>
                      </div>
                      <div>
                        <a class="text-primary" href="#">
                          Connect
                        </a>
                        <div class="hidden">
                          <div class="flex items-center">
                            <p class="px-3">
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
                    <div class="sy-card">
                      <div class="flex items-center">
                        <div class="artist-img">
                        <img src={require('../../assets/images/spotify.svg').default}/>
                        </div>
                        <div class="px-3">
                          <h5 class="text-dark">Spotify</h5>
                        </div>
                      </div>
                      <div>
                        <a class="text-primary" href="#">
                          Connect
                        </a>
                        <div class="hidden">
                          <div class="flex items-center">
                            <p class="px-3">
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
                    <div class="sy-card">
                      <div class="flex items-center">
                        <div class="artist-img">
                        <img src={require('../../assets/images/soundcloud.svg').default}/>
                        </div>
                        <div class="px-3">
                          <h5 class="text-dark">Soundcloud</h5>
                        </div>
                      </div>
                      <div>
                        <a class="text-primary" href="#">
                          Connect
                        </a>
                        <div class="hidden">
                          <div class="flex items-center">
                            <p class="px-3">
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
