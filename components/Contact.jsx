import React from 'react'

export const Contact = () => {
  return (
    <div id="contact" className="w-full pb-10  px-4 overflow-hien">
  
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
      <div className="lg:col-span-2 my-4">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
          Are you looking to excel your business.
        </h1>
        <p className="text-[#00df9a] font-bold"> Contact us today.</p>
        <hr className="lg:hidden" />
      </div>
      <div className="my-4">
        <form
          method="POST"
          action="https://getform.io/f/4792cffe-75f1-4e26-bbd2-dc83a2850b55"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-2 flex w-full rounded-md text-black outline outline-2  outline-offset-2"
              type="email"
              placeholder="Enter Email"
              name="email"
              id="email"
            />
            <button
              className="bg-[#00df9a] text-black rounded-md font-medium w-[200px]  ml-4 my-6 px-6 py-2"
              type="submit"
            >
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </div>

</div>
  )
}


export default Contact;