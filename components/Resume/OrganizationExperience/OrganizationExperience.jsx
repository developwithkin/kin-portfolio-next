import React from 'react'
import SectionTitle from '../../UI/SectionTitle'
import TextHighlight from "../../UI/TextHighlight"
import OrganizationItem from './OrganizationItem'

const ORGANIZATION_EXPERIENCE = [
  {
    organization: "Computer Science Student's Association",
    instance: "Kalbis Institute",
    role: "Member of Kominfo Division",
    period: "2020-2021",
    responsibility: [
      "Handle all social media of @himif.kalbis",
      "Provide design needs for internal or external events",
      "Help other divisions in terms of design, broadcast, and documentation"
    ]
  },
  {
    organization: "Computer Science Student's Association",
    instance: "Kalbis Institute",
    role: "Head of Kominfo Division",
    period: "2021-2022",
    responsibility: [
      "Lead Kominfo Division",
      "Make schedule for instagram feeds content",
      "Handle all social media of @himif.kalbis",
      "Provide design needs for internal or external events",
      "Help other divisions in term of design, broadcast, and documentation",
      "Collaborate with other organization in terms of design, broadcast, and documentation",
    ]
  }
]

const OrganizationExperience = () => {
  return (
    <div className='mt-8' id='organization'>
      <SectionTitle href={"#organization"}>Organizational Experience</SectionTitle>
      
      <div className="">
        {
          ORGANIZATION_EXPERIENCE.map((org, index) => (
            <OrganizationItem key={index} organization={org} />
          ))
        }
      </div>
    </div>
  )
}

export default OrganizationExperience