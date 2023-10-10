

const Specification = () => {
    return (
        <div >
            <div className="hero min-h-screen  bg-[#222222]">
  <div className="hero-content  flex-col lg:flex-row-reverse">
    <img  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" src="/right_aside.png" className="lg:ml-10 mt-20 lg:mt-0 lg:w-[700px] lg:h-[700px] rounded-xl shadow-2xl" />
    <div data-aos="fade-up"
     data-aos-duration="3000" className="lg:mt-20">
      <h1 className="mt-12 lg:mt-0 text-center lg:text-justify   text-[#FE3E01] text-3xl md:text-4xl lg:text-5xl font-bold font-sourceSans">WHO IS CORPORATE</h1>
      <h1 className="mt-2 lg:mt-6 text-center lg:text-justify text-[white] text-3xl md:text-4xl lg:text-5xl font-bold font-sourceSans">EVENT PLANNING FOR?</h1>

      {/* daisyui tik mark */}
      <div className="flex">
      <input  type="checkbox" checked="checked" className="checkbox mt-10 bg-white border-white rounded-md " />
      <p className="ml-3 md:ml-4 lg:ml-3 mt-2 lg:mt-3 py-6 text-base text-white font-poppins">Event-Specific Specialists: Plan events for your company and just need a helping hand? We’re here for you!</p>
      </div>

      <div className="flex -mt-3 lg:-mt-6">
      <input  type="checkbox" checked="checked" className="checkbox mt-10 bg-white border-white rounded-md " />
      <p className="ml-3 md:ml-4 lg:ml-3 mt-2 lg:mt-3 py-6 text-base text-white font-poppins">Large Companies: Wow your employees, your boss, your clients, and yourself with creative events.</p>
      </div>

      <div className="flex -mt-3 lg:-mt-6">
      <input  type="checkbox" checked="checked" className="checkbox mt-10 bg-white border-white rounded-md " />
      <p className="ml-3 md:ml-4 lg:ml-3 mt-2 lg:mt-3 py-6 text-base text-white font-poppins">Admins & Marketing Specialists: You have a lot on our plate already. Let us reduce your workload.</p>
      </div>

      
      
      <div className="lg:mt-8 text-center lg:mr-10 ">
      <button type="submit" className="outline-none text-left hover:bg-[#c93103] bg-[#FE3E01] text-white text-lg font-medium max-w-fit  rounded-lg px-4 py-3 mt-3 mb-7 ml-3">Get Started</button>
      </div>
      
      
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Specification;