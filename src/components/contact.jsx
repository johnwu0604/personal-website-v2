import React from 'react';

class Contact extends React.Component {
  render() {
    return (
        <div class="contact">
             <div class="container">
                <div class="row" >
                     <div class="col-lg-4 offset-lg-4 text-center" id="box">
                      <h2>Let's go for a beer.</h2>
                        <hr></hr>
                        <p>There's nothing I enjoy more than meeting new people and building genuine relationships. If you ever
                            want to go for a beer (or coffee) for any reason or for no reason at all, don't hesitate to reach out using the form below.
                        </p>
                        <form class="form-horizontal" action="https://formspree.io/john.wu@mail.mcgill.ca" method="POST">
                            <fieldset>
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <input name="name" placeholder="Name" class="form-control" type="text"></input>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <input name="email" placeholder="E-Mail Address" class="form-control" type="text"></input>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-md-12 inputGroupContainer">
                                        <textarea class="form-control" name="message" placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <button type="submit" class="btn btn-secondary pull-right">Send <span class="glyphicon glyphicon-send"></span></button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div> 
            </div>
        </div>  
    );
  }
}

export default Contact;
