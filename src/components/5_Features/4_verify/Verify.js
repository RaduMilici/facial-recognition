import React, { Component } from 'react'
import Feature from '../Feature'
import { verify } from '../../../api/kairos'
import { takeScreenshot } from '../../../util/canvas'
import Chart from 'chart.js'

class Verify extends Component {
  constructor() {
    super()
    this.state = {
      result: null,
      dataUrl: null,
      name: null,
    }
  }

  componentDidMount() {
    this.chart()
  }

  recognizeFace = () => {
    const dataUrl = takeScreenshot()
    const subject_id = this.state.name
    const gallery_name = 'ui_cop_demo'
    const callback = async ({ result }) => {
      console.log(result)
      this.chart.data.datasets[0].data[1] = result.confidence
      this.chart.update()
    }
    verify({ dataUrl, subject_id, gallery_name, callback })
  }

  chart() {
    const ctx = this.refs.chart.getContext('2d')
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['minimum', 'confidence'],
        datasets: [
          {
            label: 'confidence',
            data: [0.6, 0],
            backgroundColor: ['rgba(20, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        barThickness: 100,
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

  render() {
    return (
      <Feature onClick={this.recognizeFace} reset={false} title="Verify">
        <input
          placeholder="name"
          onChange={({ target }) => this.setState({ name: target.value })}
          type="text"
        />
        <canvas ref="chart" id="chart" width="400" height="250" />
      </Feature>
    )
  }
}

export default Verify
