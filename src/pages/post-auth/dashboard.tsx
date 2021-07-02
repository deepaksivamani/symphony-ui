import React from 'react';
import { Line } from 'react-chartjs-2';
import { useTabs, TabPanel } from "react-headless-tabs";
import { TabSelector } from '../../helpers/TabSelector';


const overallChartData = {
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

const overallChartOptions = {
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        display: false
      }
    },
  },
  plugins: {
    title: {
      display: true,
      text: 'Fanbase Growth',
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

const miniChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [12, 15, 3, 5, 11, 3, 7],
      fill: true,
      backgroundColor: '#E8F9E8',
      borderColor: '#19C221'
    },
  ],
};

const miniChartOptions = {
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        display: false
      }
    },
    y:
    {
      grid: {
        display: false
      },
      ticks: {
        display: false
      }
    }
  },
  plugins: {
    legend: {
      display: false
    },
  },
  maintainAspectRatio: false,
  responsive: true
};

const Dashboard = () => {

  const tabs = ['overall', 'content'];
  const defaultTab = 'overall';
  const [selectedTab, setSelectedTab] = useTabs(tabs, defaultTab)

  return (
    <div className="mt-16">
      <div className="w-full md:w-8/12 mx-auto">
        <div className="header">
          <h2 className="my-4 font-medium text-xl">Jayson</h2>
        </div>
        <nav className="flex border-b border-gray-300">
        <TabSelector
          isActive={selectedTab === 'overall'}
          onClick={() => setSelectedTab('overall')}
        >
          Overall
        </TabSelector>
        <TabSelector
          isActive={selectedTab === 'content'}
          onClick={() => setSelectedTab('content')}
        >
          Content
        </TabSelector>
      </nav>
      <div className="p-4">
        <TabPanel hidden={selectedTab !== 'overall'}>
        <Line type={"line"} width={300} height={150} data={overallChartData} options={overallChartOptions} />
        <h4 className="mt-8 font-medium text-xl">PLATFORMS</h4>
        <div className="flex flex-row md:flex-nowrap flex-wrap gap-8 py-3 md:border-b">
          <div className="w-full md:w-6/12 border-b md:border-b-0">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row">
                <img width={50} src={require('../../assets/images/facebook.svg').default} />
                <div className="ml-4 text-center self-center">
                  <p>+300</p>
                  <p>6.5k</p>
                </div>
              </div>
              <div className="w-6/12">
                <Line className="object-scale-down" height={80} type={"line"} data={miniChartData} options={miniChartOptions} />
              </div>
              <div className="w-auto">
               <p className="text-primary text-sm">+1.3%</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 border-b md:border-b-0">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row">
                <img width={50} src={require('../../assets/images/insta.svg').default} />
                <div className="ml-4 text-center self-center">
                  <p>+300</p>
                  <p>6.5k</p>
                </div>
              </div>
              <div className="w-6/12">
                <Line className="object-scale-down" height={80} type={"line"} data={miniChartData} options={miniChartOptions} />
              </div>
              <div className="w-auto">
               <p className="text-primary text-sm">+1.3%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row md:flex-nowrap flex-wrap gap-8 py-3 md:border-b">
          <div className="w-full md:w-6/12 border-b md:border-b-0">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row">
                <img width={50} src={require('../../assets/images/twitter.svg').default} />
                <div className="ml-4 text-center self-center">
                  <p>+300</p>
                  <p>6.5k</p>
                </div>
              </div>
              <div className="w-6/12">
                <Line className="object-scale-down" height={80} type={"line"} data={miniChartData} options={miniChartOptions} />
              </div>
              <div className="w-auto">
               <p className="text-primary text-sm">+1.3%</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 border-b md:border-b-0">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row">
                <img width={50} src={require('../../assets/images/spotify.svg').default} />
                <div className="ml-4 text-center self-center">
                  <p>+300</p>
                  <p>6.5k</p>
                </div>
              </div>
              <div className="w-6/12">
                <Line className="object-scale-down" height={80} type={"line"} data={miniChartData} options={miniChartOptions} />
              </div>
              <div className="w-auto">
               <p className="text-primary text-sm">+1.3%</p>
              </div>
            </div>
          </div>
        </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== 'content'}></TabPanel>
      </div>

        {/* {
        <Line type={""} data={overallChartData} options={overallChartOptions} />
        <h4 className="mt-8 font-medium text-xl">PLATFORMS</h4>
        <div className="flex flex-row md:flex-nowrap flex-wrap gap-8 py-3 md:border-b">
          <div className="w-full md:w-6/12 border-b md:border-b-0">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row">
                <img width={50} src={require('../../assets/images/facebook.svg').default} />
                <div className="ml-4 text-center self-center">
                  <p>+300</p>
                  <p>6.5k</p>
                </div>
              </div>
              <div className="w-6/12">
                <Line className="object-scale-down" height={80} type={"line"} data={miniChartData} options={miniChartOptions} />
              </div>
              <div className="w-auto">
               <p className="text-primary text-sm">+1.3%</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 border-b md:border-b-0">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row">
                <img width={50} src={require('../../assets/images/insta.svg').default} />
                <div className="ml-4 text-center self-center">
                  <p>+300</p>
                  <p>6.5k</p>
                </div>
              </div>
              <div className="w-6/12">
                <Line className="object-scale-down" height={80} type={"line"} data={miniChartData} options={miniChartOptions} />
              </div>
              <div className="w-auto">
               <p className="text-primary text-sm">+1.3%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row md:flex-nowrap flex-wrap gap-8 py-3 md:border-b">
          <div className="w-full md:w-6/12 border-b md:border-b-0">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row">
                <img width={50} src={require('../../assets/images/twitter.svg').default} />
                <div className="ml-4 text-center self-center">
                  <p>+300</p>
                  <p>6.5k</p>
                </div>
              </div>
              <div className="w-6/12">
                <Line className="object-scale-down" height={80} type={"line"} data={miniChartData} options={miniChartOptions} />
              </div>
              <div className="w-auto">
               <p className="text-primary text-sm">+1.3%</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 border-b md:border-b-0">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row">
                <img width={50} src={require('../../assets/images/spotify.svg').default} />
                <div className="ml-4 text-center self-center">
                  <p>+300</p>
                  <p>6.5k</p>
                </div>
              </div>
              <div className="w-6/12">
                <Line className="object-scale-down" height={80} type={"line"} data={miniChartData} options={miniChartOptions} />
              </div>
              <div className="w-auto">
               <p className="text-primary text-sm">+1.3%</p>
              </div>
            </div>
          </div>
        </div>
    } */}

      </div>
    </div>
  )
}

export default Dashboard;