import * as React from 'react';

const positions = [
    {
        name: 'Microsoft 4Afrika (2020-2021)',
        description: 'Peer mentoring college student. Providing technical and other guidance as part of Microsoft Aspire program.'
    },
    {
        name: 'Newtonschool Mentor (2020-2021)',
        description: 'Helping a cohort of 10 college students take their first steps in the tech industry.'
    },
    {
        name: 'Teach Code For Good (2018)',
        description: 'Taught Python to kids in a government school.'
    },
    {
        name: 'Amazon Alexa Student Influencer',
        description: 'Mentored students in my college in the voice space as part of an official Amazon program for students.',
    }, 
]

export const POR = () => {
    return <div className="z-10 shadow-lg flex flex-col p-2">
        <div>
            <h3 className="font-display font-bold">Volunteering</h3>
        </div>
        <div className="pl-8">
            <ul className="list-disc">
                {positions.map((ele, index) => <li key={index} className="shadow-inner p-1">
                   <span className="font-bold font-display"> {ele.name}: </span> {ele.description}
                </li>)}
            </ul>
        </div>
    </div>
}