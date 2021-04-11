import * as React from 'react';

const Pill = (props: { color: string, text: string }) => <div className={`ml-2 mt-2 p-1 rounded-lg text-semibold font-display border-solid border-2 border-${props.color}-400`}>{props.text}</div>

export const SkillsMap = () => {
    return <div className="flex flex-col w-full justify-evenly rounded-lg shadow-lg border p-2">
        <h4 className="font-display font-bold">My Skills</h4>
        <div className="flex flex-row flex-wrap p-2">
            <Pill color='green' text='React.js'/>
            <Pill color='green' text='Typescript'/>
            <Pill color='green' text='Javascript'/>
            <Pill color='green' text='Alexa Skills'/>
            <Pill color='green' text='Python'/>
            <Pill color='green' text='Node.js'/>
            <Pill color='amber' text='ASP.NET'/>
            <Pill color='amber' text='C#'/>
            <Pill color='amber' text='Azure'/>
            <Pill color='amber' text='Google Assistant Actions'/>
            <Pill color='red' text='C'/>
            <Pill color='red' text='C++'/>
            <Pill color='red' text='Java'/>
            <Pill color='red' text='React Native'/>
            <Pill color='red' text='Big Data'/>
        </div>
    </div>
}