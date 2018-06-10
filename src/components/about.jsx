import React from 'react';

class About extends React.Component {
  render() {
    return (
        <div class="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <hr></hr>
                        <h1>About Me</h1>
                        <p>{desc}</p>
                    </div>
                    <div class="col-lg-6">
                        <div class="img-circular center-block"></div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

const desc = "Hi There! My name is John and thank you for visiting my personal website. I'm currently in my final year of computer engineering studies at McGill University. Like all engineers, I like to spend my days building things to solve real life problems. This can range anywhere from mobile or web applications to robots and IoT devices. During my breaks from school or work, I enjoy cooking food (spicy food) and experimenting with new recipes. I appreciate cooking, because it gives me the freedom to use my creative mindset outside of the scope of engineering. During my free time, I  like to adventure and spend time outdoors. As someone who is constantly working hard, nature is my gateway to destressing and refreshing myself."

export default About;
