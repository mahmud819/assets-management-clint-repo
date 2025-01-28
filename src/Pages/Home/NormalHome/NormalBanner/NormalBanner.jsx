import { NavLink } from "react-router-dom";

const NormalBanner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co.com/2YmxYSg/employee-Cover.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Join As Employee</h1>
              <p className="mb-5">
                Welcome this site!. This Application is designed based on user frindly. To get mindbolwing exprience explore join.
              </p>
              <NavLink to='/joinAsEmployee'><button className="btn btn-primary">Join as Employee</button> </NavLink>  
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co.com/Jx0Pp3h/hrCover.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Join As HR</h1>
              <p className="mb-5">
              Welcome this site!. This Application is designed based on user frindly. To get mindbolwing exprience explore join.
              </p>
              <NavLink to='/joinAsHR'><button className="btn btn-primary">Join as HR</button> </NavLink>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default NormalBanner;
