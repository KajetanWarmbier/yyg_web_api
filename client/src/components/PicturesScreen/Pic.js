import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiTrash, HiInformationCircle, HiXCircle } from "react-icons/hi";

const Pic = (props) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  console.log(props);
  return (
    <div>
      <div className="min-w-max grid grid-cols-5 content-evenly justify-evenly justify-items-center h-[3rem] bg-gray-200 text-gray-700 font-normal">
        <div>{props.picData.name}</div>
        <div>{props.picData.type}</div>
        <div>{props.picData.description}</div>
        <div className="flex justify-center items-center">
          <HiInformationCircle
            onClick={openModal}
            className="text-2xl hover:text-blue-600 cursor-pointer"
          />
        </div>
        <div className="flex justify-center items-center">
          <HiTrash className="text-2xl hover:text-red-600 cursor-pointer" />
        </div>
      </div>
      <hr className="bg-gray-400 h-[2px]"></hr>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="flex justify-center text-3xl font-medium leading-6 text-gray-900"
                >
                  {props.picData.name}
                </Dialog.Title>
                <div className="mt-5">
                  <div className="flex items-center justify-center">
                    <img src={props.picData.imageUrl} aria-hidden alt="image" />
                  </div>
                  <div className="grid grid-rows-2 mt-4">
                    <span className="text-xl">Picture data: </span>
                    <span>{props.picData.picData}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="float-right inline-flex justify-center px-1 py-1 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600"
                    onClick={closeModal}
                  >
                    <HiXCircle className="text-3xl" />
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Pic;
