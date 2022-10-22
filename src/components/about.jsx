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
                        <span class="badge badge-primary">Machine Learninge</span>
                        <span class="badge badge-info">Cooking</span>
                        <span class="badge badge-secondary">Noodles</span>
                        <span class="badge badge-danger">Newfoundland</span>
                        <span class="badge badge-info">Basketball</span>
                        <span class="badge badge-primary">ML Ops</span>
                        <span class="badge badge-secondary">Craft Beer</span>
                        <span class="badge badge-primary">Azure AI</span>
                        <span class="badge badge-danger">Montreal</span>
                        <span class="badge badge-secondary">Sushi</span>
                        <span class="badge badge-primary">Web Development</span>
                        <span class="badge badge-primary">Computer Vision</span>
                        <span class="badge badge-primary">Product Management</span>
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
I'm currently working at Microsoft as a product manager. More specifically, I work on the Azure ML team \
where I'm focused on building a product that provides enterprise companies with a single platform to build, \
deploy, and operationalize their machine learning models. Beyond my work duties, I'm generally passionate for finding \
technology based solutions to real world problems. When something bothers me enough, I'm going to go out there and find \
a way to fix it. When I'm not solving problems, you can usually find me playing sports or cooking food (spicy food). I \
like to play sports because it is a fun way to stay active while refreshing my mind. \
I like to cook, because it gives me the freedom to use my creative mindset outside of the scope of tech."

export default About;
