import React, { Component } from 'react'
import Feature from '../Feature'
import { postMedia } from '../../../api/kairos'
import imgUrls from '../../../util/imgUrls'
import Chart from 'chart.js'
import get from 'lodash/get'

class PostMedia extends Component {
  constructor() {
    super()
    this.chartLabels = ['Joy', 'Surprise', 'Anger', 'Disgust', 'Fear']
    this.state = {
      result: null,
      dataUrl: imgUrls.happy,
    }
  }

  componentDidMount() {
    this.chart()
  }

  postMedia = () => {
    const callback = async ({ result }) => {
      this.setState({ result }, this.updateChart)
    }
    postMedia({ dataUrl: this.state.dataUrl, callback })
  }

  changePicture = ({ target }) => {
    this.setState({ dataUrl: imgUrls[target.value] })
  }

  chart() {
    const ctx = this.refs.chart.getContext('2d')
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.chartLabels,
        datasets: [
          {
            label: 'confidence',
            data: [0, 0, 0, 0, 0, 0],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    })
  }

  updateChart() {
    const emotions = get(this, 'state.result.frames[0].people[0].emotions', [])
    const emotionsArr = this.chartLabels.map(label => emotions[label.toLowerCase()])
    this.chart.data.datasets[0].data = emotionsArr
    this.chart.update()
  }

  radio() {
    const inputs = Object.keys(imgUrls).map((emotion, i) => {
      return (
        <span style={{ margin: '0 15px' }} key={emotion}>
          <input
            type="radio"
            id={emotion}
            name="contact"
            value={emotion}
            defaultChecked={i === 0}
          />
          <label htmlFor={emotion}>{emotion}</label>
        </span>
      )
    })
    return <div onChange={this.changePicture}>{inputs}</div>
  }

  render() {
    return (
      <div>
        <Feature
          result={this.state.result}
          onClick={this.postMedia}
          title="Emotion analysis"
          dataUrl={this.state.dataUrl}
          reset={false}
          hideResult={true}
          leftContent={this.radio()}
        >
          <canvas ref="chart" id="chart" width="400" height="350" />
        </Feature>
      </div>
    )
  }
}

export default PostMedia
