import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';

const TabCategories = () => {
  const [jobs,setJobs]=useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/jobs`)
    .then(res=>res.json())
    .then(data=>setJobs(data))
  },[])
  return (
    <Tabs className={`text-center mt-10`}>
      <TabList>
        <Tab>Web development</Tab>
        <Tab>Graphic Design</Tab>
        <Tab>Digital Marketing</Tab>
      </TabList>

      <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 my-10'>
          {jobs.filter(job=>job.category=='Web Development').map(job=><JobCard key={job.id} job={job}></JobCard>)}
        </div>
      </TabPanel>
      <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 mt-6'>
          {jobs.filter(job=>job.category=='Graphic Design').map(job=><JobCard key={job.id} job={job}></JobCard>)}
        </div>
      </TabPanel>
      <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 mt-6'>
          {jobs.filter(job=>job.category=='Digital Marketing').map(job=><JobCard key={job.id} job={job}></JobCard>)}
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default TabCategories;