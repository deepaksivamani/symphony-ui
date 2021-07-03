import React from 'react';
import { Line } from 'react-chartjs-2';
import { useTabs, TabPanel } from "react-headless-tabs";
import { Link } from 'react-router-dom';
import { TabSelector } from '../../../helpers/TabSelector';


const viewsGrowthChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [12, 15, 5, 7, 8, 3, 7],
      fill: true,
      backgroundColor: '#E8F9E8',
      borderColor: '#19C221'
    },
  ],
};

const viewsGrowthChartOptions = {
  scales: {
    x: {
      grid: {
        display: false,
      },
      // ticks: {
      //   display: false
      // }
    },
  },
  plugins: {
    title: {
      display: true,
      text: 'GROWTH IN VIEWS',
      color: '#262324',
      align: 'start',
      font: {
        text: 'left',
        size: 16,
        family: 'tahoma',
        weight: '500',
        style: 'normal'
      },
      padding: {
        bottom: 15,
      },
    },
    legend: {
      display: false
    },
  },
  // maintainAspectRatio: false,
  // responsive: true
};

const likesGrowthChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [5, 6, 11, 7, 8, 11, 7],
      fill: true,
      backgroundColor: '#E8F9E8',
      borderColor: '#19C221'
    },
  ],
};

const likesGrowthChartOptions = {
  scales: {
    x: {
      grid: {
        display: false
      },
      // ticks: {
      //   display: false
      // }
    },
  },
  plugins: {
    title: {
      display: true,
      text: 'GROWTH IN LIKES',
      color: '#262324',
      align: 'start',
      font: {
        text: 'left',
        size: 16,
        family: 'tahoma',
        weight: '500',
        style: 'normal'
      },
      padding: {
        bottom: 15,
      },
    },
    legend: {
      display: false
    },
  },
  // maintainAspectRatio: false,
  // responsive: true
};

const commentsGrowthChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [2, 5, 4, 7, 12, 9, 10],
      fill: true,
      backgroundColor: '#E8F9E8',
      borderColor: '#19C221'
    },
  ],
};

const commentsGrowthChartOptions = {
  scales: {
    x: {
      grid: {
        display: false
      },
      // ticks: {
      //   display: false
      // }
    },
  },
  plugins: {
    title: {
      display: true,
      text: 'GROWTH IN COMMENTS',
      color: '#262324',
      align: 'start',
      font: {
        text: 'left',
        size: 16,
        family: 'tahoma',
        weight: '500',
        style: 'normal'
      },
      padding: {
        bottom: 15,
      },
    },
    legend: {
      display: false
    },
  },
  // maintainAspectRatio: false,
  // responsive: true
};


const Content = () => {

  return (
    <div className="mt-16">
      <div className="w-full mx-auto">
        {/* <div className="header">
          <h2 className="my-4 font-medium text-xl">Jayson</h2>
        </div> */}

        <div className="px-4 pb-4">
          <div className="md:w-8/12 mx-auto">
            <div className="flex flex-row justify-between mb-1">
              <div className="w-3/12"></div>
              <div className="w-3/12 text-center">Views</div>
              <div className="w-3/12 text-center">Comments</div>
              <div className="w-3/12 text-center">Likes</div>
            </div>
            <ul>
              <li className="p-3 border-t border-b flex flex-row">
                <div className="flex flex-row flex-wrap items-center w-3/12 text-center">
                  <div>
                    <img style={{ minWidth: 70 }} src={require('../../../assets/images/cariaus-album-1.svg').default} />
                    <img style={{ marginLeft: '54px', marginTop: '-16px', zIndex: 1 }} width={20} src={require('../../../assets/images/youtube.svg').default} />
                  </div>
                  <div className="text-center ml-3">
                    <p>Jaune</p>
                    <p>Video</p>
                  </div>
                </div>
                <div className="w-3/12 self-center text-center">
                  <p className="text-sm font-bold py-2">100k</p>
                  <p className="text-primary text-sm font-bold py-2 flex flex-row justify-center">
                    <span>+5.9%</span>
                    <img className="ml-1" src={require('../../../assets/images/carret-up.svg').default} />
                  </p>
                </div>
                <div className="w-3/12 self-center text-center">
                  <p className="text-sm font-bold py-2">49</p>
                  <p className="text-primary text-sm font-bold py-2 flex flex-row justify-center">
                    <span>+1.3%</span>
                    <img className="ml-1" src={require('../../../assets/images/carret-up.svg').default} />
                  </p>
                </div>
                <div className="w-3/12 self-center text-center">
                  <p className="text-sm font-bold py-2">12k</p>
                  <p className="text-primary text-sm font-bold py-2 flex flex-row justify-center">
                    <span>+3.2%</span>
                    <img className="ml-1" src={require('../../../assets/images/carret-up.svg').default} />
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-row flex-wrap justify-center md:justify-start mt-4">
            <div className="md:w-6/12 w-full md:px-10 px-2 my-5">
              <Line type={"line"} data={viewsGrowthChartData} options={viewsGrowthChartOptions} />
            </div>
            <div className="md:w-6/12 w-full md:px-10 px-2 my-5">
              <Line type={"line"} data={likesGrowthChartData} options={likesGrowthChartOptions} />
            </div>
            <div className="md:w-6/12 w-full md:px-10 px-2 my-5">
              <Line type={"line"} data={commentsGrowthChartData} options={commentsGrowthChartOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content;