import React from 'react';

class About extends React.Component {
  render() {
    return (
        <div class="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <hr></hr>
                        <h1>Welcome</h1>
                        <p>{desc}</p>
                    </div>
                    <div class="col-lg-6">
                        <div class="img-circular center-block"></div>
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-lg-12">
                        <p>TL;DR - Here's a summary + some other topics you might see me tagged in.</p>
                    </div>
                    <div class="col-lg-12">
                        <span class="badge badge-primary">Computer Engineering</span>
                        <span class="badge badge-secondary">Spicy Food</span>
                        <span class="badge badge-primary">McGill University</span>
                        <span class="badge badge-info">Hiking</span>
                        <span class="badge badge-primary">Artificial Intelligence</span>
                        <span class="badge badge-info">Cooking</span>
                        <span class="badge badge-secondary">Noodles</span>
                        <span class="badge badge-danger">Newfoundland</span>
                        <span class="badge badge-info">Basketball</span>
                        <span class="badge badge-primary">Internet Of Things</span>
                        <span class="badge badge-secondary">Craft Beer</span>
                        <span class="badge badge-primary">Computer Vision</span>
                        <span class="badge badge-danger">Montreal</span>
                        <span class="badge badge-info">Video Production</span>
                        <span class="badge badge-secondary">Sushi</span>
                        <span class="badge badge-primary">Web Development</span>
                        <span class="badge badge-primary">Computer Vision</span>
                        <span class="badge badge-primary">Project Management</span>
                        <span class="badge badge-danger">Tokyo</span>
                        <span class="badge badge-info">Running</span>
                        <span class="badge badge-info">Camping</span>
                        <span class="badge badge-info">Kayaking</span>
                        <span class="badge badge-secondary">Chicken Nuggets</span>
                        <span class="badge badge-info">Volleyball</span>
                        <span class="badge badge-info">Photography</span>
                        <span class="badge badge-danger">Vancouver</span>
                        <span class="badge badge-primary">Hackathons</span>
                        <span class="badge badge-info">Travelling</span>
                        <span class="badge badge-danger">Seattle</span>
                        <span class="badge badge-secondary">Poutine</span>
                        <span class="badge badge-primary">Robotics</span>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

const desc = "Hi There! My name is John and thank you for visiting my personal website. \
I'm currently in my final year of computer engineering studies at McGill University. Like all engineers, \
I like to spend my days building things to solve real life problems. This can range anywhere from web applications \
to robots and IoT devices. During my breaks from school or work, I enjoy cooking food (spicy food) and experimenting\
 with new recipes. I appreciate cooking, because it gives me the freedom to use my creative mindset outside of the \
 scope of engineering. During my free time, I like to adventure and spend time outdoors. As someone who is constantly\
  working hard, nature is my gateway to destressing and refreshing my mind."

export default About;
