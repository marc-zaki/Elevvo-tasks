import React, { createContext, useState, useEffect } from "react";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem("jobs");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => setJobs([...jobs, { ...job, id: Date.now() }]);
  const updateJob = (updatedJob) => {
    setJobs(jobs.map(job => job.id === updatedJob.id ? updatedJob : job));
  };
  const deleteJob = (id) => setJobs(jobs.filter(job => job.id !== id));
  const getJobById = (id) => jobs.find(job => job.id === id);

  return (
    <JobContext.Provider value={{ jobs, addJob, updateJob, deleteJob, getJobById }}>
      {children}
    </JobContext.Provider>
  );
};
