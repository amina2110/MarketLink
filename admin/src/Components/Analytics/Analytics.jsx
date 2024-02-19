import React, {useEffect, useRef} from 'react';
import Chart from 'chart.js/auto';
import './Analytics.css'


const Analytics = () => {
    return (
        <div className="container">
            <h1>Analytics Dashboard</h1>
            <div className="charts-container">
                <Analytics_Bar />
                <PopularProductsChart />
            </div>
        </div>
    );

};


const Analytics_Bar = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');
        chartInstance.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                    {
                        label: 'Sales',
                        data: [65, 59, 80, 81, 56, 55],
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return <canvas ref={chartRef} width="50" height="50" className={'chart'}></canvas>;
};

const PopularProductsChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');
        chartInstance.current = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Product A', 'Product B', 'Product C'],
                datasets: [
                    {
                        label: 'Most Popular Products',
                        data: [30, 20, 10], // Sample data, replace with actual data
                        backgroundColor: ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(255, 206, 86, 0.8)'],
                        borderColor: 'white',
                        borderWidth: 2,
                    },
                ],
            },
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return <canvas ref={chartRef} width="50" height="50"></canvas>;
};

export default Analytics;
