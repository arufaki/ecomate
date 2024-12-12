import Chart from "react-apexcharts";

const CurvedAreaChart = () => {
    const chartOptions = {
        chart: {
            height: 300,
            type: "area",
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        series: [
            {
                name: "Income",
                data: [18000, 51000, 60000, 38000, 88000, 50000, 40000, 52000, 88000, 80000, 60000, 70000],
            },
            {
                name: "Outcome",
                data: [27000, 38000, 60000, 77000, 40000, 50000, 49000, 29000, 42000, 27000, 42000, 50000],
            },
        ],
        stroke: {
            curve: "smooth",
            width: 2,
        },
        grid: {
            strokeDashArray: 2,
        },
        fill: {
            type: "gradient",
            gradient: {
                type: "vertical",
                shadeIntensity: 1,
                opacityFrom: 0.1,
                opacityTo: 0.8,
            },
        },
        xaxis: {
            type: "category",
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            labels: {
                style: {
                    colors: "#9ca3af",
                    fontSize: "13px",
                    fontFamily: "Inter, ui-sans-serif",
                    fontWeight: 400,
                },
            },
        },
        yaxis: {
            labels: {
                formatter: (value) => (value >= 1000 ? `${value / 1000}` : value),
                style: {
                    colors: "#9ca3af",
                    fontSize: "13px",
                    fontFamily: "Inter, ui-sans-serif",
                    fontWeight: 400,
                },
            },
        },
        colors: ["#3B82F6", "#14B8A6"],
    };

    return <Chart options={chartOptions} series={chartOptions.series} type="area" height={300} />;
};

export default CurvedAreaChart;
