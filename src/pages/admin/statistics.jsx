
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
// import {dataset} from 'dataset.js'
const chartSetting = {
  yAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  width: 870,
  height: 360,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};



const dataset = [
  { month: 'Jan 1', ittcApproved: 15, ittcoDenied: 12, gepsApproved: 18, gepsDenied: 5, itecApproved: 10 },
  { month: 'Jan 2', ittcApproved: 14, ittcoDenied: 13, gepsApproved: 17, gepsDenied: 6, itecApproved: 11 },
  { month: 'Jan 3', ittcApproved: 15, ittcoDenied: 12, gepsApproved: 18, gepsDenied: 5, itecApproved: 10 },
  { month: 'Jan 4', ittcApproved: 14, ittcoDenied: 13, gepsApproved: 17, gepsDenied: 6, itecApproved: 11 },
  // ... more data points for each day of the month
];



const CHART_COLORS = {
  ittcApproved: '#8585c9',
  ittcoDenied: '#a3a3d9',
  gepsDenied: '#e0e0f7',
  gepsApproved: '#ff9e6d',
  itecApproved: '#6dcbb0',
};


const valueFormatter = (value) => `${value}mm`;

const StatsCard = ({ title, text, style }) => (
  <div className="p-4   md:w-1/3">
    <p className='text-slate-500 text-sm mb-2'>{title}</p>
    <div className={`${style} rounded bg-opacity-25 py-6 px-10 h-[6.3rem] text-center text-[#4069B0] text-3xl font-semibold shadow-statsCard`}>
      {text}
    </div>
  </div>
);
export const Statistics = () => {
    return (
      <div className='w-full h-screen bg-[#ECEDF2] flex flex-col gap-5'>
        <div className='w-[90%] mx-auto flex flex-col md:flex-row justify-between'>
        <StatsCard title="Today" text="0" style="bg-[#7979d2] bg-opacity-50" />
<StatsCard title="This week" text="1143" style="bg-[#a3a3d9] bg-opacity-50" />
<StatsCard title="This month" text="5203" style="bg-[#8585c9] bg-opacity-50" />
          </div>

          <div className='w-[90%] mx-auto h-max border-2 '>
          <BarChart
  dataset={dataset}
  xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
  series={[
    { dataKey: 'ittcApproved', label: 'ITTC-APPROVED', valueFormatter, color: CHART_COLORS.ittcApproved },
    { dataKey: 'ittcoDenied', label: 'ITTCO-DENIED', valueFormatter, color: CHART_COLORS.ittcoDenied },
    { dataKey: 'gepsDenied', label: 'GEPS-DENIED', valueFormatter, color: CHART_COLORS.gepsDenied },
    { dataKey: 'gepsApproved', label: 'GEPS-APPROVED', valueFormatter, color: CHART_COLORS.gepsApproved },
    { dataKey: 'itecApproved', label: 'ITEC-APPROVED', valueFormatter, color: CHART_COLORS.itecApproved },
  ]}
  {...chartSetting}
/>
        </div>
        </div>
      );
}
