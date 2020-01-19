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
        where I got a bachelors degree in computer engineering. While at McGill, I was actively involved \
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
        'desc' : 'An interest to leverage more of my leadership skills influenced me try out a product management role at Microsoft where I \
        I did my last summer internship. I was part of the Azure Batch AI team where I got to interact \
        with data scientists, designers, developers, and managers to build tools for training ML models in the cloud. Working in Seattle also allowed me to \
        see and visit family (in Vancouver) more frequently - something that I was not able to do often over the last 4 years.'
    },
    {
        'icon' : 'arrow-circle-right',
        'year' : '(2019 - Present)',
        'title': 'Living Life',
        'desc' : 'After finishing my last internship, I returned to school to finish up my last year of studies at McGill. I was fortunate enough \
        to be given a full-time return offer as a product manager at Microsoft upon graduation. The close proximity to my family, my interest in the specific role, \
        and the once-in-a-lifetime opportunity to work at one of the biggest tech companies in world were the deciding factors for accepting the job offer. I have been \
        working at Microsoft now since September 2019 on the Azure Machine Learning team as product manager and it has been nothing less than exciting. If you have questions or are interested in \
        hearing more about life journey, feel free to message me using the contact form below!'
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
