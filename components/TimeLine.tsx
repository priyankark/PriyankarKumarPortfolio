import * as React from 'react';
import { StepperNav } from 'vertical-stepper-nav';

const StepContent = (props: { dates: string, company: string, position: string }) => <div className="flex flex-row items-between text-xs">
  <span className="font-semibold rounded-lg bg-primary-500 p-1"> {props.dates} </span> {props.position}, {props.company} 
</div>

export const TimeLine = () => {
    return <div className="container md:w-4/6 flex z-10 rounded-lg bg-gray-100">
        <StepperNav
            steps={[
                {
                    stepContent: () => <StepContent dates={"July 2019 - Present"} position={'Software Engineer'} company={'Microsoft India Development Center'} />,
                    stepStatusCircleSize: 16,
                    stepStateColor: "#4338ca"
                },
                {
                    stepContent: () => <StepContent dates={"July 2019 - Present"} position={'Software Engineer'} company={'Microsoft India Development Center'} />,
                    stepStatusCircleSize: 16,
                    stepStateColor: "#4338ca"
                },
                {
                    stepContent: () =><StepContent dates={"July 2019 - Present"} position={'Software Engineer'} company={'Microsoft India Development Center'} />,
                    stepStatusCircleSize: 16,
                    stepStateColor: "#4338ca"
                }
            ]}
        />
    </div>

}