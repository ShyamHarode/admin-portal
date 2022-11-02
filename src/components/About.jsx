
 const About = ()=>{
    return <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Portal Guide
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
       <div class="accordion-body">Admin is already registered username is <strong>abcd</strong> and password is <strong>1234</strong><br/>
     Only admin can create new user, update user, abd delete user. New user can sign up first and login.
       </div> </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Admin Guide
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Admin username is <strong>abcd</strong> and password is <strong>1234</strong><br/>
      Admin can perform following actions:
      <ul><li>Create new user.</li>
      <li>View user's details.</li>
      <li>Update user's details.</li>
      <li>Delete any user.</li>
      <li>Filter users data according to their username, first name, status, and gender.</li>
       </ul>
       </div> </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        User Guide
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
     <div class="accordion-body">User can perform following actions:
      <ul>
      <li>View their details.</li>
      <li>Filter users data according to their username, first name, status, and gender.</li>
       </ul></div> </div>
  </div>
</div>

}
export default About;