import React, { useState } from "react";

const AddArtist = () => {

  const [currentTab, setCurrentTab] = useState('basic');
  const [searchResults, setSearchResult] = useState([]);
  const [searchStr, setSearchStr] = useState('');

  const handleChange = (e) => {
    setSearchStr(e.target.value);
    console.log("searched for: ", e.target.value);
    if(e.target.value.length) {
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
            </nav>
            
            {currentTab === 'basic' && (
              <>
              <div className="middle-wrapper px-4 lg:px-10 overflow-y-auto mh-calc">
              <h4 className="py-5 text-xl font-bold">What is the name of the artist</h4>
              {/* <hr className="h-px	bg-gray-200" /> */}
              <form action="">
                <div className="input-form flex flex-row align-middle">
                  <label
                    htmlFor=""
                    className="w-2/12 bg-white items-center flex text-lg"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="eg. Jay-Z"
                    onChange={handleChange}
                    value={searchStr}
                    className="border outline-none rounded-2xl p-4 text-left border-gray-200 w-10/12"
                  />
                </div>
                  <div className="add-new">
                  {searchResults.map((item) => {
                    return (
                      <div className="sy-card">
                    <div className="flex items-center">
                      <div className="artist-img">
                      <img src={require('../../assets/images/p1.svg').default}/>
                        <div className="absolute top-4 -right-1 bottom-0 w-3 h-3">
                        <img src={require('../../assets/images/tick.svg').default}/>
                        </div>
                      </div>
                      <div className="px-3">
                        <h5 className="text-dark">{item.name}</h5>
                        <div className="flex flex-row items-center">
                          <div className="social-img">
                            <img src={require('../../assets/images/spotify.svg').default}/>
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
                      <a href="/connect">
                      <img src={require('../../assets/images/right-arrow.svg').default}/>
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
            </>
            )}
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
