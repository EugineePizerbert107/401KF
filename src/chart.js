import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Paper, Typography } from '@material-ui/core'

function BarChart(props) {

    let data = {
        labels: props.labels,
        datasets: [
            {
                backgroundColor: 'rgba(252, 88, 88, 0.5)',
                borderColor: 'rgb(252, 88, 88)',
                category: "No employer match",
                data: props.noMatchData.map(val => {
                    return Math.trunc(val)
                }),
                label: "No employer match",
            },
            {
                backgroundColor: 'rgba(66, 183, 255, 0.5)',
                borderColor: 'rgb(66, 183, 255)',
                category: "With employer match",
                data: props.matchData.map(val => {
                    return Math.trunc(val)
                }),
                label: "With employer match"
            }
        ]
    }

    const options = {
        maintainAspectRatio: true,
        scales: {
            xAxes: [{
                gridLines : {
                    display : false
                },
                tricks: {
                    
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    userCallback: function(value, index, values) {
                        value = value.toString();
                        value = value.split(/(?=(?:...)*$)/);
                        value = value.join(',');
                        return value;
                    }
                }
            }]
        }
   }

    return (
        <Paper style={{marginTop: '5%', marginBottom: '5%', marginLeft: '10%', marginRight: '10%'}}>
            <Typography gutterBottom>
                Total contributions :
            </Typography>
            <Typography gutterBottom>
                Total earned: 
            </Typography>

            <Bar
                data={data}
                options={options}
            />
        </Paper>
        
    )

}

export default BarChart