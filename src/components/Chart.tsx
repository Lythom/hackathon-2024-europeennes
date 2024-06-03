import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const HorizontalBarChart = ({dataObject}: { dataObject: { [key: string]: number } }) => {

    const data = Object.keys(dataObject).map(key => ({
        name: key,
        value: dataObject[key]
    })).sort((a, b) => b.value - a.value);

    return (<ol className="text-left">
        {data.map(item => (
            <li key={item.name}>{item.name} - {item.value}</li>
        ))}
    </ol>);
};

export default HorizontalBarChart;
