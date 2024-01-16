import React, { useCallback } from 'react';
import { useDropzone, DropzoneState, FileWithPath } from 'react-dropzone';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

/**
 * Renders a file upload component.
 *
 * @returns {JSX.Element} The rendered file upload component.
 */
function FilesUpload(): JSX.Element {
  const onDrop = useCallback((acceptedFiles: FileWithPath[]): void => {
    // Do something with the files
    console.log('accepted', acceptedFiles);
  }, []);
   const { getRootProps, getInputProps }: DropzoneState = useDropzone({
    onDrop,
    noClick: true,
   });
  return (
     <div className="flex flex-col justify-center w-1/2 bg-white p-5 min-h-[45dvh] rounded-xl bg-opacity-25 backdrop-filter backdrop-blur-lg">
      <div className="flex-initial items-center justify-center">
        <Label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center h-[30dvh] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div
            {...getRootProps()}
            className="flex flex-col items-center justify-center pt-5 pb-6"
          >
            <svg
              className="w-10 h-10 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">
                Click to upload
              </span> or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">(MAX. 2Mo)</p>
          </div>
          <Input {...getInputProps()} id="dropzone-file" type="file" className="hidden" />
          
        </Label>
      </div>
    </div>
  );
}

export default FilesUpload;