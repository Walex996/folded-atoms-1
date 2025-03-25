// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom";

export const Pagination = () => {
  
  return (
    <>
      
      <div className="pt-5 border-t border-gray-300 text-sm">
        <div className="flex justify-end space-x-10">

          <div className="flex">
            <div className="mr-3">
              Rows per page:
            </div>
            <div>
              20
            </div>
          </div>

          <div>
            1 - 20 of 550
          </div>

          <div className="-mt-0.5 flex space-x-1">

              <div className="w-6 h-6 flex text-gray-300 hover:bg-gray-200 rounded cursor-pointer">
                {/* <FontAwesomeIcon icon="angle-left" className="m-auto" /> */}
                &larr;
                {/* prev */}
              </div>
              
              <div className="w-6 h-6 flex hover:bg-gray-200 rounded cursor-pointer">
                {/* <FontAwesomeIcon icon="angle-right" className="m-auto" /> */}
                &rarr;
              </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Pagination
