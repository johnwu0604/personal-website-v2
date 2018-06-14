import React from 'react';

class Timeline extends React.Component {

  render() {
    return (
        <div class="journey">
            <div class="container">
                <div class="row">
                    <div class="timeline-header col-md-12">
                        <h1>My Journey</h1>
                        <p>{desc}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="timeline">
                            {createTable()}
                        </div>
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
        'icon' : 'child',
        'year' : '1996',
        'title': 'The Newfie Life',
        'desc' : 'I was born in Carbonear, Newfoundland - a small town of 4000 peope on the atlantic coast of Canada. This was the town that my parents first settled in upon immigrating from China. I lived in Newfoundland for the first six years of my life where I lived the simple small county life, became the token Asian family in town, and developed a Newfie accent (that I eventually lost).'
    },
    {
        'icon' : 'tree',
        'year' : '2002',
        'title': 'Beautiful British Columbia',
        'desc' : 'The next 12 years of my life was spent growing up in Surrey, BC. I spent most of my childhood playing sports. Basketball was my primary sport but throughout high school I was also part of the volleyball, rugby, wrestling, track and field, and cross country teams. At the time, I was simply having fun. Little did I know, I was really developing leadership skills and personal habits that would ultimately bring me to where I am today.'
    },
    {
        'icon' : 'graduation-cap',
        'year' : '2014',
        'title': 'La Vie De Montreal',
        'desc' : 'The prestige, the city, and the opportunity to experience something new brought me to McGill University where I am currently in my final year of computer engineering. While I McGill, I have been actively involved in many clubs that include the McGill AI Society (President), DECA McGill (President), First-Year Engineering Council (President), Departmental Council (Computer Eng Rep), and Television McGill (Editor).'
    },
    {
        'icon' : 'code',
        'year' : '2016',
        'title': 'Capital Of Canada',
        'desc' : 'My first internship experience brought me to Ottawa, ON where I worked at Mxi Technologies (IFS) for 8 months as a software developer. I was part of the team in charge integrating custom patches to a core web application that was used to manage airline maintenance operations. During this same period, I also discovered the concept of hackathons and have been to over 15 hackathons ever since. It was also during this period that I was able to confirm my true love for programming.'
    },
    {
        'icon' : 'plane',
        'year' : '2017',
        'title': 'Tokyo Drift',
        'desc' : 'A scholarship from the Cansbridge Fellowship brought me on an unexpected journey to Tokyo, Japan where I worked for a summer at start up called FlicFit as a software engineer. I worked on a computer vision based project, engineering a mobile scanner for 3D reconstruction of feet that would be used for virtual shoe fitting. While in Tokyo, I also had the opportunity to travel across Japan and to other countries in Asia that include Korea, Taiwan, China, and Thailand.'
    },
    {
        'icon' : 'windows',
        'year' : '2018',
        'title': 'Sleepless In Seattle',
        'desc' : 'An interest to leverage more of my leadership skills has brought my to Microsoft where I am currently interning as a program manager in the Seattle office. I am part of the Azure Batch AI team where I get to interact with data scientists, designers, developers, and managers to build tools for training ML models in the cloud. Being in Seattle means being close to my family (in Vancouver), so I have been leveraging this opportunity to see as much of my family as possible.'
    },
    {
        'icon' : 'question',
        'year' : 'Who knows?',
        'title': 'The Future',
        'desc' : 'I have one more year left at McGill before I graduate. Where will I be next? Who knows! My life has been full of surprises and experiences because I have kept an open mindset to new opportunities. I have some rough ideas for the future, and will not settle for anything less than success, but for the most part... I will go whereever life takes me!'
    }
]
  
var createTable = () => {
    let table = []
    for (let i = 0; i < journey.length; i++) {
        table.push(<div class="timeline-item">
                        <div class="timeline-icon">
                            <i class={'fa fa-'+journey[i].icon+''}></i>   
                        </div>
                        <div class={i%2 == 0 ? 'timeline-content' : 'timeline-content right'}>
                            <p class="timeline-content-date">{journey[i].title} ({journey[i].year})</p>
                            <p>{journey[i].desc}</p>
                        </div>
                    </div>
        )
    }
    return table;
}  
  

export default Timeline;
