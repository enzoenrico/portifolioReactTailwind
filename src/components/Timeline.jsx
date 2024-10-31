import timeline from "../data/englishtimeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

function Timeline() {
    return (
        <div className="flex flex-col md:flex-row justify-center my-20">
            <div className="w-full md:w-7/12">
                <Title>My experience</Title>
                {timeline.map((item) => (
                    <TimelineItem
                        key={Number(item.year) * Math.random()}
                        year={item.year}
                        title={item.title}
                        duration={item.duration}
                        details={item.details}
                    />
                ))}
            </div>
        </div>
    );
}

export default Timeline;
