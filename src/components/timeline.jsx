import React from 'react';

class Timeline extends React.Component {

  render() {
    return (
        <div class="container">
            <div class="row">
                <div class="timeline-header col-md-12">
                    <h1>My Journey</h1>
                    <p>{desc}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="main-timeline">
                        {createTable()}
                    </div>
                </div>
            </div>
        </div>
    );
  }

}

const desc = 'A mixture of school, work, and opportunities have brought me on endless experiences. I have lived in 6 different cities that span over 3 countries, and have travelled to many more. Here is a summary of my journey.'

var journey = [
    {
        'year' : '2018',
        'title': 'Moved To Montreal',
        'desc' : 'Studied comp eng at mcgill'
    },
    {
        'year' : '2018',
        'title': 'Moved To Montreal',
        'desc' : 'Studied comp eng at mcgill'
    },
    {
        'year' : '2018',
        'title': 'Moved To Montreal',
        'desc' : 'Studied comp eng at mcgill'
    }
]

var createTable = () => {
    let table = []
    for (let i = 0; i < journey.length; i++) {
        table.push(<div class="timeline">
                        <div class="icon"></div>
                        <div class="date-content">
                            <div class="date-outer">
                                <span class="date">
                                    <span class="year">{journey[i].year}</span>
                                </span>
                            </div>
                        </div>
                        <div class="timeline-content">
                            <h3 class="title">{journey[i].title}</h3>
                            <p class="description">
                                 {journey[i].desc}
                            </p>
                        </div>
                    </div>
        )
    }
    return table;
}  
  

export default Timeline;
