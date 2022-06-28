import * as React from 'react';
import { StepperNav } from 'vertical-stepper-nav';

const StepContent = (props: { dates: string, company: string, position: string }) => <div className="flex flex-row items-between text-xs font-semibold">
    <span className="font-display text-primary rounded-lg z-10 bg-gray-100 shadow-lg p-1"> {props.dates} </span> <div className="ml-2 mt-1">{props.position}, {props.company} </div>
</div>

export const TimeLine = () => {
    return <div className="container flex flex-col z-10 rounded-lg shadow-lg">
        <div className="container p-2 divide-y divide-primary-400 ">
            <h2 className="display font-bold">Experience Timeline</h2>
        </div>
        <div className="p-2">
            <StepperNav
                steps={[
                    {
                        stepContent: () => <StepContent dates={"Mar 2022 - Current"} position={'SWE-2'} company={'Office NUI Incubation, Experiences+Devices, Microsoft IDC'} />,
                        stepStatusCircleSize: 24,
                        stepStateColor: "darkgreen"
                    },
                    {
                        stepContent: () => <StepContent dates={"July 2019 - Feb 2022"} position={'SWE'} company={'C+E, Cloud+AI, Microsoft IDC'} />,
                        stepStatusCircleSize: 24,
                        stepStateColor: "#4338ca"
                    },
                    {
                        stepContent: () => <StepContent dates={"Jan 2019 - June 2019"} position={'Project Trainee'} company={'CAIR, DRDO'} />,
                        stepStatusCircleSize: 24,
                        stepStateColor: "#4338ca"
                    },
                    {
                        stepContent: () => <StepContent dates={"Oct 2018 - June 2019"} position={'SWE (remote)'} company={'Voiceqube'} />,
                        stepStatusCircleSize: 24,
                        stepStateColor: "#4338ca"
                    },
                    {
                        stepContent: () => <StepContent dates={"Summer 2018"} position={'Summer Intern'} company={'Voycefirst'} />,
                        stepStatusCircleSize: 24,
                        stepStateColor: "#4338ca"
                    },
                    {
                        stepContent: () => <StepContent dates={"Summer 2017"} position={'Summer Intern'} company={'IIIT Hyderabad'} />,
                        stepStatusCircleSize: 24,
                        stepStateColor: "#4338ca"
                    }
                ]}
            />
        </div>
    </div>

}