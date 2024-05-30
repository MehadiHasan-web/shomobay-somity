

const UserRegister = () => {

  const registerData = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const fatherName = form.fatherName.value;
    const motherName = form.motherName.value;
    const village = form.village.value;
    const houseNumber = form.houseNumber.value;
    const phoneNumber = form.phoneNumber.value;
    const age = form.age.value;
    const boldGroup = form.boldGroup.value;
    const photo = form.photo.value;
    const registerData = { name, fatherName, motherName, village, houseNumber, phoneNumber, age, boldGroup, photo }

    console.log(registerData)
    form.reset()
  }


  return (
    <div className="">
      {/* content section start */}
      <div className='container mx-auto flex justify-center mt-10 px-5 h-full'>
        <div className="card shrink-0 w-full md:w-2/3 shadow-2xl bg-base-100 h-[100%]">
          <form onSubmit={registerData} className="card-body h-full">
            {/* title section start */}
            <h1 className="text-xl text-blue-600">User Register Form</h1>
            {/* title section end */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="enter name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Father Name</span>
                </label>
                <input type="text" name="fatherName" placeholder="enter father name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mother Name</span>
                </label>
                <input type="text" name="motherName" placeholder="enter mother name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Village</span>
                </label>
                <input type="text" name="village" placeholder="enter village" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">House Number</span>
                </label>
                <input type="text" name="houseNumber" placeholder="enter house number" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input type="number" name="phoneNumber" placeholder="enter photo number" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input type="number" name="age" placeholder="enter age" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Blood Group</span>
                </label>
                <select name="boldGroup" className="select select-bordered w-full">
                  <option disabled selected>Normal</option>
                  <option>O+</option>
                  <option>O-</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="file" name="photo" className="file-input file-input-bordered file-input-md w-full" />
              </div>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Register Data</button>
            </div>
          </form>
        </div>
      </div>
      {/* content section end */}
    </div>
  );
};

export default UserRegister;