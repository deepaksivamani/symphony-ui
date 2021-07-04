import React, { useState } from "react";
import { Line } from 'react-chartjs-2';
import { useTabs, TabPanel } from "react-headless-tabs";
import { TabSelector } from '../../helpers/TabSelector';

const AddArtist = () => {

  const tabs = ['basic', 'connect'];
  const defaultTab = 'basic';
  const [selectedTab, setSelectedTab] = useTabs(tabs, defaultTab)
  const [searchResults, setSearchResult] = useState([]);
  const [searchStr, setSearchStr] = useState('');

  const handleChange = (e: any) => {
    setSearchStr(e.target.value);
    console.log("searched for: ", e.target.value);
    if (e.target.value.length) {
      fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
          setSearchResult(data);
        })
        .catch(console.log)
    } else {
      setSearchResult([]);
    }
  };

  return (
    <div className="">
      <div className="card-body">
        <div className="card-content">
          <div className="top-wrapper">
            <div className="card-head">
              <h4 className="text-center text-dark lg:text-white text-2xl al">
                Add an artist
              </h4>
            </div>
            <nav className="flex border-b border-gray-300">
              <TabSelector
                isActive={selectedTab === 'basic'}
                onClick={() => setSelectedTab('basic')}
              >
                Basic
              </TabSelector>
              <TabSelector
                isActive={selectedTab === 'connect'}
                onClick={() => setSelectedTab('connect')}
              >
                Connect
              </TabSelector>
            </nav>
            <div className="">
              <TabPanel hidden={selectedTab !== 'basic'}>
                {/* <nav className="bg-white pt-2 border-b border-gray-200 ">
                  <div className="mb-px flex px-4 md:justify-between md:px-10 md:overscroll-none whitespace-nowrap">
                    <a
                      className="no-underline text-teal-dark px-6 border-b-2 border-primary  tracking-wide font-bold text-lg py-3 "
                      href="/add-artist"
                    >
                      Basic Info
                    </a>
                    <a
                      className="no-underline text-grey-200 px-6 border-b-2 border-transparent  tracking-wide text-lg py-3 "
                      href="/connect"
                    >
                      Connect
                    </a>
                  </div>
                </nav> */}

                <div className="middle-wrapper px-4 lg:px-10 ">
                  <h4 className="mt-10 mb-5 text-2xl">What is the name of the artist</h4>
                  {/* <hr className="h-px	bg-gray-200" /> */}
                  <form action="">
                    <div className="input-form flex flex-row align-middle">
                      <label
                        htmlFor=""
                        className="absolute h-16 bg-white items-center flex text-lg "
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="eg. Jay-Z"
                        onChange={handleChange}
                        value={searchStr}
                        className="border-b p-6 outline-none text-right border-gray-200 w-full"
                      />
                    </div>
                    <div className="add-new">
                      {searchResults.map((item: any) => {
                        return (
                          <div className="sy-card">
                            <div className="flex items-center">
                              <div className="artist-img">
                                <img src={require('../../assets/images/p1.svg').default} />
                                <div className="absolute top-4 -right-1 bottom-0 w-3 h-3">
                                  <img src={require('../../assets/images/tick.svg').default} />
                                </div>
                              </div>
                              <div className="px-3">
                                <h5 className="text-dark">{item.name}</h5>
                                <div className="flex flex-row items-center">
                                  <div className="social-img">
                                    <img src={require('../../assets/images/spotify.svg').default} />
                                  </div>
                                  <div className="social-text">
                                    <p className="text-xs px-2">
                                      2.3m monthly listeners
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="icon-block">
                              <a onClick={() => setSelectedTab('connect')}>
                                <img src={require('../../assets/images/right-arrow.svg').default} />
                              </a>
                            </div>
                          </div>
                        )
                      }).splice(0, 3)}
                      {/* <a href="#">
      <div className="sy-card">
        <div className="flex items-center">
          <div className="border-gray-50 overflow-hidden object-fill w-10 h-10 rounded-md bg-primary">
            <img src="../public/images/upload.svg" alt="" />
          </div>
          <div className="px-3">
            <h5 className="text-dark text-lg">
              Upload artist pic
            </h5>
          </div>
        </div>
        <div className="icon-block">
        <img src={require('../../assets/images/right-arrow.svg').default}/>
        </div>
      </div>
    </a> */}
                    </div>

                  </form>
                </div>

              </TabPanel>
              <TabPanel hidden={selectedTab !== 'connect'}>
                <div className="middle-wrapper px-4 lg:px-10 ">
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
                          <div className="flex flex-none text-center">
                            <div className="artist-img">
                              <img src={require('../../assets/images/facebook.svg').default} />
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
                                <p className="pl-6 pr-3 text-fontColor-100">
                                  Booba official<span>50k followers</span>
                                </p>
                                <a href="#">
                                  <img src={require('../../assets/images/right-arrow.svg').default} />
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
                              <img src={require('../../assets/images/insta.svg').default} />
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
                                  <img src={require('../../assets/images/right-arrow.svg').default} />
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
                              <img src={require('../../assets/images/twitter.svg').default} />
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
                                  <img src={require('../../assets/images/right-arrow.svg').default} />
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
                              <img src={require('../../assets/images/youtube.svg').default} />
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
                                  <img src={require('../../assets/images/right-arrow.svg').default} />
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
                              <img src={require('../../assets/images/spotify.svg').default} />
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
                                  <img src={require('../../assets/images/right-arrow.svg').default} />
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
                              <img src={require('../../assets/images/soundcloud.svg').default} />
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
                                  <img src={require('../../assets/images/right-arrow.svg').default} />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </form>
                </div>
              </TabPanel>
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

export default AddArtist;
