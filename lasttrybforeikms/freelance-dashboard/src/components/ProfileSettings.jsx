import { Bar } from 'react-chartjs-2';

const Overview = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Monthly Earnings',
                data: [400, 450, 300, 500, 600, 700],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    return (
        <div className="ml-64 p-4">
            <h2 className="text-2xl mb-4">Overview</h2>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-200 p-4 rounded">Total Projects: 10</div>
                <div className="bg-gray-200 p-4 rounded">Earnings: $5000</div>
                <div className="bg-gray-200 p-4 rounded">Tasks Due: 5</div>
            </div>
            <div className="mt-4">
                <Bar data={data} />
            </div>
        </div>
    );
};

export default Overview;
