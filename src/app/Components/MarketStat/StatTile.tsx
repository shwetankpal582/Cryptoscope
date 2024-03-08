"use client"
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement, Legend, Tooltip,
    Filler
} from "chart.js"

// import axios from 'axios';



ChartJS.register(LineElement, Filler, CategoryScale, LinearScale, PointElement, Legend, Tooltip)

interface props {
    data: any,
    isNotBg: boolean,

}

const StatTile: React.FC<props> = ({ data, isNotBg }) => {

    const [labels, setLabels] = useState<any>([])
    const [datasets, setDatasets] = useState<any>([])
    const [marketData, setMarketData] = useState<any>(data)

    const month: any = {
        "01": "Jan",
        "02": "Feb",
        "03": "Mar",
        "04": "Apr",
        "05": "May",
        "06": "Jun",
        "07": "Jul",
        "08": "Aug",
        "09": "Sep",
        "10": "Oct",
        "11": "Nov",
        "12": "Dec",

    }
    useEffect(() => {
        if (!marketData?.["Meta Data"]?.["2. Digital Currency Code"]) {
            return
        }
        const tempLabel: string[] = []
        Object.keys(marketData?.["Time Series (Digital Currency Monthly)"])?.map((child) => tempLabel.push(`${month[child.split("-")[1]]} ${child.split("-")[0]}`))
        setLabels(tempLabel.reverse())

        let tempDataSet: any = []
        let timeSeries: any = marketData?.["Time Series (Digital Currency Monthly)"]
        Object.keys(marketData?.["Time Series (Digital Currency Monthly)"])?.map((child) => tempDataSet.push(parseInt(timeSeries[child]["2b. high (USD)"]).toFixed(2)))
        setDatasets(tempDataSet.reverse())

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [marketData])


    const dataS = {
        labels: labels,
        datasets: [{
            label: marketData?.["Meta Data"]?.["3. Digital Currency Name"],
            data: datasets,
            borderColor: "white",
            pointBorderColor: "white",
            tension: 0.4,
            fill: "origin",
            backgroundColor: "rgba(255, 255, 255, 0.3)",

        }]
    }
    const options = {
        maintainAspectRatio: false,
        plugins: {
            filler: {
                propagate: true,
            },
            legend: {
                display: true,
                position: 'bottom' as const,
                align: 'center' as const,
                labels: {
                    position: "bottom",
                    align: 'center',
                    color: 'white',
                    font: {
                        weight: 'bold' as const,
                        family: "'gadems','ardestine','pixel'" as const
                    },
                    boxWidth: 0,
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: "#CCC",
                },
            },
            y: {
                ticks: {
                    color: "#CCC",
                },
            },
        }
    }
    return (
        <div className={`rounded ${isNotBg ? "bg-inherit" : "bg-newTileBackground"} p-0 xsm:p-2  w-full h-[200px] sm:h-[300px] drop-shadow-3xl ${data?.["Error Message"] ? "flex items-center justify-center" : ""}`}>
            {!data?.["Error Message"] ?
                <Line
                    data={dataS}
                    options={options}
                >
                </Line> : <p>Data Not Available</p>}
        </div>
    )
}

export default StatTile