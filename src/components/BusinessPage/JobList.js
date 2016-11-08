import React from 'react'
import FeaturedCard from '../FeaturedCard/FeaturedCard'
import './jobList.sass'
import companyData from '../../store/companyData'
import JobOpenings from './JobOpenings'

const renderJobList = jobs => (
  jobs.map((job,i) => (
    <JobOpenings key={i} job={job} />
  ))
)

const JobList = (props) => {
  return (
    <div className="jobList">
      {renderJobList(props.jobs)}
    </div>
  )
}

export default JobList
