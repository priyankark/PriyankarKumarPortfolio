import * as React from 'react';
import { StepperNav } from 'vertical-stepper-nav';

const StepContent = (props: { dates: string, company: string, position: string }) => <div className="flex flex-row items-between text-xs">
    <span className="font-semibold font-display text-primary rounded-lg bg-primary-300 p-1"> {props.dates} </span> <div className="ml-2 mt-1">{props.position}, {props.company} </div>
</div>

export const TimeLine = () => {
    return <div className="container flex flex-col z-10 rounded-lg bg-gray-100">
        <div className="p-2">
            Experience Timeline
        </div>
        <div>
            <StepperNav
                steps={[
                    {
                        stepContent: () => <StepContent dates={"July 2019 - Present"} position={'Software Engineer'} company={'Microsoft India Development Center'} />,
                        stepStatusCircleSize: 24,
                        stepStateColor: "#4338ca"
                    },
                    {
                        stepContent: () => <StepContent dates={"Jan 2019 - June 2019"} position={'Project Trainee'} company={'CAIR, DRDO'} />,
                        stepStatusCircleSize: 24,
                        stepStateColor: "#4338ca"
                    },
                    {
                        stepContent: () => <StepContent dates={"Oct 2018 - June 2019"} position={'Software Developer (remote)'} company={'Voiceqube'} />,
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