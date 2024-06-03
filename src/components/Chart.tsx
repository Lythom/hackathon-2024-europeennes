import syntheses from '../syntheses.json'
const synthesesTyped: { [key: string]: string } = syntheses;

const HorizontalBarChart = ({dataObject}: { dataObject: { [key: string]: number } }) => {

    const data = Object.keys(dataObject).map(key => ({
        name: key,
        value: dataObject[key]
    })).sort((a, b) => b.value - a.value);

    return (<div className="text-left">
        {data.map(((item, idx) => (
            <div key={item.name} className="border-solid rounded border-4 border-accent p-2 m-4 ml-8">
                <div className="text-xl font-semibold">{idx + 1}. {item.name} <span className="float-end text-lg">Score d'affinité: {item.value}</span></div>
                <div className="text-md font-semibold pb-2"></div>
                <div dangerouslySetInnerHTML={{__html: synthesesTyped[item.name]}}/>
            </div>
        )))}
    </div>);
};

export default HorizontalBarChart;
