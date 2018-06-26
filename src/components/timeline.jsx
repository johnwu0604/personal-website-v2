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

const desc = 'A mixture of school, work, and opportunities have \
brought me on endless experiences to various places around the world. To this day,\
 I have lived in six different cities which span over three different countries. \
 This constantly changing environment keeps everything unpredictable and exciting \
 as a result. Here is a summary of my life journey so far.'

var journey = [
    {
        'icon' : 'child',
        'year' : '(1996)',
        'title': 'The Newfie Life',
        'desc' : 'I was born in Carbonear, Newfoundland - a small town of 4000 peope on the \
        atlantic coast of Canada. This was the town that my parents first settled in upon immigrating from China. \
        I lived in Newfoundland for the first six years of my life where I experienced the small town lifestyle, \
        became the token Asian family in that town, and developed a Newfie accent (which I eventually lost).'
    },
    {
        'icon' : 'tree',
        'year' : '(2002)',
        'title': 'Beautiful British Columbia',
        'desc' : 'The next 12 years of my life was spent growing up in Surrey, BC. I spent most of my childhood \
         living here and playing sports. Basketball was my primary sport but throughout high school I was also part of the volleyball,\
         rugby, wrestling, track & field, and cross country teams. Playing on so many different sports teams developed the \
          leadership skills and personal habits that would ultimately bring me to where I am today.'
    },
    {
        'icon' : 'book',
        'year' : '(2014)',
        'title': 'La Vie De Montreal',
        'desc' : 'The prestige, the city, and the opportunity to experience something new resulted in my decision to attend McGill University \
        where I am currently in my final year of computer engineering. While at McGill, I have been actively involved \
        in student organizations that include the McGill AI Society (Co-President), DECA McGill (Co-President), First-Year Engineering \
        Council (Co-President), Departmental Council (Computer Eng Rep), and Television McGill (Editor). Moving to Montreal was the first time I lived away \
        from my family and was the start to some of the most exciting years in my life.'
    },
    {
        'icon' : 'stack-overflow',
        'year' : '(2016)',
        'title': 'Ottawa Eh',
        'desc' : 'My first internship experience brought me to Ottawa, ON where I worked at Mxi Technologies (IFS) for \
         8 months as a software developer. I was part of the team in charge of integrating custom patches to a core web \
         application that was used to manage airline maintenance operations. During this same period, I also discovered \
         the concept of hackathons and have been to over 15 hackathons ever since. It was also during this period that \
         I started falling in love for building technology.'
    },
    {
        'icon' : 'plane',
        'year' : '(2017)',
        'title': 'Tokyo Drift',
        'desc' : 'A scholarship from the Cansbridge Fellowship brought me on an unexpected journey to Tokyo, Japan where \
        I worked for a summer at a start up called FlicFit as a software engineer. I worked on a computer vision project,\
         where I developed an algorithm for 3D reconstruction of objects using a phone camera. While in \
         Tokyo, I also had the opportunity to travel across various cities in Japan. I also travelled to other countries in \
         Asia including Korea, Taiwan, China, and Thailand.'
    },
    {
        'icon' : 'windows',
        'year' : '(2018)',
        'title': 'Sleepless In Seattle',
        'desc' : 'An interest to leverage more of my leadership skills influenced me to work at Microsoft where I am currently \
        interning as a program manager at the Seattle office. I am part of the Azure Batch AI team where I get to interact \
        with data scientists, designers, developers, and managers to build tools for training ML models in the cloud. \
        Being in Seattle means being close to my family (in BC), so I have been leveraging this opportunity to \
        see as much of my family as possible after being far from home over the last 4 years.'
    },
    {
        'icon' : 'arrow-circle-right',
        'year' : '',
        'title': 'The Future',
        'desc' : 'I have one more year left at McGill before I graduate. Where will I be next? Who knows! \
        My life has been full of surprises and experiences because I have kept an open mindset to new opportunities. \
        I have some rough ideas for the future, but for the most part, I will go wherever life takes me. What I do know, however, \
        is that I will continue putting 100% effort into everything I do and will not settle for anything that is below my highest potential.'
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
                            <p class="timeline-content-date"><u>{journey[i].title} {journey[i].year}</u></p>
                            <p>{journey[i].desc}</p>
                        </div>
                    </div>
        )
    }
    return table;
}  
  

export default Timeline;
