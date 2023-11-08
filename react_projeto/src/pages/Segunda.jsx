import { useRef, useState, useEffect } from 'react'
import LinkPrimeiro from "../components/LinkPrimeira";
import LinkTerceira from "../components/LinkTerceira";


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { fetchWeatherApi } from 'openmeteo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);


const options = {
    responsive: true,
    interaction: {
    mode: 'index',
    intersect: false,
    },
    stacked: false,
    plugins: {
    title: {
        display: true,
        text: '',
    },
    },
    scales: {
    y: {
        type: 'linear',
        display: true,
        position: 'left',
    },
    y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
            drawOnChartArea: true,
        },
    },
    },
};



const  triggerTooltip = (chart) => {
const tooltip = chart?.tooltip;

if (!tooltip) {
    return;
}

if (tooltip.getActiveElements().length > 0) {
    tooltip.setActiveElements([], { x: 0, y: 0 });
} else {
    const { chartArea } = chart;

    tooltip.setActiveElements(
    [
        {
        datasetIndex: 0,
        index: 2,
        },
        {
        datasetIndex: 1,
        index: 2,
        },
    ],
    {
        x: (chartArea.left + chartArea.right) / 2,
        y: (chartArea.top + chartArea.bottom) / 2,
    }
    );
}

chart.update();
}


const url = "https://api.open-meteo.com/v1/forecast";

const Segunda = () => {

    const [city, setCity] = useState('-43.2075;-22.9028');
    const [endDate, setEndDate] = useState(dayjs().add(5, 'day'));
    const [startDate, setStartDate] = useState(dayjs().subtract(5, 'day'));
    const [wheaterOptionsDaily, setWheaterOptionsDaily] = useState(["temperature_2m_max", "temperature_2m_min", "precipitation_sum", "rain_sum", "wind_speed_10m_max", "wind_gusts_10m_max", "wind_direction_10m_dominant"]);
    const [graphDataDaily, setGraphDataDaily] = useState(null) 

    const chartRef = useRef(null);

    useEffect(() => {
        requestWheatherDataDaily()
        const chart = chartRef.current;
        triggerTooltip(chart);
      }, []);
      
    const wheaterOptionsChangeDaily = (wheaterOptionEvent) => {

        const wheaterOptionsDailyOld = wheaterOptionsDaily
        const wheaterOptionName = wheaterOptionEvent.target.name
        const index = wheaterOptionsDailyOld.indexOf(wheaterOptionName)

        if(index !== -1){
            wheaterOptionsDailyOld.splice(index, 1)
        }   else {
            wheaterOptionsDailyOld.push(wheaterOptionName)
        }

        setWheaterOptionsDaily(wheaterOptionsDailyOld)
        
    }


    const requestWheatherDataDaily = async () => {

        const params = {
            "latitude": city.split(';')[1],
            "longitude": city.split(';')[0],
            "daily": ["temperature_2m_max", "temperature_2m_min", "precipitation_sum", "rain_sum", 
            "wind_speed_10m_max", "wind_gusts_10m_max", "wind_direction_10m_dominant"],
            "start_date": startDate.format('YYYY-MM-DD'),
            "end_date": endDate.format('YYYY-MM-DD')
        };

        const responses = await fetchWeatherApi(url, params);
        const range = (start, stop, step) => Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
        const response = responses[0];
        const utcOffsetSeconds = response.utcOffsetSeconds();
        const daily = response.daily();
        const weatherData = {
        
            daily: {
                time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
                    (t) => new Date((t + utcOffsetSeconds) * 1000)
                ),
                temperature2mMax: daily.variables(0).valuesArray(),
                temperature2mMin: daily.variables(1).valuesArray(),
                precipitationSum: daily.variables(2).valuesArray(),
                rainSum: daily.variables(3).valuesArray(),
                windSpeed10mMax: daily.variables(4).valuesArray(),
                windGusts10mMax: daily.variables(5).valuesArray(),
                windDirection10mDominant: daily.variables(6).valuesArray(),
            },
        
        };

        let dataLabel = []
        let temperature2mMax = []
        let temperature2mMin = []
        let precipitationSum = []
        let rainSum = [] 
        let windSpeed10mMax = [] 
        let windGusts10mMax = [] 
        let windDirection10mDominant = []

        for (let i = 0; i < weatherData.daily.time.length; i++) {
            dataLabel.push(dayjs(weatherData.daily.time[i].toLocaleDateString()).format('DD/MM/YYYY'))
            temperature2mMax.push(weatherData.daily.temperature2mMax[i])
            temperature2mMin.push(weatherData.daily.temperature2mMin[i])
            precipitationSum.push(weatherData.daily.precipitationSum[i])
            rainSum.push(weatherData.daily.rainSum[i])
            windSpeed10mMax.push(weatherData.daily.windSpeed10mMax[i])
            windGusts10mMax.push(weatherData.daily.windGusts10mMax[i])
            windDirection10mDominant.push(weatherData.daily.windDirection10mDominant[i])

        }

        console.log(temperature2mMax)

        const datasetWeather = {temperature_2m_max:             {
            label: 'Temperatura maxima',
            data: temperature2mMax,
            borderColor: 'rgb(232, 53, 235)',
            backgroundColor: 'rgb(232, 53, 235)',
              yAxisID: 'y',
            type: 'line'
        },
                       temperature_2m_min:             {
                        label: 'Temperatura minima',
                        data: temperature2mMin,
                        borderColor: 'rgb(120, 53, 235)',
                        backgroundColor: 'rgb(120, 53, 235)',
                          yAxisID: 'y',
                        type: 'line'
                    }, 
                       precipitation_sum:             {
                        label: 'Precipitação',
                        data: precipitationSum,
                        borderColor: 'rgb(235, 53, 53)',
                        backgroundColor: 'rgb(235, 53, 53)',
                          yAxisID: 'y',
                        type: 'line'
                    }, 
                       rain_sum:             {
                        label: 'Chuva',
                        data: rainSum,
                        borderColor: 'rgb(53, 235, 211)',
                        backgroundColor: 'rgb(53, 235, 211)',
                          yAxisID: 'y',
                        type: 'line'
                    }, 
                       wind_speed_10m_max:             {
                        label: 'Velocidade do vento',
                        data: windSpeed10mMax,
                        borderColor: 'rgb(53, 162, 235)',
                        backgroundColor: 'rgb(53, 162, 235)',
                        yAxisID: 'y1',
                        type: 'line'
                    }, 
                       wind_gusts_10m_max: {
                        label: 'Rajada de vento',
                        data: windGusts10mMax,
                        borderColor: 'rgb(53, 235, 53)',
                        backgroundColor: 'rgb(53, 235, 53)',
                          yAxisID: 'y',
                        type: 'line'
                    },
                       wind_direction_10m_dominant: {
                        label: 'Direção do vento',
                        data: windDirection10mDominant,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgb(255, 99, 132)',
                        yAxisID: 'y',
                        type: 'line'
                    }
                }


        const datasetGraph = wheaterOptionsDaily.map((weather) => (datasetWeather[`${weather}`]))


        const data = {
            labels: dataLabel,
            datasets: datasetGraph,
        };

        setGraphDataDaily(data)

    }

return (<div>
            <header>Histórico de Dados - Gráfico</header>
            <br/>
            <div style={{display:"flex"}}>
                <LinkPrimeiro /> <br/>
                <LinkTerceira /> <br/><br/><br/>
            </div>
            
            <div>    
                <InputLabel id="city-select-label">Cidade</InputLabel>
                <Select
                    labelId="city-select"
                    id="city-select"
                    value={city}
                    label="Cidade"
                    onChange={(cityValue => setCity(cityValue.target.value))}
                >
                    <MenuItem value={'-43.2075;-22.9028'}>Rio de Janeiro</MenuItem>
                    <MenuItem value={'-49.2908;-25.504'}>Curitiba</MenuItem>
                </Select>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Data de inicio"
                        value={startDate}
                        minDate={dayjs('2022-06-08')}
                        onChange={(dateValue) => setStartDate(dateValue)}
                    />
                    <DatePicker
                        label="Data final"
                        value={endDate}
                        maxDate={dayjs().add(15, 'day')}
                        onChange={(dateValue) => setEndDate(dateValue)}
                    />
                </LocalizationProvider>

                <FormGroup onChange={wheaterOptionsChangeDaily}>
                    <Stack spacing={2} direction="row">
                        <FormControlLabel name="temperature_2m_max"  control={<Checkbox defaultChecked disabled/> } label="Temperatura máxima" />
                        <FormControlLabel name="temperature_2m_min" control={<Checkbox defaultChecked/>} label="Temperatura mínima" />
                        <FormControlLabel name="precipitation_sum" control={<Checkbox defaultChecked/>} label="Precipitação" />
                        <FormControlLabel name="rain_sum" control={<Checkbox defaultChecked/>} label="Chuva" />
                        <FormControlLabel name="wind_speed_10m_max" control={<Checkbox defaultChecked/>} label="Velocidade do vento" />
                        <FormControlLabel name="wind_gusts_10m_max" control={<Checkbox defaultChecked/>} label="Rajada de vento" />
                        <FormControlLabel name="wind_direction_10m_dominant" control={<Checkbox defaultChecked/>} label="Direção do vento" />
                    </Stack >
                </FormGroup>
                <Grid container spacing={2}>
                 <Grid item xs={1}>
                     <Button variant="contained" onClick={requestWheatherDataDaily} >Pesquisar</Button>
                 </Grid>
                 <Grid item xs={1}>
                     <Button variant="contained">Exportar</Button>
                 </Grid> 
               </Grid>
    
                {(!!graphDataDaily && wheaterOptionsDaily.length > 0)  && <Chart ref={chartRef} options={options} type='bar' data={graphDataDaily} />}

            </div>;

         </div>
)};

export default Segunda;