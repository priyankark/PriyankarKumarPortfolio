import * as React from 'react';

const awards = [
    {
        name: 'Microsoft Hackathon 2021, Hack for Developer Productivity',
        description: 'My contributions included product ideation and building the core capabilities of the product. The project also won another award in a Sponsored Hack titled "Observability Assistance."',
    },
    {
        name: 'Nominated: Alexa Star developer of the year 2018, Amazon AI Conclave',
        description: 'Nominated as one of the top two nominees by Amazon among thousands of developers in India.'
    },
    {
        name: 'First place, Amazon Alexa Skill Wizards Challenge 2018',
        description: 'Awarded First place amongst participants from all colleges in India.'
    },
    {
        name: 'Second Place, Techgig Code Gladiators 2018',
        description: 'Awarded second place in the Amazon Alexa theme'
    },
    {
        name: 'Booking.com International Travel Hackathon Finalist 2019',
        description: 'Top 5 Finalist among applicants from 60+ countries',
    }, 
    {
        name: 'Finalist, NEC Digitalzing Education Challenge, 2019',
        description: '',
    }, 
    {
        name: 'Best Alexa Skill of the month',
        description: 'Awarded by Amazon in the months December 2017, June 2018'
    },
    {
        name: 'Runner up, TCS Rural IT Quiz 2013',
        description: ''
    },
]

export const Awards = () => {
    return <div className="z-10 shadow-lg flex flex-col p-2">
        <div>
            <h3 className="font-display font-bold">Awards and Recognition</h3>
        </div>
        <div className="pl-8">
            <ul className="list-disc">
                {awards.map((ele, index) => <li key={index} className="shadow-inner p-1">
                   <span className="font-bold font-display"> {ele.name} </span> {ele.description}
                </li>)}
            </ul>
        </div>
    </div>
}