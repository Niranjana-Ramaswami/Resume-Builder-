import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
      <section className='container-fluid' style={{ width: '100%', height: "450px", backgroundImage: 'url("https://drexel.edu/~/media/Images/graduatecollege/blog-graduate/team-3373638_1280.ashx?h=837&w=1280&hash=3E9FDE0A847C316AC9824AB5E736B6697ABA55D8")', backgroundAttachment: "fixed", backgroundPosition: 'top', backgroundSize: "cover" }} id='part1'>

        <div className="row pt-5">
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4 shadow border py-5 rounded my-5 text-center " style={{ backgroundColor: "rgb(255,255,255,0.3)" }} >
            <h3>Designed to get hired .</h3>
            <h4>Your skills , your story your next job - all in one .</h4>
            <Link to={'/resume'}>
              <button className='btn btn-primary'>Make your Resume</button>
            </Link>

          </div>
          <div className="col-12 col-md-4"></div>
        </div>
      </section>
      {/* tools */}
      <section className="tools p-5">
        <h1 className='text-center'>Tools</h1>
        <div className='row'>
          <div className="tool-content col-12 col-md-6">
            <h4>Resume</h4>
            <p>Create unlimited new resumes and easily edit them afterwards</p>

            <h4>Jobs</h4>
            <p>Automatically receive new and relevant job postings</p>

            <h4>Cover Letter</h4>
            <p>Easily wite professiona; cover letters</p>

            <h4>Application</h4>
            <p>Effortlessly manage and track your job application is an organized manner</p>
          </div>
          <div className="tool-image col-12 col-md-6">
            <img
              className="img-fluid"
              src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png"
              alt="tools"
            />
          </div>
        </div>
      </section>
      <section
        className="second" style={{ width: '100%', height: '450px', backgroundImage: "url('https://www.icu.ac.jp/en/assets/img/academics/ph_gs_ma_01.jpg')", backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundSize: 'cover', }}
      ></section>
{/* testimonials */}
<section className="tools p-5">
  <h1 className="text-center">Testimony</h1>
  <div className="row align-items-center">
    <div className="tool-content col-12 col-md-6 p-5">
      <h4>Trusted by professionals worldwide.</h4>
      <p>
        At LiveCareer, we don't just help you create résumés – we help you land the job.
        Whether you're a seasoned professional or just starting out, our tools are designed to get results.
      </p>
      <p>
        In fact, users who used LiveCareer reported getting hired an average of 48 days faster.
      </p>
      <p>
        Join thousands of job-seekers who've fast-tracked their careers with a résumé that truly stands out.
      </p>
    </div>

    <div className="col-12 col-md-6">
      {/* Row 1 */}
      <div className="row mb-3">
        <div className="col-6 col-lg-3">
          <img className="w-100" src="https://static.wowto.ai/editor/avatars/thumb/m1.png" alt="testimonial 1" />
        </div>
        <div className="col-6 col-lg-3">
          <img className="w-100" src="https://tse2.mm.bing.net/th/id/OIP.yOZ8y17RGvDfWBKA4antZQHaHa?pid=ImgDet&w=474&h=474&rs=1&o=7&rm=3" alt="testimonial 2" />
        </div>
        <div className="col-6 col-lg-3">
          <img className="w-100" src="https://th.bing.com/th/id/R.da2e546841da40cdcf60061743233500?rik=IeO7Sr%2fkUW54wQ&riu=http%3a%2f%2fwww.venmond.com%2fdemo%2fvendroid%2fimg%2favatar%2fbig.jpg&ehk=JihI5nQ0BOd0W%2bZVhtIWmqwac0NMyRMOV7%2bzryywg%2fg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="testimonial 3" />
        </div>
        <div className="col-6 col-lg-3">
          <img className="w-100" src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="testimonial 4" />
        </div>
      </div>

      {/* Row 2 */}
      <div className="row mb-3">
        <div className="col-6 col-lg-3">
          <img className="w-100" src="https://tse1.explicit.bing.net/th/id/OIP.n0Y3W2J50vLFHMwZOgapbAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="testimonial 5" />
        </div>
        <div className="col-6 col-lg-3">
          <img className="w-100" src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid5.png" alt="testimonial 6" />
        </div>
        <div className="col-6 col-lg-3">
          <img className="w-100" src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid6.png" alt="testimonial 7" />
        </div>
        <div className="col-6 col-lg-3">
          <img className="w-100" src="https://tse1.mm.bing.net/th/id/OIP.qzHUWufX_x025dIF2SGWegHaHa?w=1600&h=1600&rs=1&pid=ImgDetMain&o=7&rm=3" alt="testimonial 8" />
        </div>
      </div>

      {/* Row 3 */}
      <div className="row mb-3">
        <div className="col-6 col-lg-3">
          <img className="w-100" src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid9.png" alt="testimonial 9" />
        </div>
        <div className="col-6 col-lg-3">
          <img className="w-100" src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid10.png" alt="testimonial 10" />
        </div>
        <div className="col-6 col-lg-3">
          <img className="w-100" src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid11.png" alt="testimonial 11" />
        </div>
        <div className="col-6 col-lg-3">
          <img className="w-100" src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid12.png" alt="testimonial 12" />
        </div>
      </div>

      
    </div>
  </div>
</section>


    </div>
  )
}

export default LandingPage