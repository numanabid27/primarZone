'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function VideoPopUp({open, setOpen, videoId }) {
    const iframeSrc = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : '';
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 sm:max-w-[700px] w-full mx-auto">
          <DialogPanel
            transition
            className="relative transform overflow-hidden sm:max-w-[700px] w-full rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-black relative">
            <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="absolute top-[0px] right-0 rounded-full flex justify-center items-center bg-red-800 text-white text-md w-8 h-8"
              >
                x
              </button>
              <div className="sm:flex sm:items-start">
                <iframe
                    className="object-cover rounded-lg"
                    width="100%"
                    height="400"
                    src={iframeSrc}
                    title="Video"
                    allow="autoplay; encrypted-media"
                    frameBorder="0"
                ></iframe>
              </div>
            </div>
            
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
